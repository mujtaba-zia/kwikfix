import { PHONES } from "@/lib/phones";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Sparkle";

export function TestimonialsSection() {
  return (
    <Section
      id="reviews"
      className="bg-white py-16 md:py-24"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 eyebrow text-brand-blue">
              <Sparkle className="h-3 w-3 text-brand-green" />
              Testimonials
            </p>
            <h2 id="reviews-heading" className="section-heading mt-3">
              Client feedback
            </h2>
          </div>
        </Reveal>

        <Reveal delayMs={60}>
          <div className="relative mx-auto mt-10 max-w-2xl overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-soft md:mt-12 md:p-12">
            <span
              className="pointer-events-none absolute -left-2 -top-7 font-display text-[8rem] font-extrabold leading-none text-brand-ice"
              aria-hidden
            >
              &ldquo;
            </span>
            <div className="relative mx-auto flex w-fit gap-1 text-brand-green" aria-hidden>
              {[1, 2, 3, 4, 5].map((j) => (
                <svg
                  key={j}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <p className="relative mt-6 font-display text-xl font-bold text-slate-900 md:text-2xl">
              Reviews coming soon
            </p>
            <p className="relative mx-auto mt-3 max-w-md text-base leading-relaxed text-slate-600">
              We are collecting feedback from Calgary customers and will publish real quotes and
              ratings here as they come in.
            </p>
            <p className="relative mt-6 text-sm text-slate-600">
              Want to talk it through first?{" "}
              <a
                href={PHONES[0].href}
                className="font-semibold text-brand-blue underline-offset-4 hover:underline"
              >
                Call {PHONES[0].display}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
