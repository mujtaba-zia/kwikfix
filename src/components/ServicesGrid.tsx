import { PHONES } from "@/lib/phones";
import { Section } from "./Section";
import { CallButton } from "./CallButton";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Sparkle";

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

/* Alternating bento spans on lg: (2,1), (1,2), (2,1) */
const spanForIndex = (i: number) => (i % 4 === 0 || i % 4 === 3 ? "lg:col-span-2" : "lg:col-span-1");

const chipClass =
  "inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors duration-200 hover:border-brand-blue hover:bg-brand-blue hover:text-white";

export function ServicesGrid() {
  return (
    <Section
      id="services"
      className="bg-white py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="flex items-center gap-2 eyebrow text-brand-blue">
                <Sparkle className="h-3 w-3 text-brand-green" />
                What we offer
              </p>
              <h2 id="services-heading" className="section-heading mt-3 max-w-[16ch]">
                Services built for Calgary properties
              </h2>
            </div>
            <p className="text-base leading-relaxed text-slate-600 md:pb-2 md:text-lg">
              Residential and commercial cleaning with clear scope and scheduling by phone. Jump to
              a service or scroll to read more.
            </p>
          </div>
        </Reveal>

        <nav className="mt-8 md:mt-10" aria-label="Jump to a service">
          <ul className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:overflow-visible md:snap-none [&::-webkit-scrollbar]:hidden">
            {services.map((s) => {
              const id = serviceAnchorId(s.title);
              return (
                <li key={s.title} className="snap-center shrink-0">
                  <a href={`#${id}`} className={chipClass}>
                    {shortTabLabel(s.title)}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
          {services.map((s, i) => {
            const id = serviceAnchorId(s.title);
            return (
              <Reveal key={s.title} delayMs={i * 40} className={`h-full ${spanForIndex(i)}`}>
                <article
                  id={id}
                  className="group relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-blue/35 hover:shadow-card md:p-7"
                >
                  <span
                    className="pointer-events-none absolute -right-1 top-2 font-display text-6xl font-extrabold leading-none text-slate-100 transition-colors duration-300 group-hover:text-brand-ice md:text-7xl"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    {s.icon}
                  </div>
                  <h3 className="relative mt-5 font-display text-lg font-bold text-slate-900 md:text-xl">
                    {s.title}
                  </h3>
                  <p className="relative mt-2 flex-1 text-[0.9375rem] leading-relaxed text-slate-600">
                    {s.description}
                  </p>
                  <CallButton
                    href={PHONES[0].href}
                    label="Call to book"
                    variant="outline"
                    size="sm"
                    className="relative mt-6 w-full sm:w-fit"
                  />
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
