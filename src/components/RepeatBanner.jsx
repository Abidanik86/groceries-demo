import { RefreshCw, ShoppingCart, X } from 'lucide-react';
import { REPEAT_BASKET, getProduct, getVariant } from '../data/catalog';
import { formatNumber, taka, takaBn } from '../lib/format';

export default function RepeatBanner({ copy, lang, onAddAll, onDismiss }) {
  const items = REPEAT_BASKET.map((entry) => {
    const product = getProduct(entry.productId);
    const variant = getVariant(product, entry.variantId);
    return { product, variant };
  });

  const total = items.reduce((sum, i) => sum + i.variant.price, 0);

  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <div className="flex min-w-0 flex-1 items-start gap-3">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet-100">
              <RefreshCw className="h-4 w-4 text-violet-700" strokeWidth={2.6} />
            </span>
            <div className="min-w-0">
              <p lang="bn" className="bn-tight text-[14px] font-bold text-brand">
                {copy.repeat.title}
              </p>
              <p lang="bn" className="mt-0.5 text-[12px] leading-relaxed text-muted">
                {copy.repeat.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 sm:shrink-0">
            <div className="text-right">
              <p className="text-[10.5px] uppercase tracking-wide text-muted">
                {lang === 'bn' ? 'মোট' : 'Total'}
              </p>
              <p className="num text-[15px] font-bold text-brand">
                {lang === 'bn' ? takaBn(total) : taka(total)}
              </p>
            </div>
            <button
              type="button"
              onClick={onAddAll}
              className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FB923C] px-4 text-[13px] font-bold leading-tight text-white shadow-sm transition-all hover:from-[#EA580C] hover:to-[#F97316] active:scale-[0.985]"
            >
              <ShoppingCart className="h-4 w-4" strokeWidth={2.4} />
              {copy.repeat.cta}
            </button>
            <button
              type="button"
              onClick={onDismiss}
              aria-label={copy.repeat.dismiss}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted transition-colors hover:bg-canvas hover:text-ink"
            >
              <X className="h-4 w-4" strokeWidth={2.6} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
