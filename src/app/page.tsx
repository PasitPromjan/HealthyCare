"use client";

import { useState } from "react";
import { Heart, Search, Star, MapPin, X } from "lucide-react";
import dynamic from 'next/dynamic';

const PannellumViewer = dynamic(() => import('@/components/PannellumViewer'), { ssr: false });

const homes = [
  {
    id: 1,
    name: "บ้านแสนสุข แคร์วิลล่า (Saensuk Care Villa)",
    location: "กรุงเทพมหานคร",
    price: "15,000",
    rating: 4.8,
    features: ["กายภาพบำบัด", "พยาบาล 24 ชม."],
    image: "https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "ร่มไม้ ซีเนียร์ ลิฟวิ่ง (Rommai Senior Living)",
    location: "เชียงใหม่",
    price: "25,000",
    rating: 4.9,
    features: ["กิจกรรมสันทนาการ", "อาหารเพื่อสุขภาพ", "พยาบาล 24 ชม."],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "ชีวาภิรมย์ รีสอร์ท แคร์ (Cheewapirom Resort Care)",
    location: "ภูเก็ต",
    price: "32,000",
    rating: 4.7,
    features: ["วิวทะเล", "สปา", "กายภาพบำบัด"],
    image: "https://images.unsplash.com/photo-1512453979436-5a50ce8c6ee2?fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "อบอุ่นใจ เนอร์สซิ่งโฮม (Oboonjai Nursing Home)",
    location: "นนทบุรี",
    price: "9,500",
    rating: 4.5,
    features: ["ดูแลพื้นฐาน", "เดินทางสะดวก"],
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?fit=crop&w=800&q=80",
  }
];

export default function Home() {
  const [selectedPanorama, setSelectedPanorama] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">

      {/* 360 Degree View Modal */}
      {selectedPanorama && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="bg-white rounded-3xl w-full max-w-5xl h-[80vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center p-6 border-b border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800">ทัวร์เสมือนจริง 360 องศา</h3>
              <button
                onClick={() => setSelectedPanorama(null)}
                className="p-2 bg-slate-100 hover:bg-rose-100 hover:text-rose-600 rounded-full transition-colors"
                aria-label="Close"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex-1 p-6 bg-slate-50">
              <PannellumViewer src={selectedPanorama} />
            </div>
          </div>
        </div>
      )}

      {/* Search Header Hero */}
      <div className="bg-blue-600 rounded-3xl p-8 md:p-12 mb-10 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">ค้นหาบ้านพักที่อบอุ่นที่สุด สำหรับคนที่คุณรัก</h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">เรามีบ้านพักและศูนย์ดูแลผู้สูงอายุชั้นนำให้เลือกมากมาย พร้อมดูแลด้วยใจ</p>

          <div className="bg-white rounded-2xl p-2 flex items-center shadow-md">
            <Search className="w-8 h-8 text-slate-400 ml-4" />
            <input
              type="text"
              placeholder="ค้นหาชื่อ หรือ สถานที่..."
              className="w-full text-2xl text-slate-800 p-4 outline-none rounded-xl"
            />
            <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-xl font-bold py-4 px-8 rounded-xl transition-colors">
              ค้นหา
            </button>
          </div>
        </div>
        <Heart className="absolute -right-10 -bottom-10 w-64 h-64 text-blue-500 opacity-50 z-0" />
      </div>

      <div className="flex flex-col md:flex-row gap-8">

        {/* Sidebar Filter */}
        <aside className="w-full md:w-1/4">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 sticky top-28">
            <h2 className="text-2xl font-bold mb-6 text-slate-800 flex items-center gap-2">
              ตัวกรอง
            </h2>

            {/* Filter Section: Location */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">สถานที่</h3>
              <div className="space-y-4">
                {["กรุงเทพมหานคร", "เชียงใหม่", "ภูเก็ต", "นนทบุรี"].map(loc => (
                  <label key={loc} className="flex items-center gap-4 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-200">
                    <input type="checkbox" className="w-6 h-6 rounded text-blue-600 focus:ring-blue-500" />
                    <span className="text-xl text-slate-700">{loc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Filter Section: Service */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">บริการพิเศษ</h3>
              <div className="space-y-4">
                {["พยาบาล 24 ชม.", "กายภาพบำบัด", "กิจกรรมสันทนาการ", "สปา"].map(service => (
                  <label key={service} className="flex items-center gap-4 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors border border-transparent hover:border-slate-200">
                    <input type="checkbox" className="w-6 h-6 rounded text-blue-600 focus:ring-blue-500" />
                    <span className="text-xl text-slate-700">{service}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </aside>

        {/* Main Content: List */}
        <main className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">แนะนำสำหรับคุณ ({homes.length} แห่ง)</h2>
            <select className="text-lg bg-white border border-slate-200 text-slate-700 py-2 px-4 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-blue-500">
              <option>เรียงตาม: แนะนำ</option>
              <option>ราคา: ต่ำไปสูง</option>
              <option>ราคา: สูงไปต่ำ</option>
            </select>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {homes.map(home => (
              <div key={home.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group cursor-pointer">
                <div className="h-64 relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={home.image} alt={home.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 font-bold text-slate-700 shadow-sm">
                    <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                    <span>{home.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">{home.name}</h3>
                  <div className="flex justify-between items-end mb-4">
                    <div className="flex items-center gap-2 text-slate-500 text-lg">
                      <MapPin className="w-5 h-5" />
                      <span>{home.location}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-500 uppercase tracking-wider font-semibold">เริ่มต้นที่</p>
                      <p className="text-2xl font-extrabold text-blue-700">฿{home.price}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {home.features.map(f => (
                      <span key={f} className="bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-full text-sm font-medium">
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <button
                      onClick={() => setSelectedPanorama("https://pannellum.org/images/alma.jpg")}
                      className="flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-lg font-bold py-3 rounded-xl transition-colors"
                    >
                      ดู 360° View
                    </button>
                    <button className="flex-1 bg-blue-600 text-white hover:bg-blue-700 text-lg font-bold py-3 rounded-xl shadow-md transition-colors">
                      ดูรายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
