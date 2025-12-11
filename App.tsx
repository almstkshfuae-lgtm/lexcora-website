import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Insights } from './components/Insights';
import { Footer } from './components/Footer';
import { LoginModal } from './components/LoginModal';
import { ChatWidget } from './components/ChatWidget';
import { Language } from './types';

function App() {
  const [lang, setLang] = useState<Language>('en');
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    // Handle RTL/LTR document direction
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    // Switch font based on language
    if (lang === 'ar') {
      document.body.classList.remove('font-sans');
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-sans');
    }
  }, [lang]);

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} setLang={setLang} onLoginClick={() => setLoginOpen(true)} />
      
      <main>
        <Hero lang={lang} />
        <Features lang={lang} />
        <Insights lang={lang} />
      </main>

      <Footer lang={lang} />
      
      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} lang={lang} />
      <ChatWidget lang={lang} />
    </div>
  );
}

export default App;