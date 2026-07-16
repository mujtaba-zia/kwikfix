"use client";

import { useId, useState } from "react";
import { Section } from "./Section";
import { Sparkle } from "./Sparkle";

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
    a: "Booking is by phone only. Call us at the number on this page, tell us about your property and the service you need, and we will work with you to schedule a visit.",
  },
  {
    q: "Do I need to call to schedule?",
    a: "Yes. All scheduling happens over the phone so we can confirm details, answer your questions, and set expectations before we arrive. We do not use online forms for bookings.",
  },
];

function PlusMinus({ open }: { open: boolean }) {
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-200 ${
        open
          ? "border-brand-green/60 bg-brand-green/10 text-brand-green-dark"
          : "border-slate-200 text-slate-500 group-hover/faq:border-brand-blue/40 group-hover/faq:text-brand-blue"
      }`}
      aria-hidden
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M5 12h14" />
        {!open && <path d="M12 5v14" />}
      </svg>
    </span>
  );
}

export function FAQSection() {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      id="faq"
      className="bg-brand-mist/40 py-16 md:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center gap-2 eyebrow text-brand-green-dark">
            <Sparkle className="h-3 w-3 text-brand-green" />
            FAQ
          </p>
          <h2 id="faq-heading" className="section-heading mt-3">
            Common questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Quick answers about services and booking. Call us if you need more detail.
          </p>
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-2 shadow-soft md:mt-12 md:p-3">
          <div className="divide-y divide-slate-100">
            {faqs.map((item, index) => {
              const panelId = `${baseId}-panel-${index}`;
              const buttonId = `${baseId}-button-${index}`;
              const isOpen = openIndex === index;

              return (
                <div key={item.q}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      className="group/faq flex w-full items-center justify-between gap-4 rounded-2xl px-4 py-4 text-left font-display text-base font-semibold leading-snug text-slate-900 transition-colors duration-200 hover:text-brand-blue md:px-5 md:py-5 md:text-lg"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                    >
                      {item.q}
                      <PlusMinus open={isOpen} />
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
                      <p className="max-w-prose px-4 pb-5 pr-14 text-[0.9375rem] leading-relaxed text-slate-600 md:px-5 md:pb-6">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
