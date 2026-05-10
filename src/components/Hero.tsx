import { COMPANY, PHONES } from "@/lib/phones";
import { CallButton } from "./CallButton";
import { Logo } from "./Logo";

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

export function Hero() {
  return (
    <section
      className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-transparent"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.18]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-brand-mist/50 to-brand-green/10"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -right-16 top-[-10%] h-[min(100%,36rem)] w-[min(100%,36rem)] rounded-full bg-brand-blue/18 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-96 w-96 rounded-full bg-brand-green/14 blur-3xl" />
        <div className="absolute left-[35%] top-[28%] h-56 w-56 rounded-full bg-brand-ice/90 blur-2xl" />
        <div className="absolute right-[12%] bottom-[20%] h-40 w-40 rounded-full bg-brand-teal/12 blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-1 flex-col">
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-10 md:px-6 md:py-12 lg:px-8">
          <div className="grid max-w-6xl gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-center md:gap-14 lg:gap-16">
            <div className="animate-fade-up">
              <div className="mb-6 flex flex-col gap-5 sm:mb-8 sm:flex-row sm:items-center sm:gap-8">
                <Logo height={88} className="drop-shadow-sm" />
                <div className="flex flex-col gap-2">
                  <span className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200/90 bg-white/90 px-3.5 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-brand-blue-dark/80 shadow-sm backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green" aria-hidden />
                    {COMPANY.location}
                  </span>
                  <span className="text-sm font-medium text-slate-600 md:text-base">
                    Residential and commercial cleaning
                  </span>
                </div>
              </div>

              <h1
                id="hero-heading"
                className="heading-display max-w-[20ch] text-[2.125rem] leading-[1.12] sm:text-4xl md:max-w-[22ch] md:text-5xl md:leading-[1.08] lg:text-[3.25rem]"
              >
                Professional cleaning in{" "}
                <span className="bg-gradient-to-r from-brand-blue via-brand-blue-dark to-brand-teal bg-clip-text text-transparent">
                  Calgary
                </span>{" "}
                you can rely on
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 md:mt-6 md:text-lg">
                Dependable scheduling, careful work, and results you notice from the first visit. Book and
                plan everything by phone.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
                <CallButton
                  href={PHONES[0].href}
                  label={`Call ${PHONES[0].display}`}
                  variant="primary"
                  size="lg"
                  icon={<PhoneIcon />}
                />
                <CallButton
                  href={PHONES[1].href}
                  label={`Call ${PHONES[1].display}`}
                  variant="secondary"
                  size="lg"
                  icon={<PhoneIcon />}
                />
              </div>

              <p className="group/note mt-6 flex max-w-xl items-start gap-3 rounded-xl border border-slate-200/80 bg-white/70 px-4 py-3.5 text-sm text-slate-600 shadow-sm transition-colors duration-300 hover:border-brand-blue/25 hover:bg-white/90 sm:mt-8">
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-green/15 text-brand-green-dark transition-all duration-300 motion-safe:group-hover/note:scale-110 motion-safe:group-hover/note:bg-brand-blue/10 motion-safe:group-hover/note:text-brand-blue"
                  aria-hidden
                >
                  <svg
                    className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/note:scale-110 motion-safe:group-hover/note:rotate-12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </span>
                <span>
                  <strong className="font-semibold text-slate-800">Phone-first booking.</strong> Tell us about
                  your space and timing, and we will match you to the right service.
                </span>
              </p>
            </div>

            <div className="relative animate-fade-up motion-reduce:animate-none [animation-delay:100ms]">
              <div className="ring-gradient-card overflow-hidden rounded-2xl border border-slate-200/75 bg-white/92 backdrop-blur-md">
                <div className="border-b border-slate-100 bg-slate-50/80 px-6 py-4 md:px-8">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Why businesses and homes choose us
                  </p>
                </div>
                <div className="space-y-0 divide-y divide-slate-100 p-2 md:p-3">
                  {[
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
                  ].map((row) => (
                    <div
                      key={row.t}
                      className="group/row flex gap-4 px-4 py-4 transition-colors duration-300 hover:bg-slate-50/80 md:px-5 md:py-5"
                    >
                      <span
                        className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10 text-brand-blue transition-all duration-300 motion-safe:group-hover/row:scale-110 motion-safe:group-hover/row:rotate-6 motion-safe:group-hover/row:bg-brand-green/15 motion-safe:group-hover/row:text-brand-green-dark motion-safe:group-hover/row:shadow-md"
                        aria-hidden
                      >
                        <svg
                          className="motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover/row:scale-110"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <div>
                        <p className="font-display font-bold text-slate-900">{row.t}</p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{row.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-slate-100 bg-brand-navy px-6 py-4 md:px-8">
                  <p className="text-sm font-medium text-white">
                    Questions today?{" "}
                    <a
                      href={PHONES[0].href}
                      className="font-semibold text-brand-green-bright underline-offset-2 hover:underline"
                    >
                      Call {PHONES[0].display}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 h-6 shrink-0 md:h-8" aria-hidden />
      </div>
    </section>
  );
}
