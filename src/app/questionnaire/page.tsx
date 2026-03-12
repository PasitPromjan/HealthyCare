"use client";

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Heart, User, Calendar, Clock, MapPin, Activity, ShieldAlert, ClipboardCheck } from 'lucide-react';

export default function QuestionnairePage() {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
    const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="flex-1 w-full max-w-5xl mx-auto px-4 py-8 md:py-12 flex flex-col">

                {/* Progress Bar */}
                <div className="mb-12">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-bold text-slate-500 uppercase tracking-widest">ขั้นตอนที่ {step} จาก {totalSteps}</span>
                        <span className="text-sm font-bold text-brand">{Math.round((step / totalSteps) * 100)}% เสร็จสมบูรณ์</span>
                    </div>
                    <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-brand transition-all duration-500 ease-out"
                            style={{ width: `${(step / totalSteps) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 flex-1">
                    {step === 1 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-green-100 rounded-2xl text-brand">
                                    <User className="w-8 h-8" />
                                </div>
                                <h1 className="text-3xl font-extrabold text-slate-800">ข้อมูลเบื้องต้น</h1>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">1. สนใจมองหาที่พักหรือการดูแลให้ใครคะ?</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {['ให้ตัวเอง', 'ให้คุณพ่อ/คุณแม่', 'ให้คู่สมรส', 'ให้ญาติผู้ใหญ่'].map((opt) => (
                                            <label key={opt} className="cursor-pointer">
                                                <input type="radio" name="who" className="peer sr-only" />
                                                <div className="p-4 border-2 border-slate-100 rounded-2xl hover:border-brand/30 peer-checked:border-brand peer-checked:bg-green-50 transition-all font-semibold text-slate-600 peer-checked:text-brand">
                                                    {opt}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">2. ผู้รับการดูแลอายุประมาณเท่าไหร่คะ?</h3>
                                    <input type="number" placeholder="ระบุอายุ" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-brand transition-colors text-lg" />
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">3. พื้นที่หรือรหัสไปรษณีย์ที่ท่านสะดวก?</h3>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input type="text" placeholder="ระบุจังหวัดหรือรหัสไปรษณีย์" className="w-full p-4 pl-12 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-brand transition-colors text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-green-100 rounded-2xl text-brand">
                                    <Calendar className="w-8 h-8" />
                                </div>
                                <h1 className="text-3xl font-extrabold text-slate-800">แผนการเข้าพัก</h1>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">4. สะดวกให้เริ่มดูแลได้เมื่อไหร่คะ?</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {['ทันที', 'ภายใน 1 เดือน', 'มากกว่า 1 เดือนขึ้นไป'].map((opt) => (
                                            <label key={opt} className="cursor-pointer">
                                                <input type="radio" name="start" className="peer sr-only" />
                                                <div className="p-4 border-2 border-slate-100 rounded-2xl hover:border-brand/30 peer-checked:border-brand peer-checked:bg-green-50 transition-all font-semibold text-slate-600 peer-checked:text-brand text-center">
                                                    {opt}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">5. วางแผนจองที่พักไว้นานแค่ไหนคะ?</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {['พักระยะยาว (ถาวร)', 'พักระยะสั้น (เช่น ช่วงฟื้นฟู)', 'ยังไม่แน่ใจ'].map((opt) => (
                                            <label key={opt} className="cursor-pointer">
                                                <input type="radio" name="duration" className="peer sr-only" />
                                                <div className="p-4 border-2 border-slate-100 rounded-2xl hover:border-brand/30 peer-checked:border-brand peer-checked:bg-green-50 transition-all font-semibold text-slate-600 peer-checked:text-brand">
                                                    {opt}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-green-100 rounded-2xl text-brand">
                                    <Activity className="w-8 h-8" />
                                </div>
                                <h1 className="text-3xl font-extrabold text-slate-800">สุขภาพและการดูแล</h1>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">6. ต้องการความช่วยเหลือในการดูแลส่วนตัวอย่างไรบ้าง?</h3>
                                    <p className="text-slate-500 mb-4 text-base">เช่น อาบน้ำ, แต่งตัว, เข้าห้องน้ำ</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                        {['ดูแลใกล้ชิด', 'ต้องการเป็นบางครั้ง', 'ดูแลตัวเองได้หมด'].map((opt) => (
                                            <label key={opt} className="cursor-pointer">
                                                <input type="radio" name="personal" className="peer sr-only" />
                                                <div className="p-4 border-2 border-slate-100 rounded-2xl hover:border-brand/30 peer-checked:border-brand peer-checked:bg-green-50 transition-all font-semibold text-slate-600 peer-checked:text-brand text-center">
                                                    {opt}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">7. ท่านยังสามารถเคลื่อนไหวเองได้สะดวกหรือไม่คะ?</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {['เดินได้ปกติ', 'ต้องการไม้เท้า/ช่วยพยุง', 'ใช้รถเข็น', 'นอนติดเตียง'].map((opt) => (
                                            <label key={opt} className="cursor-pointer">
                                                <input type="radio" name="mobility" className="peer sr-only" />
                                                <div className="p-4 border-2 border-slate-100 rounded-2xl hover:border-brand/30 peer-checked:border-brand peer-checked:bg-green-50 transition-all font-semibold text-slate-600 peer-checked:text-brand">
                                                    {opt}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-rose-100 rounded-2xl text-rose-600">
                                    <ShieldAlert className="w-8 h-8" />
                                </div>
                                <h1 className="text-3xl font-extrabold text-slate-800">ความต้องการพิเศษ</h1>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">8. ท่านมีภาวะสมองเสื่อม (Dementia) หรือไม่คะ?</h3>
                                    <div className="flex gap-4">
                                        {['มี', 'ไม่มี', 'ไม่แน่ใจ'].map((opt) => (
                                            <label key={opt} className="flex-1 cursor-pointer">
                                                <input type="radio" name="dementia" className="peer sr-only" />
                                                <div className="p-4 border-2 border-slate-100 rounded-2xl hover:border-brand/30 peer-checked:border-brand peer-checked:bg-green-50 transition-all font-semibold text-slate-600 peer-checked:text-brand text-center">
                                                    {opt}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-700 mb-3">9. ประเภทสมองเสื่อม (หากมี)</h3>
                                        <input type="text" placeholder="เช่น อัลไซเมอร์" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-brand transition-colors text-base" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-700 mb-3">10. อาการในแต่ละวันเป็นอย่างไร?</h3>
                                        <input type="text" placeholder="เช่น เริ่มหลงลืมบ่อย" className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-brand transition-colors text-base" />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold text-slate-700 mb-4">11. มีความต้องการทางการพยาบาลพิเศษอื่นๆ หรือไม่?</h3>
                                    <textarea
                                        placeholder="เช่น แผลกดทับ, ต้องการออกซิเจน, ใส่สายยางให้อาหาร ฯลฯ"
                                        className="w-full p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-brand transition-colors text-lg min-h-[120px]"
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Navigation Footer */}
            <div className="bg-white border-t border-slate-200 py-6 px-4 md:px-12 flex justify-between items-center sticky bottom-0 z-10 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
                {step > 1 ? (
                    <button
                        onClick={prevStep}
                        className="flex items-center gap-2 text-slate-600 font-bold hover:text-slate-900 transition-colors py-3 px-6 rounded-xl hover:bg-slate-100"
                    >
                        <ArrowLeft className="w-5 h-5" /> ย้อนกลับ
                    </button>
                ) : (
                    <Link href="/">
                        <button className="flex items-center gap-2 text-slate-600 font-bold hover:text-slate-900 transition-colors py-3 px-6 rounded-xl hover:bg-slate-100">
                            <ArrowLeft className="w-5 h-5" /> กลับหน้าหลัก
                        </button>
                    </Link>
                )}

                <div className="flex gap-4">
                    {step < totalSteps ? (
                        <button
                            onClick={nextStep}
                            className="bg-brand hover:bg-brand-hover text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-brand/20 transition-all hover:shadow-xl flex items-center gap-2"
                        >
                            ถัดไป <ArrowRight className="w-5 h-5" />
                        </button>
                    ) : (
                        <Link href="/budget">
                            <button className="bg-brand hover:bg-brand-hover text-white font-bold py-3 px-10 rounded-xl shadow-lg shadow-brand/20 transition-all hover:shadow-xl flex items-center gap-2">
                                <ClipboardCheck className="w-5 h-5" /> ส่งข้อมูล
                            </button>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
