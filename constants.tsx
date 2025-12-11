import { 
  Briefcase, 
  Users, 
  ShieldCheck, 
  BrainCircuit, 
  Link as LinkIcon, 
  FileText, 
  Clock, 
  Lock, 
  LayoutDashboard, 
  MessageSquare, 
  FileCheck,
  Globe,
  Smartphone,
  Server
} from 'lucide-react';
import { ContentDictionary } from './types';

export const CONTENT: Record<'en' | 'ar', ContentDictionary> = {
  en: {
    nav: {
      home: "Home",
      features: "Capabilities",
      insights: "Insights Hub",
      caseStudies: "Success Stories",
      contact: "Contact",
      portal: "Client Login",
      demo: "Request Demo",
      freeTrial: "Start Free Trial",
      pricing: "Pricing"
    },
    hero: {
      title: "The Future of Legal Practice in the UAE",
      subtitle: "LEXCORA is the premier ERP suite designed for high-net-worth law firms. Seamlessly integrate productivity, governance, and client experience.",
      ctaPrimary: "Start Free Trial",
      ctaCallback: "Request a Callback",
      ctaSecondary: "Explore Features",
      trustBadge: "Trusted by Dubai's Leading Legal Consultants"
    },
    features: {
      sectionTitle: "Enterprise-Grade Capabilities",
      productivity: {
        title: "Productivity & Case Management",
        subtitle: "Streamline operations with fully expandable modules.",
        items: [
          { title: "Smart Case Files", description: "Cross-referencing, linking, and deep file attachments.", icon: Briefcase },
          { title: "Judicial Deadlines", description: "Automated countdown timers for appeals and objections.", icon: Clock },
          { title: "Confidential Vault", description: "Restricted access sections for sensitive case materials.", icon: Lock }
        ]
      },
      client: {
        title: "Client Experience & Collaboration",
        subtitle: "A dedicated portal to elevate your client relationships.",
        items: [
          { title: "Client Portal", description: "Secure access for requests, uploads, and viewing case status.", icon: Users },
          { title: "Financial Transparency", description: "Real-time balance tracking and expense summaries.", icon: LayoutDashboard },
          { title: "Appointment Booking", description: "Integrated scheduling for seamless consultations.", icon: Clock }
        ]
      },
      governance: {
        title: "Governance, Control & Security",
        subtitle: "Uncompromising security and audit trails.",
        items: [
          { title: "Approvals Center", description: "Centralized control for invoices, custody, and expenses.", icon: FileCheck },
          { title: "Audit Logs", description: "Timestamped tracking of every system action by user.", icon: ShieldCheck },
          { title: "Enterprise Security", description: "Private backend database with remote secure access.", icon: Server }
        ]
      },
      intelligence: {
        title: "Intelligence & Customization",
        subtitle: "Tailored for the modern legal professional.",
        items: [
          { title: "Legal Text Assistant", description: "Retrieve verified UAE statutory material instantly.", icon: BrainCircuit },
          { title: "Customizable UI", description: "12 themes with tailored fonts and color palettes.", icon: LayoutDashboard }
        ]
      },
      integration: {
        title: "Seamless Integrations",
        subtitle: "Connect with the tools you use daily.",
        items: [
          { title: "Communication", description: "WhatsApp Business & Microsoft 365 integration.", icon: MessageSquare },
          { title: "Workspace", description: "Full Google Workspace connectivity.", icon: LinkIcon }
        ]
      }
    },
    testimonials: {
      title: "Trusted by Industry Leaders",
      subtitle: "See why top-tier UAE firms are switching to LEXCORA.",
      items: [
        {
          quote: "The automated judicial deadline tracking has saved us countless hours. LEXCORA is a true game-changer for UAE litigation workflows.",
          author: "Sarah Al-Mansoori",
          role: "Senior Partner",
          firm: "Al-Mansoori & Associates"
        },
        {
          quote: "Finally, an ERP that handles bilingual documentation flawlessly. The Arabic interface is just as robust as the English one.",
          author: "James Sterling",
          role: "Managing Director",
          firm: "Sterling Legal Consultancy"
        },
        {
          quote: "Security is paramount for our high-net-worth clients. The private vault features give us the peace of mind we need.",
          author: "Dr. Ahmed Khalil",
          role: "Head of Dispute Resolution",
          firm: "Khalil International Law"
        }
      ]
    },
    caseStudies: {
      pageTitle: "Proven Results in the UAE Legal Sector",
      pageSubtitle: "Discover how leading firms are transforming their operations, efficiency, and client satisfaction with LEXCORA.",
      ctaTitle: "Ready to achieve similar results?",
      ctaButton: "Schedule Your Consultation",
      items: [
        {
          id: "1",
          firmName: "Al-Futtaim & Partners Legal Group",
          title: "Automating Litigation Workflows for 30% Efficiency Gains",
          challenge: "The firm struggled with manual deadline tracking across 500+ active litigation cases, leading to near-misses on appeal filings and excessive administrative overtime.",
          solution: "Implemented LEXCORA's Productivity Module with automated judicial deadline timers and smart case file linking.",
          metrics: [
            { value: "30%", label: "Reduction in Admin Time" },
            { value: "0", label: "Missed Deadlines in 12 Months" },
            { value: "100%", label: "Digitization of Case Files" }
          ],
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "2",
          firmName: "Dubai Arbitration Counsel (DAC)",
          title: "Enhancing Client Transparency & Billing Accuracy",
          challenge: "High-net-worth clients demanded real-time updates on case expenses and balances, which the previous legacy system could not provide accurately.",
          solution: "Deployed the LEXCORA Client Portal and Financial Transparency module to give clients secure, real-time access to their financial standing.",
          metrics: [
            { value: "50%", label: "Faster Billing Cycle" },
            { value: "99.9%", label: "Invoice Accuracy" },
            { value: "4.8/5", label: "Client Satisfaction Score" }
          ],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "3",
          firmName: "Sharjah Boutique Law",
          title: "Securing Sensitive Family Law Data",
          challenge: "Handling sensitive family law cases required a level of data security and access control that off-the-shelf software could not offer.",
          solution: "Utilized LEXCORA's Governance module with Granular Permissions and the Confidential Vault for restricted files.",
          metrics: [
            { value: "100%", label: "Audit Trail Coverage" },
            { value: "24/7", label: "Secure Remote Access" },
            { value: "ISO", label: "Compliant Security Standards" }
          ],
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600"
        }
      ]
    },
    pricing: {
      pageTitle: "Transparent Pricing for Modern Firms",
      pageSubtitle: "Choose the package that fits your practice scale and needs.",
      toggleMonthly: "Monthly",
      toggleAnnual: "Annually",
      saveLabel: "Get 2 Months Free",
      tiers: {
        starter: {
          name: "Starter Package",
          stars: 2,
          priceMonthly: "199",
          priceAnnually: "1,990",
          periodLabel: "AED / user",
          minUsers: "Minimum: 2 Users",
          features: [
            "Case and File Management (Unlimited)",
            "Client and Opponent Management",
            "Session Tracking + Automatic Reminders",
            "Consultation and Meeting Management",
            "Basic Invoicing + Basic Financial Reports",
            "Bilingual Interface (Arabic/English)",
            "Basic Permissions System",
            "20 GB Cloud Storage/user",
            "Technical Support (Email)",
            "Remote Training Session"
          ],
          cta: "Start Free Trial"
        },
        professional: {
          name: "Professional Package",
          stars: 3,
          priceMonthly: "349",
          priceAnnually: "3,490",
          periodLabel: "AED / user",
          minUsers: "Minimum: 4 Users",
          highlight: true,
          features: [
            "All Features from STARTER",
            "AI-powered intelligent legal assistant (200 queries)",
            "Advanced chart of accounts + reports",
            "Full HR management",
            "Asset management",
            "Team productivity monitoring",
            "Advanced permissions system",
            "100 GB storage/user",
            "Basic API (M365 / Google Workspace)",
            "Technical support (WhatsApp + email)",
            "Two remote training sessions"
          ],
          cta: "Go Professional"
        },
        enterprise: {
          name: "Enterprise Package",
          stars: 4,
          priceMonthly: "500+",
          priceAnnually: "Custom",
          periodLabel: "Starting from AED / user",
          minUsers: "Minimum: 20 Users",
          features: [
            "All Features from PROFESSIONAL",
            "Unlimited AI-powered intelligent assistant",
            "Unlimited storage",
            "Full API (WhatsApp Business + Google + M365)",
            "Custom reports on demand",
            "White-label (Logo & Identity)",
            "Customized Account Manager",
            "24/7 Technical Support",
            "Alerts for Assets/Contracts",
            "On-site Training (4 Sessions)",
            "Comprehensive Activity Log Tracking"
          ],
          cta: "Contact Sales"
        }
      },
      discounts: {
        title: "Volume Discounts",
        subtitle: "Scale your firm and save more.",
        tableHeadUser: "Number of Users",
        tableHeadDiscount: "Discount Percentage",
        items: [
          { range: "5-10 Users", discount: "5%" },
          { range: "11-20 Users", discount: "10%" },
          { range: "21-50 Users", discount: "15%" },
          { range: "51+ Users", discount: "20%" }
        ],
        note: "Note: Discounts apply to the monthly or annual price only."
      },
      referral: {
        title: "Referral Program",
        item1: "Get one free month for each law firm you refer that joins the system.",
        item2: "The referred firm receives a 15% discount on its first month."
      }
    },
    privacyPolicy: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: October 2023",
      intro: "At LEXCORA, we are committed to protecting the privacy and security of our clients' data. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our ERP software and website. We operate in strict compliance with the UAE Federal Decree-Law No. 45 of 2021 regarding the Protection of Personal Data.",
      sections: [
        {
          heading: "1. Information We Collect",
          content: [
            "Personal Identification Information: Name, email address, phone number, and professional credentials when you register for an account.",
            "Case Data: Information related to legal cases, clients, and documents uploaded to the system. This data is processed solely for the purpose of providing the service.",
            "Usage Data: Information on how the service is accessed and used, including IP addresses, browser types, and log data."
          ]
        },
        {
          heading: "2. How We Use Your Information",
          content: [
            "To provide and maintain the LEXCORA ERP service.",
            "To manage your account, billing, and subscription.",
            "To notify you about changes to our service or judicial deadlines.",
            "To provide customer support and technical assistance.",
            "To detect, prevent, and address technical issues."
          ]
        },
        {
          heading: "3. Data Sovereignty & Security",
          content: [
            "We prioritize UAE data sovereignty. All critical client data is stored on secure, encrypted servers located within the United Arab Emirates or jurisdictions deemed to have adequate protection.",
            "We employ enterprise-grade encryption (AES-256) for data at rest and in transit.",
            "Access to your data is strictly limited to authorized personnel and is logged via our audit trail system."
          ]
        },
        {
          heading: "4. Disclosure of Information",
          content: [
            "We do not sell your personal data to third parties.",
            "We may disclose your personal data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency in the UAE).",
            "We may share data with trusted third-party service providers (e.g., payment processors) solely for the purpose of operational functionality."
          ]
        },
        {
          heading: "5. Your Data Rights",
          content: [
            "Right to Access: You have the right to request copies of your personal data.",
            "Right to Rectification: You have the right to request correction of inaccurate information.",
            "Right to Erasure: You have the right to request deletion of your personal data, subject to legal retention requirements."
          ]
        }
      ],
      contact: {
        heading: "Contact Us",
        text: "If you have any questions about this Privacy Policy, please contact us:",
        email: "rased@almstkshf.com"
      }
    },
    trial: {
      pageTitle: "Start Your 14-Day Free Trial",
      steps: {
        1: "Personal Details",
        2: "Firm Information",
        3: "Confirmation"
      },
      form: {
        fullName: "Full Name",
        workEmail: "Work Email Address",
        phone: "Mobile Number",
        firmName: "Law Firm Name",
        firmSize: "Firm Size",
        sizes: ["Solo Practitioner", "2-10 Attorneys", "11-50 Attorneys", "50+ Attorneys"],
        next: "Next Step",
        back: "Back",
        submit: "Create Account"
      },
      success: {
        title: "Welcome to LEXCORA",
        subtitle: "Your account has been successfully created. We have sent a verification email to your inbox.",
        checklistTitle: "Your Onboarding Checklist",
        checklist: [
          "Verify your email address",
          "Complete your firm profile",
          "Invite team members",
          "Schedule onboarding call"
        ],
        dashboardButton: "Go to Dashboard"
      },
      testimonial: {
        quote: "The signup process was seamless. We had our entire case database migrated and running within 48 hours.",
        author: "Tariq Al-Hashimi, Managing Partner"
      }
    },
    insights: {
      title: "Legal Insights & Market Commentary",
      subtitle: "Stay ahead with updates from the UAE legal landscape.",
      demoTitle: "Experience Our Smart Assistant",
      demoPlaceholder: "Ask about UAE Labour Law (e.g., 'What is the gratuity calculation?')",
      demoButton: "Ask Assistant",
      articles: [
        { id: "1", category: "Regulatory Update", title: "New UAE Corporate Tax Implications for Law Firms", date: "Oct 12, 2023", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" },
        { id: "2", category: "Practice Management", title: "Digitizing Case Files: A Compliance Guide", date: "Sep 28, 2023", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800" },
        { id: "4", category: "Market Analysis", title: "The Rise of Boutique Arbitration Firms in Dubai", date: "Sep 15, 2023", image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    insightsPage: {
      pageTitle: "LEXCORA Intelligence Hub",
      pageSubtitle: "Expert analysis, regulatory updates, and practice management strategies for the modern UAE legal professional.",
      searchPlaceholder: "Search articles, topics, or keywords...",
      categories: ["All", "Regulatory", "Practice Management", "Legal Tech", "Market Analysis"],
      readMore: "Read Full Article",
      backButton: "Back to Insights Hub",
      items: [
        {
          id: "1",
          category: "Regulatory",
          title: "Comprehensive Guide to UAE Corporate Tax for Law Firms",
          excerpt: "Understanding the implications of the 9% corporate tax rate on legal practices and how to structure your firm for compliance.",
          author: "Dr. Hassan Al-Ali",
          date: "Oct 12, 2023",
          readTime: "8 min read",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
          tags: ["Tax Law", "Compliance", "Finance"],
          content: [
            "The implementation of the Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses marks a significant shift in the UAE's economic landscape. For law firms, specifically those operating as partnerships or sole establishments, understanding the nuances of this new regime is critical for maintaining profitability and compliance.",
            "Effective from financial years starting on or after June 1, 2023, the 9% Corporate Tax applies to taxable income exceeding AED 375,000. This threshold is strategically set to support startups and small businesses, but most established legal practices will find themselves within the taxable bracket. The first step for any firm is to conduct a comprehensive financial audit to segregate taxable and non-taxable income streams.",
            "Crucially, the law provides for certain exemptions and reliefs, particularly for free zone entities that meet the 'Qualifying Income' criteria. However, many mainland law firms will need to restructure their expense reporting. Deductible expenses, such as employee salaries, rent, and software subscriptions (like LEXCORA), play a vital role in calculating the final taxable income. Proper documentation of these expenses is no longer just best practice; it is a regulatory necessity.",
            "Furthermore, partners in law firms must distinguish between their profit shares and salaries. The Federal Tax Authority (FTA) has issued specific guidelines on how partner remuneration is treated. Failure to adhere to these guidelines could result in penalties or the disallowance of deductions.",
            "We recommend that all law firms appoint a dedicated tax officer or engage with external consultants to navigate this transition. Integrating an ERP system that automatically categorizes expenses according to tax codes can save hundreds of administrative hours and reduce the risk of human error during tax filing season."
          ]
        },
        {
          id: "2",
          category: "Practice Management",
          title: "Digitizing Case Files: Moving Beyond Paper",
          excerpt: "A step-by-step framework for transitioning your firm's archives to a secure, cloud-based ERP system without disrupting ongoing litigation.",
          author: "Sarah Jenkins",
          date: "Sep 28, 2023",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
          tags: ["Digital Transformation", "Efficiency", "Operations"],
          content: [
            "The era of the physical file room is drawing to a close. With the UAE Ministry of Justice accelerating its adoption of smart court systems and remote hearings, law firms that rely on paper archives are finding themselves at a competitive disadvantage. Digitization is no longer a luxury; it is a prerequisite for modern legal practice.",
            "However, the prospect of digitizing thousands of archived case files can be daunting. The key to a successful digital transformation lies in a phased approach. Attempting to scan everything at once often leads to operational paralysis. Instead, we propose a 'day-forward' strategy combined with on-demand back-scanning.",
            "Phase 1: The 'Day-Forward' Policy. Establish a firm-wide rule that all new cases opened after a specific date are born digital. Correspondence, pleadings, and evidence are uploaded directly to the Case Management System (CMS). Physical copies are only kept if legally mandated for original submission.",
            "Phase 2: Active Case Migration. Identify all currently active files. These should be prioritized for scanning. A dedicated team or external vendor should be tasked with digitizing these files over a set period, ensuring that metadata (case numbers, client names, dates) is accurately indexed.",
            "Phase 3: Archive Management. For closed cases, digitize only on demand. If a file is requested for reference, it gets scanned. Over time, this organic process reduces the physical footprint without a massive upfront investment.",
            "Security is paramount during this transition. Cloud-based ERPs like LEXCORA offer bank-grade encryption and granular access controls, ensuring that client confidentiality is maintained—often more securely than in a physical cabinet accessible to anyone with a key."
          ]
        },
        {
          id: "3",
          category: "Legal Tech",
          title: "AI in Arbitration: Risks, Rewards, and Regulations",
          excerpt: "Exploring how Artificial Intelligence is being used in dispute resolution within the DIFC and ADGM courts.",
          author: "Karim Fayed",
          date: "Sep 15, 2023",
          readTime: "5 min read",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
          tags: ["AI", "Arbitration", "Future Tech"],
          content: [
            "Artificial Intelligence is making waves in international arbitration, and the UAE's leading financial centers, DIFC and ADGM, are at the forefront of this adoption. From predictive analytics to automated document review, AI is reshaping how disputes are resolved.",
            "One of the most immediate applications is in e-discovery. In complex commercial arbitrations involving terabytes of data, AI algorithms can sift through documents to identify relevant evidence with a speed and accuracy that human teams cannot match. This significantly reduces the time and cost associated with the disclosure phase.",
            "Predictive justice is another emerging frontier. Tools that analyze past judgments to predict the likelihood of success are becoming increasingly sophisticated. While these tools do not replace legal judgment, they provide valuable data points for strategy formulation and settlement negotiations.",
            "However, the rise of AI in arbitration raises significant regulatory and ethical questions. The 'black box' problem—where the reasoning behind an AI's conclusion is opaque—poses a challenge to the principles of natural justice and the right to a reasoned award. Furthermore, issues of bias in training data must be addressed to ensure fairness.",
            "The DIFC Courts have established a Digital Economy Court to specifically handle disputes arising from emerging technologies. As the regulatory framework evolves, arbitrators and counsel must become technologically literate to effectively advocate for their clients in this new digital arena."
          ]
        },
        {
          id: "4",
          category: "Market Analysis",
          title: "The Rise of Boutique Litigation Firms in Dubai",
          excerpt: "Why specialized boutique firms are gaining market share over large generalist practices in the post-pandemic era.",
          author: "Market Watch Team",
          date: "Aug 30, 2023",
          readTime: "7 min read",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
          tags: ["Trends", "Growth", "Strategy"],
          content: [
            "The Dubai legal market is witnessing a structural shift. For decades, large international firms and massive local generalist practices dominated the landscape. However, post-pandemic data suggests a significant migration of high-value litigation work to specialized boutique firms.",
            "Several factors are driving this trend. First is the demand for specialized expertise. In an increasingly complex regulatory environment, clients prefer deep knowledge in specific sectors (e.g., construction disputes, maritime law, or white-collar crime) over the 'one-stop-shop' model.",
            "Second is conflict of interest. Large firms often face conflict issues due to their vast institutional client bases, preventing them from acting against banks or major developers. Boutique firms, with their leaner client lists, are often conflict-free and can aggressively pursue claims against major entities.",
            "Third is cost-efficiency and agility. Without the overheads of a global network, boutique firms can offer more competitive fee structures and personalized partner attention. Technology plays a crucial role here; cloud-based ERPs allow a 10-lawyer firm to operate with the same efficiency and infrastructure as a 100-lawyer practice.",
            "For aspiring legal entrepreneurs, this represents a golden era. The market is rewarding agility, specialization, and technological adoption. The firms that succeed will be those that combine deep subject matter expertise with modern, efficient practice management."
          ]
        },
        {
          id: "5",
          category: "Regulatory",
          title: "AML Compliance: New Standards for 2024",
          excerpt: "An overview of the updated Anti-Money Laundering regulations enforced by the Ministry of Justice and what they mean for your client onboarding.",
          author: "Fatima Al-Sayed",
          date: "Aug 12, 2023",
          readTime: "10 min read",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
          tags: ["AML", "Compliance", "Risk"],
          content: [
             "The UAE's commitment to combatting financial crime has led to a rigorous overhaul of Anti-Money Laundering (AML) and Counter-Terrorism Financing (CTF) regulations. For lawyers, who are classified as Designated Non-Financial Businesses and Professions (DNFBPs), the compliance burden has increased significantly.",
             "The new 2024 standards mandate a risk-based approach to client onboarding. It is no longer sufficient to simply copy a passport. Law firms must conduct enhanced due diligence (EDD) on clients from high-risk jurisdictions or those identified as Politically Exposed Persons (PEPs).",
             "Furthermore, the reporting mechanism for Suspicious Activity Reports (SARs) has been streamlined through the goAML portal. Failure to report suspicious transactions can lead to severe criminal penalties and license revocation. The Ministry of Justice has intensified its inspection campaigns to ensure adherence.",
             "Law firms must implement robust internal controls. This includes appointing a compliance officer, conducting regular staff training, and maintaining auditable records of all due diligence activities. Technology is the first line of defense; modern legal ERPs include integrated AML screening tools that automatically check client names against global sanctions lists.",
             "Compliance should not be viewed merely as a tick-box exercise but as a cornerstone of the firm's reputation. In a global financial hub like Dubai, demonstrating the highest standards of integrity is a competitive advantage."
          ]
        },
        {
          id: "6",
          category: "Legal Tech",
          title: "The Future of Bilingual Legal Contracts",
          excerpt: "How automated document generation is solving the Arabic-English dual language requirement in UAE courts.",
          author: "James Wilson",
          date: "Jul 22, 2023",
          readTime: "6 min read",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
          tags: ["Translation", "Automation", "Contracts"],
          content: [
             "In the UAE, the duality of language is a fundamental aspect of legal practice. While international business is often conducted in English, the official language of the courts is Arabic. This creates a perpetual bottleneck: the need to translate lengthy contracts and pleadings accurately and quickly.",
             "Historically, this has been a manual, expensive, and error-prone process. However, the next generation of legal tech is changing the game. Automated document generation tools, integrated into ERP systems, can now produce dual-column bilingual contracts instantly based on pre-approved templates.",
             "These systems ensure consistency in terminology. Legal terms of art are mapped one-to-one, reducing the risk of a translation discrepancy altering the legal meaning of a clause. This is particularly vital in dispute resolution clauses where ambiguity can be fatal.",
             "Beyond templates, advances in Neural Machine Translation (NMT) specifically trained on legal corpora are allowing for first-draft translations of bespoke documents that are 80-90% accurate. This shifts the lawyer's role from translator to reviewer, significantly increasing leverage and profitability.",
             "Firms that master this bilingual automation will dominate the cross-border transactional market, offering faster turnaround times and lower costs to clients who operate in this multicultural jurisdiction."
          ]
        }
      ]
    },
    chatbot: {
      title: "LEXCORA Assistant",
      placeholder: "Type your question...",
      welcome: "Hello! I am the LEXCORA AI assistant. How can I help you navigate our services today?",
      send: "Send",
      disclaimer: "AI responses are for informational purposes only and do not constitute legal advice."
    },
    footer: {
      about: "LEXCORA by ALMSTKSHF Co. The definitive ERP for UAE legal excellence.",
      contact: "Get in Touch",
      address: "Level 16, Alkhatem Building, Marya Island, Abu Dhabi, UAE",
      privacy: "Privacy Policy",
      compliance: "Compliance & Data Protection",
      rights: "© 2024 LEXCORA. All Rights Reserved.",
      newsletter: {
        title: "Stay Informed",
        description: "Subscribe to our newsletter for the latest legal tech insights and product updates.",
        placeholder: "Enter your work email",
        button: "Subscribe",
        success: "Thank you for subscribing!"
      }
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      features: "المميزات",
      insights: "مركز الرؤى",
      caseStudies: "قصص النجاح",
      contact: "اتصل بنا",
      portal: "بوابة العملاء",
      demo: "طلب تجريبي",
      freeTrial: "ابدأ التجربة المجانية",
      pricing: "الأسعار"
    },
    hero: {
      title: "مستقبل المحاماة في الإمارات",
      subtitle: "ليكسكورا هو نظام تخطيط موارد المؤسسات الرائد المصمم لمكاتب المحاماة الكبرى. دمج سلس بين الإنتاجية، والحوكمة، وتجربة العملاء.",
      ctaPrimary: "ابدأ التجربة المجانية",
      ctaCallback: "طلب معاودة الاتصال",
      ctaSecondary: "استكشف المميزات",
      trustBadge: "موثوق به من قبل كبار المستشارين القانونيين في دبي"
    },
    features: {
      sectionTitle: "قدرات مؤسسية متكاملة",
      productivity: {
        title: "الإنتاجية وإدارة القضايا",
        subtitle: "بسط عملياتك مع وحدات قابلة للتوسع بالكامل.",
        items: [
          { title: "ملفات قضايا ذكية", description: "ربط مرجعي، وإرفاق ملفات عميق داخل كل قسم.", icon: Briefcase },
          { title: "المواعيد القضائية", description: "مؤقتات تنازلية آلية للاستئناف والاعتراضات.", icon: Clock },
          { title: "خزنة سرية", description: "أقسام ذات وصول مقيد للمواد الحساسة.", icon: Lock }
        ]
      },
      client: {
        title: "تجربة العملاء والتعاون",
        subtitle: "بوابة مخصصة للارتقاء بعلاقاتك مع الموكلين.",
        items: [
          { title: "بوابة الموكلين", description: "وصول آمن للطلبات، وتحميل المستندات، ومتابعة الحالة.", icon: Users },
          { title: "الشفافية المالية", description: "تتبع فوري للأرصدة وملخصات المصاريف.", icon: LayoutDashboard },
          { title: "حجز المواعيد", description: "جدولة متكاملة لاستشارات سلسة.", icon: Clock }
        ]
      },
      governance: {
        title: "الحوكمة والرقابة والأمان",
        subtitle: "أمان لا يهاون وسجلات تدقيق شاملة.",
        items: [
          { title: "مركز الموافقات", description: "تحكم مركزي للفواتير، والعهد، والمصاريف.", icon: FileCheck },
          { title: "سجلات التدقيق", description: "تتبع زمني لكل إجراء في النظام حسب المستخدم.", icon: ShieldCheck },
          { title: "أمان مؤسسي", description: "قاعدة بيانات خلفية خاصة مع وصول آمن عن بعد.", icon: Server }
        ]
      },
      intelligence: {
        title: "الذكاء والتخصيص",
        subtitle: "مصمم خصيصاً للمحترف القانوني الحديث.",
        items: [
          { title: "المساعد القانوني الذكي", description: "استرجاع المواد القانونية الإماراتية الموثقة فورياً.", icon: BrainCircuit },
          { title: "واجهة قابلة للتخصيص", description: "١٢ سمة مع خطوط وألوان مخصصة لراحة المستخدم.", icon: LayoutDashboard }
        ]
      },
      integration: {
        title: "تكامل سلس",
        subtitle: "اتصل بالأدوات التي تستخدمها يومياً.",
        items: [
          { title: "التواصل", description: "تكامل مع واتساب للأعمال و Microsoft 365.", icon: MessageSquare },
          { title: "مساحة العمل", description: "اتصال كامل مع Google Workspace.", icon: LinkIcon }
        ]
      }
    },
    testimonials: {
      title: "شركاء النجاح",
      subtitle: "اكتشف لماذا تختار كبرى مكاتب المحاماة في الإمارات ليكسكورا.",
      items: [
        {
          quote: "لقد وفر علينا التتبع الآلي للمواعيد القضائية ساعات لا تحصى. ليكسكورا نقلة نوعية في سير عمل القضايا.",
          author: "سارة المنصوري",
          role: "شريك أول",
          firm: "المنصوري ومشاركوه"
        },
        {
          quote: "أخيراً، نظام يدعم ثنائية اللغة بامتياز. الواجهة العربية بنفس قوة وكفاءة الواجهة الإنجليزية.",
          author: "جيمس ستيرلينغ",
          role: "المدير العام",
          firm: "ستيرلينغ للاستشارات القانونية"
        },
        {
          quote: "السرية أمر بالغ الأهمية لموكلينا. ميزات الخزنة الخاصة تمنحنا راحة البال التي نحتاجها.",
          author: "د. أحمد خليل",
          role: "رئيس قسم فض المنازعات",
          firm: "خليل للمحاماة الدولية"
        }
      ]
    },
    caseStudies: {
      pageTitle: "نتائج مثبتة في القطاع القانوني",
      pageSubtitle: "اكتشف كيف تقوم الشركات الرائدة بتحويل عملياتها وكفاءتها ورضا العملاء باستخدام ليكسكورا.",
      ctaTitle: "هل أنت مستعد لتحقيق نتائج مماثلة؟",
      ctaButton: "احجز استشارتك",
      items: [
        {
          id: "1",
          firmName: "مجموعة الفطيم وشركاه القانونية",
          title: "أتمتة سير عمل التقاضي لتحقيق مكاسب كفاءة بنسبة ٣٠٪",
          challenge: "عانت الشركة من تتبع المواعيد النهائية يدوياً عبر أكثر من ٥٠٠ قضية نشطة، مما أدى إلى مخاطر في مواعيد الاستئناف ووقت إضافي إداري مفرط.",
          solution: "تنفيذ وحدة الإنتاجية في ليكسكورا مع مؤقتات المواعيد القضائية الآلية وربط ملفات القضايا الذكية.",
          metrics: [
            { value: "٣٠٪", label: "انخفاض في الوقت الإداري" },
            { value: "٠", label: "مواعيد فائتة خلال ١٢ شهراً" },
            { value: "١٠٠٪", label: "رقمنة ملفات القضايا" }
          ],
          image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "2",
          firmName: "مجلس دبي للتحكيم (DAC)",
          title: "تعزيز شفافية العملاء ودقة الفواتير",
          challenge: "طالب العملاء ذوي الملاءة المالية العالية بتحديثات فورية حول نفقات القضايا والأرصدة، وهو ما لم يتمكن النظام القديم من توفيره بدقة.",
          solution: "نشر بوابة عملاء ليكسكورا ووحدة الشفافية المالية لمنح العملاء وصولاً آمناً وفورياً لوضعهم المالي.",
          metrics: [
            { value: "٥٠٪", label: "دورة فوترة أسرع" },
            { value: "٩٩.٩٪", label: "دقة الفواتير" },
            { value: "٤.٨/٥", label: "درجة رضا العملاء" }
          ],
          image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600"
        },
        {
          id: "3",
          firmName: "مكتب الشارقة المتخصص",
          title: "تأمين بيانات قانون الأسرة الحساسة",
          challenge: "تطلب التعامل مع قضايا قانون الأسرة الحساسة مستوى من أمن البيانات والتحكم في الوصول لم تتمكن البرامج الجاهزة من تقديمه.",
          solution: "استخدام وحدة الحوكمة في ليكسكورا مع أذونات دقيقة والخزنة السرية للملفات المقيدة.",
          metrics: [
            { value: "١٠٠٪", label: "تغطية سجل التدقيق" },
            { value: "٢٤/٧", label: "وصول آمن عن بعد" },
            { value: "ISO", label: "معايير أمان متوافقة" }
          ],
          image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600"
        }
      ]
    },
    pricing: {
      pageTitle: "أسعار شفافة للشركات الحديثة",
      pageSubtitle: "اختر الباقة التي تناسب حجم واحتياجات مكتبك.",
      toggleMonthly: "شهرياً",
      toggleAnnual: "سنوياً",
      saveLabel: "احصل على شهرين مجاناً",
      tiers: {
        starter: {
          name: "باقة البداية",
          stars: 2,
          priceMonthly: "١٩٩",
          priceAnnually: "١،٩٩٠",
          periodLabel: "درهم / مستخدم",
          minUsers: "الحد الأدنى: مستخدمين",
          features: [
            "إدارة القضايا والملفات (غير محدود)",
            "إدارة الموكلين والخصوم",
            "تتبع الجلسات + تذكيرات تلقائية",
            "إدارة الاستشارات والاجتماعات",
            "الفواتير الأساسية + تقارير مالية أساسية",
            "واجهة ثنائية اللغة (عربي/إنجليزي)",
            "نظام صلاحيات أساسي",
            "٢٠ جيجابايت تخزين سحابي/مستخدم",
            "دعم فني (بريد إلكتروني)",
            "جلسة تدريب عن بعد"
          ],
          cta: "ابدأ التجربة المجانية"
        },
        professional: {
          name: "باقة المحترفين",
          stars: 3,
          priceMonthly: "٣٤٩",
          priceAnnually: "٣،٤٩٠",
          periodLabel: "درهم / مستخدم",
          minUsers: "الحد الأدنى: ٤ مستخدمين",
          highlight: true,
          features: [
            "جميع ميزات باقة البداية",
            "مساعد قانوني ذكي (٢٠٠ استفسار)",
            "دليل حسابات متقدم + تقارير تفصيلية",
            "إدارة موارد بشرية كاملة",
            "إدارة الأصول",
            "مراقبة إنتاجية الفريق وتتبع الساعات",
            "نظام صلاحيات متقدم",
            "١٠٠ جيجابايت تخزين/مستخدم",
            "ربط برمجي أساسي (M365 / Google)",
            "دعم فني (واتساب + بريد إلكتروني)",
            "جلستين تدريب عن بعد"
          ],
          cta: "اختر المحترفين"
        },
        enterprise: {
          name: "باقة المؤسسات",
          stars: 4,
          priceMonthly: "+٥٠٠",
          priceAnnually: "مخصص",
          periodLabel: "تبدأ من درهم / مستخدم",
          minUsers: "الحد الأدنى: ٢٠ مستخدم",
          features: [
            "جميع ميزات باقة المحترفين",
            "مساعد ذكي غير محدود",
            "تخزين غير محدود",
            "ربط كامل (WhatsApp + Google + M365)",
            "تقارير مخصصة عند الطلب",
            "علامة تجارية خاصة (الشعار والهوية)",
            "مدير حساب مخصص",
            "دعم فني ٢٤/٧",
            "تنبيهات للأصول والعقود",
            "تدريب في الموقع (٤ جلسات)",
            "تتبع شامل لسجل النشاطات"
          ],
          cta: "اتصل بالمبيعات"
        }
      },
      discounts: {
        title: "خصومات الكميات",
        subtitle: "كلما زاد عدد المستخدمين، زاد التوفير.",
        tableHeadUser: "عدد المستخدمين",
        tableHeadDiscount: "نسبة الخصم",
        items: [
          { range: "٥-١٠ مستخدمين", discount: "٥٪" },
          { range: "١١-٢٠ مستخدم", discount: "١٠٪" },
          { range: "٢١-٥٠ مستخدم", discount: "١٥٪" },
          { range: "٥١+ مستخدم", discount: "٢٠٪" }
        ],
        note: "ملاحظة: تطبق الخصومات على السعر الشهري أو السنوي فقط."
      },
      referral: {
        title: "برنامج الإحالة",
        item1: "احصل على شهر مجاني لكل مكتب محاماة ترشحه وينضم للنظام.",
        item2: "يحصل المكتب المحال على خصم ١٥٪ في شهره الأول."
      }
    },
    privacyPolicy: {
      title: "سياسة الخصوصية",
      lastUpdated: "آخر تحديث: أكتوبر ٢٠٢٣",
      intro: "في ليكسكورا، نحن ملتزمون بحماية خصوصية وأمن بيانات عملائنا. تحدد سياسة الخصوصية هذه كيفية جمع واستخدام والإفصاح وحماية معلوماتك عند استخدام برنامج تخطيط موارد المؤسسات وموقعنا الإلكتروني. نحن نعمل في امتثال صارم للمرسوم بقانون اتحادي رقم ٤٥ لسنة ٢٠٢١ بشأن حماية البيانات الشخصية.",
      sections: [
        {
          heading: "١. المعلومات التي نجمعها",
          content: [
            "معلومات التعريف الشخصية: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، والمؤهلات المهنية عند التسجيل للحصول على حساب.",
            "بيانات القضايا: المعلومات المتعلقة بالقضايا القانونية، العملاء، والمستندات المحملة إلى النظام. تتم معالجة هذه البيانات فقط لغرض تقديم الخدمة.",
            "بيانات الاستخدام: معلومات حول كيفية الوصول إلى الخدمة واستخدامها، بما في ذلك عناوين IP، أنواع المتصفحات، وبيانات السجل."
          ]
        },
        {
          heading: "٢. كيف نستخدم معلوماتك",
          content: [
            "لتوفير وصيانة خدمة ليكسكورا ERP.",
            "لإدارة حسابك، الفوترة، والاشتراك.",
            "لإخطارك بالتغييرات في خدمتنا أو المواعيد القضائية.",
            "لتقديم دعم العملاء والمساعدة الفنية.",
            "للكشف عن ومنع ومعالجة المشاكل الفنية."
          ]
        },
        {
          heading: "٣. سيادة البيانات والأمن",
          content: [
            "نحن نعطي الأولوية لسيادة البيانات في الإمارات. يتم تخزين جميع بيانات العملاء الحساسة على خوادم آمنة ومشفرة تقع داخل الإمارات العربية المتحدة أو ولايات قضائية تعتبر ذات حماية كافية.",
            "نستخدم تشفيرًا من الدرجة المؤسسية (AES-256) للبيانات أثناء الراحة وأثناء النقل.",
            "يقتصر الوصول إلى بياناتك بشكل صارم على الموظفين المصرح لهم ويتم تسجيله عبر نظام تتبع التدقيق الخاص بنا."
          ]
        },
        {
          heading: "٤. الإفصاح عن المعلومات",
          content: [
            "نحن لا نبيع بياناتك الشخصية لأطراف ثالثة.",
            "قد نكشف عن بياناتك الشخصية إذا طُلب منا ذلك بموجب القانون أو استجابة لطلبات صحيحة من السلطات العامة (مثل محكمة أو وكالة حكومية في الإمارات).",
            "قد نشارك البيانات مع مزودي خدمة طرف ثالث موثوق بهم (مثل معالجي الدفع) فقط لغرض الوظائف التشغيلية."
          ]
        },
        {
          heading: "٥. حقوق بياناتك",
          content: [
            "الحق في الوصول: لديك الحق في طلب نسخ من بياناتك الشخصية.",
            "الحق في التصحيح: لديك الحق في طلب تصحيح المعلومات غير الدقيقة.",
            "الحق في المحو: لديك الحق في طلب حذف بياناتك الشخصية، مع مراعاة متطلبات الاحتفاظ القانونية."
          ]
        }
      ],
      contact: {
        heading: "اتصل بنا",
        text: "إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا:",
        email: "rased@almstkshf.com"
      }
    },
    trial: {
      pageTitle: "ابدأ تجربتك المجانية لمدة ١٤ يوماً",
      steps: {
        1: "البيانات الشخصية",
        2: "معلومات المكتب",
        3: "تأكيد"
      },
      form: {
        fullName: "الاسم الكامل",
        workEmail: "بريد العمل الإلكتروني",
        phone: "رقم الهاتف المتحرك",
        firmName: "اسم مكتب المحاماة",
        firmSize: "حجم المكتب",
        sizes: ["محام فردي", "٢-١٠ محامين", "١١-٥٠ محامياً", "٥٠+ محامياً"],
        next: "الخطوة التالية",
        back: "رجوع",
        submit: "إنشاء حساب"
      },
      success: {
        title: "مرحباً بكم في ليكسكورا",
        subtitle: "تم إنشاء حسابك بنجاح. لقد أرسلنا بريداً للتحقق إلى صندوق الوارد الخاص بك.",
        checklistTitle: "قائمة التحقق الخاصة بك",
        checklist: [
          "تحقق من عنوان بريدك الإلكتروني",
          "أكمل ملف تعريف المكتب",
          "قم بدعوة أعضاء الفريق",
          "حدد موعداً لمكالمة تعريفية"
        ],
        dashboardButton: "الذهاب إلى لوحة التحكم"
      },
      testimonial: {
        quote: "كانت عملية التسجيل سلسة للغاية. قمنا بنقل قاعدة بيانات القضايا بالكامل وتشغيلها في غضون ٤٨ ساعة.",
        author: "طارق الهاشمي، شريك إداري"
      }
    },
    insights: {
      title: "رؤى قانونية وتعليقات السوق",
      subtitle: "ابق في المقدمة مع تحديثات المشهد القانوني في الإمارات.",
      demoTitle: "جرب مساعدنا الذكي",
      demoPlaceholder: "اسأل عن قانون العمل الإماراتي (مثال: 'كيف يتم حساب المكافأة؟')",
      demoButton: "اسأل المساعد",
      articles: [
        { id: "1", category: "تحديث تنظيمي", title: "آثار ضريبة الشركات الجديدة على مكاتب المحاماة", date: "١٢ أكتوبر ٢٠٢٣", image: "https://picsum.photos/800/600?random=1" },
        { id: "2", category: "إدارة الممارسة", title: "رقمنة ملفات القضايا: دليل الامتثال", date: "٢٨ سبتمبر ٢٠٢٣", image: "https://picsum.photos/800/600?random=2" },
        { id: "4", category: "تحليل السوق", title: "صعود شركات التحكيم المتخصصة في دبي", date: "١٥ سبتمبر ٢٠٢٣", image: "https://picsum.photos/800/600?random=3" }
      ]
    },
    insightsPage: {
      pageTitle: "مركز ليكسكورا للرؤى",
      pageSubtitle: "تحليلات الخبراء، والتحديثات التنظيمية، واستراتيجيات إدارة الممارسة للمحترف القانوني الحديث في الإمارات.",
      searchPlaceholder: "ابحث عن مقالات، مواضيع، أو كلمات مفتاحية...",
      categories: ["الكل", "تنظيمي", "إدارة الممارسة", "التكنولوجيا القانونية", "تحليل السوق"],
      readMore: "اقرأ المقال كاملاً",
      backButton: "العودة إلى مركز الرؤى",
      items: [
        {
          id: "1",
          category: "تنظيمي",
          title: "الدليل الشامل لضريبة الشركات في الإمارات لمكاتب المحاماة",
          excerpt: "فهم آثار معدل ضريبة الشركات البالغ ٩٪ على الممارسات القانونية وكيفية هيكلة مكتبك للامتثال.",
          author: "د. حسن العلي",
          date: "١٢ أكتوبر ٢٠٢٣",
          readTime: "٨ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
          tags: ["قانون الضرائب", "الامتثال", "المالية"],
          content: [
            "يمثل تنفيذ المرسوم بقانون اتحادي رقم ٤٧ لسنة ٢٠٢٢ في شأن الضريبة على الشركات والأعمال تحولاً كبيراً في المشهد الاقتصادي لدولة الإمارات. بالنسبة لمكاتب المحاماة، وتحديداً تلك التي تعمل كشركات تضامن أو مؤسسات فردية، فإن فهم الفروق الدقيقة في هذا النظام الجديد أمر بالغ الأهمية للحفاظ على الربحية والامتثال.",
            "اعتباراً من السنوات المالية التي تبدأ في أو بعد ١ يونيو ٢٠٢٣، تطبق ضريبة الشركات بنسبة ٩٪ على الدخل الخاضع للضريبة الذي يتجاوز ٣٧٥،٠٠٠ درهم إماراتي. تم تحديد هذا الحد بشكل استراتيجي لدعم الشركات الناشئة والشركات الصغيرة، ولكن معظم الممارسات القانونية القائمة ستجد نفسها ضمن الشريحة الخاضعة للضريبة.",
            "بشكل حاسم، ينص القانون على بعض الإعفاءات والتسهيلات، لا سيما لكيانات المناطق الحرة التي تستوفي معايير 'الدخل المؤهل'. ومع ذلك، ستحتاج العديد من مكاتب المحاماة في البر الرئيسي إلى إعادة هيكلة تقارير نفقاتها. تلعب النفقات القابلة للخصم، مثل رواتب الموظفين والإيجار واشتراكات البرامج (مثل LEXCORA)، دوراً حيوياً في حساب الدخل النهائي الخاضع للضريبة. لم يعد التوثيق المناسب لهذه النفقات مجرد أفضل ممارسة؛ بل هو ضرورة تنظيمية.",
            "علاوة على ذلك، يجب على الشركاء في مكاتب المحاماة التمييز بين حصص أرباحهم ورواتبهم. أصدرت الهيئة الاتحادية للضرائب إرشادات محددة حول كيفية معاملة مكافآت الشركاء. قد يؤدي عدم الالتزام بهذه الإرشادات إلى فرض غرامات أو رفض الخصومات.",
            "نوصي جميع مكاتب المحاماة بتعيين مسؤول ضرائب متخصص أو التعاقد مع استشاريين خارجيين للتغلب على هذا الانتقال. يمكن أن يوفر دمج نظام تخطيط موارد المؤسسات الذي يصنف النفقات تلقائياً وفقاً لرموز الضرائب مئات الساعات الإدارية ويقلل من مخاطر الخطأ البشري خلال موسم تقديم الإقرارات الضريبية."
          ]
        },
        {
          id: "2",
          category: "إدارة الممارسة",
          title: "رقمنة ملفات القضايا: الانتقال إلى ما بعد الورق",
          excerpt: "إطار عمل خطوة بخطوة لنقل أرشيف مكتبك إلى نظام تخطيط موارد مؤسسات سحابي آمن دون تعطيل التقاضي المستمر.",
          author: "سارة جنكينز",
          date: "٢٨ سبتمبر ٢٠٢٣",
          readTime: "٦ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
          tags: ["التحول الرقمي", "الكفاءة", "العمليات"],
          content: [
             "عصر غرفة الملفات الورقية يوشك على الانتهاء. مع تسريع وزارة العدل الإماراتية لتبنيها لأنظمة المحاكم الذكية والجلسات عن بعد، تجد مكاتب المحاماة التي تعتمد على الأرشيف الورقي نفسها في وضع تنافسي غير مؤات. لم تعد الرقمنة رفاهية؛ بل هي شرط أساسي للممارسة القانونية الحديثة.",
             "ومع ذلك، فإن احتمال رقمنة آلاف ملفات القضايا المؤرشفة يمكن أن يكون شاقاً. يكمن مفتاح التحول الرقمي الناجح في اتباع نهج مرحلي. غالباً ما تؤدي محاولة مسح كل شيء ضوئياً دفعة واحدة إلى شلل تشغيلي. بدلاً من ذلك، نقترح استراتيجية 'من اليوم فصاعداً' جنباً إلى جنب مع المسح الضوئي الخلفي عند الطلب.",
             "المرحلة الأولى: سياسة 'من اليوم فصاعداً'. وضع قاعدة على مستوى المكتب بأن جميع القضايا الجديدة المفتوحة بعد تاريخ معين تولد رقمية. يتم تحميل المراسلات والمرافعات والأدلة مباشرة إلى نظام إدارة القضايا (CMS). يتم الاحتفاظ بالنسخ المادية فقط إذا كان ذلك إلزامياً قانوناً للتقديم الأصلي.",
             "المرحلة الثانية: ترحيل القضايا النشطة. تحديد جميع الملفات النشطة حالياً. يجب أن يكون لهذه الأولوية للمسح الضوئي. يجب تكليف فريق متخصص أو بائع خارجي برقمنة هذه الملفات خلال فترة محددة، مما يضمن فهرسة البيانات الوصفية (أرقام القضايا، أسماء العملاء، التواريخ) بدقة.",
             "المرحلة الثالثة: إدارة الأرشيف. بالنسبة للقضايا المغلقة، قم بالرقمنة فقط عند الطلب. إذا تم طلب ملف كمرجع، يتم مسحه ضوئياً. بمرور الوقت، تقلل هذه العملية العضوية من البصمة المادية دون استثمار ضخم مقدم.",
             "الأمن أمر بالغ الأهمية خلال هذا الانتقال. توفر أنظمة تخطيط موارد المؤسسات القائمة على السحابة مثل LEXCORA تشفيراً من الدرجة المصرفية وضوابط وصول دقيقة، مما يضمن الحفاظ على سرية العميل - غالباً بشكل أكثر أماناً مما هو عليه في خزانة مادية يمكن لأي شخص لديه مفتاح الوصول إليها."
          ]
        },
        {
          id: "3",
          category: "التكنولوجيا القانونية",
          title: "الذكاء الاصطناعي في التحكيم: المخاطر والمكافآت",
          excerpt: "استكشاف كيفية استخدام الذكاء الاصطناعي في حل النزاعات داخل محاكم مركز دبي المالي العالمي وسوق أبوظبي العالمي.",
          author: "كريم فايد",
          date: "١٥ سبتمبر ٢٠٢٣",
          readTime: "٥ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
          tags: ["الذكاء الاصطناعي", "التحكيم", "تكنولوجيا المستقبل"],
          content: [
            "يحدث الذكاء الاصطناعي موجات في التحكيم الدولي، وتعد المراكز المالية الرائدة في الإمارات، مركز دبي المالي العالمي وسوق أبوظبي العالمي، في طليعة هذا التبني. من التحليلات التنبؤية إلى مراجعة المستندات الآلية، يعيد الذكاء الاصطناعي تشكيل كيفية حل النزاعات.",
            "أحد التطبيقات الأكثر إلحاحاً هو الاكتشاف الإلكتروني. في التحكيم التجاري المعقد الذي يتضمن تيرابايت من البيانات، يمكن لخوارزميات الذكاء الاصطناعي فحص المستندات لتحديد الأدلة ذات الصلة بسرعة ودقة لا يمكن للفرق البشرية مضاهاتها. وهذا يقلل بشكل كبير من الوقت والتكلفة المرتبطين بمرحلة الإفصاح.",
            "العدالة التنبؤية هي حدود ناشئة أخرى. أصبحت الأدوات التي تحلل الأحكام السابقة للتنبؤ باحتمالية النجاح متطورة بشكل متزايد. في حين أن هذه الأدوات لا تحل محل الحكم القانوني، إلا أنها توفر نقاط بيانات قيمة لصياغة الاستراتيجية ومفاوضات التسوية.",
            "ومع ذلك، فإن صعود الذكاء الاصطناعي في التحكيم يثير أسئلة تنظيمية وأخلاقية مهمة. تمثل مشكلة 'الصندوق الأسود' - حيث يكون المنطق وراء استنتاج الذكاء الاصطناعي غامضاً - تحدياً لمبادئ العدالة الطبيعية والحق في قرار مسبب. علاوة على ذلك، يجب معالجة قضايا التحيز في بيانات التدريب لضمان العدالة.",
            "أنشأت محاكم مركز دبي المالي العالمي محكمة الاقتصاد الرقمي للتعامل بشكل خاص مع النزاعات الناشئة عن التقنيات الناشئة. مع تطور الإطار التنظيمي، يجب أن يصبح المحكمون والمحامون ملمين بالتكنولوجيا للدفاع بفعالية عن عملائهم في هذا المجال الرقمي الجديد."
          ]
        },
        {
          id: "4",
          category: "تحليل السوق",
          title: "صعود شركات التقاضي المتخصصة في دبي",
          excerpt: "لماذا تكتسب الشركات المتخصصة حصة سوقية أكبر من الممارسات العامة الكبيرة في مرحلة ما بعد الجائحة.",
          author: "فريق مراقبة السوق",
          date: "٣٠ أغسطس ٢٠٢٣",
          readTime: "٧ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
          tags: ["اتجاهات", "نمو", "استراتيجية"],
          content: [
             "يشهد سوق دبي القانوني تحولاً هيكلياً. لعقود من الزمان، هيمنت الشركات الدولية الكبيرة والممارسات العامة المحلية الضخمة على المشهد. ومع ذلك، تشير بيانات ما بعد الجائحة إلى هجرة كبيرة لأعمال التقاضي عالية القيمة إلى شركات متخصصة.",
             "هناك عدة عوامل تقود هذا الاتجاه. الأول هو الطلب على الخبرة المتخصصة. في بيئة تنظيمية متزايدة التعقيد، يفضل العملاء المعرفة العميقة في قطاعات محددة (مثل نزاعات البناء، أو القانون البحري، أو الجرائم المالية) على نموذج 'المتجر الشامل'.",
             "الثاني هو تضارب المصالح. غالباً ما تواجه الشركات الكبيرة مشاكل تضارب بسبب قواعد عملائها المؤسسية الضخمة، مما يمنعها من العمل ضد البنوك أو كبار المطورين. غالباً ما تكون الشركات المتخصصة، بقوائم عملائها الأصغر، خالية من التضارب ويمكنها متابعة المطالبات بقوة ضد الكيانات الكبرى.",
             "الثالث هو فعالية التكلفة والمرونة. بدون النفقات العامة لشبكة عالمية، يمكن للشركات المتخصصة تقديم هياكل رسوم أكثر تنافسية واهتمام شخصي من الشركاء. تلعب التكنولوجيا دوراً حاسماً هنا؛ تسمح أنظمة تخطيط موارد المؤسسات القائمة على السحابة لشركة مكونة من ١٠ محامين بالعمل بنفس الكفاءة والبنية التحتية لممارسة تضم ١٠٠ محام.",
             "بالنسبة لرواد الأعمال القانونيين الطموحين، يمثل هذا عصراً ذهبياً. يكافئ السوق المرونة والتخصص وتبني التكنولوجيا. الشركات التي ستنجح هي تلك التي تجمع بين الخبرة العميقة في الموضوع وإدارة الممارسة الحديثة والفعالة."
          ]
        },
        {
          id: "5",
          category: "تنظيمي",
          title: "الامتثال لمكافحة غسل الأموال: معايير جديدة لعام ٢٠٢٤",
          excerpt: "نظرة عامة على لوائح مكافحة غسل الأموال المحدثة التي تفرضها وزارة العدل وما تعنيه لإجراءات قبول العملاء.",
          author: "فاطمة السيد",
          date: "١٢ أغسطس ٢٠٢٣",
          readTime: "١٠ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
          tags: ["مكافحة غسل الأموال", "الامتثال", "المخاطر"],
          content: [
             "أدى التزام الإمارات العربية المتحدة بمكافحة الجرائم المالية إلى إصلاح صارم للوائح مكافحة غسل الأموال (AML) وتمويل الإرهاب (CTF). بالنسبة للمحامين، الذين تم تصنيفهم كأعمال ومهن غير مالية محددة (DNFBPs)، زاد عبء الامتثال بشكل كبير.",
             "تفرض معايير ٢٠٢٤ الجديدة نهجاً قائماً على المخاطر لقبول العملاء. لم يعد كافياً مجرد نسخ جواز سفر. يجب على مكاتب المحاماة إجراء العناية الواجبة المعززة (EDD) على العملاء من الولايات القضائية عالية المخاطر أو أولئك الذين تم تحديدهم كأشخاص معرضين سياسياً (PEPs).",
             "علاوة على ذلك، تم تبسيط آلية الإبلاغ عن تقارير الأنشطة المشبوهة (SARs) من خلال بوابة goAML. يمكن أن يؤدي الفشل في الإبلاغ عن المعاملات المشبوهة إلى عقوبات جنائية شديدة وإلغاء الترخيص. كثفت وزارة العدل حملاتها التفتيشية لضمان الالتزام.",
             "يجب على مكاتب المحاماة تنفيذ ضوابط داخلية قوية. ويشمل ذلك تعيين مسؤول امتثال، وإجراء تدريب منتظم للموظفين، والحفاظ على سجلات قابلة للتدقيق لجميع أنشطة العناية الواجبة. التكنولوجيا هي خط الدفاع الأول؛ تتضمن أنظمة تخطيط موارد المؤسسات القانونية الحديثة أدوات فحص مكافحة غسل الأموال المتكاملة التي تتحقق تلقائياً من أسماء العملاء مقابل قوائم العقوبات العالمية.",
             "لا ينبغي النظر إلى الامتثال مجرد تمرين لوضع علامة في المربع، بل كحجر زاوية لسمعة المكتب. في مركز مالي عالمي مثل دبي، يعد إظهار أعلى معايير النزاهة ميزة تنافسية."
          ]
        },
        {
          id: "6",
          category: "التكنولوجيا القانونية",
          title: "مستقبل العقود القانونية ثنائية اللغة",
          excerpt: "كيف يحل إنشاء المستندات الآلي متطلبات اللغة المزدوجة العربية والإنجليزية في محاكم الإمارات.",
          author: "جيمس ويلسون",
          date: "٢٢ يوليو ٢٠٢٣",
          readTime: "٦ دقائق قراءة",
          image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
          tags: ["الترجمة", "الأتمتة", "العقود"],
          content: [
             "في الإمارات العربية المتحدة، تعد ازدواجية اللغة جانباً أساسياً من الممارسة القانونية. في حين تتم الأعمال الدولية غالباً باللغة الإنجليزية، فإن اللغة الرسمية للمحاكم هي العربية. يخلق هذا عنق زجاجة دائم: الحاجة إلى ترجمة العقود والمرافعات الطويلة بدقة وبسرعة.",
             "تاريخياً، كانت هذه عملية يدوية ومكلفة وعرضة للخطأ. ومع ذلك، فإن الجيل القادم من التكنولوجيا القانونية يغير اللعبة. يمكن لأدوات إنشاء المستندات الآلية، المدمجة في أنظمة تخطيط موارد المؤسسات، الآن إنتاج عقود ثنائية اللغة ذات عمودين فوراً بناءً على قوالب معتمدة مسبقاً.",
             "تضمن هذه الأنظمة الاتساق في المصطلحات. يتم تعيين المصطلحات القانونية الفنية واحداً لواحد، مما يقلل من خطر تباين الترجمة الذي يغير المعنى القانوني لبند ما. هذا أمر حيوي بشكل خاص في بنود حل النزاعات حيث يمكن أن يكون الغموض قاتلاً.",
             "إلى جانب القوالب، يسمح التقدم في الترجمة الآلية العصبية (NMT) المدربة خصيصاً على المتون القانونية بترجمات المسودة الأولى للمستندات المخصصة بدقة ٨٠-٩٠٪. وهذا يحول دور المحامي من مترجم إلى مراجع، مما يزيد بشكل كبير من الرافعة المالية والربحية.",
             "الشركات التي تتقن هذه الأتمتة ثنائية اللغة ستهيمن على سوق المعاملات عبر الحدود، وتقدم أوقات استجابة أسرع وتكاليف أقل للعملاء الذين يعملون في هذا الاختصاص القضائي متعدد الثقافات."
          ]
        }
      ]
    },
    chatbot: {
      title: "مساعد LEXCORA",
      placeholder: "اكتب سؤالك هنا...",
      welcome: "مرحباً! أنا مساعد LEXCORA الذكي. كيف يمكنني مساعدتك في استكشاف خدماتنا اليوم؟",
      send: "إرسال",
      disclaimer: "ردود الذكاء الاصطناعي هي لأغراض إعلامية فقط ولا تشكل مشورة قانونية."
    },
    footer: {
      about: "ليكسكورا من شركة المستكشف. نظام تخطيط الموارد الأمثل للتميز القانوني في الإمارات.",
      contact: "تواصل معنا",
      address: "الطابق ١٦، مبنى الخاتم، جزيرة المارية، أبوظبي، الإمارات",
      privacy: "سياسة الخصوصية",
      compliance: "الامتثال وحماية البيانات",
      rights: "© ٢٠٢٤ ليكسكورا. جميع الحقوق محفوظة.",
      newsletter: {
        title: "ابق على اطلاع",
        description: "اشترك في نشرتنا الإخبارية للحصول على أحدث رؤى التكنولوجيا القانونية وتحديثات المنتج.",
        placeholder: "أدخل بريد العمل",
        button: "اشتراك",
        success: "شكراً لاشتراكك!"
      }
    }
  }
};