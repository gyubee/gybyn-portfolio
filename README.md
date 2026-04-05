# gybyn.com/portfolio

Personal portfolio site built with [Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Requirements

- **Node.js** 20+ (CI uses 22)
- **npm** 10+
- **Git** with [Git LFS](https://git-lfs.com) installed (large `.mp4` assets are tracked with LFS)

## Local development

Clone the repository. If Git LFS is installed, large media files are fetched automatically:

```bash
git clone https://github.com/gyubee/gybyn-portfolio.git
cd gybyn-portfolio
git lfs pull   # if media files are missing
npm ci
npm run dev
```

Open [http://localhost:3000/portfolio](http://localhost:3000/portfolio).

### Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Dev server (Turbopack)   |
| `npm run build`| Production build         |
| `npm run start`| Run production build     |
| `npm run lint` | ESLint (`next lint`)     |

## Environment variables

Create `.env.local` in the project root (never commit it). Used by the contact API route and any `NEXT_PUBLIC_*` values.

| Variable              | Required | Description                                      |
| --------------------- | -------- | ------------------------------------------------ |
| `RESEND_API_KEY`      | For email | Resend API key (`re_...`)                     |
| `RESEND_FROM_EMAIL`   | For email | Verified sender: `hi@yourdomain.com` or ASCII `Name <hi@yourdomain.com>` |
| `CONTACT_TO_EMAIL`    | For email | Inbox that receives form submissions (or use `RESEND_TO_EMAIL`) |

If these are missing, `POST /api/contact` returns `503` and the UI falls back to a `mailto:` draft.

In **`.env.local`**, quote values that contain spaces, e.g. `RESEND_FROM_EMAIL="Portfolio <hi@yourdomain.com>"`. In the **Vercel dashboard**, enter the same text **without** wrapping quotes (the field stores the value as-is).

## Deployment (Vercel Git)

**Production** is deployed by **Vercel’s Git integration**: connect this repository, set the **Production branch** to `main`, and push. No duplicate CLI deploy runs in GitHub Actions.

### One-time Vercel setup

1. Import the repo in [Vercel](https://vercel.com/new) (or link with `npx vercel link`; `.vercel/` stays gitignored).
2. Under **Settings → Environment Variables**, add the same keys as in **Environment variables** (at least for **Production**).
3. After changing variables, trigger a **new** deployment (push to `main` or **Deployments → Redeploy** on a normal Git-built deployment).

### GitHub Actions (CI only)

[`.github/workflows/ci.yml`](.github/workflows/ci.yml) runs on pushes and PRs to **`main`**: checkout with **Git LFS**, `npm ci`, `npm run lint`, `npm run build`. It does **not** deploy to Vercel. No Vercel-related GitHub secrets are required for this path.

### Git LFS on Vercel

Large `.mp4` files use Git LFS. After a Git-based deploy, open the live site and confirm media loads. If pointers or broken videos appear, Vercel’s checkout may not be pulling LFS objects—use the **fallback** below.

### Fallback: prebuilt deploy from Actions only

1. **Vercel** → **Settings** → **Git** → **Ignored Build Step** → set the command to `exit 0` (exit code **0** means “skip this build,” so Git pushes no longer produce a Vercel build).
2. In [`.github/workflows/deploy-vercel-prebuilt.yml`](.github/workflows/deploy-vercel-prebuilt.yml), under `on:`, add a **`push`** trigger for `main` (same shape as `ci.yml`), or run **Actions → Deploy to Vercel (prebuilt) → Run workflow** manually when you need a release.
3. Add GitHub **repository secrets**: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID` (from [Vercel tokens](https://vercel.com/account/tokens) and the project/team settings).

Prebuilt deployments still need a **new** workflow run after editing Vercel env vars; dashboard **Redeploy** on those deployments may not refresh variables ([Vercel note](https://vercel.com/docs/deployments/troubleshoot-a-build#prebuilt-deployments)).
