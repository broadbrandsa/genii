# Project Overview

## What this is

A brand-new, standalone marketing website for **Genii** (Genii Analytics) — an
AI-powered quality and root-cause intelligence platform for contact centres.

The site is **demand-led**: the homepage creates demand and routes buyers, and
the product page owns the detailed product journey (Core → Indicate → Connect →
Ultra), Discover, Managed Services and the feature comparison.

### Core positioning (must not drift)

> Genii takes businesses from **guessing to knowing** what truly drives
> performance from the customer interactions they already have.

Genii is **not** positioned as "just QA", "AI scoring" or "dashboards". The real
strength is that Genii gets to the **why**, **quantifies** what is driving
performance, and helps clients **know what to fix next**.

## Target audience

- Contact-centre and CX leaders (Heads of QA, Operations, CX, Customer Care).
- Commercial leaders in sales, collections, retentions and service.
- Executives (COO / Exco) who need evidence-led decisions on cost, risk, revenue
  and CX.
- Primary geographies: South Africa and broader African / global enterprise
  contact-centre operators (client logos include MTN, Wave Mobile Inc., Old
  Mutual, TIH and Foodhub).

## Product architecture referenced on the site

| Product | Role |
| --- | --- |
| **Core** | Digitises QA and manages quality outputs (R150 / agent / month). |
| **Gen-AI Indicate** | Pre-configured AI QA layer (custom pricing). |
| **Gen-AI Connect** | Performance segmentation and action (custom pricing). |
| **Gen-AI Ultra** | Multi-layer root-cause intelligence + business impact (custom pricing). |
| **Genii Discover** | Standalone insight product — know where to start before deploying. |
| **Managed Services** | Human QA support / AI exception management (separate from Discover). |

## Deployment environment

- **Framework:** Next.js (App Router) + TypeScript.
- **Styling:** Tailwind CSS v4 + shadcn UI primitives.
- **Hosting:** Vercel (framework preset: Next.js). See `DEPLOYMENT.md`.
- **Source control:** GitHub (repo per `DEPLOYMENT.md`).

## Owner

- **Client / brand owner:** Genii (COO leading the website direction).
- **Delivery / build:** DSG (agency) — primary contact `mikee@dsg.co.za`.
- **Design source of truth:** `Genii_Homepage_Design_Brief_DRAFT_17062026` and
  `Genii_Product_Page_Positioning_Document_FINAL_16062026`.

## Open decisions (owner to confirm)

1. **Platform question** — whether to rebuild on this new Next.js stack or update
   the existing WordPress site. If WordPress is updated, admin / staging access
   is required.
2. **Lead routing** — where demo and lead-form enquiries should be delivered
   (an email address or the CRM). Currently the lead form is a UI placeholder;
   see `TRACKING_PLAN.md`.
