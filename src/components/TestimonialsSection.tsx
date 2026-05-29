import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function TestimonialsSection() {
  return (
    <Section
      id="reviews"
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="reviews-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-brand-soft opacity-[0.32]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-48 w-48 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 h-56 w-56 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-brand-blue">Testimonials</p>
            <h2 id="reviews-heading" className="section-heading mt-3">
              Client feedback
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              We are adding reviews from Calgary customers. Check back soon for real quotes and ratings.
            </p>
          </div>
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {[1, 2, 3].map((n, i) => (
            <Reveal key={n} delayMs={i * 50}>
              <li className="group/star flex min-h-[200px] flex-col rounded-xl border border-slate-200/90 bg-white p-6 text-center shadow-elegant transition-shadow duration-300 hover:shadow-card md:min-h-[220px] md:p-8">
                <div
                  className="mx-auto flex gap-0.5 text-brand-blue/35 transition-all duration-300 motion-safe:group-hover/star:gap-1 motion-safe:group-hover/star:text-brand-green/45"
                  aria-hidden
                >
                  {[1, 2, 3, 4, 5].map((j) => (
                    <svg
                      key={j}
                      className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover/star:scale-125 motion-safe:group-hover/star:-rotate-6"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="mt-6 font-display text-base font-bold text-brand-navy">Coming soon</p>
                <p className="mt-2 text-sm text-slate-600">Reviews will appear here as we collect them.</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
