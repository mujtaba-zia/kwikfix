import type { Metadata, Viewport } from "next";
import { DM_Sans, Outfit } from "next/font/google";
import "./globals.css";
import { COMPANY, PHONES } from "@/lib/phones";
import { getSiteUrl } from "@/lib/site-url";

const siteUrl = getSiteUrl();

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CleaningService",
  "@id": `${siteUrl}/#business`,
  name: COMPANY.name,
  url: siteUrl,
  telephone: PHONES.map((p) => p.href.replace(/^tel:/, "")),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: {
    "@type": "City",
    name: "Calgary",
  },
  description:
    "Professional residential and commercial cleaning in Calgary, Alberta — post-construction, deep cleans, move-in/out, carpet, Airbnb, and office cleaning.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#34499E",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kwikfix Services | Professional Cleaning Services in Calgary",
    template: "%s | Kwikfix Services",
  },
  description:
    "Kwikfix Services offers professional post-construction, move-in & move-out, carpet, deep, Airbnb, and office cleaning in Calgary, Alberta. Call now to book.",
  keywords: [
    "cleaning services Calgary",
    "Calgary cleaning company",
    "move out cleaning Calgary",
    "office cleaning Calgary",
    "Airbnb cleaning Calgary",
    "Kwikfix Services",
  ],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  openGraph: {
    title: "Kwikfix Services | Professional Cleaning in Calgary, Alberta",
    description:
      "Dependable residential and commercial cleaning in Calgary. Call to book post-construction, deep, move-in/out, carpet, Airbnb, and office cleaning.",
    locale: "en_CA",
    type: "website",
    url: siteUrl,
    siteName: COMPANY.name,
    images: [
      {
        url: "/footer-logo.png",
        width: 1536,
        height: 1024,
        alt: `${COMPANY.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwikfix Services | Professional Cleaning in Calgary, Alberta",
    description:
      "Dependable residential and commercial cleaning in Calgary. Post-construction, deep, move-in/out, carpet, Airbnb, and office cleaning.",
    images: ["/footer-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo.png", type: "image/png", sizes: "any" }],
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${dmSans.variable} ${outfit.variable}`}>
      <body className="font-sans min-h-screen bg-page text-slate-800 antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
