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
  "group inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 motion-reduce:transition-none";

const variants: Record<NonNullable<CallButtonProps["variant"]>, string> = {
  primary:
    "bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blue-deep text-white shadow-btn-primary hover:shadow-lift hover:-translate-y-0.5 hover:brightness-[1.05] active:translate-y-0 active:brightness-100",
  secondary:
    "bg-gradient-to-br from-brand-green via-brand-green to-brand-green-dark text-white shadow-btn-green hover:shadow-glow hover:-translate-y-0.5 hover:brightness-[1.04] active:translate-y-0",
  outline:
    "border-2 border-brand-blue/90 bg-white/95 text-brand-blue shadow-sm hover:bg-brand-blue/8 hover:border-brand-blue hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
  outlineInverse:
    "border-2 border-white/90 text-white bg-white/5 backdrop-blur-sm hover:bg-white/15 hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-brand-blue hover:bg-brand-blue/10 active:scale-[0.98]",
};

const sizes: Record<NonNullable<CallButtonProps["size"]>, string> = {
  sm: "px-4 py-2.5 text-sm",
  md: "px-5 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-lg min-h-[3.35rem]",
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
