import { BadgeCheck, PackageCheck, Truck, Undo2 } from 'lucide-react';

const TINTS = [
  'bg-gradient-to-br from-[#F97316] to-[#FB923C]',
  'bg-gradient-to-br from-[#0D9488] to-[#14B8A6]',
  'bg-gradient-to-br from-[#0284C7] to-[#38BDF8]',
  'bg-gradient-to-br from-[#7C3AED] to-[#C026D3]',
];

export default function TrustStrip({ copy, lang }) {
  const items = [
    { icon: Truck, title: copy.trust.t1Title, sub: copy.trust.t1Sub },
    { icon: PackageCheck, title: copy.trust.t2Title, sub: copy.trust.t2Sub },
    { icon: Undo2, title: copy.trust.t3Title, sub: copy.trust.t3Sub },
    { icon: BadgeCheck, title: copy.trust.t4Title, sub: copy.trust.t4Sub },
  ];

  return (
    <section className="mt-6 border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 lang="bn" className="bn-tight text-[19px] font-bold text-brand sm:text-[22px]">
            {copy.trust.heading}
          </h2>
          <p lang="bn" className="text-[12.5px] leading-relaxed text-muted">
            {copy.trust.subheading}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, sub }, i) => (
            <div
              key={title}
              className="flex items-start gap-3 rounded-2xl border border-line-soft bg-canvas p-3.5 transition-shadow hover:shadow-soft"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${TINTS[i]}`}
              >
                <Icon className="h-4.5 w-4.5 text-white" strokeWidth={2.2} />
              </span>
              <div className="min-w-0">
                <h3 lang="bn" className="bn-tight text-[12.5px] font-bold leading-snug text-ink">
                  {title}
                </h3>
                <p lang="bn" className="mt-0.5 text-[11.5px] leading-relaxed text-muted">
                  {sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}