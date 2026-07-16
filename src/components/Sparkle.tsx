type SparkleProps = {
  className?: string;
};

/** Four-point sparkle used as the site's recurring "clean" motif. Decorative only. */
export function Sparkle({ className = "h-4 w-4" }: SparkleProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0z" />
    </svg>
  );
}
