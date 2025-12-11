import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = CONTENT[lang].footer;

  return (
    <footer id="footer" className="bg-lexcora-blue text-slate-300 pt-20 pb-10 border-t-4 border-lexcora-gold">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-white tracking-wider">LEXCORA</h2>
            <p className="text-sm leading-relaxed text-slate-400">{t.about}</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-lexcora-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-lexcora-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-lexcora-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">{t.contact}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin size={18} className="text-lexcora-gold shrink-0" />
                <span>{t.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="text-lexcora-gold shrink-0" />
                <span>contact@lexcora.ae</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="text-lexcora-gold shrink-0" />
                <span>+971 4 123 4567</span>
              </li>
            </ul>
          </div>

          {/* Links 1 */}
          <div>
            <h3 className="text-white font-bold mb-6">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Case Management</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security & Governance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

           {/* Legal */}
           <div>
            <h3 className="text-white font-bold mb-6">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">{t.privacy}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t.compliance}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>{t.rights}</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <div className="w-2 h-2 bg-green-500 rounded-full"></div>
             <span>Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};