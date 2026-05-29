import Image from "next/image";

type LogoProps = {
  className?: string;
  priority?: boolean;
  height?: number;
  /** Passed to next/image for responsive loading (optional). */
  sizes?: string;
};

/** Brand wordmark (`public/logo.png`, tracked in git). */
const LOGO_WIDTH = 2550;
const LOGO_HEIGHT = 831;

export function Logo({
  className = "",
  priority = false,
  height = 44,
  sizes = "(max-width: 768px) 200px, 280px",
}: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Kwikfix Services"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      className={`w-auto object-contain object-left ${className}`}
      style={{ height: `${height}px`, width: "auto", maxWidth: "100%" }}
      sizes={sizes}
    />
  );
}
