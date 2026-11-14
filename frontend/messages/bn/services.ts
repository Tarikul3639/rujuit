// Service listing and individual capability page copy.
export const servicesCopy = {
  index: {
    eyebrow: "দক্ষতা / আমরা যা তৈরি করি",
    title: "আপনার ব্যবসার পরবর্তী ধাপের জন্য ইঞ্জিনিয়ারিং।",
    description:
      "একটি নির্দিষ্ট capability বেছে নিন, অথবা জটিল কোনো চ্যালেঞ্জ নিয়ে আসুন। Product thinking ও নির্ভরযোগ্য engineering একসাথে কাজে লাগিয়ে বাস্তব ব্যবহারের উপযোগী software তৈরি করি।",
    detail: "বিস্তারিত দেখুন",
    outcome: "যে সুবিধা তৈরি হয়",
    deliverables: "সাধারণত যা তৈরি করি",
    approach: "আমাদের কাজের পদ্ধতি",
    inquiry: "আপনার প্রজেক্ট নিয়ে কথা বলুন",
    all: "সব সার্ভিস",
  },
  items: {
    "web-development": {
      title: "ফুল-স্ট্যাক ওয়েব ডেভেলপমেন্ট",
      short:
        "ব্যবহারকারী ও ব্যবসার লক্ষ্য অনুযায়ী website, SaaS product এবং web application।",
      intro:
        "এমন digital product তৈরি করুন যা ব্যবহার করা সহজ এবং ভেতরে নির্ভরযোগ্য।",
      body: "Customer-facing website থেকে শুরু করে জটিল SaaS platform পর্যন্ত—performance, accessibility ও maintainability মাথায় রেখে full-stack experience তৈরি করি। Interface, application logic, data layer এবং integration একসাথে বিবেচনা করি, যেন পুরো product সমন্বিতভাবে কাজ করে।",
      outcomes: [
        "বিভিন্ন device-এ দ্রুত ও ব্যবহারবান্ধব experience",
        "সহজে রক্ষণাবেক্ষণযোগ্য application architecture",
        "পরবর্তী উন্নয়ন ও প্রবৃদ্ধির উপযোগী foundation",
      ],
      deliverables: [
        "Product ও interface implementation",
        "Frontend ও backend application development",
        "Authentication, role এবং data workflow",
        "API integration, testing ও deployment support",
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
      title: "ক্লাউড ইঞ্জিনিয়ারিং",
      short:
        "নির্ভরযোগ্যতা ও প্রবৃদ্ধির জন্য infrastructure, deployment pipeline এবং operational foundation।",
      intro:
        "আপনার product-এর জন্য এমন infrastructure তৈরি করুন যা বোঝা ও পরিচালনা করা সহজ।",
      body: "আপনার product-এর প্রয়োজন অনুযায়ী cloud environment ও delivery workflow পরিকল্পনা করি। লক্ষ্য থাকে repeatable deployment, যুক্তিসংগত security boundary, observability এবং সময়ের সাথে উন্নত করা যায় এমন infrastructure।",
      outcomes: [
        "আরও পূর্বানুমানযোগ্য release ও deployment",
        "পরিষ্কার infrastructure ও environment boundary",
        "চাহিদা বাড়ার সাথে মানিয়ে নেওয়ার operational foundation",
      ],
      deliverables: [
        "Cloud architecture ও environment setup",
        "CI/CD pipeline design",
        "Container ও application deployment",
        "Monitoring, logging ও operational documentation",
      ],
      stack: ["Vercel", "Docker", "Git", "GitHub", "pnpm"],
    },
    "api-integration": {
      title: "API ইন্টিগ্রেশন",
      short:
        "ব্যবসার গুরুত্বপূর্ণ platform ও service-এর মধ্যে নিরাপদ ও নির্ভরযোগ্য সংযোগ।",
      intro:
        "আপনার ব্যবহৃত tool ও platform-গুলোকে একটি connected system হিসেবে কাজ করান।",
      body: "বিভিন্ন service-এর মধ্যে নির্ভরযোগ্যভাবে তথ্য আদান-প্রদানের integration তৈরি করি। এর মধ্যে API design, third-party connection, authentication, webhook, data mapping এবং failure handling অন্তর্ভুক্ত—যাতে integration রক্ষণাবেক্ষণ সহজ হয়।",
      outcomes: [
        "সংযুক্ত business workflow",
        "সামঞ্জস্যপূর্ণ ও যাচাইকৃত data exchange",
        "Credential ও service failure-এর নিরাপদ handling",
      ],
      deliverables: [
        "REST API design ও implementation",
        "Third-party service integration",
        "OAuth ও webhook workflow",
        "Validation, retry ও integration testing",
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
      title: "MCP সার্ভার ডেভেলপমেন্ট",
      short:
        "AI client-কে আপনার data ও workflow-এর সাথে যুক্ত করার জন্য নির্দিষ্ট MCP server ও tool।",
      intro:
        "আপনার system-কে AI assistant-এর জন্য কার্যকর ও permission-aware tool-এ রূপ দিন।",
      body: "MCP-compatible AI client-এর জন্য নির্দিষ্ট scope-এর tool ও resource প্রকাশ করে Model Context Protocol server তৈরি করি। Authorization, user consent, tool boundary, validation এবং operational visibility গুরুত্ব দিয়ে বিবেচনা করি।",
      outcomes: [
        "AI client নির্বাচিত business capability ব্যবহার করতে পারে",
        "স্পষ্ট access ও authorization boundary",
        "Model ও system-এর মাঝে রক্ষণাবেক্ষণযোগ্য tool layer",
      ],
      deliverables: [
        "MCP server ও tool design",
        "OAuth ও client authorization flow",
        "Remote transport ও deployment",
        "Tool validation, permission ও documentation",
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
      title: "AI ও workflow অটোমেশন",
      short:
        "পুনরাবৃত্তিমূলক ও তথ্যনির্ভর কাজের জন্য বাস্তবসম্মত AI assistant এবং automation।",
      intro: "যেখানে AI workflow-কে কার্যকর করে, সেখানেই AI ব্যবহার করুন।",
      body: "পুনরাবৃত্তিমূলক কাজ কমানো, তথ্য সংযুক্ত করা এবং team decision support-এর উপযোগী সুযোগ খুঁজে বের করি। Solution-এ AI model, structured tool, API এবং human review একসাথে থাকতে পারে, যেন automation নিয়ন্ত্রণযোগ্য থাকে।",
      outcomes: [
        "নিয়মিত workflow-এ manual coordination কমানো",
        "প্রাসঙ্গিক তথ্য দ্রুত পাওয়া",
        "প্রয়োজনীয় সিদ্ধান্তে human oversight",
      ],
      deliverables: [
        "Workflow discovery ও automation design",
        "AI assistant ও agent integration",
        "Tool calling ও structured output",
        "Review step, logging ও handover documentation",
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
      title: "কাস্টম সফটওয়্যার সলিউশন",
      short:
        "প্রচলিত product-এর সীমাবদ্ধতার বাইরে নিজস্ব platform ও software system।",
      intro: "আপনার ব্যবসা যেভাবে চলে, software-টিও সেভাবে তৈরি করুন।",
      body: "সাধারণ tool দিয়ে গুরুত্বপূর্ণ workflow সামলানো কঠিন হলে নিজস্ব system পরিকল্পনা ও তৈরি করতে সাহায্য করি। Requirement-কে পরিষ্কার architecture-এ রূপ দিয়ে ধাপে ধাপে মূল workflow, integration এবং interface তৈরি করি।",
      outcomes: [
        "বাস্তব operational requirement অনুযায়ী software",
        "বিচ্ছিন্ন tool-এর বদলে সমন্বিত system",
        "ভবিষ্যতে team-এর সম্প্রসারণযোগ্য foundation",
      ],
      deliverables: [
        "Requirement ও technical discovery",
        "System architecture ও data modeling",
        "Custom web application development",
        "Integration, testing ও technical documentation",
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
