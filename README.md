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

## Deployment (GitHub Actions → Vercel)

Production deploys run on every push to **`main`** via [`.github/workflows/deploy-vercel.yml`](.github/workflows/deploy-vercel.yml). The workflow checks out **Git LFS** files, runs `npm ci` + `npm run lint`, then builds and deploys with the Vercel CLI.

### One-time Vercel setup

1. Import the repo in [Vercel](https://vercel.com/new) **or** create an empty project and link it locally with `npx vercel link` (generates `.vercel/project.json`; that folder stays gitignored).
2. In the Vercel project, add the same variables as in **Environment variables** (Production).
3. Create a [Vercel token](https://vercel.com/account/tokens).
4. From `.vercel/project.json` after linking (or from the project / team settings in the dashboard), copy **`orgId`** → `VERCEL_ORG_ID` and **`projectId`** → `VERCEL_PROJECT_ID`.

### GitHub repository secrets

In the repo: **Settings → Secrets and variables → Actions → New repository secret**:

| Secret                 | Value                                      |
| ---------------------- | ------------------------------------------ |
| `VERCEL_TOKEN`         | Token from Vercel account settings         |
| `VERCEL_ORG_ID`        | `orgId` from linked project                |
| `VERCEL_PROJECT_ID`    | `projectId` from linked project            |

After secrets are set, push to `main` (or run the workflow manually under **Actions → Deploy to Vercel → Run workflow**).

### Branches

The workflow triggers on **`main` only**. To deploy from another branch, either merge into `main` or edit `deploy-vercel.yml` under `on.push.branches`.

### Git LFS on Vercel

This repo stores large videos with Git LFS. The workflow uses `actions/checkout` with `lfs: true` so builds receive real files.
