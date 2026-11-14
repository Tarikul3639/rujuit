import type { Locale } from "@/lib/i18n"

export const faqContent = {
  en: [
    {
      question: "What does RujuIt do?",
      answer:
        "RujuIt is a software engineering agency. We build full-stack web applications, cloud infrastructure, API integrations, MCP servers, AI automations and custom software for businesses.",
    },
    {
      question: "What types of businesses can work with RujuIt?",
      answer:
        "We work with startups, growing companies, SaaS teams and established businesses that need a reliable engineering partner for digital products, integrations or infrastructure.",
    },
    {
      question: "Can RujuIt build AI agents and MCP servers?",
      answer:
        "Yes. We develop MCP servers, AI tool integrations and workflow automations that connect assistants and agents with business data, APIs and internal systems.",
    },
    {
      question: "Can you integrate with our existing tools and APIs?",
      answer:
        "Yes. We can connect existing platforms through REST APIs, payment gateways, webhooks and custom integrations, with attention to security and maintainability.",
    },
    {
      question: "How do we get started?",
      answer:
        "Start with a discovery call or send a project inquiry. We will learn about your goals, discuss technical options and outline a practical next step.",
    },
  ],
  bn: [
    {
      question: "RujuIt কী ধরনের কাজ করে?",
      answer:
        "RujuIt একটি সফটওয়্যার ইঞ্জিনিয়ারিং এজেন্সি। আমরা ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন, ক্লাউড ইনফ্রাস্ট্রাকচার, API ইন্টিগ্রেশন, MCP সার্ভার, AI অটোমেশন এবং কাস্টম সফটওয়্যার তৈরি করি।",
    },
    {
      question: "কোন ধরনের ব্যবসা RujuIt-এর সাথে কাজ করতে পারে?",
      answer:
        "স্টার্টআপ, দ্রুত বেড়ে ওঠা প্রতিষ্ঠান, SaaS টিম এবং প্রতিষ্ঠিত ব্যবসা—যাদের ডিজিটাল পণ্য, ইন্টিগ্রেশন বা ইনফ্রাস্ট্রাকচারের জন্য নির্ভরযোগ্য ইঞ্জিনিয়ারিং পার্টনার প্রয়োজন।",
    },
    {
      question: "RujuIt কি AI agent এবং MCP server তৈরি করে?",
      answer:
        "হ্যাঁ। আমরা MCP server, AI tool integration এবং workflow automation তৈরি করি, যা assistant ও agent-কে ব্যবসার ডেটা, API এবং অভ্যন্তরীণ সিস্টেমের সাথে যুক্ত করে।",
    },
    {
      question: "আমাদের বিদ্যমান টুল ও API-এর সাথে কি ইন্টিগ্রেশন করা যাবে?",
      answer:
        "হ্যাঁ। REST API, payment gateway, webhook এবং custom integration-এর মাধ্যমে বিদ্যমান প্ল্যাটফর্মগুলোকে যুক্ত করা যায়। নিরাপত্তা ও রক্ষণাবেক্ষণযোগ্যতার দিকেও গুরুত্ব দিই।",
    },
    {
      question: "কাজ শুরু করার উপায় কী?",
      answer:
        "একটি discovery call বুক করুন অথবা project inquiry পাঠান। আমরা আপনার লক্ষ্য বুঝে প্রযুক্তিগত বিকল্প এবং পরবর্তী বাস্তবসম্মত ধাপ নিয়ে আলোচনা করব।",
    },
  ],
} satisfies Record<Locale, { question: string; answer: string }[]>