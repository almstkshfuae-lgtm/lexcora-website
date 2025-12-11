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
      insights: "Insights",
      contact: "Contact",
      portal: "Client Login",
      demo: "Request Demo"
    },
    hero: {
      title: "The Future of Legal Practice in the UAE",
      subtitle: "LEXCORA is the premier ERP suite designed for high-net-worth law firms. Seamlessly integrate productivity, governance, and client experience.",
      ctaPrimary: "Request a Private Demo",
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
    insights: {
      title: "Legal Insights & Market Commentary",
      subtitle: "Stay ahead with updates from the UAE legal landscape.",
      demoTitle: "Experience Our Smart Assistant",
      demoPlaceholder: "Ask about UAE Labour Law (e.g., 'What is the gratuity calculation?')",
      demoButton: "Ask Assistant",
      articles: [
        { category: "Regulatory Update", title: "New UAE Corporate Tax Implications for Law Firms", date: "Oct 12, 2023", image: "https://picsum.photos/800/600?random=1" },
        { category: "Practice Management", title: "Digitizing Case Files: A Compliance Guide", date: "Sep 28, 2023", image: "https://picsum.photos/800/600?random=2" },
        { category: "Market Analysis", title: "The Rise of Boutique Arbitration Firms in Dubai", date: "Sep 15, 2023", image: "https://picsum.photos/800/600?random=3" }
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
      rights: "© 2024 LEXCORA. All Rights Reserved."
    }
  },
  ar: {
    nav: {
      home: "الرئيسية",
      features: "المميزات",
      insights: "رؤى وأخبار",
      contact: "اتصل بنا",
      portal: "بوابة العملاء",
      demo: "طلب تجريبي"
    },
    hero: {
      title: "مستقبل المحاماة في الإمارات",
      subtitle: "ليكسكورا هو نظام تخطيط موارد المؤسسات الرائد المصمم لمكاتب المحاماة الكبرى. دمج سلس بين الإنتاجية، والحوكمة، وتجربة العملاء.",
      ctaPrimary: "طلب عرض خاص",
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
      rights: "© ٢٠٢٤ ليكسكورا. جميع الحقوق محفوظة."
    }
  }
};