# Deployment

The site is a standalone Next.js (App Router) app deployed on **Vercel**.

## 1. GitHub repo setup

1. Create a new **empty** GitHub repository (e.g. `genii/genii-website`).
2. From the project root (`genii-website/`):

   ```bash
   git init
   git add .
   git commit -m "Initial Genii website"
   git branch -M main
   git remote add origin git@github.com:<org>/genii-website.git
   git push -u origin main
   ```

3. `node_modules`, `.next` and `.env*` are already ignored via `.gitignore`.

## 2. Vercel project setup

1. In Vercel, **Add New → Project** and import the GitHub repo.
2. Vercel auto-detects the framework — confirm the settings below.

## 3. Root directory rules

- The repository root **is** the app root (`package.json`, `next.config.ts` and
  `src/` are at the top level). This is a self-contained project — **not** a
  monorepo.
- **Root Directory:** leave as the repository root (`./`). Do not point it at a
  subfolder.

## 4. Build & install settings

| Setting | Value |
| --- | --- |
| Framework Preset | **Next.js** |
| Install Command | `pnpm install` |
| Build Command | `pnpm build` (or leave as Vercel default `next build`) |
| Output Directory | **leave blank** (Next.js managed) |
| Node.js version | 20.x or later |

`pnpm-lock.yaml` is committed, so Vercel uses pnpm automatically.

> Do **not** add a `vercel.json` unless a specific override is required. The
> defaults above are sufficient.

## 5. Environment variable management

Set these in **Vercel → Project → Settings → Environment Variables** once Genii
confirms values (see `TRACKING_PLAN.md`). All are optional until integrations go
live.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 measurement ID (public). |
| `LEAD_DESTINATION_EMAIL` | Where lead-form enquiries are delivered. |
| `CRM_API_URL` / `CRM_API_KEY` | CRM integration (if used instead of email). |
| `EMAIL_PROVIDER_API_KEY` | Transactional email provider key. |

- Prefix browser-exposed values with `NEXT_PUBLIC_`.
- Keep secrets (API keys) **without** the `NEXT_PUBLIC_` prefix so they stay
  server-only.
- For local development, copy values into a `.env.local` file (git-ignored).

## 6. How to redeploy

- **Automatic:** push to `main` → Vercel builds and deploys production. Pushing
  any other branch or opening a PR creates a **Preview** deployment with its own
  URL.
- **Manual (dashboard):** Vercel → Deployments → pick a build → **Redeploy**.
- **Manual (CLI):**

  ```bash
  pnpm dlx vercel        # preview deploy
  pnpm dlx vercel --prod # production deploy
  ```

## Local development

```bash
pnpm install
pnpm dev     # http://localhost:3000
pnpm build   # production build (run before pushing)
```
