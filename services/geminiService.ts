import { GoogleGenAI, Chat } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const getLegalAssistantResponse = async (query: string, lang: 'en' | 'ar'): Promise<string> => {
  if (!apiKey) {
    return lang === 'en' 
      ? "Demo Mode: API Key not configured. (Simulated Response) According to UAE Labour Law..." 
      : "وضع تجريبي: مفتاح API غير مكون. (رد محاكى) وفقاً لقانون العمل الإماراتي...";
  }

  try {
    const systemInstruction = lang === 'en'
      ? "You are a highly professional, formal UAE legal assistant for the LEXCORA ERP system. Answer questions briefly, citing general UAE legal principles. Keep it under 50 words. Be authoritative."
      : "أنت مساعد قانوني إماراتي محترف للغاية لنظام LEXCORA ERP. أجب عن الأسئلة باختصار، مع الاستشهاد بالمبادئ القانونية العامة في الإمارات. اجعل الإجابة أقل من 50 كلمة. كن موثوقاً.";

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: query,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text || (lang === 'en' ? "No response generated." : "لم يتم إنشاء استجابة.");
  } catch (error) {
    console.error("Gemini API Error:", error);
    return lang === 'en' 
      ? "Service temporarily unavailable. Please try again later."
      : "الخدمة غير متوفرة حالياً. يرجى المحاولة مرة أخرى لاحقاً.";
  }
};

export class LexCoraChatSession {
  private chat: Chat | null = null;
  private lang: 'en' | 'ar';

  constructor(lang: 'en' | 'ar') {
    this.lang = lang;
    if (apiKey) {
      const systemInstruction = lang === 'en'
        ? "You are the AI Assistant for LEXCORA, a premium Law Firm ERP system in the UAE. Assist potential clients with information about LEXCORA's features (Case Management, Client Portal, Governance, Finance). You can also answer general questions about UAE law concepts professionally but must disclaim you are not a lawyer. Be concise, professional, and use a tone suitable for high-net-worth legal professionals."
        : "أنت مساعد الذكاء الاصطناعي لنظام LEXCORA، وهو نظام تخطيط موارد مؤسسات قانوني متميز في الإمارات. ساعد العملاء المحتملين بمعلومات حول ميزات LEXCORA (إدارة القضايا، بوابة العملاء، الحوكمة، المالية). يمكنك أيضًا الإجابة عن أسئلة عامة حول مفاهيم القانون الإماراتي بمهنية ولكن يجب أن تنوه بأنك لست محامياً. كن موجزاً ومهنياً واستخدم نبرة تناسب المحترفين القانونيين.";
      
      this.chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: { systemInstruction }
      });
    }
  }

  async sendMessage(message: string): Promise<string> {
    if (!apiKey || !this.chat) {
      return this.lang === 'en'
        ? "Demo Mode: API Key not configured. I cannot process real-time requests without an API key."
        : "الوضع التجريبي: مفتاح API غير مكون. لا يمكنني معالجة الطلبات في الوقت الفعلي بدون مفتاح.";
    }

    try {
      const response = await this.chat.sendMessage({ message });
      return response.text || "";
    } catch (error) {
      console.error("Gemini Chat Error:", error);
      return this.lang === 'en' 
        ? "I apologize, but I am encountering technical difficulties at the moment."
        : "أعتذر، ولكنني أواجه صعوبات فنية في الوقت الحالي.";
    }
  }
}