import { PHONES } from "@/lib/phones";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Sparkle";

export function FinalCTA() {
  return (
    <Section
      id="contact"
      className="bg-white py-16 md:py-24"
      aria-labelledby="cta-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-gradient-panel px-6 py-16 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-grid-fine-light opacity-60" aria-hidden />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[22rem] w-[min(100%,38rem)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-green/15 blur-3xl"
              aria-hidden
            />
            <Sparkle className="pointer-events-none absolute left-[10%] top-[18%] hidden h-5 w-5 animate-float text-brand-green-bright md:block" />
            <Sparkle className="pointer-events-none absolute bottom-[20%] right-[10%] hidden h-4 w-4 animate-float text-brand-green-bright/70 [animation-delay:1.5s] md:block" />

            <p className="relative eyebrow text-brand-green-bright">Get started</p>
            <h2 id="cta-heading" className="section-heading-light relative mt-3 text-balance">
              Ready for a cleaner space?
            </h2>
            <p className="relative mx-auto mt-5 max-w-xl text-base leading-relaxed text-brand-ice/90 md:text-lg">
              Call to discuss your home, rental, or workplace. We will recommend the right service
              and set a time that works for you. No online forms.
            </p>

            <div className="relative mt-10">
              <a
                href={PHONES[0].href}
                className="inline-block font-display text-4xl font-extrabold tracking-tight text-white transition-colors duration-200 hover:text-brand-green-bright focus-visible:outline-white sm:text-5xl md:text-6xl"
              >
                {PHONES[0].display}
              </a>
            </div>

            <p className="relative mt-8 text-xs font-medium uppercase tracking-[0.18em] text-white/50">
              Serving Calgary and surrounding areas
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
