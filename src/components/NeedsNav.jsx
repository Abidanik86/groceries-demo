import { CATEGORIES, NEEDS } from '../data/catalog';

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
    <section id="catalog" className="mx-auto max-w-7xl px-4 pt-9 sm:px-6 sm:pt-12">
      {/* Shop by Need */}
      <div className="flex flex-col gap-1">
        <h2 lang="bn" className="bn-tight text-[21px] font-bold text-brand sm:text-[25px]">
          {copy.needs.heading}
        </h2>
        <p lang="bn" className="text-[13px] leading-relaxed text-muted">
          {copy.needs.subheading}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {NEEDS.map((need) => {
          const active = activeNeed === need.id;
          return (
            <button
              key={need.id}
              type="button"
              onClick={() => onNeedChange(active ? 'all' : need.id)}
              aria-pressed={active}
              className={`group flex items-center gap-3 rounded-2xl border p-3.5 text-left transition-all sm:p-4 ${
                active
                  ? 'border-action bg-action/8 shadow-soft ring-1 ring-action/30'
                  : 'border-line bg-surface hover:border-action/50 hover:shadow-soft'
              }`}
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-[22px] transition-colors ${
                  active ? 'bg-action text-white' : 'bg-art group-hover:bg-action/10'
                }`}
              >
                {need.emoji}
              </span>
              <span className="min-w-0">
                <span
                  lang="bn"
                  className={`bn-tight block text-[13.5px] font-bold leading-snug sm:text-[15px] ${
                    active ? 'text-action' : 'text-ink'
                  }`}
                >
                  {lang === 'bn' ? need.bn : need.en}
                </span>
                <span
                  lang="bn"
                  className="mt-0.5 block truncate text-[11px] leading-relaxed text-muted sm:text-[12px]"
                >
                  {lang === 'bn' ? need.bnSub : need.enSub}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Category pills + sort */}
      <div className="mt-7 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:px-0">
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onCategoryChange(cat.id)}
                aria-pressed={active}
                className={`shrink-0 rounded-full border px-3.5 py-2 text-[13px] font-semibold leading-tight transition-colors ${
                  active
                    ? 'border-brand bg-brand text-white'
                    : 'border-line bg-surface text-ink hover:border-brand/50 hover:text-brand'
                }`}
              >
                {lang === 'bn' ? cat.bn : cat.en}
              </button>
            );
          })}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 lg:justify-end">
          <p className="num text-[12.5px] text-muted">
            <span className="font-bold text-ink">{resultCount}</span> {copy.filters.results}
          </p>
          <label className="flex items-center gap-2">
            <span className="text-[12.5px] text-muted">{copy.filters.sortLabel}</span>
            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="rounded-lg border border-line bg-surface px-2.5 py-2 text-[12.5px] font-semibold text-ink outline-none transition-colors hover:border-brand focus:border-action"
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
