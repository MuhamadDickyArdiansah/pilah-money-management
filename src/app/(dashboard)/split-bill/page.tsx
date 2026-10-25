"use client";

import { useState } from "react";
import {
  ChevronRight,
  ChevronDown,
  Save,
  ScanLine,
  CheckCircle2,
  CircleDot,
  Calendar,
  Wallet,
  Lock,
  X,
  Plus,
  PlusCircle,
  Receipt,
  Percent,
  Tag,
  Minus,
  Users,
  Copy,
  MessageSquare,
  Check,
  QrCode,
  Share2,
} from "lucide-react";

export default function CreateSplitBillPage() {
  const [discountType, setDiscountType] = useState<"percent" | "rp">("rp");

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 pb-14 md:pb-0">

      {/* Main Container */}
      <main
        id="main-content"
        className="flex-1 max-w-7xl mx-auto px-4 lg:px-8 py-6 pb-36 md:pb-28 w-full"
      >
        {/* Top Headline & Action Breadcrumb */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-1.5 text-slate-400 text-[13px] md:text-xs font-medium mb-1">
              <span>Split Bill</span>
              <ChevronRight className="w-4 h-4 md:w-3.5 md:h-3.5" />
              <span className="text-sky-600 dark:text-sky-400 font-semibold">
                Buat Tagihan Baru
              </span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Multi-Step Split Bill Generator
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 text-[13px] md:text-xs font-semibold transition-all active:scale-[0.99] flex items-center gap-2 shadow-xs"
            >
              <Save className="w-5 h-5 md:w-4 md:h-4 text-slate-500" />
              <span>Simpan Draf</span>
            </button>
            <button
              type="button"
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-4 py-2 rounded-xl bg-sky-600 text-white hover:bg-sky-700 text-[13px] md:text-xs font-semibold transition-all active:scale-[0.99] flex items-center gap-2 shadow-xs"
            >
              <ScanLine className="w-5 h-5 md:w-4 md:h-4" />
              <span>Scan Struk Otomatis</span>
            </button>
          </div>
        </div>

        {/* Step Progress Tracker Component */}
        <section className="bg-white dark:bg-slate-900 rounded-2xl p-4 lg:p-4 md:p-6 mb-8 border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[13px] md:text-xs shrink-0">
                1
              </div>
              <div>
                <p className="text-xs md:text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Langkah 1
                </p>
                <p className="text-[13px] md:text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Detail Acara
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 ml-auto text-emerald-500 shrink-0" />
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[13px] md:text-xs shrink-0">
                2
              </div>
              <div>
                <p className="text-xs md:text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Langkah 2
                </p>
                <p className="text-[13px] md:text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Item & Anggota
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 ml-auto text-emerald-500 shrink-0" />
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/60">
              <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[13px] md:text-xs shrink-0">
                3
              </div>
              <div>
                <p className="text-xs md:text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Langkah 3
                </p>
                <p className="text-[13px] md:text-xs font-semibold text-slate-800 dark:text-slate-200">
                  Pajak & Diskon
                </p>
              </div>
              <CheckCircle2 className="w-5 h-5 ml-auto text-emerald-500 shrink-0" />
            </div>

            {/* Step 4 (Active) */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 border-2 border-sky-600">
              <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[13px] md:text-xs shrink-0">
                4
              </div>
              <div>
                <p className="text-xs md:text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider">
                  Langkah Terakhir
                </p>
                <p className="text-[13px] md:text-xs font-bold text-slate-900 dark:text-white">
                  Ringkasan & Tagih
                </p>
              </div>
              <CircleDot className="w-5 h-5 ml-auto text-sky-600 dark:text-sky-400 shrink-0" />
            </div>
          </div>
        </section>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Steps 1 & 2 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* STEP 1: Detail Acara */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    1. Detail Acara
                  </h2>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs md:text-[11px] bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-semibold">
                  Terisi Lengkap
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div className="sm:col-span-2">
                  <label className="block text-[13px] md:text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Nama Acara / Pengeluaran
                  </label>
                  <input
                    type="text"
                    defaultValue="Makan Malam Bakmi Grand Indonesia"
                    className="min-h-11 text-base md:text-sm w-full h-10 px-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:border-sky-600 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-950 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[13px] md:text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Tanggal Transaksi
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      defaultValue="24 Okt 2024"
                      className="min-h-11 text-base md:text-sm w-full h-10 pl-9 pr-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-slate-900 dark:text-slate-100 focus:border-sky-600 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-950 outline-none"
                    />
                    <Calendar className="w-5 h-5 md:w-4 md:h-4 absolute left-3 text-slate-400" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] md:text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                    Koleksi ke Dompet (Target Wallet)
                  </label>
                  <div className="relative flex items-center">
                    <select
                      defaultValue="bca"
                      className="w-full h-10 pl-9 pr-8 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-[13px] md:text-xs text-slate-900 dark:text-slate-100 focus:border-sky-600 focus:ring-2 focus:ring-sky-100 dark:focus:ring-sky-950 outline-none appearance-none"
                    >
                      <option value="bca">BCA - 8812 Alex (Utama)</option>
                      <option value="jago">Jago Pocket - Kongkow 0021</option>
                      <option value="mandiri">Mandiri - 9940 Alex</option>
                    </select>
                    <Wallet className="w-5 h-5 md:w-4 md:h-4 absolute left-3 text-slate-400" />
                    <ChevronDown className="w-5 h-5 md:w-4 md:h-4 absolute right-3 text-slate-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Members Chip Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-[13px] md:text-xs font-medium text-slate-600 dark:text-slate-400">
                    Partisipan / Teman (5 Orang)
                  </label>
                  <button
                    type="button"
                    className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 text-[13px] md:text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                  >
                    + Pilih dari Kontak
                  </button>
                </div>
                <div className="flex flex-wrap items-center gap-2 p-2.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 min-h-[48px]">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-600 text-white rounded-full text-[13px] md:text-xs font-medium shadow-xs">
                    <span className="w-5 h-5 md:w-4 md:h-4 rounded-full bg-white/20 text-white flex items-center justify-center text-xs md:text-[10px] font-bold">
                      A
                    </span>
                    <span>Alex (Anda)</span>
                    <Lock className="w-3 h-3 text-white/70 ml-0.5" />
                  </div>

                  {[
                    "Budi Santoso",
                    "Citra Kirana",
                    "Dian Sastro",
                    "Eko Prasetyo",
                  ].map((name) => (
                    <div
                      key={name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-[13px] md:text-xs font-medium hover:border-sky-300 transition-colors"
                    >
                      <span className="w-5 h-5 md:w-4 md:h-4 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold flex items-center justify-center text-xs md:text-[10px]">
                        {name[0]}
                      </span>
                      <span>{name}</span>
                      <button
                        type="button"
                        className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 hover:text-rose-500 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}

                  <button
                    type="button"
                    className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center gap-1 px-3 py-1 bg-white dark:bg-slate-900 border border-dashed border-sky-600 text-sky-600 dark:text-sky-400 rounded-full text-[13px] md:text-xs font-semibold hover:bg-sky-50 dark:hover:bg-sky-950/50 transition-colors"
                  >
                    <Plus className="w-4 h-4 md:w-3.5 md:h-3.5" />
                    <span>Tambah Teman</span>
                  </button>
                </div>
              </div>
            </div>

            {/* STEP 2: Itemization & Assignment */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Receipt className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    2. Rincian Item & Pembagian
                  </h2>
                </div>
                <span className="text-[13px] md:text-xs text-slate-400">5 Item dicatat</span>
              </div>

              {/* Dynamic Itemized Bill List */}
              <div className="space-y-3 mb-4">
                {/* Item 1 */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[13px] md:text-xs font-semibold text-sky-600 dark:text-sky-400">
                        1
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-[13px] md:text-xs">
                        Bakmi Spesial GM (x3)
                      </span>
                    </div>
                    <div className="text-[13px] md:text-xs font-bold text-slate-900 dark:text-white">
                      Rp 144.000
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[13px] md:text-xs text-slate-400 mr-1">
                      Dibagi ke:
                    </span>
                    {["Alex", "Budi", "Citra"].map((person) => (
                      <span
                        key={person}
                        className="px-2 py-0.5 rounded-full text-xs md:text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium"
                      >
                        {person}
                      </span>
                    ))}
                    <span className="text-[13px] md:text-xs text-slate-400 ml-auto">
                      Rp 48.000 / orang
                    </span>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[13px] md:text-xs font-semibold text-sky-600 dark:text-sky-400">
                        2
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-[13px] md:text-xs">
                        Pangsit Goreng 10pcs (x1)
                      </span>
                    </div>
                    <div className="text-[13px] md:text-xs font-bold text-slate-900 dark:text-white">
                      Rp 42.000
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[13px] md:text-xs text-slate-400 mr-1">
                      Dibagi ke:
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs md:text-[10px] bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-bold">
                      Split Rata 5 Orang (Semua)
                    </span>
                    <span className="text-[13px] md:text-xs text-slate-400 ml-auto">
                      Rp 8.400 / orang
                    </span>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-[13px] md:text-xs font-semibold text-sky-600 dark:text-sky-400">
                        3
                      </span>
                      <span className="font-semibold text-slate-800 dark:text-slate-200 text-[13px] md:text-xs">
                        Nasi Goreng Smoked Chicken (x1)
                      </span>
                    </div>
                    <div className="text-[13px] md:text-xs font-bold text-slate-900 dark:text-white">
                      Rp 48.000
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[13px] md:text-xs text-slate-400 mr-1">
                      Dibagi ke:
                    </span>
                    <span className="px-2 py-0.5 rounded-full text-xs md:text-[10px] bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold">
                      Dian
                    </span>
                    <span className="text-[13px] md:text-xs text-slate-400 ml-auto">
                      Personal
                    </span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-full py-2.5 px-4 border border-dashed border-sky-600 text-sky-600 dark:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-950/50 rounded-xl text-[13px] md:text-xs font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <PlusCircle className="w-5 h-5 md:w-4 md:h-4" />
                <span>+ Tambah Item Baru</span>
              </button>
            </div>
          </div>

          {/* Right Column: Steps 3 & 4 */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* STEP 3: Adjustments & Calculations */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Percent className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    3. Pajak & Diskon
                  </h2>
                </div>
                <span className="text-xs md:text-[11px] text-slate-400 uppercase font-semibold">
                  Proporsional
                </span>
              </div>

              {/* Discount Input */}
              <div className="mb-4">
                <label className="block text-[13px] md:text-xs font-medium text-slate-600 dark:text-slate-400 mb-1.5">
                  Voucher / Diskon Promo
                </label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-[13px] md:text-xs font-bold text-slate-400">
                      Rp
                    </span>
                    <input
                      type="text"
                      defaultValue="25.000"
                      className="min-h-11 text-base md:text-sm w-full h-10 pl-9 pr-3 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl text-base md:text-sm font-bold text-slate-900 dark:text-slate-100 focus:border-sky-600 outline-none"
                    />
                  </div>
                  <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200/60 dark:border-slate-700">
                    <button
                      type="button"
                      onClick={() => setDiscountType("percent")}
                      className={`px-2.5 py-1 text-[13px] md:text-xs rounded-lg font-bold transition-colors ${
                        discountType === "percent"
                          ? "bg-sky-600 text-white shadow-xs"
                          : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                      }`}
                    >
                      %
                    </button>
                    <button
                      type="button"
                      onClick={() => setDiscountType("rp")}
                      className={`px-2.5 py-1 text-[13px] md:text-xs rounded-lg font-bold transition-colors ${
                        discountType === "rp"
                          ? "bg-sky-600 text-white shadow-xs"
                          : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                      }`}
                    >
                      Rp
                    </button>
                  </div>
                </div>
                <p className="text-[13px] md:text-xs text-emerald-600 dark:text-emerald-400 mt-1.5 flex items-center gap-1 font-medium">
                  <Tag className="w-4 h-4 md:w-3.5 md:h-3.5" />
                  <span>Promo Grand Opening GM Mall</span>
                </p>
              </div>

              {/* Tax & Service Grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between text-[13px] md:text-xs text-slate-500 mb-1">
                    <span>Pajak (PPN)</span>
                    <span className="text-xs md:text-[10px] px-1.5 py-0.5 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold rounded">
                      11%
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Rp 30.470
                  </p>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200/60 dark:border-slate-800">
                  <div className="flex items-center justify-between text-[13px] md:text-xs text-slate-500 mb-1">
                    <span>Service Charge</span>
                    <span className="text-xs md:text-[10px] px-1.5 py-0.5 bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold rounded">
                      5%
                    </span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">
                    Rp 13.850
                  </p>
                </div>
              </div>

              {/* Calculation Summary Card */}
              <div className="p-4 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200/80 dark:border-slate-800 space-y-2">
                <div className="flex justify-between items-center text-[13px] md:text-xs text-slate-600 dark:text-slate-400">
                  <span>Subtotal Item</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    Rp 302.000
                  </span>
                </div>
                <div className="flex justify-between items-center text-[13px] md:text-xs text-emerald-600 dark:text-emerald-400">
                  <span className="flex items-center gap-1">
                    <Minus className="w-4 h-4 md:w-3.5 md:h-3.5" />
                    <span>Potongan Diskon</span>
                  </span>
                  <span className="font-semibold">-Rp 25.000</span>
                </div>
                <div className="flex justify-between items-center text-[13px] md:text-xs text-slate-600 dark:text-slate-400">
                  <span>Total Pajak & Servis</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">
                    +Rp 44.320
                  </span>
                </div>
                <div className="pt-2.5 mt-1 border-t border-slate-200 dark:border-slate-800 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    Grand Total
                  </span>
                  <div className="text-right">
                    <span className="text-base font-black text-sky-600 dark:text-sky-400">
                      Rp 321.320
                    </span>
                    <p className="text-xs md:text-[11px] text-slate-400">
                      Perhitungan proporsional otomatis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* STEP 4: Summary & Share Preview */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-4 md:p-6 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col flex-1">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-sky-600 dark:text-sky-400" />
                  <h2 className="text-base font-bold text-slate-900 dark:text-white">
                    4. Ringkasan Per Anggota
                  </h2>
                </div>
                <span className="text-[13px] md:text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  Siap Ditagih
                </span>
              </div>

              {/* Per-person Breakdown */}
              <div className="space-y-3 mb-6">
                {/* Host */}
                <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-[13px] md:text-xs">
                        A
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-slate-900 dark:text-slate-100 text-[13px] md:text-xs">
                            Alex (Anda)
                          </span>
                          <span className="text-xs md:text-[10px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-sky-700 dark:text-sky-400 font-bold">
                            Host / Talangan
                          </span>
                        </div>
                        <p className="text-xs md:text-[11px] text-slate-400">
                          Bakmi + Pangsit + Es Teh
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900 dark:text-slate-100 text-[13px] md:text-xs">
                        Rp 72.420
                      </p>
                      <span className="text-xs md:text-[10px] text-slate-400">
                        Bagian Sendiri
                      </span>
                    </div>
                  </div>
                </div>

                {/* Budi */}
                <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-sky-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold flex items-center justify-center text-[13px] md:text-xs">
                        B
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-slate-900 dark:text-slate-100 text-[13px] md:text-xs">
                            Budi Santoso
                          </span>
                          <span className="text-xs md:text-[10px] px-2 py-0.5 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-600 dark:text-rose-400 border border-rose-200 dark:border-rose-800 font-medium">
                            Belum Bayar
                          </span>
                        </div>
                        <p className="text-xs md:text-[11px] text-slate-400">
                          Bakmi + Pangsit + Es Teh + Tax
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900 dark:text-slate-100 text-[13px] md:text-xs">
                        Rp 64.200
                      </p>
                      <button
                        type="button"
                        className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 text-xs md:text-[11px] font-semibold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-0.5 ml-auto"
                      >
                        <span>Salin link</span>
                        <Copy className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Citra */}
                <div className="p-3 rounded-xl border border-slate-200/80 dark:border-slate-800 hover:border-sky-300 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold flex items-center justify-center text-[13px] md:text-xs">
                        C
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-slate-900 dark:text-slate-100 text-[13px] md:text-xs">
                            Citra Kirana
                          </span>
                          <span className="text-xs md:text-[10px] px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-medium">
                            Lunas via QRIS
                          </span>
                        </div>
                        <p className="text-xs md:text-[11px] text-slate-400">
                          Bakmi + Pangsit + Es Teh + Tax
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-slate-900 dark:text-slate-100 text-[13px] md:text-xs">
                        Rp 64.200
                      </p>
                      <CheckCircle2 className="w-5 h-5 md:w-4 md:h-4 text-emerald-500 ml-auto" />
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp Message Preview */}
              <div className="mt-auto pt-3 border-t border-slate-100 dark:border-slate-800">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer list-none text-[13px] md:text-xs text-slate-600 dark:text-slate-400 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <MessageSquare className="w-5 h-5 md:w-4 md:h-4 text-emerald-600 dark:text-emerald-400" />
                      <span>Pratinjau Format Pesan WhatsApp</span>
                    </span>
                    <ChevronDown className="w-5 h-5 md:w-4 md:h-4 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="mt-2.5 p-3 bg-slate-50 dark:bg-slate-950 rounded-xl text-xs md:text-[11px] text-slate-600 dark:text-slate-400 font-mono leading-relaxed border border-slate-200/60 dark:border-slate-800">
                    Halo teman-teman! Rincian Split Bill 🍜 Makan Malam Bakmi
                    Grand Indonesia:
                    <br />
                    • Budi: Rp 64.200
                    <br />
                    • Citra: Rp 64.200 (Lunas)
                    <br />
                    • Dian: Rp 98.400
                    <br />
                    • Eko: Rp 41.500
                    <br />
                    Bayar transfer ke BCA 8812 Alex atau scan QRIS via link:
                    bagirata.id/b/gm-8812
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Sticky Bottom Action Dock (Positioned above mobile bottom nav on small screens) */}
      <aside
        aria-label="Action Toolbar"
        className="fixed bottom-14 md:bottom-0 left-0 right-0 z-30 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-lg py-3 px-4 lg:px-8 transition-all"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shrink-0">
              <Check className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[13px] md:text-xs font-bold text-slate-900 dark:text-white">
                  Tagihan Siap Dikeluarkan
                </span>
                <span className="px-2 py-0.5 rounded text-xs md:text-[10px] bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 font-semibold">
                  Tersinkron BCA
                </span>
              </div>
              <p className="text-xs md:text-[11px] text-slate-400">
                Total yang perlu dikumpulkan:{" "}
                <span className="text-slate-800 dark:text-slate-200 font-semibold">
                  Rp 248.900
                </span>{" "}
                (4 orang)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold text-[13px] md:text-xs flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <QrCode className="w-5 h-5 md:w-4 md:h-4 text-sky-600 dark:text-sky-400" />
              <span>Tampilkan QRIS Tagihan</span>
            </button>
            <button
              type="button"
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 font-semibold text-[13px] md:text-xs flex items-center justify-center gap-2 shadow-xs transition-all active:scale-[0.99]"
            >
              <Share2 className="w-5 h-5 md:w-4 md:h-4" />
              <span>Kirim Rincian ke WhatsApp</span>
            </button>
          </div>
        </div>
      </aside>

    </div>
  );
}
