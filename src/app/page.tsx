"use client";

import { useState, useMemo, useCallback, useRef } from "react";
import { Heart, Star, MapPin, X, Filter, ChevronRight } from "lucide-react";
import dynamic from 'next/dynamic';
import Link from 'next/link';

const PannellumViewer = dynamic(() => import('@/components/PannellumViewer'), { ssr: false });

const homes = [
  {
    id: 1,
    name: "บ้านแสนสุข แคร์วิลล่า (Saensuk Care Villa)",
    location: "กรุงเทพมหานคร",
    price: "15,000",
    rating: 4.8,
    features: ["กายภาพบำบัด", "พยาบาล 24 ชม."],
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "ร่มไม้ ซีเนียร์ ลิฟวิ่ง (Rommai Senior Living)",
    location: "เชียงใหม่",
    price: "25,000",
    rating: 4.9,
    features: ["กิจกรรมสันทนาการ", "อาหารเพื่อสุขภาพ", "พยาบาล 24 ชม."],
    image: "https://images.unsplash.com/photo-1576766125468-a5d48274c5b4?fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "ชีวาภิรมย์ รีสอร์ท แคร์ (Cheewapirom Resort Care)",
    location: "ภูเก็ต",
    price: "32,000",
    rating: 4.7,
    features: ["วิวทะเล", "สปา", "กายภาพบำบัด"],
    image: "https://chivacarerehab.com/wp-content/uploads/2025/05/S__258039813_0%E0%B8%81%E0%B8%81.jpg",
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

const locations = ["กรุงเทพมหานคร", "เชียงใหม่", "ภูเก็ต", "นนทบุรี"];
const services = ["พยาบาล 24 ชม.", "กายภาพบำบัด", "กิจกรรมสันทนาการ", "สปา"];

const PRICE_MIN = 0;
const PRICE_MAX = 100000;

function formatPrice(value: number) {
  if (value >= 100000) return "100,000+";
  return value.toLocaleString();
}

// Dual-handle range slider component
function PriceRangeSlider({
  minVal,
  maxVal,
  onChange,
}: {
  minVal: number;
  maxVal: number;
  onChange: (min: number, max: number) => void;
}) {
  const rangeRef = useRef<HTMLDivElement>(null);

  const getPercent = (value: number) =>
    Math.round(((value - PRICE_MIN) / (PRICE_MAX - PRICE_MIN)) * 100);

  const minPercent = getPercent(minVal);
  const maxPercent = getPercent(maxVal);

  return (
    <div className="px-1 pt-2 pb-1">
      {/* Price display */}
      <div className="flex justify-between items-center mb-4">
        <div className="text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">ต่ำสุด</p>
          <p className="text-base font-bold text-brand">฿{formatPrice(minVal)}</p>
        </div>
        <div className="h-px flex-1 bg-slate-200 mx-3" />
        <div className="text-center">
          <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">สูงสุด</p>
          <p className="text-base font-bold text-brand">฿{formatPrice(maxVal)}</p>
        </div>
      </div>

      {/* Slider track */}
      <div className="relative h-6 flex items-center" ref={rangeRef}>
        {/* Track background */}
        <div className="absolute w-full h-2 bg-slate-200 rounded-full" />
        {/* Active range highlight */}
        <div
          className="absolute h-2 bg-brand rounded-full"
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        />

        {/* Min thumb */}
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={1000}
          value={minVal}
          onChange={(e) => {
            const value = Math.min(Number(e.target.value), maxVal - 1000);
            onChange(value, maxVal);
          }}
          className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
          style={{ zIndex: 3 }}
        />

        {/* Max thumb */}
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={1000}
          value={maxVal}
          onChange={(e) => {
            const value = Math.max(Number(e.target.value), minVal + 1000);
            onChange(minVal, value);
          }}
          className="absolute w-full h-2 appearance-none bg-transparent cursor-pointer pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-brand [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-125"
          style={{ zIndex: 4 }}
        />
      </div>

      {/* Scale labels */}
      <div className="flex justify-between mt-2 text-xs text-slate-400">
        <span>฿0</span>
        <span>฿50,000</span>
        <span>฿100,000+</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [selectedPanorama, setSelectedPanorama] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [priceMin, setPriceMin] = useState(PRICE_MIN);
  const [priceMax, setPriceMax] = useState(PRICE_MAX);

  const isPriceFiltered = priceMin > PRICE_MIN || priceMax < PRICE_MAX;

  const filteredHomes = useMemo(() => {
    return homes.filter(home => {
      const matchesSearch = home.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        home.location.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(home.location);
      const matchesServices = selectedServices.length === 0 ||
        selectedServices.every(s => home.features.includes(s));

      const priceValue = parseInt(home.price.replace(/,/g, ''));
      const matchesPrice = !isPriceFiltered || (priceValue >= priceMin && priceValue <= priceMax);

      return matchesSearch && matchesLocation && matchesServices && matchesPrice;
    });
  }, [searchQuery, selectedLocations, selectedServices, priceMin, priceMax, isPriceFiltered]);

  const toggleLocation = (loc: string) => {
    setSelectedLocations(prev =>
      prev.includes(loc) ? prev.filter(l => l !== loc) : [...prev, loc]
    );
  };

  const toggleService = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handlePriceChange = useCallback((min: number, max: number) => {
    setPriceMin(min);
    setPriceMax(max);
  }, []);

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

      {/* Hero Banner */}
      <div className="bg-brand rounded-3xl p-8 md:p-12 mb-10 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">RomSai - ค้นหาบ้านพักที่อบอุ่นที่สุด สำหรับคนที่คุณรัก</h1>
          <p className="text-xl md:text-2xl text-white/90">เรามีบ้านพักและศูนย์ดูแลผู้สูงอายุชั้นนำให้เลือกมากมาย พร้อมดูแลด้วยใจ</p>
        </div>
        <Heart className="absolute -right-10 -bottom-10 w-64 h-64 text-white/10 z-0" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-4 flex justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
          <span className="text-lg font-bold text-slate-800">ตัวเลือกการค้นหา</span>
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 px-4 py-2 rounded-xl transition-colors text-slate-700 font-semibold"
          >
            <Filter className="w-5 h-5" />
            ตัวกรอง
          </button>
        </div>

        {/* Sidebar Filter - Desktop & Mobile Drawer */}
        <aside className={`
          fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:z-0 lg:w-1/4 lg:shadow-none lg:bg-transparent
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}>
          <div className="h-full flex flex-col lg:block">
            {/* Mobile Header */}
            <div className="flex lg:hidden justify-between items-center p-6 border-b border-slate-100">
              <h2 className="text-2xl font-bold text-slate-800">ตัวกรอง</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-2 bg-slate-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 lg:p-0">
              <div className="bg-white lg:p-6 lg:rounded-3xl lg:shadow-sm lg:border lg:border-slate-100 sticky top-28">
                <h2 className="hidden lg:flex text-2xl font-bold mb-6 text-slate-800 items-center gap-2">
                  <Filter className="w-6 h-6 text-brand" />
                  ตัวกรอง
                </h2>

                {/* Filter Section: Location */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700">สถานที่</h3>
                  <div className="space-y-3">
                    {locations.map(loc => (
                      <label key={loc} className="flex items-center gap-4 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-slate-300 checked:border-brand checked:bg-brand transition-all"
                            checked={selectedLocations.includes(loc)}
                            onChange={() => toggleLocation(loc)}
                          />
                          <svg className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 left-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className={`text-lg transition-colors ${selectedLocations.includes(loc) ? 'text-brand font-bold' : 'text-slate-600'}`}>{loc}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Filter Section: Price Range Slider */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-slate-700">ราคา / เดือน</h3>
                    {isPriceFiltered && (
                      <button
                        onClick={() => { setPriceMin(PRICE_MIN); setPriceMax(PRICE_MAX); }}
                        className="text-xs text-rose-400 hover:text-rose-600 font-semibold transition-colors"
                      >
                        รีเซ็ต
                      </button>
                    )}
                  </div>
                  <PriceRangeSlider minVal={priceMin} maxVal={priceMax} onChange={handlePriceChange} />
                </div>

                {/* Filter Section: Service */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4 text-slate-700">บริการพิเศษ</h3>
                  <div className="space-y-3">
                    {services.map(service => (
                      <label key={service} className="flex items-center gap-4 cursor-pointer p-2 hover:bg-slate-50 rounded-xl transition-colors group">
                        <div className="relative flex items-center">
                          <input
                            type="checkbox"
                            className="peer h-6 w-6 cursor-pointer appearance-none rounded-md border border-slate-300 checked:border-brand checked:bg-brand transition-all"
                            checked={selectedServices.includes(service)}
                            onChange={() => toggleService(service)}
                          />
                          <svg className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 left-1 pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        </div>
                        <span className={`text-lg transition-colors ${selectedServices.includes(service) ? 'text-brand font-bold' : 'text-slate-600'}`}>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedLocations([]);
                    setSelectedServices([]);
                    setPriceMin(PRICE_MIN);
                    setPriceMax(PRICE_MAX);
                    setSearchQuery("");
                  }}
                  className="w-full text-slate-500 hover:text-rose-500 text-lg font-medium py-2 transition-colors border-t border-slate-100 mt-4 pt-4"
                >
                  ล้างตัวกรองทั้งหมด
                </button>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile sidebar */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content: List */}
        <main className="w-full lg:w-3/4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-slate-800">
              {filteredHomes.length > 0 ? `แนะนำสำหรับคุณ (${filteredHomes.length} แห่ง)` : "ไม่พบผลลัพธ์ที่ตรงตามเงื่อนไข"}
            </h2>
            <select className="text-lg bg-white border border-slate-200 text-slate-700 py-2 px-4 rounded-xl shadow-sm outline-none focus:ring-2 focus:ring-brand">
              <option>เรียงตาม: แนะนำ</option>
              <option>ราคา: ต่ำไปสูง</option>
              <option>ราคา: สูงไปต่ำ</option>
            </select>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {filteredHomes.map(home => {
              const visibleFeatures = home.features.slice(0, 2);
              const extraCount = home.features.length - 2;

              return (
                <div key={home.id} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                  <div className="h-64 relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={home.image} alt={home.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1 font-bold text-slate-700 shadow-sm">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      <span>{home.rating}</span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/95 backdrop-blur-sm px-4 py-2 rounded-2xl flex items-center gap-2 font-bold text-brand shadow-sm">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{home.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-800 mb-4 group-hover:text-brand transition-colors line-clamp-1">{home.name}</h3>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {visibleFeatures.map(f => (
                        <span key={f} className="bg-green-50 text-green-700 border border-green-100 px-3 py-1 rounded-full text-sm font-medium">
                          {f}
                        </span>
                      ))}
                      {extraCount > 0 && (
                        <span className="bg-slate-100 text-slate-500 border border-slate-200 px-3 py-1 rounded-full text-sm font-medium">
                          อื่นๆ +{extraCount}
                        </span>
                      )}
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl mb-6 flex justify-between items-center">
                      <div>
                        <p className="text-sm text-slate-500 uppercase tracking-wider font-bold">เริ่มต้นที่</p>
                        <p className="text-3xl font-black text-brand">฿{home.price}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setSelectedPanorama("https://pannellum.org/images/alma.jpg")}
                          className="bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 text-base font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                          ดู 360°
                        </button>
                        <button className="bg-white border-2 border-brand text-brand hover:bg-green-50 text-base font-bold py-3 rounded-xl transition-all">
                          รายละเอียดเพิ่มเติม
                        </button>
                      </div>
                      <Link href="/book" className="w-full">
                        <button className="w-full bg-brand hover:bg-brand-hover text-white text-xl font-bold py-4 rounded-xl shadow-lg shadow-brand/20 transition-all flex items-center justify-center gap-2 group/btn">
                          <span>จองที่พัก</span>
                          <ChevronRight className="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
