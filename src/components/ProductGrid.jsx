import { PackageSearch } from 'lucide-react';
import ProductCard from './ProductCard';

export default function ProductGrid({
  products,
  copy,
  lang,
  selectedVariants,
  onSelectVariant,
  qtyOf,
  onAdd,
  onIncrement,
  onDecrement,
  onClearFilters,
}) {
  if (products.length === 0) {
    return (
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-3 px-4 py-16 text-center sm:px-6">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-art text-muted">
          <PackageSearch className="h-6 w-6" strokeWidth={2} />
        </span>
        <p lang="bn" className="bn-tight text-[16px] font-bold text-ink">
          {copy.filters.empty}
        </p>
        <p lang="bn" className="text-[13px] leading-relaxed text-muted">
          {copy.filters.emptyHint}
        </p>
        <button
          type="button"
          onClick={onClearFilters}
          className="mt-1 rounded-xl border border-line bg-surface px-4 py-2.5 text-[13px] font-semibold text-violet-700 transition-colors hover:border-violet-400 hover:bg-violet-50"
        >
          {copy.filters.clear}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 pb-10 pt-4 sm:px-6">
      <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            copy={copy}
            lang={lang}
            selectedVariantId={selectedVariants[product.id]}
            onSelectVariant={onSelectVariant}
            qty={qtyOf(product.id, selectedVariants[product.id])}
            onAdd={onAdd}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    </div>
  );
}
