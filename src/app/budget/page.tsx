import Link from 'next/link';
import { Wallet, Search } from 'lucide-react';

export default function BudgetPage() {
    const options = [
        { label: "0 - 10,000 บาท / เดือน", desc: "สำหรับบ้านพักพื้นฐาน แนะนำศูนย์ดูแลท้องถิ่น" },
        { label: "10,001 - 20,000 บาท / เดือน", desc: "มีพยาบาลดูแล 24 ชม. และสิ่งอำนวยความสะดวกครบ" },
        { label: "20,001 - 30,000 บาท / เดือน", desc: "ระดับพรีเมียม สภาพแวดล้อมดีเยี่ยม กิจกรรมหลากหลาย" },
        { label: "30,000 บาทขึ้นไป / เดือน", desc: "บริการระดับ Exclusive V.I.P. มีแพทย์ประจำ" },
    ];

    return (
        <div className="max-w-3xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <div className="bg-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Wallet className="w-10 h-10 text-amber-600" />
                </div>
                <h1 className="text-4xl font-extrabold text-slate-800 mb-4">งบประมาณรายเดือน (Monthly Budget)</h1>
                <p className="text-xl text-slate-600">เพื่อให้เราค้นหาสถานที่ที่เหมาะสมกับงบประมาณของท่านที่สุด (2/2)</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-800 mb-8">โปรดระบุช่วงงบประมาณที่ท่านตั้งไว้</h3>

                <div className="space-y-4">
                    {options.map((opt, i) => (
                        <label key={i} className="flex items-start p-6 border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-amber-500 hover:bg-amber-50 transition-all has-[:checked]:border-amber-600 has-[:checked]:bg-amber-50 group">
                            <input type="radio" name="budget" className="mt-1 w-6 h-6 text-amber-600 focus:ring-amber-500" />
                            <div className="ml-5">
                                <span className="block text-2xl text-slate-800 font-bold mb-1">{opt.label}</span>
                                <span className="block text-lg text-slate-500">{opt.desc}</span>
                            </div>
                        </label>
                    ))}
                </div>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-between pt-6 border-t border-slate-100">
                    <Link href="/questionnaire" className="order-2 sm:order-1">
                        <button className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 text-xl font-bold py-4 px-10 rounded-xl transition-all">
                            ย้อนกลับ
                        </button>
                    </Link>
                    <Link href="/" className="order-1 sm:order-2">
                        <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-bold py-4 px-10 rounded-xl shadow-md transition-all hover:-translate-y-1 flex items-center justify-center gap-3">
                            <Search className="w-6 h-6" /> ประมวลผลและค้นหาผลลัพธ์
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
