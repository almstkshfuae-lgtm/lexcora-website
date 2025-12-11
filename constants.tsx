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
      freeTrial: "Start Free Trial"
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
        { category: "Regulatory Update", title: "New UAE Corporate Tax Implications for Law Firms", date: "Oct 12, 2023", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" },
        { category: "Practice Management", title: "Digitizing Case Files: A Compliance Guide", date: "Sep 28, 2023", image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800" },
        { category: "Market Analysis", title: "The Rise of Boutique Arbitration Firms in Dubai", date: "Sep 15, 2023", image: "https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?auto=format&fit=crop&q=80&w=800" }
      ]
    },
    insightsPage: {
      pageTitle: "LEXCORA Intelligence Hub",
      pageSubtitle: "Expert analysis, regulatory updates, and practice management strategies for the modern UAE legal professional.",
      searchPlaceholder: "Search articles, topics, or keywords...",
      categories: ["All", "Regulatory", "Practice Management", "Legal Tech", "Market Analysis"],
      readMore: "Read Full Article",
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
          tags: ["Tax Law", "Compliance", "Finance"]
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
          tags: ["Digital Transformation", "Efficiency", "Operations"]
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
          tags: ["AI", "Arbitration", "Future Tech"]
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
          tags: ["Trends", "Growth", "Strategy"]
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
          tags: ["AML", "Compliance", "Risk"]
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
          tags: ["Translation", "Automation", "Contracts"]
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
      address: "Level 29, Marina Plaza, Dubai Marina, UAE",
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
      freeTrial: "ابدأ التجربة المجانية"
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
        { category: "تحديث تنظيمي", title: "آثار ضريبة الشركات الجديدة على مكاتب المحاماة", date: "١٢ أكتوبر ٢٠٢٣", image: "https://picsum.photos/800/600?random=1" },
        { category: "إدارة الممارسة", title: "رقمنة ملفات القضايا: دليل الامتثال", date: "٢٨ سبتمبر ٢٠٢٣", image: "https://picsum.photos/800/600?random=2" },
        { category: "تحليل السوق", title: "صعود شركات التحكيم المتخصصة في دبي", date: "١٥ سبتمبر ٢٠٢٣", image: "https://picsum.photos/800/600?random=3" }
      ]
    },
    insightsPage: {
      pageTitle: "مركز ليكسكورا للرؤى",
      pageSubtitle: "تحليلات الخبراء، والتحديثات التنظيمية، واستراتيجيات إدارة الممارسة للمحترف القانوني الحديث في الإمارات.",
      searchPlaceholder: "ابحث عن مقالات، مواضيع، أو كلمات مفتاحية...",
      categories: ["الكل", "تنظيمي", "إدارة الممارسة", "التكنولوجيا القانونية", "تحليل السوق"],
      readMore: "اقرأ المقال كاملاً",
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
          tags: ["قانون الضرائب", "الامتثال", "المالية"]
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
          tags: ["التحول الرقمي", "الكفاءة", "العمليات"]
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
          tags: ["الذكاء الاصطناعي", "التحكيم", "تكنولوجيا المستقبل"]
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
          tags: ["اتجاهات", "نمو", "استراتيجية"]
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
          tags: ["مكافحة غسل الأموال", "الامتثال", "المخاطر"]
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
          tags: ["الترجمة", "الأتمتة", "العقود"]
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
      address: "الطابق ٢٩، مارينا بلازا، دبي مارينا، الإمارات",
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