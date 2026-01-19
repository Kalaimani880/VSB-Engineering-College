
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/geminiService';
import { Message } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm the VSB Assistant. I can tell you about the latest campus news, daily schedules, or placement stats." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (overrideText?: string) => {
    const textToSend = overrideText || input;
    if (!textToSend.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const aiResponse = await getGeminiResponse(textToSend, history);
    setMessages(prev => [...prev, { role: 'model', text: aiResponse || 'No response received.' }]);
    setIsLoading(false);
  };

  const quickPrompts = [
    { label: "Latest News", text: "What are the latest news and announcements at VSB?" },
    { label: "Daily Schedule", text: "What is the daily schedule at the college?" },
    { label: "Placements", text: "Tell me about the 2026 placement drive." },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col border border-gray-200 overflow-hidden h-[550px]">
          {/* Header */}
          <div className="bg-blue-800 text-white p-4 flex justify-between items-center shadow-md">
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                  <i className="fas fa-robot"></i>
                </div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <span className="font-semibold block leading-none">VSB Assistant</span>
                <span className="text-[10px] text-blue-200">Online • Live Updates</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-200 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          {/* Quick Prompts Container */}
          {!isLoading && (
            <div className="px-4 py-2 flex gap-2 overflow-x-auto no-scrollbar bg-gray-50/50 border-t border-gray-100">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(p.text)}
                  className="whitespace-nowrap bg-white border border-blue-200 text-blue-800 text-[10px] font-bold px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors shadow-sm"
                >
                  {p.label}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your question..."
              className="flex-1 text-sm border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
            />
            <button
              onClick={() => handleSend()}
              disabled={isLoading}
              className={`bg-blue-800 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-900 transition-all ${isLoading ? 'opacity-50 cursor-not-allowed' : 'active:scale-90'}`}
            >
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-800 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 group"
        >
          <div className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
            !
          </div>
          <i className="fas fa-comment-dots text-2xl group-hover:rotate-12 transition-transform"></i>
        </button>
      )}
    </div>
  );
};

export default AIChatBot;
