import Link from 'next/link';
import { Home, CalendarPlus, FileQuestion, MessageCircle } from 'lucide-react';

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

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-slate-700 hover:text-brand hover:bg-slate-50 px-4 py-2 rounded-xl flex items-center gap-2 text-xl font-semibold transition-colors duration-200">
              <Home className="w-6 h-6 text-brand" />
              หน้าหลัก
            </Link>
            <Link href="/questionnaire" className="text-slate-700 hover:text-purple-400 hover:bg-purple-50 px-4 py-2 rounded-xl flex items-center gap-2 text-xl font-semibold transition-colors duration-200">
              <FileQuestion className="w-6 h-6 text-purple-400" />
              แบบสอบถาม
            </Link>
          </nav>

          <div className="flex items-center md:hidden">
            <button className="text-slate-600 hover:text-blue-600 p-2 focus:outline-none">
              <MessageCircle className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
