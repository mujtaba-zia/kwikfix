"use client";

import { useEffect, useState } from "react";
import { COMPANY, PHONES } from "@/lib/phones";
import { Logo } from "./Logo";
import { CallButton } from "./CallButton";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#why-us", label: "Why Us" },
  { href: "#faq", label: "FAQ" },
] as const;

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function HeaderNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
      className={`sticky top-0 z-50 border-b transition-all duration-200 ${
        scrolled
          ? "border-slate-200/60 bg-[#f7faf9]/95 shadow-sm backdrop-blur-md"
          : "border-slate-200/50 bg-[#f8faf9]/92 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid min-h-[64px] max-w-6xl grid-cols-[minmax(0,auto)_1fr_minmax(0,auto)] items-center gap-2 px-4 py-1.5 md:min-h-[68px] md:gap-3 md:px-6 md:py-2 lg:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center justify-self-start rounded-lg transition-transform duration-200 motion-safe:hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
        >
          <Logo priority height={46} sizes="(max-width: 768px) 180px, 240px" />
          <span className="sr-only">{COMPANY.name}</span>
        </a>

        <nav className="hidden min-w-0 justify-self-center md:block" aria-label="Primary">
          <ul className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 lg:gap-x-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="whitespace-nowrap rounded-lg px-2 py-1.5 text-[0.8125rem] font-semibold text-slate-700 transition-colors hover:bg-slate-100 hover:text-brand-blue md:text-sm lg:px-2.5"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-1.5 md:gap-2">
          <CallButton
            href={PHONES[0].href}
            label="Call Now"
            variant="primary"
            size="sm"
            className="hidden !px-3 !py-2 !text-sm sm:inline-flex"
            icon={<PhoneIcon className="h-4 w-4 shrink-0" />}
          />
          <button
            type="button"
            className="group/menu inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-800 transition-all duration-200 hover:border-brand-blue/30 hover:bg-brand-blue/5 hover:text-brand-blue md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover/menu:rotate-90 motion-safe:group-hover/menu:scale-110"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover/menu:scale-110"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden
              >
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>

    <div
        id="mobile-menu"
        className={`fixed inset-0 top-[64px] z-[45] bg-white/90 backdrop-blur-2xl backdrop-saturate-150 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] transition-[opacity,visibility] duration-200 md:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav
          className="flex h-[calc(100dvh-64px)] flex-col gap-0.5 overflow-y-auto px-4 py-6"
          aria-label="Mobile primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3.5 text-base font-medium text-slate-800 hover:bg-slate-100/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-slate-200/80 pt-6">
            <CallButton
              href={PHONES[0].href}
              label={`Call ${PHONES[0].display}`}
              variant="primary"
              size="md"
              className="w-full"
              icon={<PhoneIcon />}
            />
            <CallButton
              href={PHONES[1].href}
              label={`Call ${PHONES[1].display}`}
              variant="outline"
              size="md"
              className="w-full"
              icon={<PhoneIcon />}
            />
          </div>
        </nav>
      </div>
    </>
  );
}
