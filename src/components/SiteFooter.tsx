import Image from "next/image";
import { COMPANY, PHONES } from "@/lib/phones";

/** Footer wordmark (`public/footer-logo.png`, tracked in git). */
const FOOTER_LOGO_WIDTH = 1536;
const FOOTER_LOGO_HEIGHT = 1024;

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "How It Works" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Call Us" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-brand-navy text-slate-300">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 md:px-6 md:pt-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,1fr)] md:gap-8">
          <div className="max-w-sm">
            <div className="inline-block rounded-2xl bg-white p-3 shadow-soft">
              <Image
                src="/footer-logo.png"
                alt="Kwikfix Services"
                width={FOOTER_LOGO_WIDTH}
                height={FOOTER_LOGO_HEIGHT}
                className="h-12 w-auto max-h-12 object-contain object-center"
                sizes="(max-width: 768px) 200px, 240px"
              />
            </div>
            <p className="mt-4 font-display text-lg font-semibold text-white">{COMPANY.name}</p>
            <p className="mt-1 text-sm text-slate-400">
              Professional residential and commercial cleaning. {COMPANY.location}.
            </p>
          </div>

          <nav className="flex flex-col gap-2.5" aria-label="Footer">
            <p className="eyebrow text-slate-500">Quick links</p>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-white"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-2.5">
            <p className="eyebrow text-slate-500">Book by phone</p>
            {PHONES.map((p) => (
              <a
                key={p.href}
                href={p.href}
                className="w-fit font-display text-lg font-semibold text-white transition-colors hover:text-brand-green-bright focus-visible:outline-white"
              >
                {p.display}
              </a>
            ))}
            <p className="mt-1 text-sm text-slate-400">
              Call to discuss your space and schedule a visit.
            </p>
          </div>
        </div>

        <p className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-slate-500 md:text-left">
          © {year} {COMPANY.name}. All rights reserved. Serving Calgary, Alberta.
        </p>
      </div>

      <p
        className="pointer-events-none -mb-[0.18em] select-none whitespace-nowrap text-center font-display text-[19vw] font-extrabold leading-none tracking-tight text-white/[0.04]"
        aria-hidden
      >
        kwikfix
      </p>
    </footer>
  );
}
