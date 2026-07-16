"use client";

import { PHONES } from "@/lib/phones";

export function FloatingCallButton() {
  return (
    <a
      href={PHONES[0].href}
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand-green px-5 py-3.5 text-sm font-bold text-brand-navy shadow-lift ring-1 ring-brand-navy/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-green-bright active:translate-y-0 md:hidden max-[767px]:mb-[env(safe-area-inset-bottom,0px)] max-[767px]:mr-[env(safe-area-inset-right,0px)]"
      aria-label={`Call now at ${PHONES[0].display}`}
    >
      <svg
        className="motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:rotate-12"
        width="20"
        height="20"
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
      Call Now
    </a>
  );
}
