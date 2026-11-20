import { BadgeCheck, PackageCheck, Truck, Undo2 } from 'lucide-react';

export default function TrustStrip({ copy, lang }) {
  const items = [
    { icon: Truck, title: copy.trust.t1Title, sub: copy.trust.t1Sub },
    { icon: PackageCheck, title: copy.trust.t2Title, sub: copy.trust.t2Sub },
    { icon: Undo2, title: copy.trust.t3Title, sub: copy.trust.t3Sub },
    { icon: BadgeCheck, title: copy.trust.t4Title, sub: copy.trust.t4Sub },
  ];

  return (
    <section className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="text-center">
          <h2 lang="bn" className="bn-tight text-[21px] font-bold text-brand sm:text-[25px]">
            {copy.trust.heading}
          </h2>
          <p lang="bn" className="mt-1 text-[13px] leading-relaxed text-muted">
            {copy.trust.subheading}
          </p>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, sub }) => (
            <div
              key={title}
              className="flex items-start gap-3.5 rounded-2xl border border-line-soft bg-canvas p-4"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand">
                <Icon className="h-5 w-5 text-[#9CD6A8]" strokeWidth={2.2} />
              </span>
              <div className="min-w-0">
                <h3 lang="bn" className="bn-tight text-[13.5px] font-bold leading-snug text-ink">
                  {title}
                </h3>
                <p lang="bn" className="mt-1 text-[12px] leading-relaxed text-muted">
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
