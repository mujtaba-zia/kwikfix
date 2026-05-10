import { Section } from "./Section";
import { Reveal } from "./Reveal";

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
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="why-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.1]" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-12 bottom-0 h-56 w-56 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 h-32 w-[min(90%,36rem)] -translate-x-1/2 rounded-full bg-brand-navy/10 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow text-brand-blue-dark">Why Kwikfix</p>
            <h2 id="why-heading" className="section-heading mt-3">
              Built for quality and clarity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">
              Calgary clients choose us when they want work that feels intentional, not rushed, with
              simple phone-based booking and direct answers from our team.
            </p>
            <div
              className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-green"
              aria-hidden
            />
          </div>
        </Reveal>

        <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {points.map((p, i) => (
            <Reveal key={p.title} delayMs={40 + i * 35}>
              <li
                className={`group/point flex h-full flex-col rounded-xl border border-slate-200/90 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition hover:border-brand-blue/35 hover:shadow-card md:p-7 ${
                  i === points.length - 1 ? "lg:col-start-2" : ""
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-brand-blue/15 via-brand-ice/80 to-brand-green/18 text-brand-blue transition-all duration-300 motion-safe:group-hover/point:scale-110 motion-safe:group-hover/point:-rotate-3 motion-safe:group-hover/point:shadow-md motion-safe:group-hover/point:ring-2 motion-safe:group-hover/point:ring-brand-blue/20">
                  <span className="inline-flex motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/point:scale-110 motion-safe:group-hover/point:-rotate-12">
                    {p.icon}
                  </span>
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-slate-900 md:text-lg">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 md:text-[0.9375rem]">{p.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  );
}
