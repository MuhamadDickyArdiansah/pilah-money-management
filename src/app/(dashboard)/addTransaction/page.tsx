"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  History,
  Scan,
  ArrowUpRight,
  ArrowDownLeft,
  ArrowLeftRight,
  GitFork,
  Backpack,
  Store,
  Calendar,
  Clock,
  Utensils,
  Car,
  ShoppingBag,
  Zap,
  BadgeCheck,
  Users,
  UserPlus,
  X,
  ShieldCheck,
  Receipt,
  CheckCircle2,
  Landmark,
  Info,
  Sparkles,
  Coffee,
  Banknote,
  Fuel,
} from "lucide-react";

export default function AddTransactionPage() {
  const [txType, setTxType] = useState<
    "expense" | "income" | "transfer" | "split"
  >("expense");
  const [amount, setAmount] = useState<number>(185000);
  const [category, setCategory] = useState<string>("Makanan & Minuman");
  const [sourceWallet, setSourceWallet] = useState<string>("bca");
  const [isSplit, setIsSplit] = useState<boolean>(false);

  // Helper untuk menambah nominal dari tombol preset
  const addAmount = (value: number) => {
    setAmount((prev) => prev + value);
  };

  // Helper format rupiah
  const formatRupiah = (val: number) => {
    return new Intl.NumberFormat("id-ID").format(val);
  };

  const handleAmountInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    setAmount(rawValue ? parseInt(rawValue, 10) : 0);
  };

  return (
    <div
      className="flex-1 ml-0 w-full flex flex-col min-h-screen bg-slate-50 transition-all duration-300 ease-in-out"
      id="content-container"
    >
      {/* Main Body Canvas */}
      <main className="flex-1 p-4 md:p-6 max-w-[1440px] w-full mx-auto">
        {/* Header Banner Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Tambah Transaksi Baru
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Catat pengeluaran, pemasukan, atau atur split bill langsung ke
              dalam dompet Anda.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 flex items-center gap-2 px-3 py-2 text-sky-600 bg-sky-50 border border-sky-200 rounded-lg text-sm font-medium transition-colors hover:bg-sky-600 hover:text-white group"
              type="button"
            >
              <Scan className="w-5 h-5 md:w-4 md:h-4" />
              <span>Scan Struk Pilah OCR</span>
            </button>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Column Left: Form Canvas (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              {/* SECTION A: Segmented Type Selector & Amount Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 shadow-sm">
                <label className="block text-[13px] md:text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                  Tipe Transaksi
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 p-1 bg-slate-100 rounded-lg gap-1 mb-6">
                  <button
                    type="button"
                    onClick={() => setTxType("expense")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-semibold transition-all duration-150 ${
                      txType === "expense"
                        ? "bg-white text-rose-600 shadow-sm border border-rose-200"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5 md:w-4 md:h-4" />
                    Pengeluaran
                  </button>
                  <button
                    type="button"
                    onClick={() => setTxType("income")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-semibold transition-all duration-150 ${
                      txType === "income"
                        ? "bg-white text-emerald-600 shadow-sm border border-emerald-200"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <ArrowDownLeft className="w-5 h-5 md:w-4 md:h-4" />
                    Pemasukan
                  </button>
                  <button
                    type="button"
                    onClick={() => setTxType("transfer")}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-semibold transition-all duration-150 ${
                      txType === "transfer"
                        ? "bg-white text-sky-600 shadow-sm border border-sky-200"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <ArrowLeftRight className="w-5 h-5 md:w-4 md:h-4" />
                    Transfer
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTxType("split");
                      setIsSplit(true);
                    }}
                    className={`flex items-center justify-center gap-2 py-2 px-3 rounded-md text-sm font-semibold transition-all duration-150 ${
                      txType === "split"
                        ? "bg-white text-indigo-600 shadow-sm border border-indigo-200"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                  >
                    <GitFork className="w-5 h-5 md:w-4 md:h-4" />
                    Tagihan
                  </button>
                </div>

                {/* Amount Input */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className="text-sm font-semibold text-slate-800"
                      htmlFor="nominal-input"
                    >
                      Nominal Transaksi
                    </label>
                    <span className="text-[13px] md:text-xs text-slate-500">
                      Mata Uang: IDR (Rupiah)
                    </span>
                  </div>
                  <div className="relative flex items-center rounded-xl border-2 border-slate-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100 transition-all bg-white overflow-hidden">
                    <div className="px-4 py-3 bg-slate-100 border-r border-slate-200 flex items-center justify-center shrink-0">
                      <span className="text-lg font-bold text-slate-500">
                        Rp
                      </span>
                    </div>
                    <input
                      id="nominal-input"
                      className="min-h-11 text-base md:text-sm w-full px-4 py-3 text-2xl font-bold text-slate-900 outline-none border-0 focus:ring-0 tabular-nums placeholder:text-slate-300"
                      type="text"
                      value={formatRupiah(amount)}
                      onChange={handleAmountInputChange}
                      placeholder="0"
                    />
                    <button
                      className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-3 text-slate-400 hover:text-slate-700"
                      onClick={() => setAmount(0)}
                      title="Bersihkan input"
                      type="button"
                    >
                      <Backpack className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Quick Presets */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[13px] md:text-xs text-slate-500 mr-1">
                    Pilihan Cepat:
                  </span>
                  {[
                    { label: "+50rb", val: 50000 },
                    { label: "+100rb", val: 100000 },
                    { label: "+250rb", val: 250000 },
                    { label: "+500rb", val: 500000 },
                    { label: "+1jt", val: 1000000 },
                  ].map((preset) => (
                    <button
                      key={preset.val}
                      className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-sky-50 hover:text-sky-600 text-slate-700 text-[13px] md:text-xs font-medium border border-slate-200 transition-colors tabular-nums"
                      onClick={() => addAmount(preset.val)}
                      type="button"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* SECTION B: Core Details Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 shadow-sm space-y-4">
                <h3 className="text-base font-semibold text-slate-900 border-b border-slate-100 pb-3">
                  Detail Informasi Transaksi
                </h3>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-800">
                      Sumber Dana / Akun
                    </label>
                    <span className="text-[13px] md:text-xs text-slate-600 font-bold">
                      Dipilih : <span>BNI</span>
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      {
                        name: "BNI",
                        amount: 100000,
                        src: "bni-logo.png",
                      },
                      {
                        name: "JAGO",
                        amount: 100000,
                        src: "https://www.jago.com/images/brand/logo-jago-yellow-re.svg",
                      },
                      {
                        name: "MANDIRI",
                        amount: 100000,
                        src: "https://www.bankmandiri.co.id/documents/20143/44881086/ag-branding-logo-1.png/842d8cf8-b7fb-3014-9620-21f0f88d8377?t=1623309819034",
                      },
                    ].map((item) => {
                      const logo = item.src;
                      const isSelected = category === item.name;
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setCategory(item.name)}
                          className={`flex flex-col items-center gap-2.5 p-2 rounded-lg text-left transition-all border ${
                            isSelected
                              ? "border-2 border-sky-600 bg-sky-50/50"
                              : "border-slate-200 bg-white hover:bg-slate-50"
                          }`}
                        >
                          <div
                            className={` rounded-md text-white flex items-center justify-between w-full`}
                          >
                            <div className="rounded-md bg-white flex items-center w-10 h-10 p-1">
                              <img src={logo} alt="" className="h-full w-full max-w-full object-contain" />
                            </div>

                            <input type="radio" checked={isSelected} />
                          </div>
                          <div className="flex flex-col gap-2 w-full">
                            <p className="text-[13px] md:text-xs font-semibold text-slate-800 truncate">
                              {item.name.split(" ")[0]}
                            </p>
                            <p className="text-xs md:text-[11px] text-slate-500 truncate">
                              {item.amount.toLocaleString("id-ID", {
                                style: "currency",
                                currency: "IDR",
                              })}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  <div>
                    <span className="text-[13px] md:text-xs text-sky-600 font-medium cursor-pointer hover:underline">
                      + Tambah Akun
                    </span>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-semibold text-slate-800 mb-1.5"
                    htmlFor="tx-title"
                  >
                    Nama Transaksi / Merchant
                  </label>
                  <div className="relative">
                    <Store className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
                    <input
                      id="tx-title"
                      className="min-h-11 text-base md:text-sm w-full bg-white pl-10 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all placeholder:text-slate-400"
                      defaultValue="Makan Siang Resto Bebek Kaleyo"
                      placeholder="Contoh: Makan Siang Resto Bebek Kaleyo"
                      type="text"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                      htmlFor="tx-date"
                    >
                      Tanggal Transaksi
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
                      <input
                        id="tx-date"
                        className="min-h-11 text-base md:text-sm w-full bg-white pl-10 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-slate-700"
                        defaultValue="2025-05-18"
                        type="date"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-semibold text-slate-800 mb-1.5"
                      htmlFor="tx-time"
                    >
                      Waktu Transaksi
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-2.5 text-slate-400 w-5 h-5" />
                      <input
                        id="tx-time"
                        className="min-h-11 text-base md:text-sm w-full bg-white pl-10 pr-3 py-2 text-sm rounded-lg border border-slate-300 focus:border-sky-500 focus:ring-2 focus:ring-sky-100 outline-none transition-all text-slate-700"
                        defaultValue="13:25"
                        type="time"
                      />
                    </div>
                  </div>
                </div>

                {/* Category Picker */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-sm font-semibold text-slate-800">
                      Kategori
                    </label>
                    <span className="text-[13px] md:text-xs text-sky-600 font-medium cursor-pointer hover:underline">
                      + Kategori Baru
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {[
                      {
                        name: "Makanan & Minuman",
                        sub: "& Minuman",
                        icon: Utensils,
                        color: "bg-sky-600",
                      },
                      {
                        name: "Transportasi",
                        sub: "Bensin, Ojol",
                        icon: Car,
                        color: "bg-amber-500",
                      },
                      {
                        name: "Belanja",
                        sub: "Groceries",
                        icon: ShoppingBag,
                        color: "bg-purple-500",
                      },
                      {
                        name: "Tagihan",
                        sub: "Listrik, WiFi",
                        icon: Zap,
                        color: "bg-rose-500",
                      },
                    ].map((item) => {
                      const IconComp = item.icon;
                      const isSelected = category === item.name;
                      return (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => setCategory(item.name)}
                          className={`flex items-center gap-2.5 p-2 rounded-lg text-left transition-all border ${
                            isSelected
                              ? "border-2 border-sky-600 bg-sky-50/50"
                              : "border-slate-200 bg-white hover:bg-slate-50"
                          }`}
                        >
                          <div
                            className={`w-8 h-8 rounded-md ${item.color} text-white flex items-center justify-center shrink-0`}
                          >
                            <IconComp className="w-5 h-5 md:w-4 md:h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[13px] md:text-xs font-semibold text-slate-800 truncate">
                              {item.name.split(" ")[0]}
                            </p>
                            <p className="text-xs md:text-[11px] text-slate-500 truncate">
                              {item.sub}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* SECTION E: Action Buttons Bar */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 sticky bottom-4 z-10">
                <button
                  className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-full sm:w-auto px-4 py-2.5 rounded-lg border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 text-sm font-medium transition-colors"
                  type="button"
                >
                  Batal / Kembali
                </button>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    className={`min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-full sm:w-auto px-6 py-2.5 rounded-lg text-white text-sm font-bold transition-all shadow-sm active:scale-[0.985] flex items-center justify-center gap-2 ${
                      txType === "expense"
                        ? "bg-rose-600 hover:bg-rose-700"
                        : txType === "income"
                          ? "bg-emerald-600 hover:bg-emerald-700"
                          : txType === "transfer"
                            ? "bg-sky-600 hover:bg-sky-700"
                            : "bg-indigo-600 hover:bg-indigo-700"
                    }`}
                    type="submit"
                  >
                    <CheckCircle2 className="w-5 h-5 md:w-4 md:h-4" />
                    <span className="ml-1.5">
                      Simpan{" "}
                      {txType === "expense"
                        ? "Pengeluaran"
                        : txType === "income"
                          ? "Pemasukan"
                          : txType === "transfer"
                            ? "Transfer"
                            : "Split Bill"}
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>

          {/* Column Right: Live Financial Summary & Insights (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            {/* 1. Balance Simulation Card */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <span className="text-[13px] md:text-xs font-bold text-slate-400 tracking-wider">
                  SIMULASI KEUANGAN
                </span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-700 font-bold flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">
                    BCA Prioritas
                  </h4>
                  <p className="text-[13px] md:text-xs text-slate-500">
                    Rekening Operasional Utama
                  </p>
                </div>
              </div>

              {/* Metrics Flow */}
              <div className="space-y-3 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-[13px] md:text-xs text-slate-500">Saldo Saat Ini</span>
                  <span className="text-sm font-semibold text-slate-800 tabular-nums">
                    Rp 14.850.000
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[13px] md:text-xs text-slate-500">
                    Nominal Pengeluaran
                  </span>
                  <span className="text-sm font-semibold text-rose-600 tabular-nums">
                    - Rp {formatRupiah(amount)}
                  </span>
                </div>
                <div className="h-px bg-slate-200 border-dashed my-1" />
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[13px] md:text-xs font-bold text-slate-800">
                      Estimasi Saldo Akhir
                    </span>
                    <p className="text-xs md:text-[10px] text-slate-500">
                      Setelah transaksi dicatat
                    </p>
                  </div>
                  <span className="text-sm font-bold text-sky-600 tabular-nums">
                    Rp {formatRupiah(14850000 - amount)}
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[13px] md:text-xs mb-1.5">
                  <span className="text-slate-500">
                    Batas Anggaran ({category.split(" ")[0]})
                  </span>
                  <span className="font-semibold text-slate-800">
                    Rp 3.500.000 / bln
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-amber-500 h-2 rounded-full"
                    style={{ width: "68%" }}
                  />
                </div>
                <p className="text-[13px] md:text-xs text-slate-500 mt-1.5 flex items-center gap-1">
                  <Info className="w-4 h-4 md:w-3.5 md:h-3.5 text-amber-500" />
                  Terpakai 68% (Sisa Rp 1.120.000 bulan ini)
                </p>
              </div>
            </div>

            {/* 3. Recent 3 Transactions Card (MASUK KE SINI) */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 md:p-6 shadow-sm">
              <div className="flex items-center justify-between mb-3 border-b border-slate-100 pb-2">
                <h4 className="text-sm font-bold text-slate-800">
                  Transaksi Terakhir
                </h4>
                <a
                  href="#"
                  className="text-[13px] md:text-xs font-semibold text-sky-600 hover:text-sky-700 hover:underline"
                >
                  Semua
                </a>
              </div>
              <div className="divide-y divide-slate-100">
                {/* Tx 1 */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <Coffee className="w-5 h-5 md:w-4 md:h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Kopi Kenangan Kenari
                      </p>
                      <p className="text-[13px] md:text-xs text-slate-500">
                        Hari ini, 09:12 • GoPay
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-rose-600 tabular-nums">
                    -Rp 38.000
                  </span>
                </div>

                {/* Tx 2 */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <Banknote className="w-5 h-5 md:w-4 md:h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Split Bill Futsal (Reimburse)
                      </p>
                      <p className="text-[13px] md:text-xs text-slate-500">
                        Kemarin • BCA Prioritas
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-emerald-600 tabular-nums">
                    +Rp 120.000
                  </span>
                </div>

                {/* Tx 3 */}
                <div className="py-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                      <Fuel className="w-5 h-5 md:w-4 md:h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">
                        Pertamina Bintaro
                      </p>
                      <p className="text-[13px] md:text-xs text-slate-500">
                        16 Mei • Mandiri Utama
                      </p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-rose-600 tabular-nums">
                    -Rp 250.000
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
