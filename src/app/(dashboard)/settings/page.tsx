"use client";

import React, { useState } from "react";
import {
  User,
  Landmark,
  Shield,
  BellRing,
  Database,
  BadgeCheck,
  Mail,
  ChevronsUpDown,
  MessageSquare,
  Clock,
  Lock,
  KeyRound,
  ShieldCheck,
  Laptop,
  Smartphone,
  Banknote,
  TrendingUp,
  Megaphone,
  Info,
  Save,
  Check,
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  // Form States (opsional untuk interaktivitas)
  const [autoWhatsapp, setAutoWhatsapp] = useState(true);
  const [autoReminder, setAutoReminder] = useState(true);
  const [roundingRule, setRoundingRule] = useState("100");
  const [realtimeNotify, setRealtimeNotify] = useState(true);
  const [weeklyReport, setWeeklyReport] = useState(true);
  const [marketingTips, setMarketingTips] = useState(false);

  const tabs = [
    { id: "profile", label: "Profil & Akun", icon: User },
    { id: "accounts", label: "Rekening & Split Bill", icon: Landmark },
    { id: "security", label: "Keamanan & PIN", icon: Shield, badge: true },
    { id: "notifications", label: "Notifikasi & WhatsApp", icon: BellRing },
    { id: "integration", label: "Integrasi & Ekspor Data", icon: Database },
  ];

  return (
    <div
      className="flex-1 min-h-screen flex flex-col bg-slate-50"
      id="main-content-wrapper"
    >

      {/* CONTENT CANVAS */}
      <main className="flex-1 p-4 md:p-8 max-w-7xl w-full mx-auto pb-24">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                Pengaturan & Preferensi
              </h1>
              <p className="text-sm text-slate-500 mt-1 max-w-2xl">
                Kelola profil akun, preferensi split bill, keamanan PIN
                transaksi, rekening penampung default, dan integrasi notifikasi.
              </p>
            </div>

            {/* Quick Status Badge */}
            <div className="flex items-center gap-2 self-start md:self-auto bg-white border border-slate-200 rounded-xl px-3.5 py-2 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-sm text-slate-500">
                Akun Terverifikasi:{" "}
                <strong className="text-slate-900 font-medium">
                  Prioritas Level 2
                </strong>
              </span>
            </div>
          </div>
        </div>

        {/* HORIZONTAL TABS NAVIGATION */}
        <div className="border-b border-slate-200 mb-8 overflow-x-auto scrollbar-none">
          <nav aria-label="Tabs" className="flex space-x-6 whitespace-nowrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`group inline-flex items-center gap-2 py-3 px-1 border-b-2 text-sm font-semibold transition-colors ${
                    isActive
                      ? "border-sky-600 text-sky-600"
                      : "border-transparent text-slate-500 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <Icon className="w-5 h-5 md:w-4 md:h-4" />
                  {tab.label}
                  {tab.badge && (
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* BENTO / SECTIONED CONTENT GRID */}
        <div className="space-y-8">
          {/* SECTION 1: INFORMASI PROFIL PENGGUNA */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Informasi Profil Pengguna
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Identitas ini akan tampil pada ringkasan pembagian split bill
                  grup dan tagihan bersama.
                </p>
              </div>
              <span className="text-[13px] md:text-xs font-semibold bg-sky-50 text-sky-600 border border-sky-200 px-3 py-1 rounded-full">
                Pribadi & Publik
              </span>
            </div>

            {/* Avatar Section */}
            <div className="py-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 border-b border-slate-100">
              <div className="relative group">
                <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-slate-200 ring-4 ring-slate-100 bg-slate-100">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    alt="High quality detailed studio portrait of Alex Wijaya"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATzi_QvPohEABiMe1KIuplEmczQqhu09FZgyHptwJ0BWi7IMGqPDvO-H1FUC-iUjtyJ0610hNax0j4KL3VI4jU2AJiuF97FkygOTdHxA2EaYhDgLqn0AUk-fLH4tikndw_bP2QcNlZVSBlGpKDd_2-jGdKWgLE8_QVhVX5fppL7z3hUqHx16asS8rZQtGRPgdeZ4WiyhbHdJY-AS3ep0h4it7IUSVS86S5alO2lCxSlPpP04g29AN6Bg"
                  />
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[13px] md:text-xs shadow-sm ring-2 ring-white">
                  <BadgeCheck className="w-5 h-5 md:w-4 md:h-4" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-900 text-sm font-semibold rounded-lg transition-colors border border-slate-200">
                    Ubah Foto
                  </button>
                  <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-3.5 py-2 bg-rose-50 hover:bg-rose-100 text-rose-600 text-sm font-semibold rounded-lg transition-colors border border-rose-200">
                    Hapus
                  </button>
                </div>
                <p className="text-[13px] md:text-xs text-slate-500">
                  Disarankan format JPG atau PNG persegi beresolusi minimal
                  400x400 px. Maks 2 MB.
                </p>
              </div>
            </div>

            {/* Form Fields Matrix */}
            <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <input
                    className="min-h-11 text-base md:text-sm w-full h-11 px-3.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none"
                    type="text"
                    defaultValue="Alex Wijaya"
                  />
                  <User className="absolute right-3 top-3 text-slate-400 w-5 h-5" />
                </div>
              </div>

              {/* Email Address with Verified Badge */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-slate-900">
                    Alamat Email
                  </label>
                  <span className="text-[13px] md:text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    Terverifikasi
                  </span>
                </div>
                <div className="relative">
                  <input
                    className="min-h-11 text-base md:text-sm w-full h-11 px-3.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all outline-none"
                    type="email"
                    defaultValue="alex@pilah.id"
                  />
                  <Mail className="absolute right-3 top-3 text-slate-400 w-5 h-5" />
                </div>
              </div>

              {/* Phone Number / WhatsApp */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-slate-900">
                    Nomor WhatsApp & SMS
                  </label>
                  <span className="text-[13px] md:text-xs font-medium text-sky-600">
                    Terhubung Notifikasi
                  </span>
                </div>
                <div className="flex rounded-lg border border-slate-300 overflow-hidden focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20">
                  <span className="inline-flex items-center px-3.5 bg-slate-100 text-slate-500 text-sm border-r border-slate-200 font-medium">
                    +62
                  </span>
                  <input
                    className="min-h-11 text-base md:text-sm flex-1 h-11 px-3.5 bg-white border-0 text-slate-900 text-sm tabular-nums focus:ring-0 outline-none"
                    type="tel"
                    defaultValue="812-3456-7890"
                  />
                </div>
                <p className="text-[13px] md:text-xs text-slate-500">
                  Digunakan untuk mengirim lembar rekap bayar dan pengingat
                  patungan WhatsApp otomatis.
                </p>
              </div>

              {/* Primary Currency */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-900">
                  Mata Uang Utama Aplikasi
                </label>
                <div className="relative">
                  <select
                    className="w-full h-11 px-3.5 bg-white border border-slate-300 rounded-lg text-slate-900 text-sm focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition-all appearance-none cursor-pointer outline-none"
                    defaultValue="IDR"
                  >
                    <option value="IDR">IDR - Rupiah Indonesia (Rp)</option>
                    <option value="USD">USD - US Dollar ($)</option>
                    <option value="SGD">SGD - Singapore Dollar (S$)</option>
                  </select>
                  <ChevronsUpDown className="absolute right-3 top-3 text-slate-400 w-5 h-5 pointer-events-none" />
                </div>
                <p className="text-[13px] md:text-xs text-slate-500">
                  Seluruh konversi tagihan multi-mata uang akan dihitung ke
                  basis IDR secara default.
                </p>
              </div>
            </div>
          </section>

          {/* SECTION 2: PREFERENSI PEMBAGIAN TAGIHAN (SPLIT BILL DEFAULTS) */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Preferensi Pembagian Tagihan (Split Bill)
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Konfigurasikan alur otomatisasi ketika Anda membuat split bill
                  atau menagih teman.
                </p>
              </div>
              <span className="text-[13px] md:text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full">
                Automasi Aktif
              </span>
            </div>

            <div className="pt-6 space-y-6">
              {/* Default Settlement Account Card */}
              <div className="p-4 md:p-5 rounded-xl border border-sky-200 bg-sky-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 border border-sky-200 flex items-center justify-center flex-shrink-0">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        Rekening Penampungan Default Patungan
                      </h3>
                      <span className="text-xs md:text-[10px] font-bold bg-sky-600 text-white px-2 py-0.5 rounded">
                        UTAMA
                      </span>
                    </div>
                    <p className="text-sm text-slate-900 mt-0.5">
                      <strong>BCA Platinum Prioritas</strong> —{" "}
                      <span className="tabular-nums">0881-2948-1029</span> a.n.
                      Alex Wijaya
                    </p>
                    <p className="text-[13px] md:text-xs text-slate-500 mt-1">
                      QRIS Dinamis dan nomor transfer ini otomatis tersemat di
                      tautan tagihan yang Anda bagikan.
                    </p>
                  </div>
                </div>
                <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 self-start md:self-auto px-3.5 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 text-sm font-semibold rounded-lg transition-colors shadow-sm">
                  Ganti Rekening
                </button>
              </div>

              {/* Toggles and Rounding Rules */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {/* Toggle 1: Auto WhatsApp Format */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-emerald-600" />
                      <span className="text-sm font-semibold text-slate-900">
                        Format Pesan WhatsApp Rinci
                      </span>
                    </div>
                    <p className="text-[13px] md:text-xs text-slate-500">
                      Menyertakan rincian item pesanan, porsi pajak, service
                      charge, serta tautan bayar QRIS langsung dalam 1 klik.
                    </p>
                  </div>
                  {/* Toggle Switch */}
                  <button
                    type="button"
                    onClick={() => setAutoWhatsapp(!autoWhatsapp)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      autoWhatsapp ? "bg-sky-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        autoWhatsapp ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>

                {/* Toggle 2: Automated Reminder H+2 */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-sky-600" />
                      <span className="text-sm font-semibold text-slate-900">
                        Pengingat Ramah Otomatis (H+2)
                      </span>
                    </div>
                    <p className="text-[13px] md:text-xs text-slate-500">
                      Mengirim pesan pengingat sopan kepada rekan patungan yang
                      belum mencatat pelunasan setelah 48 jam.
                    </p>
                  </div>
                  {/* Toggle Switch */}
                  <button
                    type="button"
                    onClick={() => setAutoReminder(!autoReminder)}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      autoReminder ? "bg-sky-600" : "bg-slate-300"
                    }`}
                  >
                    <span
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                        autoReminder ? "translate-x-5" : "translate-x-0"
                      }`}
                    />
                  </button>
                </div>
              </div>

              {/* Rounding Rules Selection */}
              <div className="pt-2">
                <label className="block text-sm font-semibold text-slate-900 mb-3">
                  Aturan Pembulatan Nominal Pecahan Rupiah
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Option A */}
                  <label
                    onClick={() => setRoundingRule("100")}
                    className={`relative flex items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      roundingRule === "100"
                        ? "border-sky-600 bg-sky-50/50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="rounding_rule"
                      checked={roundingRule === "100"}
                      onChange={() => setRoundingRule("100")}
                      className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300"
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-semibold text-slate-900">
                        Dibulatkan ke Rp 100 Terdekat
                      </span>
                      <span className="block text-[13px] md:text-xs text-slate-500">
                        Mencegah transfer dengan digit sen ganjil (e.g. Rp
                        34.283 → Rp 34.300).
                      </span>
                    </div>
                  </label>

                  {/* Option B */}
                  <label
                    onClick={() => setRoundingRule("exact")}
                    className={`relative flex items-center p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                      roundingRule === "exact"
                        ? "border-sky-600 bg-sky-50/50"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="rounding_rule"
                      checked={roundingRule === "exact"}
                      onChange={() => setRoundingRule("exact")}
                      className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300"
                    />
                    <div className="ml-3">
                      <span className="block text-sm font-medium text-slate-900">
                        Sesuai Pecahan Asli Presisi
                      </span>
                      <span className="block text-[13px] md:text-xs text-slate-500">
                        Menyimpan nilai pembagian murni tanpa pembulatan
                        matematis.
                      </span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: KEAMANAN & AUTENTIKASI */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Keamanan & Autentikasi
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Lindungi otorisasi penarikan saldo split bill dan transfer
                  dana antar dompet.
                </p>
              </div>
              <span className="text-[13px] md:text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1">
                <Lock className="w-3 h-3" />
                Perhitungan Maksimal
              </span>
            </div>

            <div className="pt-6 space-y-6">
              {/* 2-Pane Security Credentials */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* PIN Transaksi 6-Digit */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/30 flex flex-col justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center flex-shrink-0">
                      <KeyRound className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        PIN Transaksi 6-Digit
                      </h3>
                      <p className="text-[13px] md:text-xs text-slate-500 mt-0.5">
                        Diperlukan setiap kali Anda melakukan pencairan saldo
                        patungan ke rekening bank.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs md:text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                          STATUS: AKTIF
                        </span>
                        <span className="text-[13px] md:text-xs text-slate-400">
                          Terakhir diubah 14 hari lalu
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-end">
                    <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 text-[13px] md:text-xs font-semibold rounded-lg transition-colors shadow-sm">
                      Ubah PIN Transaksi
                    </button>
                  </div>
                </div>

                {/* Two-Factor Authentication (2FA) */}
                <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/30 flex flex-col justify-between">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">
                        Autentikasi Dua Faktor (2FA)
                      </h3>
                      <p className="text-[13px] md:text-xs text-slate-500 mt-0.5">
                        Kode OTP waktu nyata melalui aplikasi Google
                        Authenticator saat masuk perangkat baru.
                      </p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-xs md:text-[10px] font-semibold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                          AKTIF (Google Authenticator)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 flex items-center justify-end">
                    <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-4 py-2 bg-white border border-slate-300 hover:bg-slate-50 text-slate-900 text-[13px] md:text-xs font-semibold rounded-lg transition-colors shadow-sm">
                      Konfigurasi Ulang 2FA
                    </button>
                  </div>
                </div>
              </div>

              {/* Active Device Sessions */}
              <div className="pt-2">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">
                  Sesi Perangkat Masuk (Active Sessions)
                </h3>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
                  {/* Session 1: Current Device */}
                  <div className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                        <Laptop className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-slate-900">
                            MacBook Pro 14&quot; (Apple M2 Pro)
                          </span>
                          <span className="text-xs md:text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded-full">
                            Perangkat Ini
                          </span>
                        </div>
                        <p className="text-[13px] md:text-xs text-slate-500">
                          Chrome 122.0 • Jakarta Selatan, Indonesia • IP:
                          182.253.xx.xx
                        </p>
                      </div>
                    </div>
                    <span className="text-[13px] md:text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                      Aktif Sekarang
                    </span>
                  </div>

                  {/* Session 2: Mobile Device */}
                  <div className="p-4 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-bold text-slate-900">
                          iPhone 15 Pro Max (iOS 17.4)
                        </span>
                        <p className="text-[13px] md:text-xs text-slate-500">
                          Pilah Mobile App v2.4.1 • Jakarta, Indonesia •
                          Terakhir aktif 45 menit lalu
                        </p>
                      </div>
                    </div>
                    <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 text-[13px] md:text-xs font-medium text-rose-600 hover:text-rose-700 px-3 py-1 rounded hover:bg-rose-50 transition-colors">
                      Putuskan Sesi
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: PENGATURAN NOTIFIKASI */}
          <section className="bg-white border border-slate-200 rounded-2xl shadow-sm p-4 md:p-8">
            <div className="flex items-center justify-between pb-6 border-b border-slate-100">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Pengaturan Notifikasi & Laporan
                </h2>
                <p className="text-sm text-slate-500 mt-0.5">
                  Tentukan jalur komunikasi dan frekuensi pengiriman ringkasan
                  keuangan Anda.
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-4">
              {/* Notification Item 1 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/50 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Banknote className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Notifikasi Pembayaran Masuk Real-Time
                    </h3>
                    <p className="text-[13px] md:text-xs text-slate-500">
                      Kirimkan push notification instan dan email ketika teman
                      melunasi bagian tagihannya.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setRealtimeNotify(!realtimeNotify)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    realtimeNotify ? "bg-sky-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      realtimeNotify ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Notification Item 2 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/50 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      Laporan Mingguan Arus Kas & Analisis Tagihan
                    </h3>
                    <p className="text-[13px] md:text-xs text-slate-500">
                      Terima ringkasan PDF visual setiap hari Senin pukul 08:00
                      WIB mengenai total pengeluaran dan piutang.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setWeeklyReport(!weeklyReport)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    weeklyReport ? "bg-sky-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      weeklyReport ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>

              {/* Notification Item 3 */}
              <div className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50/50 transition-colors">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center flex-shrink-0">
                    <Megaphone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">
                      Tips Finansial & Pembaruan Fitur Pilah
                    </h3>
                    <p className="text-[13px] md:text-xs text-slate-500">
                      Informasi rilis versi baru serta kiat manajemen patungan
                      grup yang efisien.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMarketingTips(!marketingTips)}
                  className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                    marketingTips ? "bg-sky-600" : "bg-slate-300"
                  }`}
                >
                  <span
                    className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                      marketingTips ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* FOOTER STICKY ACTION BAR */}
        <div className="sticky bottom-4 z-20 mt-10 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[13px] md:text-xs text-slate-500">
            <Info className="w-5 h-5 md:w-4 md:h-4 text-sky-600" />
            <span>
              Perubahan preferensi langsung disinkronkan ke semua perangkat
              aktif.
            </span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 flex-1 sm:flex-initial px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 rounded-lg text-sm font-semibold transition-colors"
              type="button"
            >
              Reset ke Default
            </button>
            <button
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 flex-1 sm:flex-initial px-6 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg text-sm font-semibold shadow-sm transition-all duration-150 active:scale-[0.985] flex items-center justify-center gap-2"
              id="save-btn"
              type="button"
            >
              <Save className="w-5 h-5 md:w-4 md:h-4" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
