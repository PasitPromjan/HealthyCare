'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Lock, LogIn, Github, Chrome } from 'lucide-react';

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-slate-100">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-900">
                        ยินดีต้อนรับกลับมา
                    </h2>
                    <p className="mt-2 text-center text-sm text-slate-600">
                        หรือ{' '}
                        <Link href="/register" className="font-medium text-brand hover:text-brand-hover transition-colors">
                            สมัครสมาชิกใหม่ได้ที่นี่
                        </Link>
                    </p>
                </div>
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <div className="rounded-md shadow-sm space-y-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Mail className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-xl focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm transition-all"
                                placeholder="อีเมลของคุณ"
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Lock className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-xl focus:outline-none focus:ring-brand focus:border-brand focus:z-10 sm:text-sm transition-all"
                                placeholder="รหัสผ่าน"
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <input
                                id="remember-me"
                                name="remember-me"
                                type="checkbox"
                                className="h-4 w-4 text-brand focus:ring-brand border-slate-300 rounded"
                            />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900">
                                จดจำฉันไว้
                            </label>
                        </div>

                        <div className="text-sm">
                            <a href="#" className="font-medium text-brand hover:text-brand-hover">
                                ลืมรหัสผ่าน?
                            </a>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-all shadow-lg hover:shadow-brand/20"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <LogIn className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                            </span>
                            เข้าสู่ระบบ
                        </button>
                    </div>
                </form>

                <div className="mt-6">
                    <div className="relative">
                        <div className="absolute inset-center-y-0 inset-x-0 flex items-center">
                            <div className="w-full border-t border-slate-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-slate-500 uppercase tracking-widest text-xs font-semibold">หรือเข้าสู่ระบบด้วย</span>
                        </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                        <button className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
                            <Chrome className="h-5 w-5 text-red-500 mr-2" />
                            Google
                        </button>
                        <button className="w-full inline-flex justify-center py-2.5 px-4 border border-slate-300 rounded-xl shadow-sm bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">
                            <Github className="h-5 w-5 text-slate-900 mr-2" />
                            Github
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
