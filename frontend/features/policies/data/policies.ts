import type { Locale } from "@/lib/i18n"

const enPolicies = {
  eyebrow: "RUJUIT / POLICIES",
  title: "Policies & working principles",
  description:
    "Clear expectations help every project run with confidence. These policies outline how RujuIt works with clients, collaborators and referral partners.",
  updated: "Last updated: November 14, 2026",
  noteTitle: "A working draft",
  note: "This page is a general business-policy draft for RujuIt. Project-specific agreements, signed proposals and applicable law take precedence where they differ. Please review and customize it before relying on it as a legal document.",
  contents: "ON THIS PAGE",
  sections: [
    {
      id: "engagement",
      number: "01",
      title: "Project engagement & scope",
      intro:
        "Every engagement should begin with a shared understanding of the work.",
      paragraphs: [
        "Before work starts, RujuIt and the client should agree in writing on the project objectives, deliverables, scope, timeline, responsibilities and commercial terms. This may be recorded in a proposal, statement of work, email confirmation or service agreement.",
        "Work outside the agreed scope—including additional features, integrations, pages or substantial revisions—may require a revised estimate, timeline and written approval. We will communicate the impact before proceeding.",
      ],
    },
    {
      id: "payments",
      number: "02",
      title: "Fees, invoices & payments",
      intro: "Payment terms are confirmed for each project before kickoff.",
      paragraphs: [
        "Unless a signed agreement says otherwise, projects may use an advance payment followed by milestone-based or scheduled invoices. Work can begin after the agreed kickoff payment has cleared.",
        "Invoices are due by the date stated on the invoice. If a payment is overdue, RujuIt may pause work after giving reasonable notice. Any applicable taxes, bank charges or currency-conversion costs will be handled as stated in the project agreement.",
      ],
    },
    {
      id: "delivery",
      number: "03",
      title: "Timeline, review & delivery",
      intro: "Delivery dates depend on timely collaboration from both sides.",
      paragraphs: [
        "Project schedules are estimates based on the approved scope and the information available at kickoff. Delays in feedback, content, access, approvals or payments may move the delivery date.",
        "Clients should review milestone submissions and provide consolidated feedback within the agreed review window. Final handover takes place after the agreed deliverables are completed and the outstanding project balance is paid, unless otherwise agreed in writing.",
      ],
    },
    {
      id: "changes",
      number: "04",
      title: "Revisions & change requests",
      intro:
        "A clear change process keeps scope, budget and expectations aligned.",
      paragraphs: [
        "The number of included revision rounds, if any, will be stated in the proposal. A revision means refining an agreed deliverable; a new feature, changed direction or replacement of approved work is generally a change request.",
        "RujuIt will assess requested changes and confirm any additional fee or schedule impact for approval before carrying out the extra work.",
      ],
    },
    {
      id: "referrals",
      number: "05",
      title: "Referral & project handover commission",
      intro:
        "We welcome genuine introductions that lead to successful client engagements.",
      paragraphs: [
        "A person or partner who introduces a prospective client to RujuIt, or formally hands over a qualified project opportunity that results in a paid RujuIt engagement, may be eligible for a referral commission. The commission rate is agreed in writing for each opportunity and may range from 10% to 50% of the eligible project service fee. Unless a different rate is approved in writing before the engagement begins, the standard referral rate is 15%.",
        "The eligible fee excludes taxes, refunds, chargebacks, reimbursable expenses, hosting, software licences, paid advertising, third-party services and other pass-through costs. Commission is calculated only on client payments actually received by RujuIt for the agreed project scope. Recurring maintenance or later additional work is excluded unless explicitly included in the referral agreement.",
        "Payment schedule: 30% of the earned referral commission may be paid after the client has paid the initial project advance and the project has officially started. The remaining 70% is payable after the project has been handed over to the client and RujuIt has received the corresponding project payments. If the client pays in stages, commission is earned proportionally against the eligible amounts received.",
        "The referral must be disclosed before the client engagement is confirmed. The referring party must not make commitments, quote prices, promise delivery dates or represent themselves as authorized to bind RujuIt unless written authorization has been provided. No commission is due for an introduction that does not result in a paid project, or on amounts later refunded to the client. The exact rate, attribution, payment recipient and any special terms should be confirmed in a written referral confirmation.",
      ],
    },
    {
      id: "ip",
      number: "06",
      title: "Intellectual property & usage rights",
      intro: "Ownership and permitted use should be clear before delivery.",
      paragraphs: [
        "Unless the project agreement states otherwise, ownership or license rights in custom deliverables transfer to the client after full payment of all amounts due. Until then, deliverables remain subject to the payment and usage terms in the agreement.",
        "RujuIt retains ownership of pre-existing tools, reusable code, libraries, frameworks, processes and know-how. Open-source and third-party components remain subject to their respective licences. RujuIt may request permission to display non-confidential work in its portfolio; no confidential material will be published without approval.",
      ],
    },
    {
      id: "confidentiality",
      number: "07",
      title: "Confidentiality & data handling",
      intro: "Information shared during an engagement is treated with care.",
      paragraphs: [
        "Each party should protect non-public business, technical, financial and personal information received from the other party and use it only for the agreed project purpose. Access should be limited to people who need it to perform the work.",
        "Clients should avoid sending passwords or sensitive credentials in plain text. Where access is required, use secure sharing methods and revoke access when it is no longer needed. Any project-specific data-processing or confidentiality requirements should be documented separately.",
      ],
    },
    {
      id: "communication",
      number: "08",
      title: "Communication & client responsibilities",
      intro: "Good collaboration requires timely, respectful communication.",
      paragraphs: [
        "Each party should appoint a primary contact and use the agreed communication channels. Clients are responsible for providing accurate requirements, content, feedback, approvals and access to systems needed for delivery.",
        "RujuIt will communicate material risks, blockers and scope changes as they arise. Both parties should keep decisions and approvals in a written record so that project expectations remain clear.",
      ],
    },
    {
      id: "third-party",
      number: "09",
      title: "Third-party services & availability",
      intro: "Some solutions rely on services outside RujuIt's direct control.",
      paragraphs: [
        "Hosting providers, APIs, payment gateways, cloud platforms, plugins and other third-party services are governed by their own terms, pricing, security practices and availability. Related subscription or usage charges are normally paid by the client unless the proposal says otherwise.",
        "RujuIt is not responsible for outages, policy changes, price changes or discontinued features caused by third-party providers. We will make reasonable efforts to help investigate issues within the agreed project scope.",
      ],
    },
    {
      id: "cancellation",
      number: "10",
      title: "Cancellation, pause & refunds",
      intro: "If plans change, both parties should agree on a fair close-out.",
      paragraphs: [
        "Either party may request a project pause or cancellation in writing. The parties should review completed work, committed costs, outstanding invoices and any handover materials before closing the engagement.",
        "Payments for work already completed and approved non-refundable third-party costs are not automatically refundable. Any refund, credit or cancellation fee will be determined by the signed agreement and applicable law.",
      ],
    },
    {
      id: "conduct",
      number: "11",
      title: "Professional conduct & acceptable use",
      intro:
        "We aim to maintain a safe, respectful and lawful working relationship.",
      paragraphs: [
        "RujuIt does not knowingly support unlawful activity, infringement, fraud, deceptive practices, harassment or misuse of systems. Clients and collaborators must provide lawful materials and have the rights or permissions needed for anything they ask us to use.",
        "Either party may raise concerns about conduct or project integrity and seek a resolution through the agreed project contacts.",
      ],
    },
    {
      id: "updates",
      number: "12",
      title: "Policy updates & contact",
      intro: "Policies may evolve as our services and operations develop.",
      paragraphs: [
        "RujuIt may update this page from time to time. The latest version and its effective date will be published here. Material terms for an active project will not override a signed agreement unless both parties accept the change in writing.",
        "For questions about these policies or to confirm referral terms, contact RujuIt through the official contact page before beginning the relevant engagement.",
      ],
    },
  ],
} as const

