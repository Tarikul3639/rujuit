// Homepage-specific copy; feature pages own their detailed copy.
export const homeDictionary = {
  explore: {
    eyebrow: "EXPLORE RUJUIT",
    title: "Find the right direction for your next move.",
    description: "Explore each area in depth on its dedicated page.",
    servicesDescription:
      "Web, cloud, APIs, MCP and AI—explore the full range of our engineering capabilities.",
    servicesLink: "Explore our services",
    workDescription:
      "Explore selected product builds and hands-on engineering work.",
    workLink: "View the work",
    aboutDescription:
      "Learn about our principles, engineering mindset and how we collaborate.",
    aboutLink: "Meet the team",
    aboutCta: "Learn more about us",
    contactDescription:
      "Start a conversation about your goals and technical challenges.",
    workEyebrow: "SELECTED BUILDS",
    studioEyebrow: "THE STUDIO",
    buildEyebrow: "LET'S BUILD",
    buildTitle: "Turn a good idea into something real.",
    contactEyebrow: "LET'S TALK",
  },
  principles: {
    eyebrow: "HOW WE THINK",
    delivery: "RUJUIT / DELIVERY",
  },
  booking: {
    eyebrow: "LET'S TALK",
    title: "Let’s talk about what you’re building next.",
  },
  hero: {
    eyebrow: "Your next step starts here.",
    titleStart: "We engineer",
    titleEnd: "for what's next.",
    rotating: ["digital products", "connected systems", "AI workflows"],
    description:
      "From ambitious ideas to dependable digital products, we bring web, cloud, APIs and AI together to help your business move forward.",
    primary: "Explore our services",
    primaryMobile: "Services",
    secondary: "Book a discovery call",
    secondaryMobile: "Book a Call",
    note: "Thoughtful engineering. Technology that moves business forward.",
    scroll: "SCROLL TO EXPLORE",
    orbit: ["WEB PLATFORMS", "CLOUD SYSTEMS", "AI & AUTOMATION"],
  },
  services: {
    eyebrow: "WHAT WE ENGINEER",
    title: "Technology that works together.",
    description:
      "From the interface your customers use to the infrastructure powering your operations, we build connected systems designed for real-world growth.",
    items: [
      {
        number: "01",
        title: "Full-stack web development",
        description:
          "Fast, accessible websites, SaaS products and web applications built around your users and business goals.",
        tags: ["Next.js", "React", "TypeScript"],
      },
      {
        number: "02",
        title: "Cloud engineering",
        description:
          "Reliable infrastructure, deployment pipelines and performance foundations that grow with your product.",
        tags: ["Infrastructure", "DevOps", "Scale"],
      },
      {
        number: "03",
        title: "API integration",
        description:
          "Secure connections between the tools, platforms and services your business depends on.",
        tags: ["REST APIs", "Payments", "Automation"],
      },
      {
        number: "04",
        title: "MCP server development",
        description:
          "Connect AI assistants and agents to your data, services and workflows through purposeful MCP tools.",
        tags: ["MCP", "AI tools", "Connectors"],
      },
      {
        number: "05",
        title: "AI & workflow automation",
        description:
          "Practical AI agents and automations that reduce repetitive work and help teams move with clarity.",
        tags: ["AI agents", "Workflows", "Integrations"],
      },
      {
        number: "06",
        title: "Custom software solutions",
        description:
          "Purpose-built business platforms and software architecture for challenges off-the-shelf tools cannot solve.",
        tags: ["SaaS", "Platforms", "Architecture"],
      },
    ],
  },
  approach: {
    eyebrow: "HOW WE THINK",
    title: "Good engineering is felt in every detail.",
    description:
      "We focus on the fundamentals that make technology dependable: thoughtful architecture, clear communication and a commitment to quality.",
    pillars: [
      [
        "Built with intent",
        "Every decision starts with the problem, the people using the product and the outcome that matters.",
      ],
      [
        "Ready to scale",
        "Maintainable code and considered architecture give your product room to evolve.",
      ],
      [
        "Connected by design",
        "We bring interfaces, services, data and automation into one coherent system.",
      ],
    ],
    visualLabel: "ENGINEERING PRINCIPLES",
    visualTitle: "Clarity in. Confidence out.",
    visualItems: [
      "Understand the challenge",
      "Design the right system",
      "Build with precision",
      "Improve continuously",
    ],
  },
  process: {
    eyebrow: "A CLEAR WAY FORWARD",
    title: "From first conversation to lasting capability.",
    steps: [
      [
        "01",
        "Discover",
        "Understand your goals, users, constraints and what success should look like.",
      ],
      [
        "02",
        "Architect",
        "Shape the right technical approach, scope and delivery plan before building.",
      ],
      [
        "03",
        "Engineer",
        "Build, integrate and validate with care, transparency and regular feedback.",
      ],
      [
        "04",
        "Evolve",
        "Launch with confidence and keep improving as your business grows.",
      ],
    ],
  },
  work: {
    eyebrow: "THE RUJUIT DIFFERENCE",
    title: "A partner who thinks beyond the launch.",
    description:
      "The right technology should make your next step easier — not create another problem to manage.",
    points: [
      "Engineering-first thinking, not one-size-fits-all templates.",
      "Scalable foundations and maintainable implementation.",
      "Clear communication and practical technical guidance.",
      "A connected view of web, cloud, APIs and AI.",
    ],
    callout: "Technology should create momentum.",
    calloutDescription:
      "We help turn complex requirements into dependable digital products.",
  },
  faq: {
    eyebrow: "COMMON QUESTIONS",
    title: "A few things worth knowing.",
    description:
      "Clear answers about our capabilities, the technologies we work with and how to start a conversation.",
    contactLink: "Still have a question? Talk to us",
  },
  contact: {
    eyebrow: "LET'S BUILD WHAT'S NEXT",
    title: "Have a challenge worth solving?",
    description:
      "Tell us what you are working on. We will help you explore the right technical direction.",
    name: "Your name",
    email: "Work email",
    service: "What do you need help with?",
    servicePlaceholder: "Choose a service",
    message: "A little about your project",
    send: "Prepare inquiry",
    sending: "Sending...",
    sent: "Sent successfully",
    privacy:
      "Your inquiry will be sent securely to our email. We will reply to the address you provide.",
    options: [
      "Web development",
      "Cloud engineering",
      "API integration",
      "MCP & AI",
      "Custom software",
      "Not sure yet",
    ],
    success:
      "Thank you. Your inquiry and confirmation email have been sent successfully. We will be in touch soon.",
    confirmationPending:
      "Your inquiry reached RujuIT, but we could not send the confirmation email. Please check your inbox later or contact us directly.",
    deliveryError:
      "We could not send your inquiry. Please try again in a moment or contact us directly.",
    error: "Please complete the required fields.",
    direct: "Prefer a conversation?",
    book: "Schedule a call",
  },
} as const
