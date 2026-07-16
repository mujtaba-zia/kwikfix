import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  as?: "section" | "div";
  "aria-labelledby"?: string;
};

export function Section({
  id,
  children,
  className = "",
  as: Tag = "section",
  "aria-labelledby": labelledBy,
}: SectionProps) {
  return (
    <Tag id={id} aria-labelledby={labelledBy} className={`scroll-mt-24 ${className}`}>
      {children}
    </Tag>
  );
}
