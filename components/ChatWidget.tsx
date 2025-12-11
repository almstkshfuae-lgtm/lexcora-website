import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Minimize2, Sparkles } from 'lucide-react';
import { LexCoraChatSession } from '../services/geminiService';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface ChatWidgetProps {
  lang: Language;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatSessionRef = useRef<LexCoraChatSession | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const t = CONTENT[lang].chatbot;

  useEffect(() => {
    // Initialize or re-initialize chat when language changes
    chatSessionRef.current = new LexCoraChatSession(lang);
    setMessages([{ role: 'model', text: t.welcome }]);
  }, [lang]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    if (chatSessionRef.current) {
      const responseText = await chatSessionRef.current.sendMessage(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    }
    
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50 w-14 h-14 rounded-full bg-lexcora-gold text-lexcora-blue shadow-xl flex items-center justify-center hover:bg-yellow-400 hover:scale-110 transition-all duration-300 border-2 border-white/20`}
        aria-label="Open Chat"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window */}
      <div 
        className={`fixed bottom-24 ${lang === 'ar' ? 'left-6' : 'right-6'} z-50 w-full max-w-[360px] md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden transition-all duration-300 origin-bottom ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="bg-lexcora-blue p-4 flex justify-between items-center text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-lexcora-gold/20 flex items-center justify-center text-lexcora-gold">
               <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-bold text-sm tracking-wide">{t.title}</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                <span className="text-[10px] text-slate-400">Online | Gemini 3 Pro</span>
              </div>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <Minimize2 size={18} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="h-96 bg-slate-50 overflow-y-auto p-4 flex flex-col gap-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-lexcora-blue text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
               <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm flex items-center gap-2">
                 <Loader2 size={16} className="animate-spin text-lexcora-gold" />
                 <span className="text-xs text-slate-400">Typing...</span>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-slate-100">
          <div className="relative flex items-center gap-2">
            <input 
              type="text" 
              className="w-full bg-slate-100 border border-slate-200 rounded-full py-3 px-4 text-sm focus:outline-none focus:border-lexcora-gold focus:ring-1 focus:ring-lexcora-gold/20 transition-all placeholder:text-slate-400"
              placeholder={t.placeholder}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-3 bg-lexcora-gold text-lexcora-blue rounded-full hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-md"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2 px-2">
            {t.disclaimer}
          </p>
        </div>
      </div>
    </>
  );
};