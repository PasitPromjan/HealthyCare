"use client";

import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import { useState } from 'react';

// Mock useChat for frontend-only demo
function useMockChat() {
    const [messages, setMessages] = useState<any[]>([
        {
            id: '1',
            role: 'assistant',
            content: 'สวัสดีค่ะ ฉันคือผู้ช่วย AI RAG ยินดีให้คำแนะนำเกี่ยวกับบ้านพักคนชรา ต้องการให้ฉันช่วยค้นหาบ้านพักแบบไหนคะ?',
        }
    ]);
    const [input, setInput] = useState('');

    const handleInputChange = (e: any) => setInput(e.target.value);
    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMsg = { id: Date.now().toString(), role: 'user', content: input };
        setMessages([...messages, newMsg]);
        setInput('');

        // Mock AI response
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                role: 'assistant',
                content: 'ระบบกำลังดึงข้อมูลด้วย RAG จากฐานข้อมูล SQL... บ้านพักที่คุณค้นหามีดังนี้...'
            }]);
        }, 1000);
    };

    return { messages, input, handleInputChange, handleSubmit };
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, input, handleInputChange, handleSubmit } = useMockChat();

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-105 z-50 flex items-center justify-center"
                    aria-label="Open AI Assistant"
                >
                    <MessageCircle className="w-8 h-8" />
                    <span className="absolute -top-2 -right-2 flex h-5 w-5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-2 border-white"></span>
                    </span>
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-full max-w-sm sm:max-w-md bg-white rounded-3xl shadow-2xl z-50 flex flex-col h-[600px] max-h-[85vh] overflow-hidden border border-slate-100 animate-in slide-in-from-bottom-5">
                    {/* Header */}
                    <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
                        <div className="flex items-center gap-3">
                            <div className="bg-white/20 p-2 rounded-full">
                                <Bot className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">AI ผู้ช่วยส่วนตัว</h3>
                                <p className="text-sm text-blue-100">ขับเคลื่อนด้วยเทคโนโลยี RAG</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
                        {messages.map((m: any) => (
                            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${m.role === 'user' ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                        {m.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                                    </div>
                                    <div className={`p-3 rounded-2xl text-[15px] leading-relaxed ${m.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white text-slate-700 shadow-sm border border-slate-100 rounded-tl-sm'}`}>
                                        {m.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="p-4 bg-white border-t border-slate-100">
                        <form onSubmit={handleSubmit} className="flex gap-2">
                            <input
                                value={input}
                                onChange={handleInputChange}
                                placeholder="พิมพ์ข้อความของคุณที่นี่..."
                                className="flex-1 bg-slate-100 text-slate-800 p-3 px-4 rounded-full outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                disabled={!input.trim()}
                                className="bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors shrink-0 flex items-center justify-center"
                            >
                                <Send className="w-5 h-5 ml-1" />
                            </button>
                        </form>
                        <p className="text-center text-xs text-slate-400 mt-2">
                            *ข้อมูลจะถูกจัดเก็บใน MongoDB แบบ JSON (จำลอง)
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}
