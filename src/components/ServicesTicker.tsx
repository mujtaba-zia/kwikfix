import { Sparkle } from "./Sparkle";

const items = [
  "Post-Construction",
  "Move-In & Move-Out",
  "Carpet Cleaning",
  "Deep Cleaning",
  "Airbnb Turnovers",
  "Office Cleaning",
  "Calgary, Alberta",
];

function TickerRow() {
  return (
    <ul className="flex shrink-0 items-center">
      {items.map((label) => (
        <li
          key={label}
          className="flex items-center gap-6 pr-6 font-display text-sm font-bold uppercase tracking-[0.18em] text-brand-navy"
        >
          {label}
          <Sparkle className="h-3.5 w-3.5 text-brand-navy/60" />
        </li>
      ))}
    </ul>
  );
}

/** Decorative scrolling strip of services. Content is repeated in the Services section for screen readers. */
export function ServicesTicker() {
  return (
    <div className="border-y border-brand-navy/10 bg-brand-green" aria-hidden role="presentation">
      <div className="flex overflow-hidden py-3.5">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          <TickerRow />
          <TickerRow />
        </div>
      </div>
    </div>
  );
}
