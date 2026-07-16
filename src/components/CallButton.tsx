import type { ReactNode } from "react";

type CallButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "outline" | "outlineInverse" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: ReactNode;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none";

const variants: Record<NonNullable<CallButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-blue text-white shadow-sm hover:bg-brand-blue-dark hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-brand-blue",
  /* Green pill with navy text: strong contrast on both light and navy surfaces */
  secondary:
    "bg-brand-green text-brand-navy shadow-sm hover:bg-brand-green-bright hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-white",
  outline:
    "border border-slate-300 bg-white text-brand-navy shadow-sm hover:border-brand-blue hover:text-brand-blue hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-brand-blue",
  outlineInverse:
    "border border-white/30 bg-transparent text-white hover:border-white/70 hover:bg-white/10 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-white",
  ghost:
    "text-brand-blue hover:bg-brand-blue/10 active:scale-[0.98] focus-visible:outline-brand-blue",
};

const sizes: Record<NonNullable<CallButtonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-base md:text-lg",
};

export function CallButton({
  href,
  label,
  variant = "primary",
  size = "md",
  className = "",
  icon,
}: CallButtonProps) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      aria-label={`Call ${label.replace(/^Call\s+/i, "")}`}
    >
      {icon != null ? (
        <span className="inline-flex shrink-0 motion-safe:transition motion-safe:duration-200 motion-safe:ease-out motion-safe:group-hover:scale-110 motion-safe:group-hover:-rotate-6">
          {icon}
        </span>
      ) : null}
      {label}
    </a>
  );
}
