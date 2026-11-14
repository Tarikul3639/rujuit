// Service listing and individual capability page copy.
export const servicesCopy = {
  index: {
    eyebrow: "CAPABILITIES / WHAT WE BUILD",
    title: "Engineering for the next stage of your business.",
    description:
      "Choose a capability or bring us a complex challenge. We connect product thinking with dependable engineering to build software that works in the real world.",
    detail: "Explore capability",
    outcome: "What this enables",
    deliverables: "Typical deliverables",
    approach: "How we approach it",
    inquiry: "Discuss your project",
    all: "All services",
  },
  items: {
    "web-development": {
      title: "Full-stack web development",
      short:
        "Websites, SaaS products and web applications engineered around your users and business goals.",
      intro:
        "Build a digital product that feels clear to use and dependable behind the scenes.",
      body: "From customer-facing websites to complex SaaS platforms, we design and engineer full-stack experiences with performance, accessibility and maintainability in mind. We work across the interface, application logic, data layer and integrations so the whole product feels cohesive.",
      outcomes: [
        "A fast, accessible experience across devices",
        "A maintainable application architecture",
        "A product foundation ready for iteration and growth",
      ],
      deliverables: [
        "Product and interface implementation",
        "Frontend and backend application development",
        "Authentication, roles and data workflows",
        "API integration, testing and deployment support",
      ],
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "NestJS",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Redux Toolkit",
        "RTK Query",
      ],
    },
    "cloud-engineering": {
      title: "Cloud engineering",
      short:
        "Infrastructure, deployment pipelines and operational foundations built for reliability and growth.",
      intro:
        "Give your product an infrastructure foundation you can understand and operate.",
      body: "We help shape cloud environments and delivery workflows that support your product's needs. The focus is on repeatable deployments, sensible security boundaries, observability and infrastructure that can evolve without becoming difficult to manage.",
      outcomes: [
        "More predictable releases and deployments",
        "Clearer infrastructure and environment boundaries",
        "Operational foundations that can scale with demand",
      ],
      deliverables: [
        "Cloud architecture and environment setup",
        "CI/CD pipeline design",
        "Container and application deployment",
        "Monitoring, logging and operational documentation",
      ],
      stack: ["Vercel", "Docker", "Git", "GitHub", "pnpm"],
    },
    "api-integration": {
      title: "API integration",
      short:
        "Secure, resilient connections between the platforms and services your business relies on.",
      intro: "Make your tools and platforms work as one connected system.",
      body: "We design integrations that move information between services reliably. That includes API design, third-party connections, authentication, webhooks, data mapping and failure handling—so integrations are easier to maintain and less likely to become hidden operational risks.",
      outcomes: [
        "Connected business workflows",
        "Consistent and validated data exchange",
        "Safer handling of credentials and service failures",
      ],
      deliverables: [
        "REST API design and implementation",
        "Third-party service integrations",
        "OAuth and webhook workflows",
        "Validation, retries and integration testing",
      ],
      stack: [
        "REST API",
        "Node.js",
        "NestJS",
        "Express.js",
        "TypeScript",
        "OAuth 2.0",
        "Zod",
        "PostgreSQL",
        "MongoDB",
        "Prisma",
        "Redis",
      ],
    },
    "mcp-development": {
      title: "MCP server development",
      short:
        "Purpose-built MCP servers and tools that connect AI clients to your data and workflows.",
      intro:
        "Turn your systems into useful, permission-aware tools for AI assistants.",
      body: "We build Model Context Protocol servers that expose carefully scoped tools and resources to compatible AI clients. We pay attention to authorization, user consent, tool boundaries, validation and operational visibility so the connection is useful without giving away unnecessary access.",
      outcomes: [
        "AI clients can interact with selected business capabilities",
        "Explicit access and authorization boundaries",
        "A maintainable tool layer between models and systems",
      ],
      deliverables: [
        "MCP server and tool design",
        "OAuth and client authorization flows",
        "Remote transport and deployment",
        "Tool validation, permissions and documentation",
      ],
      stack: [
        "MCP",
        "NestJS",
        "Node.js",
        "TypeScript",
        "OAuth 2.0",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Zod",
      ],
    },
    "ai-automation": {
      title: "AI & workflow automation",
      short:
        "Practical AI assistants and workflow automation for repetitive, information-heavy processes.",
      intro:
        "Use AI where it makes a workflow more useful—not just more complicated.",
      body: "We identify focused opportunities to reduce repetitive work, connect information and support team decisions. Solutions can combine AI models, structured tools, APIs and human review so automation remains understandable and controlled.",
      outcomes: [
        "Less manual coordination across routine workflows",
        "Faster access to relevant information",
        "Human oversight where decisions need it",
      ],
      deliverables: [
        "Workflow discovery and automation design",
        "AI assistant and agent integrations",
        "Tool calling and structured outputs",
        "Review steps, logging and handover documentation",
      ],
      stack: [
        "MCP",
        "TypeScript",
        "Node.js",
        "NestJS",
        "REST API",
        "OAuth 2.0",
        "Zod",
        "Playwright",
      ],
    },
    "custom-software": {
      title: "Custom software solutions",
      short:
        "Purpose-built platforms and software systems for needs off-the-shelf products cannot meet.",
      intro: "Build around the way your business actually works.",
      body: "When generic tools create friction or important workflows do not fit existing products, we help shape a custom system. We translate requirements into a clear architecture, then deliver the core workflows, integrations and interfaces in practical stages.",
      outcomes: [
        "Software aligned to real operational requirements",
        "A coherent system instead of disconnected tools",
        "A foundation your team can extend over time",
      ],
      deliverables: [
        "Requirements and technical discovery",
        "System architecture and data modeling",
        "Custom web application development",
        "Integration, testing and technical documentation",
      ],
      stack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "NestJS",
        "Express.js",
        "MongoDB",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "Redux Toolkit",
        "RTK Query",
      ],
    },
  },
} as const
