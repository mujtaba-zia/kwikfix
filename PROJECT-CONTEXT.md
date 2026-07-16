# Kwikfix Services – Project context (for new chats)

This document summarizes the website project, requirements, and decisions made during development. **Read this first** when starting a new chat so work stays aligned with what already exists.

---

## What this is

A **marketing / lead-generation website** for **Kwikfix Services**, a cleaning company in **Calgary, Alberta**. The site is **phone-first**: every important action should drive a **phone call**. There is **no** contact form, email CTA, or chat widget.

---

## Tech stack

| Layer | Choice |
|--------|--------|
| Framework | **Next.js 15** (App Router) |
| Language | **TypeScript** |
| Styling | **Tailwind CSS** |
| Fonts | **DM Sans** (body), **Outfit** (display) via `next/font` |
| Structure | `src/app`, `src/components`, `src/lib` |

**Commands**

- `npm run dev` – local dev (Turbopack)
- `npm run build` – production build
- `npm run lint` – ESLint

---

## Business facts (source of truth)

| Item | Value |
|------|--------|
| Company name | **Kwikfix Services** |
| Location | **Calgary, Alberta** (also “serving Calgary and surrounding areas”) |
| Phone | **825-749-2749** → `tel:+18257492749` |
| Booking | **Phone only** – no online forms |

**Services** (as shown on the site)

1. Post-Construction Cleaning  
2. **Move-In & Move-Out Cleaning** (single combined service card, not two separate cards)  
3. Carpet Cleaning  
4. Deep Cleaning  
5. Airbnb Cleaning  
6. Office Cleaning  

---

## Branding

- **Primary blue:** `#34499E`  
- **Accent green:** `#65C3A6`  
- **Navy / deep tones:** used for quote blocks, CTA card, footer, and text accents (`tailwind.config.ts` → `brand.*`).

**Logo**

- **Active web asset:** `public/logo.png`  
- **Source:** Exported from **`Kwikfix Logo No Color Bar.pdf`** (first page, transparent PNG, high-res).  
- Original marketing files may also exist in the repo root: `Kwikfix Logo.jpg`, `Kwikfix Services logo design.png`, the PDF above.  
- **Footer:** `public/footer-logo.png` (full “Kwikfix Services” mark) – used in `SiteFooter.tsx`.  
- **Regenerating PNG from PDF** (requires `pip install pymupdf`):

```bash
python -c "import fitz; doc=fitz.open(r'Kwikfix Logo No Color Bar.pdf'); p=doc[0]; p.get_pixmap(matrix=fitz.Matrix(3,3), alpha=True).save(r'public/logo.png')"
```

- **`Logo` component:** `src/components/Logo.tsx` – uses `/logo.png`, intrinsic ratio **2550×831**, `height` prop controls display size.

---

## Design direction (current: full “best of the best” rebuild, v3)

The site was rebuilt from scratch (June 2026) keeping all business facts and copy substance. The client rejected dark full-bleed “bookend” backgrounds: the site stays **light and fresh**, with dark surfaces only as **contained panels**.

1. **Sparkle motif:** `src/components/Sparkle.tsx` (four-point star) is the recurring “clean” accent: eyebrow labels, hero trust row, ticker separators, floating hero/CTA decorations (always `aria-hidden`, decorative only).  
2. **Floating pill header:** `HeaderNav` is a **sticky floating rounded-full bar** (`top-3`, inset `px-3`, `max-w-5xl`, backdrop blur, logo ~38px). Mobile menu is a **dropdown card** (`fixed inset-x-3 top-[76px] z-[45] rounded-3xl`) with a dimmed backdrop (z-40) that closes on tap. Sections use `scroll-mt-24`.  
3. **Hero:** centered layout: location pill → display headline (`text-[2.75rem]` → `lg:text-7xl`, blue→teal gradient on “cleaning”) → subcopy → **two phone pill CTAs** → sparkle-separated trust row → a 3-card highlights row. Background: white → ice → mist wash, three soft glows, floating sparkles. No logo in the hero.  
4. **Services ticker:** `ServicesTicker` is a **green marquee strip** (`animate-marquee`, duplicated row, `aria-hidden`) listing services in navy uppercase with sparkle separators, between Hero and Services.  
5. **Services:** asymmetric header (heading left, blurb right), jump chips (white bordered pills → fill blue on hover), and a **bento grid**: alternating `lg:col-span-2` spans, ghost index numbers (“01”), icon tile fills blue on hover. The old navy “book by phone” band was removed (ProcessSection + FinalCTA cover it).  
6. **ProcessSection (new, `#process`):** “Booked in one phone call”, 3 numbered step cards (Call us / Plan the visit / Service day) with giant ghost numerals; copy derived from existing site copy, phone links inline.  
7. **About:** copy left; right is an **ice-tint quote panel** (`bg-brand-ice/60`, `rounded-3xl`) with an oversized ghost quotation mark, navy text, sparkle, and green rule attribution.  
8. **Why Us:** editorial split: sticky intro column left (`lg:sticky lg:top-28`), right a 2-column list of 5 points with **top-border rows** (no cards), green icon chips.  
9. **Reviews:** single honest “Reviews coming soon” panel (stars, ghost quote mark, call link). **No fake quotes.** FAQ: white **rounded panel** accordion on mist, plus/minus circle toggles, single-open state, full aria wiring.  
10. **FinalCTA:** white section containing a **contained rounded navy panel** (`rounded-[2.5rem]`, `bg-gradient-panel`, light grid + green glow + sparkles) where the **primary phone number is giant display type** (`text-4xl` → `md:text-6xl`, clickable), secondary number below. Not a full-bleed dark wall.  
11. **Footer:** brand navy, 3 columns (logo chip / quick links incl. How It Works / phones), green hairline top, and an **oversized ghost “kwikfix” wordmark** (`text-[19vw]`, `text-white/[0.04]`, `aria-hidden`) at the bottom.  
12. **Buttons:** `CallButton` = flat **pill** buttons: primary blue/white, secondary **green with navy text**, outline / outlineInverse / ghost. No gradient fills or glow shadows. `FloatingCallButton` matches secondary.  
13. **Copy:** **No em dashes (—)** site-wide. **Do not reintroduce em dashes** unless the user asks. No fake reviews/claims/addresses.  
14. **Backgrounds:** `bg-page` is clean near-white; sections set explicit `bg-white` / `bg-brand-mist/40`. No blur blobs or dot patterns on light sections; `bg-grid-fine-light` only on the dark CTA panel.  
15. **Tailwind tokens:** `backgroundImage`: only **`gradient-panel`** (navy panel). Shadows: **`soft`**, **`card`**, **`lift`**. Animations: `fade-up`, `fade-in`, **`float`** (sparkles), **`marquee`** (ticker). Old `gradient-blue/navy/brand*` and `shadow-elegant/premium/glow/btn-*` are gone; do not reference them.  
16. **Motion:** `Reveal` on scroll, `motion-safe:` micro-interactions, and the global `prefers-reduced-motion` override disables marquee/float/transitions.

