/**
 * Canonical site URL for metadata, sitemap, and structured data.
 * On Vercel, `VERCEL_URL` is set automatically. Set `NEXT_PUBLIC_SITE_URL`
 * when you use a custom domain so links stay canonical.
 */
export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return explicit.replace(/\/+$/, "");
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}
