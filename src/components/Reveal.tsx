"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
};

export function Reveal({ children, className = "", delayMs = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: number | undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        timeoutId = window.setTimeout(() => setVisible(true), delayMs);
      },
      { threshold: 0.06, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, [delayMs]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:duration-0 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
