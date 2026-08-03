# Structure

## Folder structure

```
genii-website/
├── docs/                     # Project documentation (this folder)
├── public/
│   └── images/               # Brand assets (genii-logo.svg, genii-logo.png)
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout: fonts (Poppins + Inter), metadata
│   │   ├── globals.css       # Tailwind v4 + brand theme tokens & utilities
│   │   ├── page.tsx          # Homepage (composes homepage sections)
│   │   └── products/
│   │       └── page.tsx      # Product page (composes product sections)
│   ├── components/
│   │   ├── ui/               # shadcn primitives (button, card, badge, …)
│   │   ├── layout/           # Site chrome: site-header, site-footer
│   │   ├── shared/           # Reusable brand pieces (logo, cta-pill, intelligence visual)
│   │   └── sections/         # Page sections
│   │       ├── home/         # Homepage section components
│   │       └── product/      # Product page section components
│   ├── content/              # Content data (single source of truth for copy)
│   │   ├── site.ts           # Nav, CTAs, footer, brand constants
│   │   ├── home.ts           # Homepage copy & data
│   │   └── products.ts       # Product tiers, features, FAQs, layers
│   └── lib/
│       └── utils.ts          # cn() class helper (shadcn)
```

## Section composition rules

- **One section = one component.** Each page section lives in
  `src/components/sections/<page>/` and is a self-contained, presentational
  component. Pages in `src/app` only compose sections in order.
- **No copy hard-coded in section components where it is reused or likely to
  change.** Structured copy (nav, product tiers, features, metrics, FAQs) lives
  in `src/content/*` so it can be edited without touching layout code.
- **Brand primitives are shared.** The logo, gradient CTA "pill" button and the
  Genii Intelligence Layer visual live in `src/components/shared/` and are reused
  across pages.
- **shadcn primitives are not edited per-section.** Styling variations are done
  via Tailwind classes and the brand tokens in `globals.css`, not by forking the
  `ui/` components.
- **Brand integrity:** use the real logo asset, keep white / soft light-grey as
  the dominant background, and use warm red/orange/gold/pink/purple accents
  selectively (never heavy orange blocks). Gradients and glow are applied only
  inside visual elements via the `.genii-gradient*` / `.genii-glow` utilities.

## Content management approach

- **Current:** file-based. All editable copy and data live in `src/content/*.ts`
  as typed objects/arrays. This keeps the site fully self-contained with no
  external dependencies and gives type-safety on content shape.
- **Future option:** the `content/` layer is intentionally isolated so it can be
  swapped for a headless CMS (e.g. Sanity, Contentful) later without rewriting
  the section components — the components consume typed data, not a specific
  source.
