"use client";

import { useId, useState } from "react";
import { Section } from "./Section";

type FaqItem = { q: string; a: string };

const faqs: FaqItem[] = [
  {
    q: "What types of cleaning services do you offer?",
    a: "We offer post-construction cleaning, move-in and move-out cleaning, carpet cleaning, deep cleaning, Airbnb turnover cleaning, and office cleaning throughout Calgary. Call us to describe your space and we will recommend the best fit.",
  },
  {
    q: "Do you provide move-in and move-out cleaning?",
    a: "Yes. We provide both move-in and move-out cleaning to help you transition smoothly, whether you are settling into a new home or preparing a property for the next resident. Phone us to discuss timing and scope.",
  },
  {
    q: "Do you offer office cleaning in Calgary?",
    a: "Yes. We clean professional workspaces including reception areas, meeting rooms, and shared spaces. Call to talk through your building layout and how often you would like service.",
  },
  {
    q: "How do I book a cleaning service?",
    a: "Booking is by phone only. Call either of our numbers on this page, tell us about your property and the service you need, and we will work with you to schedule a visit.",
  },
  {
    q: "Do I need to call to schedule?",
    a: "Yes. All scheduling happens over the phone so we can confirm details, answer your questions, and set expectations before we arrive. We do not use online forms for bookings.",
  },
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-brand-green-dark transition-transform duration-200 motion-safe:group-hover/faq:scale-110 motion-safe:group-hover/faq:text-brand-blue ${open ? "rotate-180" : ""}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function FAQSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-brand-soft opacity-[0.28]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-brand-navy/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-0 bottom-0 h-52 w-52 rounded-full bg-brand-blue/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="eyebrow text-brand-green-dark">FAQ</p>
          <h2 id="faq-heading" className="section-heading mt-3">
            Common questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Quick answers about services and booking. Call us if you need more detail.
          </p>
        </div>

        <div className="mt-10 space-y-2 md:mt-12">
          {faqs.map((item, index) => {
            const panelId = `${baseId}-panel-${index}`;
            const buttonId = `${baseId}-button-${index}`;
            const isOpen = openIndex === index;

            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                  isOpen
                    ? "border-brand-blue/45 bg-brand-mist/50 shadow-sm"
                    : "border-slate-200/90 bg-white hover:border-brand-blue/30 hover:bg-slate-50/80"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="group/faq flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-[0.9375rem] font-bold leading-snug text-slate-900 transition-colors duration-200 hover:text-brand-blue-dark md:px-6 md:py-[1.125rem] md:text-base"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    {item.q}
                    <Chevron open={isOpen} />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="border-t border-slate-100 px-5 pb-4 pt-3 text-sm leading-relaxed text-slate-600 md:px-6 md:pb-5 md:text-[0.9375rem]">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
