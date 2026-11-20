import { ArrowUp, Mail, MapPin, MessageCircle, Phone, Share2 } from 'lucide-react';
import Logo from './icons/Logo';

export default function Footer({ copy, lang }) {
  const quickLinks = [
    { label: copy.footer.privacy, href: '#' },
    { label: copy.footer.terms, href: '#' },
    { label: copy.footer.faq, href: '#' },
  ];

  return (
    <footer className="border-t border-line bg-brand text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <div className="flex items-center gap-2.5">
              <Logo className="h-10 w-10" />
              <div className="flex flex-col leading-none">
                <span lang="bn" className="bn-tight text-[19px] font-bold">
                  মুদিওয়ালা
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9CD6A8]">
                  Mudiwala
                </span>
              </div>
            </div>
            <p lang="bn" className="mt-3.5 text-[13px] leading-relaxed text-[#CFE6D6]">
              {copy.footer.aboutText}
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[
                { Icon: Share2, label: 'Facebook' },
                { Icon: MessageCircle, label: 'WhatsApp' },
                { Icon: Mail, label: 'Email' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-[#CFE6D6] transition-colors hover:bg-white/20 hover:text-white"
                >
                  <Icon className="h-4 w-4" strokeWidth={2.2} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 lang="bn" className="bn-tight text-[14px] font-bold text-white">
              {copy.footer.links}
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#CFE6D6] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#catalog"
                  className="text-[13px] text-[#CFE6D6] transition-colors hover:text-white"
                >
                  {copy.needs.heading}
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 lang="bn" className="bn-tight text-[14px] font-bold text-white">
              {copy.footer.help}
            </h3>
            <ul className="mt-3.5 space-y-2.5">
              {[
                { label: copy.footer.faq, href: '#' },
                { label: copy.footer.terms, href: '#' },
                { label: copy.footer.privacy, href: '#' },
              ].map((link) => (
                <li key={`${link.label}-${link.href}`}>
                  <a
                    href={link.href}
                    className="text-[13px] text-[#CFE6D6] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 lang="bn" className="bn-tight text-[14px] font-bold text-white">
              {copy.footer.contact}
            </h3>
            <ul className="mt-3.5 space-y-3">
              <li className="flex items-start gap-2.5 text-[13px] text-[#CFE6D6]">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#9CD6A8]" strokeWidth={2.2} />
                <span className="num">09612-889900</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-[#CFE6D6]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9CD6A8]" strokeWidth={2.2} />
                <span lang="bn">{copy.footer.madeIn}</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-[#CFE6D6]">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#9CD6A8]" strokeWidth={2.2} />
                <span lang="bn">WhatsApp: 09612-889900</span>
              </li>
            </ul>
            <button
              type="button"
              onClick={() =>
                document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-2 text-[12.5px] font-semibold text-white transition-colors hover:bg-white/20"
            >
              <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.6} />
              {copy.footer.backToTop}
            </button>
          </div>
        </div>

        <div className="mt-9 flex flex-col items-center justify-between gap-2 border-t border-white/12 pt-5 text-[12px] text-[#A9CDB5] sm:flex-row">
          <p lang="bn">{copy.footer.copyright}</p>
          <p lang="bn">{copy.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
