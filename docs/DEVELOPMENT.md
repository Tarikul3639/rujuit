# Development Notes

## Frontend

The public website lives in `frontend/` and is built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

From the repository root:

```bash
cd frontend
pnpm install
pnpm dev
```

## Environment

Create `frontend/.env.local` from `frontend/.env.example`. The example file lists the configuration used by the site:

- Resend API key and contact email sender/recipient settings.
- Public website origin and booking URL.
- Optional public contact email.
- Optional LinkedIn, Facebook, WhatsApp, and Instagram URLs.

Use real credentials only in local or deployment environment variables. Do not commit `.env.local` or production secrets.

## Useful checks

Run from `frontend/`:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Project directories

- `frontend/app/` — locale-aware routes and page metadata.
- `frontend/features/` — page and feature components, content, and data.
- `frontend/components/` — shared interface components.
- `frontend/messages/` — English and Bengali content.
- `frontend/public/` — files served by the website.
- `assets/brand/` — original brand assets.
- `docs/screenshots/` — full-page captures of the live website.
