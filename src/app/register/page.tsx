'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Lock, User, UserPlus, ArrowLeft } from 'lucide-react';

export default function RegisterPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/5 rounded-full blur-3xl"></div>

                <div>
                    <Link href="/login" className="inline-flex items-center text-sm text-slate-500 hover:text-brand transition-colors mb-6">
                        <ArrowLeft className="w-4 h-4 mr-1" /> กลับไปหน้าเข้าสู่ระบบ
                    </Link>
                    <h2 className="text-center text-3xl font-extrabold text-slate-900">
                        เริ่มต้นใช้งาน <span className="text-brand">HealthyCare</span>
                    </h2>
                    <p className="mt-2 text-center text-sm text-slate-600">
                        ระบบดูแลสุขภาพที่คุณไว้วางใจ
                    </p>
                </div>
                <form className="mt-8 space-y-5" action="#" method="POST">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <User className="h-5 w-5 text-slate-400" />
                            </div>
                            <input
                                name="firstName"
                                type="text"
                                required
                                className="appearance-none relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-xl focus:outline-none focus:ring-brand focus:border-brand sm:text-sm transition-all"
                                placeholder="ชื่อ"
                            />
                        </div>
                        <div className="relative">
                            <input
                                name="lastName"
                                type="text"
                                required
                                className="appearance-none relative block w-full px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-xl focus:outline-none focus:ring-brand focus:border-brand sm:text-sm transition-all"
                                placeholder="นามสกุล"
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className="appearance-none relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-xl focus:outline-none focus:ring-brand focus:border-brand sm:text-sm transition-all"
                            placeholder="อีเมล"
                        />
                    </div>

                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="h-5 w-5 text-slate-400" />
                        </div>
                        <input
                            name="password"
                            type="password"
                            autoComplete="new-password"
                            required
                            className="appearance-none relative block w-full pl-10 px-3 py-3 border border-slate-300 placeholder-slate-500 text-slate-900 rounded-xl focus:outline-none focus:ring-brand focus:border-brand sm:text-sm transition-all"
                            placeholder="กำหนดรหัสผ่าน"
                        />
                    </div>

                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <input
                                id="terms"
                                name="terms"
                                type="checkbox"
                                required
                                className="h-4 w-4 text-brand focus:ring-brand border-slate-300 rounded"
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <label htmlFor="terms" className="text-slate-600">
                                ฉันยอมรับ{' '}
                                <a href="#" className="font-medium text-brand hover:text-brand-hover">
                                    เงื่อนไขการใช้งาน
                                </a>{' '}
                                และ{' '}
                                <a href="#" className="font-medium text-brand hover:text-brand-hover">
                                    นโยบายความเป็นส่วนตัว
                                </a>
                            </label>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-3.5 px-4 border border-transparent text-sm font-bold rounded-xl text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-all shadow-lg hover:shadow-brand/20 active:scale-95"
                        >
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                <UserPlus className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                            </span>
                            สมัครสมาชิก
                        </button>
                    </div>
                </form>

                <div className="mt-8 text-center pt-6 border-t border-slate-100">
                    <p className="text-sm text-slate-600">
                        มีบัญชีอยู่แล้ว?{' '}
                        <Link href="/login" className="font-bold text-brand hover:text-brand-hover transition-colors underline decoration-2 underline-offset-4">
                            เข้าสู่ระบบ
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
