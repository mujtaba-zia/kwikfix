import { PHONES } from "@/lib/phones";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Sparkle";

const steps = [
  {
    n: "01",
    title: "Call us",
    body: (
      <>
        Reach us at{" "}
        <a href={PHONES[0].href} className="font-semibold text-brand-blue underline-offset-4 hover:underline">
          {PHONES[0].display}
        </a>{" "}
        and tell us about your home, rental, or workplace.
      </>
    ),
  },
  {
    n: "02",
    title: "Plan the visit",
    body: (
      <>
        We talk through your property, timeline, and the level of clean you expect, then recommend
        the right service and set a time that works.
      </>
    ),
  },
  {
    n: "03",
    title: "Service day",
    body: (
      <>
        We arrive prepared, work efficiently, and respect your space, so the result is predictable
        and professional every time.
      </>
    ),
  },
] as const;

export function ProcessSection() {
  return (
    <Section
      id="process"
      className="bg-brand-mist/40 py-16 md:py-24"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="flex items-center justify-center gap-2 eyebrow text-brand-green-dark">
              <Sparkle className="h-3 w-3 text-brand-green" />
              How it works
            </p>
            <h2 id="process-heading" className="section-heading mt-3">
              Booked in one phone call
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              No forms, no portals, no waiting on quotes. Three simple steps from first call to a
              finished clean.
            </p>
          </div>
        </Reveal>

        <ol className="mt-12 grid gap-5 md:grid-cols-3 md:gap-6">
          {steps.map((step, i) => (
            <li key={step.n} className="h-full">
              <Reveal delayMs={60 + i * 60} className="h-full">
                <div className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
                  <span
                    className="pointer-events-none absolute -right-2 -top-4 font-display text-[6rem] font-extrabold leading-none text-brand-ice/80 md:text-[7rem]"
                    aria-hidden
                  >
                    {step.n}
                  </span>
                  <span className="relative inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-3 py-1 font-display text-xs font-bold uppercase tracking-[0.14em] text-brand-blue">
                    Step {step.n}
                  </span>
                  <h3 className="relative mt-4 font-display text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="relative mt-2 text-[0.9375rem] leading-relaxed text-slate-600">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
