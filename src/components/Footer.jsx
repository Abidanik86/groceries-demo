import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react';
import Logo from './icons/Logo';

export default function Footer({ copy, lang }) {
  const quickLinks = [
    { label: copy.footer.privacy, href: '#' },
    { label: copy.footer.terms, href: '#' },
    { label: copy.footer.faq, href: '#' },
  ];

  const linkClass = 'text-[13px] text-white/70 transition-colors hover:text-[#FCD34D]';

  return (
    <footer className="bg-gradient-to-br from-[#2E1065] via-[#4C1D95] to-[#9D174D] text-white">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-9">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div className="col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <Logo className="h-9 w-9" />
              <div className="flex flex-col leading-none">
                <span lang="bn" className="bn-tight text-[18px] font-bold">
                  মুদিওয়ালা
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#FCD34D]">
                  Mudiwala
                </span>
              </div>
            </div>
            <p lang="bn" className="mt-3 text-[12.5px] leading-relaxed text-white/70">
              {copy.footer.aboutText}
            </p>
            <div className="mt-3.5 flex items-center gap-2">
              {[
                { Icon: Share2, label: 'Facebook' },
                { Icon: MessageCircle, label: 'WhatsApp' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/12 text-white/80 transition-colors hover:bg-white/25 hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 lang="bn" className="bn-tight text-[13.5px] font-bold text-white">
              {copy.footer.links}
            </h3>
            <ul className="mt-3 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#catalog" className={linkClass}>
                  {copy.needs.heading}
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 lang="bn" className="bn-tight text-[13.5px] font-bold text-white">
              {copy.footer.help}
            </h3>
            <ul className="mt-3 space-y-2">
              {[
                { label: copy.footer.faq, href: '#' },
                { label: copy.footer.terms, href: '#' },
                { label: copy.footer.privacy, href: '#' },
              ].map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a href={link.href} className={linkClass}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 lg:col-span-1">
            <h3 lang="bn" className="bn-tight text-[13.5px] font-bold text-white">
              {copy.footer.contact}
            </h3>
            <ul className="mt-3 space-y-2.5">
              <li className="flex items-start gap-2.5 text-[12.5px] text-white/70">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#FCD34D]" strokeWidth={2.2} />
                <span className="num">09612-889900</span>
              </li>
              <li className="flex items-start gap-2.5 text-[12.5px] text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#FCD34D]" strokeWidth={2.2} />
                <span lang="bn">{copy.footer.madeIn}</span>
              </li>
              <li className="flex items-start gap-2.5 text-[12.5px] text-white/70">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#FCD34D]" strokeWidth={2.2} />
                <span lang="bn">WhatsApp: 09612-889900</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() =>
                document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-white/12 px-3 py-2 text-[12px] font-semibold text-white transition-colors hover:bg-white/25"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.6} />
              {copy.footer.backToTop}
            </button>
          </div>
        </div>

        <div className="mt-7 flex flex-col items-center justify-between gap-1.5 border-t border-white/15 pt-4 text-[11.5px] text-white/60 sm:flex-row">
          <p lang="bn">{copy.footer.copyright}</p>
          <p lang="bn">{copy.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}