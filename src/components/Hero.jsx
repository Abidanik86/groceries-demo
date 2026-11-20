import { ArrowRight, CheckCircle2, Clock, ClipboardList, ShieldCheck } from 'lucide-react';

const BUNDLE_TINT = {
  Rice: 'bg-amber-50 text-amber-800',
  Eggs: 'bg-teal-50 text-teal-800',
  Oil: 'bg-orange-50 text-orange-800',
  Dal: 'bg-rose-50 text-rose-800',
};

export default function Hero({ copy, lang, onStartShopping, onOpenList }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#3B0764] via-[#6D28D9] to-[#BE185D] text-white">
      {/* soft colour blooms */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#F97316]/35 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-[#22D3EE]/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-5 sm:px-6 md:py-6">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          {/* Left column */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11.5px] font-semibold leading-tight text-white ring-1 ring-inset ring-white/25">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" strokeWidth={2.6} />
              {copy.hero.trustPill}
            </span>

            <h1
              lang="bn"
              className="bn-tight mt-2.5 text-[26px] font-bold leading-[1.25] text-white sm:text-[31px] lg:text-[36px]"
            >
              {copy.hero.headline}
            </h1>

            <p
              lang="bn"
              className="mt-2 max-w-xl text-[12.5px] leading-relaxed text-white/80 sm:text-[13.5px]"
            >
              {copy.hero.subtext}
            </p>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {copy.hero.chips.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-1 rounded-full bg-white/12 px-2.5 py-1 text-[11.5px] font-semibold leading-tight text-white ring-1 ring-inset ring-white/20"
                >
                  <CheckCircle2 className="h-3 w-3 shrink-0 text-[#FCD34D]" strokeWidth={3} />
                  {chip}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              <button
                type="button"
                onClick={onStartShopping}
                className="group inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#F97316] to-[#FB923C] px-5 text-[13.5px] font-bold leading-tight text-white shadow-lift transition-all hover:from-[#EA580C] hover:to-[#F97316] active:scale-[0.985]"
              >
                {copy.hero.ctaPrimary}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  strokeWidth={2.6}
                />
              </button>
              <button
                type="button"
                onClick={onOpenList}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-xl bg-white/12 px-4 text-[13px] font-semibold leading-tight text-white ring-1 ring-inset ring-white/30 transition-colors hover:bg-white/20"
              >
                <ClipboardList className="h-4 w-4 shrink-0" strokeWidth={2.4} />
                {copy.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="animate-fade-up md:justify-self-end">
            <div className="w-full max-w-sm rounded-2xl bg-white/95 p-4 text-ink shadow-lift backdrop-blur">
              <div className="flex items-start justify-between gap-3">
                <h2 lang="bn" className="bn-tight text-[15px] font-bold text-brand">
                  {copy.hero.bundleTitle}
                </h2>
                <span className="shrink-0 rounded-full bg-violet-100 px-2 py-0.5 text-[11px] font-bold text-violet-700">
                  <span className="num">100%</span>
                </span>
              </div>

              <div className="mt-2.5 grid grid-cols-4 gap-1.5">
                {copy.hero.bundleItems.map((item) => (
                  <div
                    key={item.en}
                    className={`rounded-xl px-2 py-1.5 ${BUNDLE_TINT[item.en] ?? 'bg-violet-50 text-violet-800'}`}
                  >
                    <p lang="bn" className="bn-tight text-[12px] font-semibold leading-tight">
                      {item.label}
                    </p>
                    <p className="text-[9.5px] uppercase tracking-wide opacity-70">{item.en}</p>
                    <p className="num mt-0.5 text-[12.5px] font-bold">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#4C1D95] to-[#DB2777] px-3 py-2.5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Clock className="h-4 w-4 text-[#FCD34D]" strokeWidth={2.4} />
                </span>
                <div className="min-w-0">
                  <p lang="bn" className="bn-tight text-[12.5px] font-semibold text-white">
                    {copy.hero.deliveryTitle}
                  </p>
                  <p lang="bn" className="text-[11px] leading-relaxed text-white/75">
                    {copy.hero.deliverySub}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}