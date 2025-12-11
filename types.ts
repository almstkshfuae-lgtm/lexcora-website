import { LucideIcon } from 'lucide-react';

export type Language = 'en' | 'ar';

export interface NavItem {
  label: string;
  href: string;
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

export interface ContentDictionary {
  nav: {
    home: string;
    features: string;
    insights: string;
    contact: string;
    portal: string;
    demo: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaPrimary: string;
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
  insights: {
    title: string;
    subtitle: string;
    demoTitle: string;
    demoPlaceholder: string;
    demoButton: string;
    articles: Array<{
      category: string;
      title: string;
      date: string;
      image: string;
    }>;
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
  };
}