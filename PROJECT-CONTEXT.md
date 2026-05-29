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
| Phone 1 | **587-703-2816** → `tel:+15877032816` |
| Phone 2 | **587-582-4428** → `tel:+15875824428` |
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

## Design direction (how it evolved in chat)

1. **Initial build:** Premium gradients, strong CTAs, `Reveal` on scroll.  
2. **Iterations:** Richer color and motion; transparent PNG hero logo; compact navbar.  
3. **Copy:** **No em dashes (—)** site-wide; use commas, periods, colons, etc. **Do not reintroduce em dashes** unless the user asks.  
4. **Navbar:** Compact height (~64px mobile / ~68px md), logo **~46px** tall; **3-column grid** (logo | nav | actions); mobile hamburger + full-screen menu (`top-[64px]`, `calc(100dvh-64px)`).  
5. **Full-page background:** The **`body`** uses **`bg-page`** (`globals.css`): a balanced wash of **blue + green + subtle depth**, not a single white-to-navy vertical scroll gradient.  
6. **Section backgrounds:** Sections are mostly **transparent** on that canvas, with **`gradient-brand-soft`**, dots/grid, and **soft blurs** (blue / green / navy) so **brand color appears in every block**, not concentrated at the top or bottom.  
7. **Navy usage:** **Hero** sidebar card footer strip, **About** pull-quote card, **Services** bottom “book by phone” band, **FinalCTA** rounded **`bg-gradient-navy`** card (not a full-bleed dark runway). **SiteFooter** stays dark for closure.  
8. **Tailwind:** There are **no** `bg-flow-*` section gradients anymore (removed); use **`gradient-navy`**, **`gradient-brand`**, **`gradient-brand-soft`**, **`gradient-surface`** for components only.  
9. **Icon motion:** Key icons (service cards, hero sidebar checks, why-us tiles, FAQ chevrons, nav menu, call buttons, floating CTA, testimonials stars) use subtle **`motion-safe:`** hover scale/rotate so **`prefers-reduced-motion`** stays respected.

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
| `src/app/globals.css` | Base styles, `bg-page`, dots/grid utilities, typography utilities |
| `tailwind.config.ts` | Brand colors, shadows, gradients (`gradient-*`), animations |
| `src/lib/phones.ts` | Company name, location, phone list + `tel:` hrefs |
| `src/components/Logo.tsx` | Next/Image logo (`/logo.png`) |
| `src/components/HeaderNav.tsx` | Sticky header, centered nav, mobile menu |
| `src/components/Hero.tsx` | Hero + dual CTAs + highlights card |
| `src/components/ServicesGrid.tsx` | Service pills → anchors, cards, navy CTA strip |
| `src/components/AboutSection.tsx` | About copy + navy quote card |
| `src/components/WhyChooseUs.tsx` | Value props grid |
| `src/components/TestimonialsSection.tsx` | Placeholder cards (no fake quotes) |
| `src/components/FAQSection.tsx` | Accordion FAQ |
| `src/components/FinalCTA.tsx` | Navy rounded CTA card + phone buttons |
| `src/components/SiteFooter.tsx` | Footer + `/footer-logo.png` |
| `src/components/FloatingCallButton.tsx` | Mobile floating call |
| `src/components/Reveal.tsx` | Scroll reveal; respects `prefers-reduced-motion` |
| `src/components/CallButton.tsx` | Gradient primary/secondary, outline variants |
| `public/logo.png` | Navbar / hero logo |
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
3. `ServicesGrid`  
4. `AboutSection`  
5. `WhyChooseUs`  
6. `TestimonialsSection`  
7. `FAQSection`  
8. `FinalCTA`  
9. `SiteFooter`  
10. `FloatingCallButton`  

*(There is no `TrustValues`, `ProcessSection`, or other extra section in the current `page.tsx`.)*

---

## If you continue this project in a new chat

Suggested first message: *“Read `PROJECT-CONTEXT.md` and help me with [task].”*  

When you **add or remove** a homepage section, component, logo asset, or design rule, **update this file** in the same change so the next session stays accurate.

---

*Last updated: removed coverage (`ServiceAreaSection`) from homepage; icon hover interactions use `motion-safe:`; section list matches `page.tsx`.*
