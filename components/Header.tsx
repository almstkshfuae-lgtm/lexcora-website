import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, User } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { Button } from './Button';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  onLoginClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const navLinks = [
    { label: t.home, href: '#' },
    { label: t.features, href: '#features' },
    { label: t.insights, href: '#insights' },
    { label: t.contact, href: '#footer' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-lexcora-blue/95 backdrop-blur-md shadow-xl py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-lexcora-gold rounded-sm flex items-center justify-center">
             <span className="text-lexcora-blue font-serif font-bold text-2xl">L</span>
          </div>
          <span className={`text-2xl font-serif font-bold tracking-widest ${isScrolled ? 'text-white' : 'text-lexcora-blue'}`}>
            LEXCORA
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href} 
              className={`text-sm font-medium hover:text-lexcora-gold transition-colors ${isScrolled ? 'text-gray-300' : 'text-lexcora-blue'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button 
            onClick={toggleLang}
            className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-lexcora-gold ${isScrolled ? 'text-white' : 'text-lexcora-blue'}`}
          >
            <Globe size={16} />
            {lang === 'en' ? 'العربية' : 'English'}
          </button>
          
          <Button 
            variant="outline" 
            className={`!py-2 !px-4 ${!isScrolled && '!border-lexcora-blue !text-lexcora-blue hover:!bg-lexcora-blue/5'}`}
            onClick={onLoginClick}
          >
            <User size={16} />
            {t.portal}
          </Button>

          <Button variant="primary" className="!py-2 !px-4">
            {t.demo}
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-lexcora-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-lexcora-blue border-t border-gray-800 p-6 flex flex-col gap-4 shadow-2xl lg:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-lexcora-gold text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px bg-gray-700 my-2"></div>
          <button onClick={toggleLang} className="text-left text-gray-300 hover:text-lexcora-gold flex items-center gap-2">
            <Globe size={18} /> {lang === 'en' ? 'العربية' : 'English'}
          </button>
          <Button onClick={onLoginClick} variant="outline" fullWidth>{t.portal}</Button>
          <Button variant="primary" fullWidth>{t.demo}</Button>
        </div>
      )}
    </header>
  );
};