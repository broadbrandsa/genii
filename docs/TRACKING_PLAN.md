# Tracking Plan

All tracking is currently a **placeholder**. No analytics or tags fire until
Genii supplies IDs and confirms a consent/compliance approach (POPIA / GDPR).

## Google Analytics (placeholder)

- **Status:** not installed.
- **Plan:** GA4 via `@next/third-parties` (`GoogleAnalytics` component) or a
  gtag snippet in `src/app/layout.tsx`.
- **Env var:** `NEXT_PUBLIC_GA_MEASUREMENT_ID` (e.g. `G-XXXXXXXXXX`).
- Only load after cookie consent where required.

## Event tracking (placeholder)

Recommended custom events once analytics is live:

| Event | Trigger |
| --- | --- |
| `cta_click` | Any primary/secondary CTA (Book a Demo, Talk to an Expert). |
| `demo_request` | "Request a Demo / Free POV" click. |
| `discover_click` | "Explore Discover" / "Start with Discover". |
| `product_card_view` | Product tier card enters viewport (Core/Indicate/Connect/Ultra). |
| `comparison_view` | "Where Other Providers Stop" section viewed. |
| `video_play` | Explainer video play. |
| `faq_open` | FAQ accordion item opened. |

Implementation note: expose a small `track(event, params)` helper so section
components stay analytics-agnostic.

## Form submission tracking (placeholder)

- The lead form (`Final CTA`) currently has **no back-end**. It must be wired to
  the destination Genii confirms — **an email address or the CRM**.
- Options: a Next.js Route Handler (`src/app/api/lead/route.ts`) that emails via
  a provider (Resend / SendGrid) or posts to the CRM API; or a hosted form
  provider.
- Fire `lead_submit` (success) and `lead_error` (failure) events.
- **Env vars (placeholder):** `LEAD_DESTINATION_EMAIL`, `CRM_API_URL`,
  `CRM_API_KEY`, `EMAIL_PROVIDER_API_KEY`.

## Vercel Analytics (option)

- **Status:** available, not enabled.
- **Plan:** add `@vercel/analytics` (`<Analytics />`) and
  `@vercel/speed-insights` (`<SpeedInsights />`) in the root layout. Enable
  Web Analytics + Speed Insights in the Vercel project dashboard. Privacy-first,
  no cookie banner required.

## Conversion goals (placeholder)

Primary conversions to configure once analytics + form routing are live:

1. **Demo requested** (`demo_request` / `lead_submit`) — primary.
2. **Talk to an Expert** enquiry.
3. **Discover enquiry** (`discover_click`).
4. Secondary / micro: explainer video play, product-page deep scroll, FAQ
   engagement.
