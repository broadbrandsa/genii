# Genii Website

A standalone marketing website for **Genii** (Genii Analytics) — AI-powered
quality and root-cause intelligence for contact centres.

Built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4** and
**shadcn UI** primitives. Fully self-contained — no monorepo, no external
folders. Deployed on **Vercel**.

## Pages

- `/` — Homepage (demand-led: creates demand and routes buyers)
- `/products` — Product page (the full Core → Indicate → Connect → Ultra journey,
  Discover, Managed Services and the detailed feature comparison)

## Getting started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build    # production build
pnpm lint     # eslint
```

## Where things live

| Path | What |
| --- | --- |
| `src/app` | Routes, root layout (fonts + metadata), global theme (`globals.css`) |
| `src/content` | **Editable copy & data** (`site.ts`, `home.ts`, `products.ts`) |
| `src/components/sections` | Page sections (`home/`, `product/`) |
| `src/components/shared` | Brand primitives (logo, CTA button, Intelligence Layer visual) |
| `src/components/layout` | Site header + footer |
| `src/components/ui` | shadcn primitives |
| `public/images` | Brand assets (Genii logo) |
| `docs/` | Project documentation |

To change copy, edit the typed objects in `src/content/*` — no need to touch the
section components.

## Documentation

See [`docs/`](./docs):

- [`PROJECT_OVERVIEW.md`](./docs/PROJECT_OVERVIEW.md)
- [`ASSUMPTIONS.md`](./docs/ASSUMPTIONS.md)
- [`SCOPE.md`](./docs/SCOPE.md)
- [`STRUCTURE.md`](./docs/STRUCTURE.md)
- [`TRACKING_PLAN.md`](./docs/TRACKING_PLAN.md)
- [`DEPLOYMENT.md`](./docs/DEPLOYMENT.md)

## Brand

- Palette: red `#ED1B2F`, orange `#F37035`, gold `#FBA939`, pink `#EF3D67`,
  purple `#A7288F`, charcoal `#2D2D2D`.
- Type: **Poppins** (headings) + **Inter** (body).
- Use the real Genii logo (`public/images/genii-logo.svg`) — do not recreate,
  stretch or recolour it. White / soft light-grey backgrounds dominate; warm
  accents are used selectively.
