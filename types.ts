import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar';
export type View = 'home' | 'case-studies' | 'trial' | 'insights';

export interface NavItem {
  label: string;
  href: string;
  view?: View;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface FeatureSection {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  firm: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface CaseStudyItem {
  id: string;
  firmName: string;
  title: string;
  challenge: string;
  solution: string;
  metrics: Metric[];
  image: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export interface ContentDictionary {
  nav: {
    home: string;
    features: string;
    insights: string;
    caseStudies: string;
    contact: string;
    portal: string;
    demo: string;
    freeTrial: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaCallback: string;
    ctaSecondary: string;
    trustBadge: string;
  };
  features: {
    sectionTitle: string;
    productivity: FeatureSection;
    client: FeatureSection;
    governance: FeatureSection;
    intelligence: FeatureSection;
    integration: FeatureSection;
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  caseStudies: {
    pageTitle: string;
    pageSubtitle: string;
    items: CaseStudyItem[];
    ctaTitle: string;
    ctaButton: string;
  };
  trial: {
    pageTitle: string;
    steps: {
      1: string;
      2: string;
      3: string;
    };
    form: {
      fullName: string;
      workEmail: string;
      firmName: string;
      firmSize: string;
      sizes: string[];
      phone: string;
      next: string;
      back: string;
      submit: string;
    };
    success: {
      title: string;
      subtitle: string;
      checklistTitle: string;
      checklist: string[];
      dashboardButton: string;
    };
    testimonial: {
      quote: string;
      author: string;
    };
  };
  insights: {
    title: string;
    subtitle: string;
    demoTitle: string;
    demoPlaceholder: string;
    demoButton: string;
    // Homepage summary articles
    articles: Array<{
      category: string;
      title: string;
      date: string;
      image: string;
    }>;
  };
  insightsPage: {
    pageTitle: string;
    pageSubtitle: string;
    searchPlaceholder: string;
    categories: string[];
    readMore: string;
    items: InsightArticle[];
  };
  chatbot: {
    title: string;
    placeholder: string;
    welcome: string;
    send: string;
    disclaimer: string;
  };
  footer: {
    about: string;
    contact: string;
    address: string;
    privacy: string;
    compliance: string;
    rights: string;
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      button: string;
      success: string;
    };
  };
}