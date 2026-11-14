# RujuIT

RujuIT is a global-facing digital and software agency. This repository is the home for the company website and any supporting application code.

## Repository layout

- `apps/web` — public marketing website and SEO pages.
- `apps/api` — backend/API service, added when the website needs server-side capabilities.
- `assets/brand` — approved identity assets (logos, banners, and references).
- `assets/images` — website-specific photography, illustrations, and other image assets.
- `docs` — project briefs, architecture, content, SEO, deployment, and operating notes.
- `scripts` — repeatable development, build, and maintenance scripts.
- `config` — shared project configuration.
- `.github/workflows` — CI/CD automation.

## Getting started

1. Review `docs/PROJECT_OVERVIEW.md` and `docs/ASSET_GUIDE.md`.
2. Create the frontend inside `apps/web` (recommended: Next.js + TypeScript for SEO-friendly public pages).
3. Add `apps/api` only when you need server-side features such as contact-form processing, CRM integration, authentication, or a database.
4. Keep brand originals under `assets/brand`; reference them from the website rather than duplicating them.

## Notes

Do not commit secrets, API keys, private customer data, or production credentials. Use environment variables and an untracked local `.env.local` file for development secrets.
# rujuit