**Tone:** Professional cleaning company – trustworthy, not gimmicky; **no** fake reviews, licenses, insured claims, certifications, or street addresses unless the client supplies them.

---

## SEO / metadata

- **Title (direction):** `Kwikfix Services | Professional Cleaning Services in Calgary`  
- **Meta description:** Mentions post-construction, move-in & move-out, carpet, deep, Airbnb, office cleaning in Calgary; call to book.  
- Implemented in **`src/app/layout.tsx`** (`metadata` + `openGraph`).

---

## Important files

| Path | Role |
|------|------|
| `src/app/page.tsx` | Composes homepage sections in order |
| `src/app/layout.tsx` | Fonts, `metadata`, `body` with `bg-page` |
| `src/app/globals.css` | Base styles, `bg-page`, `bg-grid-fine-light`, typography utilities |
| `tailwind.config.ts` | Brand colors, shadows, `gradient-panel`, `float` / `marquee` animations |
| `src/lib/phones.ts` | Company name, location, phone list + `tel:` hrefs |
| `src/components/Logo.tsx` | Next/Image logo (`/logo.png`) |
| `src/components/Sparkle.tsx` | Four-point sparkle motif (decorative) |
| `src/components/HeaderNav.tsx` | Floating pill header + dropdown card mobile menu |
| `src/components/Hero.tsx` | Centered hero, dual phone CTAs, highlights row, sparkles |
| `src/components/ServicesTicker.tsx` | Green marquee strip of services (decorative) |
| `src/components/ServicesGrid.tsx` | Jump chips → anchors, bento cards with ghost indices |
| `src/components/ProcessSection.tsx` | “Booked in one phone call” 3-step cards (`#process`) |
| `src/components/AboutSection.tsx` | About copy + ice-tint quote panel |
| `src/components/WhyChooseUs.tsx` | Sticky intro + editorial 2-col value rows |
| `src/components/TestimonialsSection.tsx` | Single honest “reviews coming soon” panel (no fake quotes) |
| `src/components/FAQSection.tsx` | White panel accordion on mist, plus/minus toggles |
| `src/components/FinalCTA.tsx` | Contained navy panel, giant clickable phone numbers |
| `src/components/SiteFooter.tsx` | Navy footer, 3 columns, ghost “kwikfix” wordmark |
| `src/components/FloatingCallButton.tsx` | Mobile floating call (green pill) |
| `src/components/Reveal.tsx` | Scroll reveal; respects `prefers-reduced-motion` |
| `src/components/CallButton.tsx` | Flat pill buttons: primary / secondary / outline / outlineInverse / ghost |
| `public/logo.png` | Navbar logo |
| `public/footer-logo.png` | Footer logo |

---

## Functional rules (do not break without explicit ask)

- Every phone number: **`tel:`** link.  
- **Floating “Call Now”** on small screens (hidden `md+`).  
- **Smooth scroll** for in-page anchors; honor **reduced motion** in CSS.  
- **Accessibility:** skip link, focus styles, semantic sections, FAQ `aria-expanded` / `aria-controls`.  
- **Service cards** use stable **`id`s** for pill links (`service-*` slugs from titles).

---

## Known constraints / failed attempts (for future you)

- **PDF → PNG in Node** via `pdf-img-convert` failed on this machine (native **canvas** build / VS). **PyMuPDF** (`pip install pymupdf`) was used successfully to produce `public/logo.png`.

---

## Section order on homepage

1. `HeaderNav`  
2. `Hero`  
3. `ServicesTicker`  
4. `ServicesGrid`  
5. `ProcessSection`  
6. `AboutSection`  
7. `WhyChooseUs`  
8. `TestimonialsSection`  
9. `FAQSection`  
10. `FinalCTA`  
11. `SiteFooter`  
12. `FloatingCallButton`  

*(There is no `TrustValues` or other extra section beyond this list in the current `page.tsx`.)*

---

## If you continue this project in a new chat

Suggested first message: *“Read `PROJECT-CONTEXT.md` and help me with [task].”*  

When you **add or remove** a homepage section, component, logo asset, or design rule, **update this file** in the same change so the next session stays accurate.

---

*Last updated: full from-scratch v3 rebuild; floating pill header, centered sparkle hero, green services ticker, bento services, new ProcessSection, ice quote panel, editorial Why Us, FAQ panel accordion, contained navy CTA panel with giant phone numbers, ghost wordmark footer.*
