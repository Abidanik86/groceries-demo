import { ArrowRight, CheckCircle2, Clock, ClipboardList, ShieldCheck, Truck } from 'lucide-react';

export default function Hero({ copy, lang, onStartShopping, onOpenList }) {
  return (
    <section className="relative overflow-hidden bg-canvas">
      {/* soft botanical / grain accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#E8F1E4] opacity-70 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#F5EDDC] opacity-60 blur-2xl"
      />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-9 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-14 lg:gap-12">
        {/* Left column */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ECFDF5] px-3 py-1.5 text-[12px] font-semibold leading-tight text-[#065F46]">
            <ShieldCheck className="h-3.5 w-3.5 shrink-0" strokeWidth={2.6} />
            {copy.hero.trustPill}
          </span>

          <h1
            lang="bn"
            className="bn-tight mt-4 text-[30px] font-bold leading-[1.28] text-brand sm:text-[38px] md:text-[42px] lg:text-[46px]"
          >
            {copy.hero.headline}
          </h1>

          <p lang="bn" className="mt-3.5 max-w-xl text-[14px] leading-relaxed text-muted sm:text-[15px]">
            {copy.hero.subtext}
          </p>

          <ul className="mt-5 space-y-2.5">
            {[
              { icon: Truck, text: copy.hero.bullet1 },
              { icon: CheckCircle2, text: copy.hero.bullet2 },
              { icon: ShieldCheck, text: copy.hero.bullet3 },
            ].map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-action/12">
                  <Icon className="h-3 w-3 text-action" strokeWidth={3} />
                </span>
                <span lang="bn" className="text-[13.5px] leading-relaxed text-ink sm:text-sm">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={onStartShopping}
              className="group inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl bg-action px-6 text-[14px] font-bold leading-tight text-white transition-colors hover:bg-action-dark active:scale-[0.985]"
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
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 text-[13.5px] font-semibold leading-tight text-ink transition-colors hover:border-brand hover:text-brand"
            >
              <ClipboardList className="h-4 w-4 shrink-0" strokeWidth={2.4} />
              {copy.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="animate-fade-up md:justify-self-end">
          <div className="w-full max-w-md rounded-3xl border border-line bg-surface p-5 shadow-soft sm:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 lang="bn" className="bn-tight text-[19px] font-bold text-brand">
                  {copy.hero.bundleTitle}
                </h2>
                <p lang="bn" className="mt-1 text-[12.5px] leading-relaxed text-muted">
                  {copy.hero.bundleSub}
                </p>
              </div>
              <span className="shrink-0 rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[11px] font-bold text-[#065F46]">
                <span className="num">100%</span>
              </span>
            </div>

            {/* Highlight grid */}
            <div className="mt-4 grid grid-cols-2 gap-2.5">
              {[
                { label: 'চাল', en: 'Rice', value: '৳78' },
                { label: 'ডিম', en: 'Eggs', value: '৳148' },
                { label: 'তেল', en: 'Oil', value: '৳175' },
                { label: 'ডাল', en: 'Dal', value: '৳72' },
              ].map((item) => (
                <div
                  key={item.en}
                  className="rounded-xl border border-line-soft bg-art px-3 py-2.5"
                >
                  <p lang="bn" className="bn-tight text-[13px] font-semibold text-ink">
                    {item.label}
                  </p>
                  <p className="text-[10.5px] uppercase tracking-wide text-muted">{item.en}</p>
                  <p className="num mt-1 text-[13.5px] font-bold text-brand">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Live delivery promise */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-brand px-4 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/12">
                <Clock className="h-4.5 w-4.5 text-[#9CD6A8]" strokeWidth={2.4} />
              </span>
              <div className="min-w-0">
                <p lang="bn" className="bn-tight text-[13px] font-semibold text-white">
                  {copy.hero.deliveryTitle}
                </p>
                <p lang="bn" className="text-[11.5px] leading-relaxed text-[#B6D8C0]">
                  {copy.hero.deliverySub}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
