import { Check, Minus, Plus } from 'lucide-react';
import ProductArt from './icons/ProductArt';
import { taka, toBanglaDigits } from '../lib/format';


function Badge({ variant, copy, lang }) {
  if (!variant.badge) return null;

  if (variant.badge === 'savings') {
    const value = lang === 'bn' ? toBanglaDigits(variant.badgeValue) : variant.badgeValue;
    return (
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#D97706] px-2.5 py-1 text-[11px] font-bold leading-tight text-white shadow-sm">
        <span className="num">৳{value}</span>
        {copy.product.savings}
      </span>
    );
  }

  if (variant.badge === 'fresh') {
    return (
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-bold leading-tight text-[#065F46] shadow-sm ring-1 ring-[#065F46]/10">
        <Check className="h-3 w-3" strokeWidth={3} />
        {copy.product.freshness}
      </span>
    );
  }

  if (variant.badge === 'popular') {
    return (
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-bold leading-tight text-[#065F46] shadow-sm ring-1 ring-[#065F46]/10">
        {copy.product.popular}
      </span>
    );
  }

  if (variant.badge === 'bestseller') {
    return (
      <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-bold leading-tight text-[#065F46] shadow-sm ring-1 ring-[#065F46]/10">
        {copy.product.bestseller}
      </span>
    );
  }

  return null;
}

export default function ProductCard({
  product,
  copy,
  lang,
  selectedVariantId,
  onSelectVariant,
  qty,
  onAdd,
  onIncrement,
  onDecrement,
}) {
  const variant =
    product.variants.find((v) => v.id === selectedVariantId) ?? product.variants[0];

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-soft transition-shadow duration-200 hover:shadow-lift">
      <div className="relative bg-art px-4 pt-4 pb-3">
        <Badge variant={variant} copy={copy} lang={lang} />

        <div className="flex justify-center pb-1">
          <ProductArt
            kind={product.art}
            className="h-28 w-28 transition-transform duration-300 group-hover:scale-[1.04] sm:h-32 sm:w-32"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-3 sm:p-3.5">
        <div>
          <h3
            lang="bn"
            className="bn-tight text-[13.5px] font-semibold leading-snug text-ink sm:text-[15px]"
          >
            {product.nameBn}
          </h3>
          <p className="mt-0.5 text-[11px] leading-snug text-muted sm:text-xs">
            {product.nameEn}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {product.variants.map((v) => {
            const active = v.id === variant.id;
            return (
              <button
                key={v.id}
                type="button"
                onClick={() => onSelectVariant(product.id, v.id)}
                aria-pressed={active}
                className={`num rounded-lg border px-2 py-1 text-[11.5px] font-semibold leading-tight transition-colors ${
                  active
                    ? 'border-action bg-action text-white'
                    : 'border-line bg-white text-muted hover:border-action hover:text-action'
                }`}
              >
                {v.label}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap items-end gap-x-2 gap-y-1">
          <span className="num text-[17px] font-bold leading-none text-ink sm:text-[19px]">
            {taka(variant.price)}
          </span>
          {variant.reg && variant.reg > variant.price && (
            <span className="num text-[12px] leading-none text-muted line-through">
              {taka(variant.reg)}
            </span>
          )}
        </div>

        <div className="mt-auto pt-0.5">
          {qty === 0 ? (
            <button
              type="button"
              onClick={() => onAdd(product.id, variant.id)}
              className="flex min-h-[42px] w-full items-center justify-center gap-1.5 rounded-xl bg-action px-4 text-[13.5px] font-bold leading-tight text-white transition-colors hover:bg-action-dark active:scale-[0.985] sm:text-sm"
            >
              <Plus className="h-4 w-4" strokeWidth={2.6} />
              {copy.product.add}
            </button>
          ) : (
            <div className="flex min-h-[42px] w-full items-center justify-between rounded-xl bg-brand px-1.5 py-1.5">
              <button
                type="button"
                onClick={() => onDecrement(product.id, variant.id)}
                aria-label={`${copy.product.add} −`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <Minus className="h-4 w-4" strokeWidth={2.8} />
              </button>
              <span className="num text-[15px] font-bold text-white">{qty}</span>
              <button
                type="button"
                onClick={() => onIncrement(product.id, variant.id)}
                aria-label={`${copy.product.add} +`}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white transition-colors hover:bg-white/25"
              >
                <Plus className="h-4 w-4" strokeWidth={2.8} />
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
