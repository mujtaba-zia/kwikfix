import { PHONES } from "@/lib/phones";
import { Section } from "./Section";
import { CallButton } from "./CallButton";
import { Reveal } from "./Reveal";

function serviceAnchorId(title: string) {
  return (
    "service-" +
    title
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
  );
}

function shortTabLabel(title: string) {
  if (title.startsWith("Move-In")) return "Move in / out";
  if (title.startsWith("Post-")) return "Post-construction";
  return title.replace(" Cleaning", "").trim();
}

const services = [
  {
    title: "Post-Construction Cleaning",
    description:
      "Dust, debris, and residue removal so your new or renovated space is move-in ready.",
    icon: (
      <svg
        className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.12] motion-safe:group-hover:-rotate-[8deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Move-In & Move-Out Cleaning",
    description:
      "Complete transition cleaning: detailed move-in prep and thorough move-out turnover so your home or rental is ready for what is next.",
    icon: (
      <svg
        className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.12] motion-safe:group-hover:-rotate-[8deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Carpet Cleaning",
    description:
      "Refresh high-traffic areas and improve the overall look and feel of your flooring.",
    icon: (
      <svg
        className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.12] motion-safe:group-hover:-rotate-[8deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M4 19h16M4 16h16M6 16V9a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v7" />
        <path d="M8 12h8" />
      </svg>
    ),
  },
  {
    title: "Deep Cleaning",
    description:
      "Beyond the routine: detailed attention to kitchens, baths, fixtures, and built-up grime.",
    icon: (
      <svg
        className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.12] motion-safe:group-hover:-rotate-[8deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v4M21 5h-4" />
      </svg>
    ),
  },
  {
    title: "Airbnb Cleaning",
    description:
      "Turnover cleans that keep your listing guest-ready with consistent presentation.",
    icon: (
      <svg
        className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.12] motion-safe:group-hover:-rotate-[8deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <path d="M3 10h18M5 6h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" />
        <path d="M8 14h.01M12 14h.01M16 14h.01" />
      </svg>
    ),
  },
  {
    title: "Office Cleaning",
    description:
      "Maintain a professional environment: reception areas, workstations, and shared spaces.",
    icon: (
      <svg
        className="h-6 w-6 motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-out motion-safe:group-hover:scale-[1.12] motion-safe:group-hover:-rotate-[8deg]"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const pillClass =
  "inline-flex items-center rounded-full border border-slate-300/60 bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-sm transition hover:border-brand-blue/45 hover:bg-white hover:text-brand-blue hover:shadow-md";

export function ServicesGrid() {
  return (
    <Section
      id="services"
      className="relative overflow-hidden pt-6 pb-16 md:pt-8 md:pb-24"
      aria-labelledby="services-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-brand-soft opacity-[0.45]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-[0.14]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-20 top-1/3 h-64 w-64 rounded-full bg-brand-blue/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-1/4 h-56 w-56 rounded-full bg-brand-green/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-40 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-brand-navy/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow text-brand-blue">What we offer</p>
            <h2 id="services-heading" className="section-heading mt-3">
              Services built for Calgary properties
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Residential and commercial cleaning with clear scope and scheduling by phone. Jump to a
              service or scroll to read more.
            </p>
            <div
              className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-brand-navy via-brand-blue to-brand-green"
              aria-hidden
            />
          </div>
        </Reveal>

        <nav className="mt-10 md:mt-12" aria-label="Jump to a service">
          <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible md:snap-none [&::-webkit-scrollbar]:hidden">
            {services.map((s) => {
              const id = serviceAnchorId(s.title);
              return (
                <li key={s.title} className="snap-center shrink-0">
                  <a href={`#${id}`} className={pillClass}>
                    {shortTabLabel(s.title)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s, i) => {
            const id = serviceAnchorId(s.title);
            return (
              <Reveal key={s.title} delayMs={i * 40}>
                <article
                  id={id}
                  className="group flex h-full scroll-mt-28 flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-elegant transition duration-300 hover:border-slate-300 hover:shadow-card md:p-7"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue text-white shadow-sm transition-all duration-300 ease-out motion-safe:group-hover:scale-105 motion-safe:group-hover:-rotate-2 motion-safe:group-hover:shadow-lg motion-safe:group-hover:ring-2 motion-safe:group-hover:ring-brand-green/40 group-hover:bg-brand-blue-dark">
                    {s.icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-slate-900 md:text-xl">{s.title}</h3>
                  <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">{s.description}</p>
                  <CallButton
                    href={PHONES[0].href}
                    label="Call to book"
                    variant="outline"
                    size="sm"
                    className="mt-6 w-full sm:w-auto"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delayMs={120}>
          <div className="mt-14 flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-navy px-6 py-8 text-center text-white shadow-premium md:flex-row md:text-left md:px-10 md:py-9">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-brand-green-bright">Book by phone</p>
              <p className="mt-2 text-lg font-medium text-white md:text-xl">
                Not sure which service fits? Call us and we will help you choose.
              </p>
            </div>
            <CallButton
              href={PHONES[0].href}
              label={`Call ${PHONES[0].display}`}
              variant="secondary"
              size="md"
              className="shrink-0"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
