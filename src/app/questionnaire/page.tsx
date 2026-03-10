import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

export default function QuestionnairePage() {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col">
            <div className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row gap-12 items-center justify-center">

                {/* Left Side: Illustration / Banner (Mocked with gradient/color for now) */}
                <div className="hidden md:flex w-full md:w-5/12 h-[500px] bg-blue-100 rounded-3xl items-center justify-center p-8 relative overflow-hidden shadow-sm">
                    {/* In a real scenario, an SVG illustration would go here matching the reference. 
                       We are creating a beautiful soft placeholder to mimic the vibe. */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-300 to-indigo-300 opacity-50"></div>
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div>
                    <h2 className="text-blue-900 text-4xl font-extrabold z-10 text-center leading-relaxed drop-shadow-sm">
                        HealthyCare<br />
                        <span className="text-2xl font-medium">เราห่วงใยคนที่คุณรัก</span>
                    </h2>
                </div>

                {/* Right Side: Questionnaire Content */}
                <div className="w-full md:w-7/12 flex flex-col justify-center">

                    <div className="mb-8 mt-12">
                        <p className="text-sm font-bold text-slate-500 tracking-widest uppercase mb-2">STEP 1 OF 2</p>
                        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-3">
                            คุณตั้งใจจะหากิจกรรมอะไรให้ท่านทำเป็นพิเศษ?
                        </h1>
                        <p className="text-lg text-slate-600">
                            เลือกคำตอบที่คิดว่าใช่ที่สุด (เลือกได้มากกว่า 1 ข้อ)
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">กิจกรรมที่ท่านชอบทำ?</h3>
                            <div className="flex flex-wrap gap-3">
                                {['ศิลปะ / งานคราฟต์', 'ทำอาหาร / อบขนม', 'อ่านหนังสือ', 'ฟังเพลง / เล่นดนตรี', 'ออกกำลังกายเบาๆ', 'ทำสวน / ปลูกต้นไม้', 'เสริมสวย / ทรีตเมนต์'].map((choice, i) => (
                                    <label key={i} className="cursor-pointer relative">
                                        <input type="checkbox" className="peer sr-only" name="activities" />
                                        <div className="px-6 py-3 bg-white text-slate-600 font-semibold rounded-lg border border-slate-200 peer-checked:bg-blue-100 peer-checked:text-blue-700 peer-checked:border-blue-300 transition-colors hover:bg-slate-100 shadow-sm">
                                            {choice}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">สิ่งอำนวยความสะดวกที่สำคัญต่อคุณ?</h3>
                            <div className="flex flex-wrap gap-3">
                                {['ห้องน้ำในตัว', 'พื้นที่สวน / ลานกลางแจ้ง', 'สระว่ายน้ำ', 'ห้องอาหารรวม', 'อนุญาตให้เลี้ยงสัตว์'].map((choice, i) => (
                                    <label key={i} className="cursor-pointer relative">
                                        <input type="checkbox" className="peer sr-only" name="facilities" />
                                        <div className="px-6 py-3 bg-white text-slate-600 font-semibold rounded-lg border border-slate-200 peer-checked:bg-emerald-100 peer-checked:text-emerald-700 peer-checked:border-emerald-300 transition-colors hover:bg-slate-100 shadow-sm">
                                            {choice}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Sticky Navigation Bar matching the reference style */}
            <div className="bg-white border-t border-slate-200 py-4 px-6 md:px-12 flex justify-between items-center sticky bottom-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
                <Link href="/">
                    <button className="flex items-center gap-2 text-slate-600 font-bold hover:text-slate-900 transition-colors py-3 px-6 rounded-xl hover:bg-slate-100">
                        <ArrowLeft className="w-5 h-5" /> ย้อนกลับ
                    </button>
                </Link>
                <div className="flex gap-4">
                    <Link href="/budget">
                        <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-3 px-8 rounded-xl transition-colors shadow-sm">
                            ข้าม (Skip)
                        </button>
                    </Link>
                    <Link href="/budget">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition-all hover:shadow-lg flex items-center gap-2">
                            ถัดไป <ArrowRight className="w-5 h-5" />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
