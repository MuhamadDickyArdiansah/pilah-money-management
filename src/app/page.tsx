"use client";

import { useState } from "react";

import Image from "next/image";
import {
  GitFork,
  ArrowUpRight,
  ShieldCheck,
  Receipt,
  Wallet,
  TrendingUp,
  MessageSquareQuote,
  Lock,
  RotateCw,
  QrCode,
  AtSign,
  Eye,
  EyeOff,
  LogIn,
  User,
  Mail,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";

import LoginModal from "@/src/components/auth/login-modal";
import RegisterModal from "@/src/components/auth/register-modal";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between selection:bg-sky-500 selection:text-white">
      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20">
            <GitFork className="w-5 h-5" />
          </div>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              Pilah
            </span>
            <span className="w-2 h-2 rounded-full bg-sky-500 inline-block"></span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-slate-500 hidden sm:inline-block">
            Perlu bantuan teknis?
          </span>
          <a
            className="text-sm text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-1 transition-colors"
            href="#"
          >
            <span>Hubungi CS</span>
            <ArrowUpRight className="w-5 h-5 md:w-4 md:h-4" />
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Value Proposition & Interactive Bento */}
          <div className="hidden lg:flex lg:col-span-6 xl:col-span-7 flex-col justify-center space-y-8 pr-4">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-200/80 px-3.5 py-1.5 rounded-full w-fit text-[13px] md:text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-5 h-5 md:w-4 md:h-4 text-sky-500" />
              <span>Platform Finansial & Split Bill Terpercaya</span>
            </div>

            {/* Typography Section */}
            <div className="space-y-4">
              <h1 className="text-4xl xl:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Kelola keuangan pribadi &{" "}
                <span className="text-sky-500">bagi tagihan</span> bersama teman
                tanpa ribet.
              </h1>
              <p className="text-base text-slate-600 max-w-lg leading-relaxed">
                Pencatatan kas otomatis, pembagian beban makan rame-rame dengan
                hitungan presisi hingga ke desimal pajak, dan dompet
                terkoordinasi.
              </p>
            </div>

            {/* Bento Grid Mockup */}
            <div className="grid grid-cols-12 gap-4 pt-2">
              {/* Receipt Breakdown Card */}
              <div className="col-span-7 bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600">
                      <Receipt className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">
                        Dinner BBQ Senopati
                      </h4>
                      <p className="text-[13px] md:text-xs text-slate-500">
                        4 Teman • Kemarin, 20:30
                      </p>
                    </div>
                  </div>
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs md:text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    Lunas
                  </span>
                </div>

                {/* Rows */}
                <div className="space-y-2.5 text-[13px] md:text-xs">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs md:text-[10px] font-bold">
                        AK
                      </div>
                      <span className="text-slate-800 font-medium">
                        Alex (Anda)
                      </span>
                    </div>
                    <span className="font-semibold text-slate-900 tabular-nums">
                      Rp 175.000
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs md:text-[10px] font-bold">
                        DN
                      </div>
                      <span className="text-slate-800 font-medium">
                        Dimas Nugraha
                      </span>
                    </div>
                    <span className="font-semibold text-slate-900 tabular-nums">
                      Rp 175.000
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-100 text-slate-700 flex items-center justify-center text-xs md:text-[10px] font-bold">
                        RT
                      </div>
                      <span className="text-slate-800 font-medium">
                        Rara Tiara
                      </span>
                    </div>
                    <span className="font-semibold text-slate-900 tabular-nums">
                      Rp 175.000
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[13px] md:text-xs font-medium text-slate-500">
                    Total Pembayaran
                  </span>
                  <span className="text-base font-bold text-sky-600 tabular-nums">
                    Rp 700.000
                  </span>
                </div>
              </div>

              {/* Wallet & Metric Column */}
              <div className="col-span-5 flex flex-col gap-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm flex-1 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      Saldo Patungan
                    </span>
                    <Wallet className="w-5 h-5 md:w-4 md:h-4 text-emerald-600" />
                  </div>
                  <div className="my-3">
                    <div className="text-xl font-extrabold text-slate-900 tabular-nums">
                      Rp 3.840.500
                    </div>
                    <span className="text-[13px] md:text-xs text-emerald-600 font-semibold flex items-center gap-1 mt-1">
                      <TrendingUp className="w-4 h-4 md:w-3.5 md:h-3.5" />
                      +12.4% efisiensi split
                    </span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-sky-500 h-full rounded-full w-3/4"></div>
                  </div>
                </div>

                {/* Testimonial Box */}
                <div className="bg-white/80 backdrop-blur rounded-2xl p-4 border border-slate-200/80 shadow-sm flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-sky-50 text-sky-600 shrink-0 flex items-center justify-center">
                    <MessageSquareQuote className="w-5 h-5 md:w-4 md:h-4" />
                  </div>
                  <div>
                    <p className="text-[13px] md:text-xs text-slate-800 italic leading-snug">
                      &quot;Split bill trip liburan kantor 14 orang selesai
                      hitungan 3 menit!&quot;
                    </p>
                    <p className="text-xs md:text-[11px] text-slate-500 font-semibold mt-1">
                      — Sarah P., Product Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature Highlights Footnote */}
            <div className="flex items-center gap-6 pt-2 text-slate-500 text-[13px] md:text-xs font-medium">
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5 md:w-4 md:h-4 text-emerald-600" />
                <span>Enkripsi 256-bit</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCw className="w-5 h-5 md:w-4 md:h-4 text-sky-500" />
                <span>Sync Otomatis</span>
              </div>
              <div className="flex items-center gap-2">
                <QrCode className="w-5 h-5 md:w-4 md:h-4 text-emerald-600" />
                <span>QRIS & Bank</span>
              </div>
            </div>
          </div>

          {/* Right Side: Tabbed Auth Card */}
          <div className="w-full lg:col-span-6 xl:col-span-5 max-w-md mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50 p-4 md:p-8">
              {/* Segmented Tab Switcher */}
              <div className="bg-slate-100/80 p-1 rounded-xl flex items-center mb-6">
                <button
                  className={`flex-1 py-2 text-center text-sm font-bold rounded-lg transition-all duration-200 ${
                    activeTab === "login"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  onClick={() => setActiveTab("login")}
                  type="button"
                >
                  Masuk
                </button>
                <button
                  className={`flex-1 py-2 text-center text-sm font-bold rounded-lg transition-all duration-200 ${
                    activeTab === "register"
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-800"
                  }`}
                  onClick={() => setActiveTab("register")}
                  type="button"
                >
                  Daftar
                </button>
              </div>

              {/* LOGIN PANE */}
              {activeTab === "login" && <LoginModal />}

              {/* REGISTER PANE */}
              {activeTab === "register" && <RegisterModal />}

              {/* Card Footer Switcher */}
              <div className="mt-6 pt-4 border-t border-slate-100 text-center text-[13px] md:text-xs text-slate-500">
                <span>
                  {activeTab === "login"
                    ? "Belum punya akun?"
                    : "Sudah punya akun?"}
                </span>
                <button
                  className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 text-sky-600 hover:text-sky-700 font-bold ml-1 transition-colors"
                  onClick={() =>
                    setActiveTab(activeTab === "login" ? "register" : "login")
                  }
                  type="button"
                >
                  {activeTab === "login" ? "Daftar gratis" : "Masuk di sini"}
                </button>
              </div>
            </div>

            {/* Security Note */}
            <div className="mt-4 flex items-center justify-center gap-2 text-slate-500 text-[13px] md:text-xs font-medium">
              <ShieldAlert className="w-5 h-5 md:w-4 md:h-4 text-emerald-600" />
              <span>Data finansial Anda terproteksi secara privat</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-slate-200/80 text-slate-500 text-[13px] md:text-xs flex flex-col sm:flex-row items-center justify-between gap-3">
        <div>
          <span>© 2026 Pilah Finansial Indonesia. Hak cipta dilindungi.</span>
        </div>
        <div className="flex items-center gap-4 font-medium">
          <a className="hover:text-slate-900 transition-colors" href="#">
            Privasi
          </a>
          <span className="text-slate-300">•</span>
          <a className="hover:text-slate-900 transition-colors" href="#">
            Syarat Layanan
          </a>
          <span className="text-slate-300">•</span>
          <a className="hover:text-slate-900 transition-colors" href="#">
            Pusat Bantuan
          </a>
        </div>
      </footer>
    </div>
  );
}
