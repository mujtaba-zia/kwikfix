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
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      <header className="sticky top-3 z-50 px-3 md:top-4 md:px-4">
        <div
          className={`mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full border py-2 pl-4 pr-2 backdrop-blur-xl transition-all duration-200 md:py-2.5 md:pl-6 md:pr-2.5 ${
            scrolled
              ? "border-slate-200 bg-white/95 shadow-card"
              : "border-slate-200/70 bg-white/80 shadow-soft"
          }`}
        >
          <a
            href="#top"
            className="flex shrink-0 items-center rounded-full transition-transform duration-200 motion-safe:hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
          >
            <Logo priority height={38} sizes="(max-width: 768px) 160px, 200px" />
            <span className="sr-only">{COMPANY.name}</span>
          </a>

          <nav className="hidden md:block" aria-label="Primary">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-brand-navy"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1.5">
            <CallButton
              href={PHONES[0].href}
              label="Call Now"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
              icon={<PhoneIcon className="h-4 w-4 shrink-0" />}
            />
            <button
              type="button"
              className="group/menu inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-all duration-200 hover:border-brand-blue/40 hover:text-brand-blue md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg
                  className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover/menu:rotate-90"
                  width="20"
                  height="20"
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
                  width="20"
                  height="20"
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
        className={`fixed inset-0 z-40 bg-brand-navy/25 backdrop-blur-[2px] transition-opacity duration-200 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden
        onClick={() => setOpen(false)}
      />
      <div
        id="mobile-menu"
        className={`fixed inset-x-3 top-[76px] z-[45] origin-top rounded-3xl border border-slate-200 bg-white/95 p-3 shadow-card backdrop-blur-2xl transition-all duration-200 md:hidden ${
          open ? "visible scale-100 opacity-100" : "invisible scale-[0.98] opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile primary">
          <ul className="divide-y divide-slate-100">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="flex items-center justify-between rounded-xl px-3 py-3.5 font-display text-base font-semibold text-slate-900 transition-colors hover:bg-slate-50 hover:text-brand-blue"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  <svg
                    className="h-4 w-4 text-slate-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3">
            <CallButton
              href={PHONES[0].href}
              label={`Call ${PHONES[0].display}`}
              variant="primary"
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