const bnPolicies = {
  eyebrow: "RUJUIT / নীতিমালা",
  title: "নীতিমালা ও কাজের শর্ত",
  description:
    "প্রতিটি প্রজেক্ট যেন পরিষ্কার বোঝাপড়া ও আস্থার সঙ্গে এগোয়, সে জন্য RujuIt-এর ক্লায়েন্ট, সহযোগী এবং রেফারেল পার্টনারদের সঙ্গে কাজের সাধারণ নীতিমালা এখানে তুলে ধরা হয়েছে।",
  updated: "সর্বশেষ আপডেট: ১৪ নভেম্বর, ২০২৬",
  noteTitle: "প্রাথমিক খসড়া",
  note: "এই পেজটি RujuIt-এর জন্য তৈরি একটি সাধারণ ব্যবসায়িক নীতিমালার খসড়া। কোনো নির্দিষ্ট প্রজেক্টের স্বাক্ষরিত চুক্তি, অনুমোদিত প্রস্তাব বা প্রযোজ্য আইন ভিন্ন কিছু বললে সেগুলোই প্রাধান্য পাবে। আইনি নথি হিসেবে ব্যবহারের আগে প্রয়োজন অনুযায়ী পর্যালোচনা ও সংশোধন করুন।",
  contents: "এই পেজে",
  sections: [
    {
      id: "engagement",
      number: "01",
      title: "প্রজেক্ট গ্রহণ ও কাজের পরিধি",
      intro: "কাজ শুরুর আগে উভয় পক্ষের মধ্যে কাজের বিষয়গুলো পরিষ্কার থাকা জরুরি।",
      paragraphs: [
        "কাজ শুরুর আগে RujuIt এবং ক্লায়েন্টের মধ্যে প্রজেক্টের লক্ষ্য, ডেলিভারেবল, কাজের পরিধি, সময়সীমা, দায়িত্ব এবং আর্থিক শর্ত লিখিতভাবে সম্মত হওয়া উচিত। এটি প্রপোজাল, Statement of Work, ইমেইল কনফার্মেশন বা সার্ভিস এগ্রিমেন্টের মাধ্যমে হতে পারে।",
        "সম্মত কাজের বাইরে নতুন ফিচার, ইন্টিগ্রেশন, পেজ বা বড় ধরনের পরিবর্তনের জন্য নতুন মূল্যায়ন, সময়সীমা এবং লিখিত অনুমোদন প্রয়োজন হতে পারে। কাজ শুরুর আগে সম্ভাব্য প্রভাব জানিয়ে দেওয়া হবে।",
      ],
    },
    {
      id: "payments",
      number: "02",
      title: "ফি, ইনভয়েস ও পেমেন্ট",
      intro: "প্রতিটি প্রজেক্টের পেমেন্ট শর্ত কাজ শুরুর আগেই নির্ধারিত হবে।",
      paragraphs: [
        "স্বাক্ষরিত চুক্তিতে ভিন্ন কিছু না থাকলে প্রজেক্টে অগ্রিম পেমেন্ট এবং পরবর্তী মাইলস্টোন বা নির্ধারিত সময় অনুযায়ী ইনভয়েস ব্যবহার করা হতে পারে। সম্মত অগ্রিম পেমেন্ট পাওয়ার পর কাজ শুরু হবে।",
        "ইনভয়েসে উল্লেখিত সময়ের মধ্যে পেমেন্ট করতে হবে। পেমেন্ট বকেয়া থাকলে যুক্তিসংগত নোটিশ দিয়ে RujuIt কাজ সাময়িকভাবে বন্ধ রাখতে পারে। প্রযোজ্য ট্যাক্স, ব্যাংক চার্জ বা মুদ্রা রূপান্তরের খরচ প্রজেক্ট চুক্তি অনুযায়ী নির্ধারিত হবে।",
      ],
    },
    {
      id: "delivery",
      number: "03",
      title: "সময়সীমা, রিভিউ ও ডেলিভারি",
      intro: "সময়মতো ডেলিভারির জন্য উভয় পক্ষের সহযোগিতা প্রয়োজন।",
      paragraphs: [
        "প্রজেক্টের সময়সীমা অনুমোদিত কাজের পরিধি এবং শুরুতে পাওয়া তথ্যের ভিত্তিতে নির্ধারিত হয়। ক্লায়েন্টের ফিডব্যাক, কনটেন্ট, অ্যাক্সেস, অনুমোদন বা পেমেন্টে দেরি হলে ডেলিভারির সময়ও পরিবর্তিত হতে পারে।",
        "ক্লায়েন্টকে নির্ধারিত রিভিউ সময়ের মধ্যে জমা দেওয়া কাজ যাচাই করে সমন্বিত ফিডব্যাক দিতে হবে। লিখিতভাবে ভিন্ন সম্মতি না থাকলে নির্ধারিত কাজ সম্পন্ন এবং বকেয়া পেমেন্ট পরিশোধের পর ফাইনাল হ্যান্ডওভার করা হবে।",
      ],
    },
    {
      id: "changes",
      number: "04",
      title: "রিভিশন ও পরিবর্তনের অনুরোধ",
      intro: "পরিষ্কার পরিবর্তন প্রক্রিয়া বাজেট ও প্রত্যাশা ঠিক রাখতে সাহায্য করে।",
      paragraphs: [
        "প্রপোজালে অন্তর্ভুক্ত রিভিশনের সংখ্যা উল্লেখ থাকলে সেটিই প্রযোজ্য হবে। সম্মত ডেলিভারেবল পরিমার্জন করা রিভিশন; নতুন ফিচার, কাজের দিক পরিবর্তন বা অনুমোদিত কাজ নতুন করে তৈরি করা সাধারণত Change Request হিসেবে বিবেচিত হবে।",
        "অতিরিক্ত কাজের সম্ভাব্য খরচ ও সময়ের প্রভাব জানিয়ে ক্লায়েন্টের অনুমোদনের পরই RujuIt পরিবর্তনের কাজ শুরু করবে।",
      ],
    },
    {
      id: "referrals",
      number: "05",
      title: "রেফারেল ও প্রজেক্ট হ্যান্ডওভার কমিশন",
      intro:
        "যাঁদের পরিচয় বা প্রজেক্ট হ্যান্ডওভারের মাধ্যমে নতুন ক্লায়েন্টের কাজ আসে, তাঁদের অবদানকে আমরা মূল্য দিই।",
      paragraphs: [
        "কোনো ব্যক্তি বা পার্টনার RujuIt-এর কাছে সম্ভাব্য ক্লায়েন্ট পরিচয় করিয়ে দিলে, অথবা যোগ্য কোনো প্রজেক্টের দায়িত্ব আনুষ্ঠানিকভাবে হ্যান্ডওভার করলে এবং সেই সূত্রে RujuIt-এর সঙ্গে পেইড প্রজেক্ট চুক্তি হলে তিনি রেফারেল কমিশনের যোগ্য হতে পারেন। প্রতিটি প্রজেক্টের জন্য কমিশনের হার আগে লিখিতভাবে নির্ধারণ করতে হবে; এটি যোগ্য প্রজেক্ট সার্ভিস ফি-এর ১০% থেকে ৫০% পর্যন্ত হতে পারে। কাজ শুরুর আগে লিখিতভাবে ভিন্ন হার অনুমোদিত না হলে সাধারণ রেফারেল কমিশন হবে ১৫%।",
        "কমিশন হিসাবের ভিত্তি থেকে ট্যাক্স, রিফান্ড, চার্জব্যাক, ফেরতযোগ্য খরচ, হোস্টিং, সফটওয়্যার লাইসেন্স, পেইড বিজ্ঞাপন, থার্ড-পার্টি সার্ভিস এবং অন্যান্য পাস-থ্রু খরচ বাদ থাকবে। ক্লায়েন্টের কাছ থেকে RujuIt বাস্তবে যে অর্থ পাবে, কেবল সেই যোগ্য প্রজেক্ট ফি-এর ওপর কমিশন হিসাব হবে। লিখিতভাবে অন্তর্ভুক্ত না থাকলে নিয়মিত মেইনটেন্যান্স বা পরবর্তী অতিরিক্ত কাজ এই কমিশনের আওতায় পড়বে না।",
        "কমিশন পেমেন্টের সময়সূচি: অর্জিত রেফারেল কমিশনের ৩০% ক্লায়েন্টের অগ্রিম পেমেন্ট পাওয়া এবং প্রজেক্ট আনুষ্ঠানিকভাবে শুরু হওয়ার পর দেওয়া যেতে পারে। বাকি ৭০% ক্লায়েন্টের কাছে প্রজেক্ট হ্যান্ডওভার সম্পন্ন এবং সংশ্লিষ্ট প্রজেক্ট পেমেন্ট RujuIt-এর কাছে পাওয়ার পর পরিশোধ করা হবে। ক্লায়েন্ট ধাপে ধাপে পেমেন্ট করলে, RujuIt যে যোগ্য অর্থ পাবে তার অনুপাতে কমিশনও অর্জিত হবে।",
        "ক্লায়েন্টের সঙ্গে চুক্তি চূড়ান্ত হওয়ার আগেই রেফারেলের বিষয়টি জানাতে হবে। লিখিত অনুমতি ছাড়া রেফারার RujuIt-এর পক্ষ থেকে কোনো প্রতিশ্রুতি, মূল্য, ডেলিভারির তারিখ বা চুক্তি করার ক্ষমতা দাবি করতে পারবেন না। পরিচয়ের সূত্রে পেইড প্রজেক্ট না হলে বা ক্লায়েন্টকে পরে অর্থ ফেরত দিতে হলে সেই অর্থের ওপর কমিশন প্রযোজ্য হবে না। কমিশনের সঠিক হার, রেফারেলের স্বীকৃতি, পেমেন্ট গ্রহণকারী এবং বিশেষ শর্ত লিখিতভাবে নিশ্চিত করতে হবে।",
      ],
    },
    {
      id: "ip",
      number: "06",
      title: "মেধাস্বত্ব ও ব্যবহারের অধিকার",
      intro:
        "ডেলিভারির আগে কাজের মালিকানা ও ব্যবহারের অধিকার পরিষ্কার থাকা উচিত।",
      paragraphs: [
        "প্রজেক্ট চুক্তিতে ভিন্ন কিছু না থাকলে সব বকেয়া পরিশোধের পর কাস্টম ডেলিভারেবলের মালিকানা বা লাইসেন্সের অধিকার ক্লায়েন্টের কাছে হস্তান্তর হবে। তার আগে চুক্তির পেমেন্ট ও ব্যবহারের শর্ত প্রযোজ্য থাকবে।",
        "RujuIt-এর আগে থেকে থাকা টুল, পুনর্ব্যবহারযোগ্য কোড, লাইব্রেরি, ফ্রেমওয়ার্ক, প্রক্রিয়া এবং দক্ষতার মালিকানা RujuIt-এর কাছেই থাকবে। ওপেন-সোর্স ও থার্ড-পার্টি কম্পোনেন্ট তাদের নিজস্ব লাইসেন্স অনুযায়ী ব্যবহৃত হবে। পোর্টফোলিওতে কাজ দেখানোর আগে প্রয়োজনে অনুমতি নেওয়া হবে; অনুমতি ছাড়া গোপনীয় তথ্য প্রকাশ করা হবে না।",
      ],
    },
    {
      id: "confidentiality",
      number: "07",
      title: "গোপনীয়তা ও ডেটা ব্যবস্থাপনা",
      intro: "প্রজেক্টে শেয়ার করা তথ্য সতর্কতার সঙ্গে ব্যবস্থাপনা করা হবে।",
      paragraphs: [
        "উভয় পক্ষ একে অপরের কাছ থেকে পাওয়া অপ্রকাশ্য ব্যবসায়িক, প্রযুক্তিগত, আর্থিক এবং ব্যক্তিগত তথ্য সুরক্ষিত রাখবে এবং কেবল সম্মত প্রজেক্টের উদ্দেশ্যে ব্যবহার করবে। কাজের জন্য যাঁদের জানা প্রয়োজন, কেবল তাঁদের সঙ্গেই তথ্য শেয়ার করা উচিত।",
        "পাসওয়ার্ড বা সংবেদনশীল অ্যাক্সেস তথ্য সাধারণ টেক্সটে পাঠানো থেকে বিরত থাকুন। নিরাপদ পদ্ধতিতে অ্যাক্সেস শেয়ার করুন এবং প্রয়োজন শেষ হলে তা বাতিল করুন। প্রজেক্টভিত্তিক ডেটা প্রসেসিং বা গোপনীয়তার বিশেষ শর্ত আলাদাভাবে লিখিত হওয়া উচিত।",
      ],
    },
    {
      id: "communication",
      number: "08",
      title: "যোগাযোগ ও ক্লায়েন্টের দায়িত্ব",
      intro: "সফল সহযোগিতার জন্য সময়মতো ও সম্মানজনক যোগাযোগ জরুরি।",
      paragraphs: [
        "প্রতিটি পক্ষ একজন প্রধান যোগাযোগ ব্যক্তি নির্ধারণ করবে এবং সম্মত যোগাযোগ মাধ্যম ব্যবহার করবে। প্রয়োজনীয় রিকোয়ারমেন্ট, কনটেন্ট, ফিডব্যাক, অনুমোদন এবং সিস্টেম অ্যাক্সেস দেওয়া ক্লায়েন্টের দায়িত্ব।",
        "প্রজেক্টে বড় ধরনের ঝুঁকি, বাধা বা কাজের পরিধির পরিবর্তন হলে RujuIt তা জানাবে। সিদ্ধান্ত ও অনুমোদন লিখিতভাবে সংরক্ষণ করা উচিত, যাতে প্রত্যাশা পরিষ্কার থাকে।",
      ],
    },
    {
      id: "third-party",
      number: "09",
      title: "থার্ড-পার্টি সার্ভিস ও প্রাপ্যতা",
      intro:
        "কিছু সমাধান এমন সার্ভিসের ওপর নির্ভর করে, যেগুলো RujuIt সরাসরি নিয়ন্ত্রণ করে না।",
      paragraphs: [
        "হোস্টিং প্রোভাইডার, API, পেমেন্ট গেটওয়ে, ক্লাউড প্ল্যাটফর্ম, প্লাগইন এবং অন্যান্য থার্ড-পার্টি সার্ভিস তাদের নিজস্ব শর্ত, মূল্য, নিরাপত্তা নীতি ও প্রাপ্যতা অনুযায়ী পরিচালিত হয়। প্রপোজালে ভিন্ন কিছু না থাকলে সংশ্লিষ্ট সাবস্ক্রিপশন বা ব্যবহারের খরচ ক্লায়েন্ট বহন করবেন।",
        "থার্ড-পার্টি প্রোভাইডারের আউটেজ, নীতিমালা বা মূল্য পরিবর্তন কিংবা কোনো ফিচার বন্ধ হয়ে যাওয়ার জন্য RujuIt দায়ী নয়। সম্মত কাজের পরিধির মধ্যে সমস্যা অনুসন্ধানে যুক্তিসংগত সহযোগিতা করা হবে।",
      ],
    },
    {
      id: "cancellation",
      number: "10",
      title: "প্রজেক্ট বাতিল, বিরতি ও রিফান্ড",
      intro: "পরিকল্পনা পরিবর্তিত হলে উভয় পক্ষের ন্যায্য সমাধানে পৌঁছানো উচিত।",
      paragraphs: [
        "যেকোনো পক্ষ লিখিতভাবে প্রজেক্টে বিরতি বা বাতিলের অনুরোধ করতে পারে। কাজ বন্ধের আগে সম্পন্ন কাজ, প্রতিশ্রুত খরচ, বকেয়া ইনভয়েস এবং হ্যান্ডওভার উপকরণ পর্যালোচনা করা উচিত।",
        "ইতোমধ্যে সম্পন্ন কাজের পেমেন্ট এবং অনুমোদিত নন-রিফান্ডেবল থার্ড-পার্টি খরচ স্বয়ংক্রিয়ভাবে ফেরতযোগ্য নয়। রিফান্ড, ক্রেডিট বা বাতিলের ফি স্বাক্ষরিত চুক্তি ও প্রযোজ্য আইন অনুযায়ী নির্ধারিত হবে।",
      ],
    },
    {
      id: "conduct",
      number: "11",
      title: "পেশাদার আচরণ ও গ্রহণযোগ্য ব্যবহার",
      intro: "আমরা নিরাপদ, সম্মানজনক এবং আইনসম্মত কর্মপরিবেশ বজায় রাখতে চাই।",
      paragraphs: [
        "RujuIt জেনেশুনে বেআইনি কার্যক্রম, মেধাস্বত্ব লঙ্ঘন, প্রতারণা, বিভ্রান্তিকর কার্যক্রম, হয়রানি বা সিস্টেমের অপব্যবহারে সহায়তা করে না। ক্লায়েন্ট ও সহযোগীদের সরবরাহ করা উপকরণ ব্যবহারের জন্য প্রয়োজনীয় অধিকার বা অনুমতি থাকতে হবে।",
        "আচরণ বা প্রজেক্টের স্বচ্ছতা নিয়ে কোনো উদ্বেগ থাকলে উভয় পক্ষ সম্মত যোগাযোগ ব্যক্তির মাধ্যমে বিষয়টি জানিয়ে সমাধানের চেষ্টা করতে পারে।",
      ],
    },
    {
      id: "updates",
      number: "12",
      title: "নীতিমালা আপডেট ও যোগাযোগ",
      intro: "সার্ভিস ও কার্যক্রমের পরিবর্তনের সঙ্গে নীতিমালা হালনাগাদ হতে পারে।",
      paragraphs: [
        "RujuIt সময়ে সময়ে এই পেজের নীতিমালা আপডেট করতে পারে। সর্বশেষ সংস্করণ ও আপডেটের তারিখ এখানেই প্রকাশ করা হবে। চলমান প্রজেক্টের স্বাক্ষরিত চুক্তির শর্ত উভয় পক্ষ লিখিতভাবে সম্মত না হলে এই পেজের আপডেট দিয়ে পরিবর্তিত হবে না।",
        "এই নীতিমালা সম্পর্কে প্রশ্ন থাকলে বা রেফারেল কমিশনের শর্ত নিশ্চিত করতে চাইলে সংশ্লিষ্ট কাজ শুরুর আগে RujuIt-এর অফিসিয়াল Contact পেজের মাধ্যমে যোগাযোগ করুন।",
      ],
    },
  ],
} as const

export function getPolicies(locale: Locale) {
  return locale === "bn" ? bnPolicies : enPolicies
}
