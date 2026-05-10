import Image from "next/image";
import { COMPANY, PHONES } from "@/lib/phones";

/** From `Kwikfix Services logo design.png` (served as /footer-logo.png). */
const FOOTER_LOGO_WIDTH = 1536;
const FOOTER_LOGO_HEIGHT = 1024;

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Call Us" },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-[#040a12] via-[#03080f] to-[#02060a] text-slate-300">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-green-bright/50 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="inline-block rounded-xl bg-white p-3 shadow-sm">
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
            <p className="mt-1 text-slate-400">{COMPANY.location}</p>
            <div className="mt-4 flex flex-col gap-2">
              {PHONES.map((p) => (
                <a
                  key={p.href}
                  href={p.href}
                  className="text-base font-medium text-white transition-colors hover:text-brand-green-bright"
                >
                  {p.display}
                </a>
              ))}
            </div>
          </div>

          <nav className="flex flex-col gap-2" aria-label="Footer">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick links
            </p>
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <p className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-500 md:text-left">
          © {year} {COMPANY.name}. All rights reserved. Serving Calgary, Alberta.
        </p>
      </div>
    </footer>
  );
}
