import React, { useState } from 'react';
import { Language, FeatureSection } from '../types';
import { CONTENT } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FeaturesProps {
  lang: Language;
}

const FeatureBlock: React.FC<{ section: FeatureSection; index: number }> = ({ section, index }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`p-8 rounded-2xl transition-all duration-300 border ${isOpen ? 'bg-white border-lexcora-gold/30 shadow-xl' : 'bg-slate-50 border-transparent hover:bg-white'}`}>
      <div 
        className="flex justify-between items-start cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className="text-2xl font-serif font-bold text-lexcora-blue mb-2">{section.title}</h3>
          <p className="text-slate-500">{section.subtitle}</p>
        </div>
        <button className="text-lexcora-gold mt-1">
          {isOpen ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-8 grid md:grid-cols-3 gap-6 animate-fade-in">
          {section.items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="bg-slate-50 p-5 rounded-lg border border-slate-100 hover:border-lexcora-gold/50 transition-colors group">
                <div className="w-12 h-12 bg-lexcora-blue text-lexcora-gold rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h4 className="font-semibold text-lg text-lexcora-blue mb-2">{item.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

export const Features: React.FC<FeaturesProps> = ({ lang }) => {
  const t = CONTENT[lang].features;

  const featureList = [
    t.productivity,
    t.client,
    t.governance,
    t.intelligence,
    t.integration
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-lexcora-gold font-bold tracking-widest text-sm uppercase">LEXCORA ERP</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-lexcora-blue mt-4">{t.sectionTitle}</h2>
          <div className="w-24 h-1 bg-lexcora-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-8">
          {featureList.map((section, idx) => (
            <FeatureBlock key={idx} section={section} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};