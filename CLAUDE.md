# Swoop Website — Claude Context

## Project Overview
Landing page for **Swoop** (formerly Thumo), a quick-commerce delivery platform.
Two locale routes share identical component structure but differ in copy and localised data.

| Route | Locale | Country   |
|-------|--------|-----------|
| `/`   | NG     | Nigeria   |
| `/sz` | SZ     | Eswatini  |

---

## Tech Stack
- **Framework:** React 19 + Vite 8
- **Language:** TypeScript
- **Styling:** Tailwind CSS v3 (mobile-first)
- **Router:** react-router-dom v6
- **Icons:** lucide-react
- **Font:** DM Sans (loaded via Google Fonts in `index.html`)

---

## Design System Tokens (`tailwind.config.js`)

| Token                  | Hex       | Usage                          |
|------------------------|-----------|--------------------------------|
| `brand-dark`           | `#05002F` | Page background, dark sections |
| `brand-primary`        | `#3924E0` | Primary CTA                    |
| `food` / `food-card`   | `#A136FF` | Food vertical accent           |
| `grocery` / `grocery-card` | `#009A49` | Grocery vertical accent    |
| `pharmacy` / `pharmacy-card` | `#316AFF` | Pharmacy vertical accent  |

Navbar background: `#4d36ff`
Announcement strip background: `#1f138f`

---

## Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── AnnouncementStrip.tsx   # Non-sticky top bar (locale-specific)
│   │   ├── Navbar.tsx              # Sticky navbar with country dropdown
│   │   ├── Footer.tsx
│   │   └── Layout.tsx              # Page shell: strip → navbar → main → footer
│   ├── sections/                   # One file per page section (Hero, Features…)
│   └── ui/                         # Primitive UI elements (Button, Card…)
├── config/
│   └── contentConfig.ts            # ALL locale copy lives here; pass as props
├── pages/
│   ├── NigeriaPage.tsx             # Route "/"
│   └── EswatiniPage.tsx            # Route "/sz"
└── hooks/                          # Custom hooks
```

### Golden rule
**No copy in components.** All text, image paths, and locale-specific data live in
`src/config/contentConfig.ts` and are passed as props. Components are purely structural.

---

## Figma Source

File key: `95NNyjndVg3cnMBXaIQCOE`

| Component            | Node ID   |
|----------------------|-----------|
| Announcement strip   | `136-314` (rebrand) / `82-438` (launch) |
| Navbar               | `16-2306` |

---

## Static Assets (`/public/assets/`)

| File                  | Contents                        |
|-----------------------|---------------------------------|
| `swoop-icon-nav.png`  | Swoop lightning-bolt icon       |
| `swoop-wordmark-nav.png` | "Swoop" logotype in navbar   |
| `swoop-wordmark.png`  | Swoop wordmark (strip rebrand)  |
| `thumo-icon.png`      | Thumo logo (strip rebrand)      |
| `flag-ng.png`         | Nigeria flag                    |
| `flag-sz.png`         | Eswatini flag                   |
| `apple-icon.png`      | Apple App Store icon            |
| `google-play-icon.png`| Google Play icon                |
| `caret-down.png`      | Dropdown caret                  |
| `partner-kfc.png`            | KFC partner logo                |
| `partner-pizza-inn.png`      | Pizza Inn partner logo          |
| `partner-panarottis.png`     | Panarottis partner logo         |
| `partner-picknpay-liquor.png`| Pick n Pay Liquor partner logo  |
| `galito.svg`                 | Galito's partner logo           |
| `partner-chicken-inn.png`    | Chicken Inn partner logo        |
| `vc-long-journey.png`        | Long Journey VC logo            |
| `vc-variant.png`             | Variant VC logo                 |
| `vc-versionone.png`          | VersionOne VC logo              |
| `vc-dune.png`                | Dune VC logo                    |
| `vc-soma-capital.png`        | Soma Capital VC logo            |
| `Mockup-ng.png`              | Nigeria app mockup (hero)       |
| `Mockup-sz.png`              | Eswatini app mockup (hero)      |
| `hand-mockup-ng.png`         | Nigeria hand-held mockup (download section) |
| `hand-mockup-sz.png`         | Eswatini hand-held mockup (download section) |

---

## Commands

```bash
npm run dev      # Dev server
npm run build    # Production build (tsc + vite)
npm run preview  # Preview production build
```

---

## Key Implementation Notes

- **AnnouncementStrip** uses `strip.variant`: `'rebrand'` (SZ) shows "THUMO is now Swoop";
  `'launch'` (NG) shows the launch announcement text from `strip.launchText`.
- **Navbar** is `sticky top-0 z-50`. The strip is NOT sticky.
- Country dropdown redirects: NG → `/`, SZ → `/sz`.
- All new sections should be added to `src/components/sections/` and registered
  in the appropriate page file, receiving `content` props from `contentConfig.ts`.

---

## Asset Rules

- **All images must be downloaded and placed in `/public/assets/`** — never reference external URLs
  (e.g. Figma MCP asset URLs, CDN links) directly in component code. Figma asset URLs expire after
  7 days. Download with `curl -sL <url> -o public/assets/<filename>` immediately after fetching
  from the Figma MCP server, then update the `src` to `/assets/<filename>`.
- Name asset files descriptively: `partner-kfc.png`, `hero-lagos.png`, etc.
- Update the Static Assets table in this file whenever new assets are added.

---

## Scroll Animations

Every section should animate in when it enters the viewport. Use the **Intersection Observer API**
(no external libraries) via a shared `useInView` hook in `src/hooks/useInView.ts`.

**Convention:**
- Elements start hidden/offset (e.g. `opacity-0 translate-y-8`) and transition to visible
  (`opacity-100 translate-y-0`) when the section scrolls into view.
- Use `transition-all duration-700 ease-out` as the base transition.
- Stagger child elements with incremental `delay` values (`delay-100`, `delay-200`, …) for
  headings → body text → cards/images.
- Apply the hook at the section level: `const [ref, inView] = useInView();` then conditionally
  apply the visible class based on `inView`.
