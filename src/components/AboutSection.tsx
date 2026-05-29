import { Section } from "./Section";
import { Reveal } from "./Reveal";

export function AboutSection() {
  return (
    <Section
      id="about"
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-brand-soft opacity-[0.35]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-dots-subtle opacity-[0.2]" aria-hidden />
      <div
        className="pointer-events-none absolute right-0 top-0 h-[min(100%,24rem)] w-[min(100%,28rem)] rounded-full bg-brand-blue/13 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-green/11 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <p className="eyebrow text-brand-green-dark">About us</p>
              <h2 id="about-heading" className="section-heading mt-3">
                Kwikfix Services
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-slate-700 md:text-[1.0625rem]">
                <p>
                  We are a Calgary cleaning company focused on dependable service, attention to detail,
                  and results you can see and feel. We work with homeowners, renters, hosts, and
                  businesses that want their space at its best without managing every detail alone.
                </p>
                <p>
                  When you call, you talk with us directly about your property, timeline, and the level
                  of clean you expect, so service day stays predictable and professional.
                </p>
                <p>
                  From one-time deep cleans and move-in or move-out work to ongoing office or rental care,
                  we keep the process straightforward from first call to finished job.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={70}>
            <figure className="relative overflow-hidden rounded-2xl bg-gradient-navy p-8 text-white shadow-premium md:p-10">
              <div className="absolute inset-0 bg-grid-fine-light opacity-[0.08]" aria-hidden />
              <blockquote className="relative font-display text-xl font-semibold leading-snug md:text-2xl md:leading-snug">
                A clean space should feel calm, welcoming, and ready for whatever comes next.
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-3 border-t border-white/15 pt-8">
                <span className="h-10 w-1 rounded-full bg-brand-green-bright" aria-hidden />
                <div>
                  <p className="text-sm font-bold text-white">Kwikfix Services</p>
                  <p className="text-xs text-slate-400">Calgary, Alberta</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
