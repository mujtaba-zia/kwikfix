import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { Sparkle } from "./Sparkle";

export function AboutSection() {
  return (
    <Section
      id="about"
      className="bg-white py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <Reveal>
            <div>
              <p className="flex items-center gap-2 eyebrow text-brand-green-dark">
                <Sparkle className="h-3 w-3 text-brand-green" />
                About us
              </p>
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
            <figure className="relative overflow-hidden rounded-3xl bg-brand-ice/60 p-8 md:p-12">
              <Sparkle className="absolute right-8 top-8 h-5 w-5 text-brand-green" />
              <span
                className="pointer-events-none absolute -left-2 -top-7 font-display text-[8rem] font-extrabold leading-none text-brand-blue/10"
                aria-hidden
              >
                &ldquo;
              </span>
              <blockquote className="relative pt-10 font-display text-2xl font-semibold leading-snug text-brand-navy md:text-3xl md:leading-snug">
                A clean space should feel calm, welcoming, and ready for whatever comes next.
              </blockquote>
              <figcaption className="relative mt-8 flex items-center gap-3 border-t border-brand-navy/10 pt-7">
                <span className="h-10 w-1 rounded-full bg-brand-green" aria-hidden />
                <div>
                  <p className="text-sm font-bold text-brand-navy">Kwikfix Services</p>
                  <p className="text-xs text-slate-500">Calgary, Alberta</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
