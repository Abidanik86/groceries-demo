import { CATEGORIES, PRODUCTS } from '../data/catalog';

const normalize = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[০-৯]/g, (d) => String('০১২৩৪৫৬৭৮৯'.indexOf(d)))
    .replace(/[ঙ-৿]/g, '')
    .trim();

const categoryLabel = (id) => {
  const cat = CATEGORIES.find((c) => c.id === id);
  if (!cat) return '';
  return `${cat.bn} ${cat.en}`;
};

/**
 * Matches a freeform Bangla / Banglish query against product names,
 * keywords, category labels and pack sizes.
 */
export function searchProducts(query) {
  const q = normalize(query);
  if (!q) return [];

  const terms = q.split(/\s+/).filter(Boolean);

  return PRODUCTS.map((product) => {
    const haystack = normalize(
      [
        product.nameBn,
        product.nameEn,
        product.keywords.join(' '),
        categoryLabel(product.category),
        product.variants.map((v) => `${v.label} ${v.labelBn}`).join(' '),
      ].join(' '),
    );

    const score = terms.reduce((acc, term) => {
      if (!term) return acc;
      if (haystack.includes(term)) return acc + 2;
      for (const word of haystack.split(/\s+/)) {
        if (word.startsWith(term)) return acc + 1;
      }
      return acc;
    }, 0);

    return { product, score };
  })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.product);
}
