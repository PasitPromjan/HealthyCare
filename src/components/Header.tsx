import Link from 'next/link';
import { Home, CalendarPlus, FileQuestion, MessageCircle, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-brand font-extrabold text-3xl tracking-tight">Rom<span className="text-secondary">Sai</span></span>
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-md mx-8">
            <div className="relative w-full group">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-brand transition-colors" />
              </div>
              <input
                type="text"
                placeholder="ค้นหาที่พัก..."
                className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-xl leading-5 bg-slate-50 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-1 focus:ring-brand focus:border-brand sm:text-lg transition-all"
              />
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-slate-700 hover:text-brand hover:bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-xl font-semibold transition-colors duration-200">
              <Home className="w-6 h-6 text-brand" />
              หน้าหลัก
            </Link>
            <Link href="/questionnaire" className="text-slate-700 hover:text-purple-400 hover:bg-purple-50 px-4 py-2 rounded-xl flex items-center gap-2 text-xl font-semibold transition-colors duration-200">
              <FileQuestion className="w-6 h-6 text-purple-400" />
              แบบสอบถาม
            </Link>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <Link href="/login" className="text-slate-700 hover:text-brand px-4 py-2 rounded-xl text-xl font-bold transition-all">
              เข้าสู่ระบบ
            </Link>
            <Link href="/register" className="bg-brand text-white px-6 py-2 rounded-xl text-xl font-bold hover:bg-brand-hover transition-all shadow-lg shadow-brand/20">
              สมัครสมาชิก
            </Link>
          </nav>

          <div className="flex items-center md:hidden gap-4">
            <Link href="/login" className="text-slate-700 text-sm font-bold">เข้าสู่ระบบ</Link>
            <button className="text-slate-600 hover:text-blue-600 p-2 focus:outline-none">
              <MessageCircle className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

