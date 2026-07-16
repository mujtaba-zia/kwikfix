import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Sparkle";

const points = [
  {
    title: "Detailed cleaning standards",
    body: "We focus on areas that collect dust and wear so your space feels consistently refreshed.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4M21 5h-4" />
      </svg>
    ),
  },
  {
    title: "Reliable service",
    body: "Arrive prepared, work efficiently, and respect your property every time.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Homes, rentals, and workplaces",
    body: "One team for turnovers, short-term rentals, and professional environments.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Convenient for busy clients",
    body: "Schedule by phone with options shaped around real timelines.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Presentation that matters",
    body: "We care how your space looks to guests, clients, and everyone who walks through the door.",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <Section
      id="why-us"
      className="bg-brand-mist/40 py-16 md:py-24"
      aria-labelledby="why-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <p className="flex items-center gap-2 eyebrow text-brand-blue">
                <Sparkle className="h-3 w-3 text-brand-green" />
                Why Kwikfix
              </p>
              <h2 id="why-heading" className="section-heading mt-3 max-w-[14ch]">
                Built for quality and clarity
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-slate-600 md:text-lg">
                Calgary clients choose us when they want work that feels intentional, not rushed,
                with simple phone-based booking and direct answers from our team.
              </p>
            </div>
          </Reveal>

          <ul className="grid gap-x-10 sm:grid-cols-2">
            {points.map((p, i) => (
              <li key={p.title} className={i === 4 ? "sm:col-span-2 sm:max-w-[calc(50%-1.25rem)]" : ""}>
                <Reveal delayMs={40 + i * 40}>
                  <div className="group/point border-t border-slate-300/70 py-6 md:py-7">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-dark transition-transform duration-300 motion-safe:group-hover/point:scale-110"
                      aria-hidden
                    >
                      {p.icon}
                    </span>
                    <h3 className="mt-4 font-display text-base font-bold text-slate-900 md:text-lg">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
