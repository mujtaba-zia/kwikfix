import { COMPANY, PHONES } from "@/lib/phones";
import { CallButton } from "./CallButton";
import { Sparkle } from "./Sparkle";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

const highlights = [
  {
    t: "Full-service coverage",
    d: "Post-construction, deep cleans, move-in and move-out, offices, and Airbnb turnovers.",
  },
  {
    t: "Clear communication",
    d: "You speak with our team directly. No forms or long email chains.",
  },
  {
    t: "Flexible scheduling",
    d: "One-time or recurring visits planned around your timeline.",
  },
] as const;

export function Hero() {
  return (
    <section
      className="relative isolate overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-brand-ice/40 to-brand-mist/70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand-blue/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-48 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-brand-green/15 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-40 left-[-8%] h-[24rem] w-[24rem] rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />

      <Sparkle className="pointer-events-none absolute left-[12%] top-[22%] hidden h-6 w-6 animate-float text-brand-green md:block" />
      <Sparkle className="pointer-events-none absolute right-[14%] top-[30%] hidden h-4 w-4 animate-float text-brand-blue/50 [animation-delay:1.2s] md:block" />
      <Sparkle className="pointer-events-none absolute bottom-[34%] right-[8%] hidden h-5 w-5 animate-float text-brand-green/70 [animation-delay:2.4s] lg:block" />

      <div className="relative mx-auto flex min-h-[calc(100svh-72px)] w-full max-w-6xl flex-col justify-center px-4 pb-16 pt-12 md:px-6 md:pb-20 md:pt-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex w-fit animate-fade-up items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-slate-600 shadow-sm backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden />
            {COMPANY.location} · Residential and commercial
          </span>

          <h1
            id="hero-heading"
            className="mx-auto mt-7 max-w-[18ch] animate-fade-up font-display text-[2.75rem] font-extrabold leading-[1.06] tracking-tight text-slate-900 [animation-delay:60ms] sm:text-6xl lg:text-7xl"
          >
            Professional{" "}
            <span className="bg-gradient-to-r from-brand-blue to-brand-teal bg-clip-text text-transparent">
              cleaning
            </span>{" "}
            you can rely on
          </h1>

          <p className="mx-auto mt-6 max-w-xl animate-fade-up text-base leading-relaxed text-slate-600 [animation-delay:120ms] md:text-lg">
            Dependable scheduling, careful work, and results you notice from the first visit.
            Serving Calgary and surrounding areas, booked and planned entirely by phone.
          </p>

          <div className="mt-9 flex animate-fade-up flex-col items-center justify-center gap-3 [animation-delay:180ms] sm:flex-row sm:flex-wrap">
            <CallButton
              href={PHONES[0].href}
              label={`Call ${PHONES[0].display}`}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto"
              icon={<PhoneIcon />}
            />
          </div>

          <p className="mx-auto mt-7 flex animate-fade-up flex-wrap items-center justify-center gap-x-3 gap-y-2 text-[0.8125rem] font-medium text-slate-500 [animation-delay:240ms]">
            <span>Phone-first booking</span>
            <Sparkle className="h-2.5 w-2.5 text-brand-green" />
            <span>One-time or recurring</span>
            <Sparkle className="h-2.5 w-2.5 text-brand-green" />
            <span>Homes, rentals, and offices</span>
          </p>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-5xl animate-fade-up gap-4 [animation-delay:300ms] sm:grid-cols-3 md:mt-16 md:gap-5">
          {highlights.map((row) => (
            <div
              key={row.t}
              className="group/card rounded-2xl border border-slate-200 bg-white/90 p-6 text-left shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-brand-green/50 hover:shadow-card"
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-green/15 text-brand-green-dark transition-transform duration-300 motion-safe:group-hover/card:scale-110"
                aria-hidden
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <p className="mt-4 font-display font-bold text-slate-900">{row.t}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{row.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
