<p align="center">
  <img src="assets/brand/logos/RujuIT-Premium-Software-Logo.png" alt="RujuIT — Engineering Digital Possibilities" width="280" />
</p>

<h1 align="center">RujuIT</h1>
<p align="center">Engineering Digital Possibilities.</p>

<p align="center">
  <a href="https://rujuit.vercel.app/">Live website</a>
  ·
  <a href="docs/PROJECT_OVERVIEW.md">Project overview & screenshots</a>
</p>

RujuIT is a software engineering agency creating digital products, connected systems, and practical automation. The website presents the agency, explains its services, introduces the team and engineering approach, showcases independent projects, and helps prospective clients start a conversation.

## What RujuIT builds

- **Full-stack web development** — websites, SaaS products, and web applications.
- **Cloud engineering** — infrastructure, deployments, and operational foundations.
- **API integration** — secure connections between business platforms and services.
- **MCP server development** — scoped tools and resources for MCP-compatible AI clients.
- **AI & workflow automation** — practical assistants and automation for repeatable processes.
- **Custom software solutions** — purpose-built systems for specific business requirements.

## Website

The website is available in English and Bengali:

- English: [rujuit.vercel.app/en](https://rujuit.vercel.app/en)
- বাংলা: [rujuit.vercel.app/bn](https://rujuit.vercel.app/bn)

| Section            | Route                          | What it covers                                                                         |
| ------------------ | ------------------------------ | -------------------------------------------------------------------------------------- |
| Home               | `/{locale}`                    | Agency introduction, capabilities, delivery process, principles, FAQs, and contact CTA |
| Services           | `/{locale}/services`           | Overview of the six engineering services                                               |
| Service details    | `/{locale}/services/{service}` | Outcomes, approach, technologies, and typical deliverables                             |
| Selected work      | `/{locale}/work`               | Independent software and engineering projects                                          |
| About              | `/{locale}/about`              | Co-founders, principles, and collaboration approach                                    |
| Contact            | `/{locale}/contact`            | Project inquiry and discovery-call options                                             |
| Policies & Privacy | `/{locale}/policies`           | Engagement, payment, delivery, and working policies                                    |

## How we work

The website presents a four-stage delivery approach:

1. **Discover** — understand the goal, users, constraints, and expected outcome.
2. **Architect** — agree on scope, technical direction, and a delivery plan.
3. **Engineer** — build, integrate, and validate in reviewable steps.
4. **Evolve** — launch, learn, and improve as requirements change.

## Technology

The public website is built with:

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Radix UI components
- Resend for email delivery integration

The frontend supports locale-aware English and Bengali routes and uses page-level metadata for search and social sharing.

## Repository layout

```text
RujuIT/
├── assets/
│   └── brand/
│       └── logos/       # Approved brand logo files
├── docs/
│   ├── screenshots/     # Full-page captures of the live website
│   └── *.md             # Project and development documentation
└── frontend/
    ├── app/             # Locale-aware Next.js routes
    ├── components/      # Shared interface components
    ├── features/        # Page sections, content, and feature logic
    ├── public/          # Static assets served by the website
    └── messages/        # English and Bengali content
```

## Run locally

Requirements: Node.js and pnpm.

```bash
cd frontend
pnpm install
pnpm dev
```

Open the local URL printed by Next.js. To create a production build:

```bash
pnpm build
pnpm start
```

## Environment configuration

Create `.env.local` in `frontend/` using `.env.example` as the reference. Configure the Resend API key and sender/recipient addresses for email functionality. Set the public site URL, booking URL, optional contact email, and social profile URLs as needed.

Keep real credentials in local or deployment environment variables. Never commit `.env.local`, production secrets, or API keys.

## Useful checks

Run these from `frontend/`:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Documentation

- [Project overview, routes, services, and live screenshots](docs/PROJECT_OVERVIEW.md)
- [Development setup and commands](docs/DEVELOPMENT.md)
- [Brand asset guide](docs/ASSET_GUIDE.md)
- [Brand asset inventory](docs/ASSET_INVENTORY.md)
- [SEO checklist](docs/SEO_CHECKLIST.md)
