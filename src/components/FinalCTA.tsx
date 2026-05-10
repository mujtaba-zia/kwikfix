import { PHONES } from "@/lib/phones";
import { CallButton } from "./CallButton";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
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

export function FinalCTA() {
  return (
    <Section
      id="contact"
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[min(100%,28rem)] w-[min(100%,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-0 bottom-0 h-48 w-48 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-navy px-6 py-10 text-center text-white shadow-premium md:px-10 md:py-12">
            <div className="absolute inset-0 bg-grid-fine-light opacity-[0.07]" aria-hidden />
            <div
              className="relative mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-brand-green-bright via-white/70 to-brand-green-bright"
              aria-hidden
            />
            <p className="relative mt-8 text-[0.6875rem] font-semibold uppercase tracking-[0.22em] text-brand-green-bright">
              Get started
            </p>
            <h2 id="cta-heading" className="section-heading-light relative mt-3 text-balance">
              Ready for a cleaner space?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-200/95 md:text-lg">
              Call to discuss your home, rental, or workplace. We will recommend the right service and set a
              time that works for you. No online forms.
            </p>
            <div className="relative mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <CallButton
                href={PHONES[0].href}
                label={`Call ${PHONES[0].display}`}
                variant="secondary"
                size="lg"
                className="min-w-[240px] shadow-glow"
                icon={<PhoneIcon />}
              />
              <CallButton
                href={PHONES[1].href}
                label={`Call ${PHONES[1].display}`}
                variant="outlineInverse"
                size="lg"
                className="min-w-[240px]"
                icon={<PhoneIcon />}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
