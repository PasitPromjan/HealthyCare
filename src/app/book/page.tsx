import React from 'react';
import { Calendar, Users, Home as HomeIcon, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function BookingPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-extrabold text-slate-800 mb-4">จองคิวเข้าเยี่ยมชมบ้านพัก</h1>
                <p className="text-xl text-slate-600">กรุณากรอกข้อมูลเพื่อทำการนัดหมายล่วงหน้า ให้เราได้เตรียมการต้อนรับอย่างดีที่สุด</p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="w-full md:w-1/3 bg-blue-600 p-8 text-white flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">ขั้นตอนการจอง</h3>
                            <ul className="space-y-6 text-blue-100 text-lg">
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-200" /> เลือกบ้านพักที่สนใจ
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-200" /> ระบุวันที่และเวลา
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-200" /> กรอกข้อมูลส่วนตัว
                                </li>
                                <li className="flex items-center gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-blue-200" /> ยืนยันการนัดหมาย
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full md:w-2/3 p-8">
                        <form className="space-y-6">

                            <div className="space-y-2">
                                <label className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                                    <HomeIcon className="w-5 h-5 text-blue-600" />
                                    เลือกบ้านพักที่ต้องการเยี่ยมชม
                                </label>
                                <select className="w-full text-lg p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                                    <option>บ้านแสนสุข แคร์วิลล่า (กรุงเทพมหานคร)</option>
                                    <option>ร่มไม้ ซีเนียร์ ลิฟวิ่ง (เชียงใหม่)</option>
                                    <option>ชีวาภิรมย์ รีสอร์ท แคร์ (ภูเก็ต)</option>
                                </select>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-6">
                                <div className="space-y-2 flex-1">
                                    <label className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                                        <Calendar className="w-5 h-5 text-emerald-600" />
                                        วันที่นัดหมาย
                                    </label>
                                    <input type="date" className="w-full text-lg p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" />
                                </div>
                                <div className="space-y-2 flex-1">
                                    <label className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                                        <Users className="w-5 h-5 text-amber-500" />
                                        จำนวนผู้เข้าเยี่ยมชม
                                    </label>
                                    <select className="w-full text-lg p-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none">
                                        <option>1-2 ท่าน</option>
                                        <option>3-5 ท่าน</option>
                                        <option>มากกว่า 5 ท่าน</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-4 pt-4 border-t border-slate-100">
                                <div>
                                    <label className="text-lg font-semibold text-slate-700">ชื่อ-นามสกุลผู้ติดต่อ</label>
                                    <input type="text" placeholder="ระบุชื่อของคุณ" className="w-full text-lg p-4 mt-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="text-lg font-semibold text-slate-700">เบอร์โทรศัพท์</label>
                                    <input type="tel" placeholder="08X-XXX-XXXX" className="w-full text-lg p-4 mt-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" />
                                </div>
                            </div>

                            <div className="pt-6">
                                <Link href="/">
                                    <button type="button" className="w-full bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-bold py-4 rounded-xl shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
                                        ยืนยันการจองคิว
                                    </button>
                                </Link>
                                <p className="text-center text-sm text-slate-500 mt-4">
                                    เมื่อกดยืนยัน เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันเวลาที่แน่นอนอีกครั้ง
                                </p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
