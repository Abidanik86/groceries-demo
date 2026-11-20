import { CATEGORIES, NEEDS } from '../data/catalog';
import { ACCENT } from '../lib/palette';

export default function NeedsNav({
  copy,
  lang,
  activeNeed,
  onNeedChange,
  activeCategory,
  onCategoryChange,
  sort,
  onSortChange,
  resultCount,
}) {
  return (
    <section id="catalog" className="mx-auto max-w-7xl px-4 pt-5 sm:px-6">
      {/* Shop by need - compact chips */}
      <div className="flex items-center gap-3">
        <span className="hidden shrink-0 text-[11.5px] font-bold uppercase tracking-wide text-muted sm:block">
          {copy.needs.heading}
        </span>
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {NEEDS.map((need) => {
            const active = activeNeed === need.id;
            const accent = ACCENT[need.accent] ?? ACCENT.violet;
            return (
              <button
                key={need.id}
                type="button"
                onClick={() => onNeedChange(active ? 'all' : need.id)}
                aria-pressed={active}
                className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-semibold leading-tight transition-colors ${
                  active ? accent.chipActive : accent.chip
                }`}
              >
                <span className="text-[14px] leading-none" aria-hidden="true">
                  {need.emoji}
                </span>
                <span lang="bn" className="bn-tight">
                  {lang === 'bn' ? need.bn : need.en}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Category pills + result count + sort */}
      <div className="mt-3 flex flex-col gap-2.5 border-t border-line-soft pt-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            const accent = ACCENT[cat.accent] ?? ACCENT.violet;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategoryChange(cat.id)}
                aria-pressed={active}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold leading-tight transition-colors ${
                  active ? accent.chipActive : accent.chip
                }`}
              >
                {lang === 'bn' ? cat.bn : cat.en}
              </button>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 lg:justify-end">
          <p className="num text-[12px] text-muted">
            <span className="font-bold text-ink">{resultCount}</span> {copy.filters.results}
          </p>
          <label className="flex items-center gap-2">
            <span className="text-[12px] text-muted">{copy.filters.sortLabel}</span>
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="rounded-lg border border-line bg-surface px-2.5 py-1.5 text-[12px] font-semibold text-ink outline-none transition-colors hover:border-violet-400 focus:border-violet-500"
            >
              <option value="popular">{copy.filters.sortPopular}</option>
              <option value="price-asc">{copy.filters.sortPriceLow}</option>
              <option value="savings">{copy.filters.sortSavings}</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}