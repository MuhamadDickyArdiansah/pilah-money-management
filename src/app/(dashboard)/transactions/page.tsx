"use client";

import React, { useState } from "react";
import Link from "next/link";

import {
  Search,
  ChevronDown,
  Calendar,
  Download,
  PlusCircle,
  ArrowDown,
  ArrowUp,
  GitFork,
  Landmark,
  TrendingUp,
  TrendingDown,
  CheckCircle2,
  RotateCcw,
  Eye,
  Receipt,
  ChevronLeft,
  ChevronRight,
  Briefcase,
  Utensils,
  Handshake,
  Car,
  Zap,
  ArrowLeftRight,
  ShoppingCart,
  Wallet,
  CreditCard,
  Banknote,
  BarChart,
  MoreHorizontal,
  DownloadIcon,
} from "lucide-react";

interface Transaction {
  id: string;
  date: string;
  time: string;
  title: string;
  category: string;
  categoryIcon: React.ReactNode;
  wallet: string;
  walletIcon: React.ReactNode;
  type: "income" | "expense" | "transfer";
  amount: string;
  extraAmountInfo?: string;
}

const flows = [
  { name: "Total Spent", amount: 15000, change: -15.45, type: "down" },
  { name: "Total Income", amount: 15000, change: 15.45, type: "up" },
  { name: "Transactions", amount: 15000, change: -15.45, type: "down" },
  { name: "Average Transaction", amount: 15000, change: -15.45, type: "down" },
];

const transactions: Transaction[] = [
  {
    id: "TRX-99821",
    date: "25 Okt 2024",
    time: "09:15 WIB",
    title: "Gaji Bulanan PT Tech",
    category: "Gaji & Kompensasi",
    categoryIcon: <Briefcase className="w-5 h-5 md:w-4 md:h-4" />,
    wallet: "Mandiri Payroll",
    walletIcon: <Landmark className="w-5 h-5 md:w-4 md:h-4 text-slate-500" />,
    type: "income",
    amount: "+Rp 32.500.000",
  },
  {
    id: "TRX-99822",
    date: "24 Okt 2024",
    time: "19:42 WIB",
    title: "Makan Malam Bakmi GM",
    category: "Makanan",
    categoryIcon: <Utensils className="w-5 h-5 md:w-4 md:h-4" />,
    wallet: "BCA Utama",
    walletIcon: <CreditCard className="w-5 h-5 md:w-4 md:h-4 text-sky-600" />,
    type: "expense",
    amount: "-Rp 680.000",
  },
  {
    id: "TRX-99823",
    date: "24 Okt 2024",
    time: "20:05 WIB",
    title: "Patungan Bakmi GM dari Siti",
    category: "Split Settlement",
    categoryIcon: <Handshake className="w-5 h-5 md:w-4 md:h-4" />,
    wallet: "BCA Utama",
    walletIcon: <CreditCard className="w-5 h-5 md:w-4 md:h-4 text-sky-600" />,
    type: "income",
    amount: "+Rp 136.000",
  },
  {
    id: "TRX-99824",
    date: "23 Okt 2024",
    time: "08:30 WIB",
    title: "GrabCar Kantor",
    category: "Transport",
    categoryIcon: <Car className="w-5 h-5 md:w-4 md:h-4" />,
    wallet: "GoPay",
    walletIcon: <Wallet className="w-5 h-5 md:w-4 md:h-4 text-sky-600" />,
    type: "expense",
    amount: "-Rp 45.000",
  },
  {
    id: "TRX-99825",
    date: "20 Okt 2024",
    time: "14:10 WIB",
    title: "Tagihan Listrik & WiFi",
    category: "Tagihan",
    categoryIcon: <Zap className="w-5 h-5 md:w-4 md:h-4" />,
    wallet: "BCA Utama",
    walletIcon: <CreditCard className="w-5 h-5 md:w-4 md:h-4 text-sky-600" />,
    type: "expense",
    amount: "-Rp 925.000",
  },
  {
    id: "TRX-99826",
    date: "18 Okt 2024",
    time: "11:00 WIB",
    title: "Transfer GoPay Topup",
    category: "Transfer Antar Dompet",
    categoryIcon: <ArrowLeftRight className="w-5 h-5 md:w-4 md:h-4" />,
    wallet: "BCA Utama",
    walletIcon: <CreditCard className="w-5 h-5 md:w-4 md:h-4 text-sky-600" />,
    type: "transfer",
    amount: "Rp 500.000",
  },
  {
    id: "TRX-99827",
    date: "15 Okt 2024",
    time: "16:22 WIB",
    title: "Belanja Superindo",
    category: "Belanja",
    categoryIcon: <ShoppingCart className="w-5 h-5 md:w-4 md:h-4" />,
    wallet: "Tunai",
    walletIcon: <Banknote className="w-5 h-5 md:w-4 md:h-4 text-slate-500" />,
    type: "expense",
    amount: "-Rp 365.000",
  },
];

export default function TransactionHistory() {
  const [txTab, setTxTab] = useState<"all" | "income" | "expense" | "split">(
    "all",
  );
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 pb-14 md:pb-0">
      {/* MAIN CONTENT */}
      <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-6 flex flex-col gap-6">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1 text-[13px] md:text-xs">
              <span className="text-sky-600 font-semibold uppercase tracking-wider">
                Buku Kas & Riwayat
              </span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-500">Semua Transaksi Real-time</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900">
              Riwayat Transaksi & Mutasi
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Daftar seluruh arus kas masuk, pengeluaran harian, dan
              rekonsiliasi split bill
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 shadow-sm hover:border-slate-300 cursor-pointer">
              <Calendar className="w-5 h-5 md:w-4 md:h-4 text-sky-600" />
              <span className="font-medium">Bulan Ini: Oktober 2024</span>
              <ChevronDown className="w-5 h-5 md:w-4 md:h-4 text-slate-400" />
            </div>
            <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center gap-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 px-3.5 py-2 rounded-lg text-sm font-medium shadow-sm">
              <Download className="w-5 h-5 md:w-4 md:h-4 text-slate-500" />
              <span>Ekspor Laporan</span>
            </button>
            <Link
              href="/addTransaction"
              title="tambah"
              className="cursor-pointer"
            >
              <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                <PlusCircle className="w-5 h-5 md:w-4 md:h-4" />

                <span>Catat Transaksi</span>
              </button>
            </Link>
          </div>
        </div>

        {/* METRICS CARDS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-16 gap-4 mb-6">
          {/* Bento Hero */}

          {/* Cards */}

          {flows.map((flow) => (
            <section
              key={flow.name}
              className="lg:col-span-4 bg-white border gap-3 border-slate-200/80 rounded-2xl p-2 shadow-sm flex flex-col justify-between relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b px-2 border-slate-100">
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-sky-600" />
                  <h2 className="text-sm">{flow.name}</h2>
                </div>
                <div className="flex items-center gap-2 cursor-pointer">
                  <MoreHorizontal />
                </div>
              </div>

              <div className="flex items-center justify-between py-3 px-2 bg-slate-100 rounded-xl">
                <span>Rp{flow.amount.toLocaleString("id-ID")}</span>
                <BarChart className="w-5 h-5 text-slate-400" />
              </div>

              <div className="flex justify-between items-center px-2 gap-1">
                <span>Last Month</span>
                {flow.type === "up" ? (
                  <div className="flex items-center gap-1 text-[13px] md:text-xs text-emerald-600">
                    <ArrowUp className="w-5 h-5 md:w-4 md:h-4 text-emerald-600" />

                    <span>{Math.abs(flow.change).toFixed(2)} %</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1 text-[13px] md:text-xs text-rose-600">
                    <ArrowDown className="w-5 h-5 md:w-4 md:h-4 text-rose-600" />
                    <span>{Math.abs(flow.change).toFixed(2)} %</span>
                  </div>
                )}
              </div>
            </section>
          ))}
        </section>

        {/* TRANSACTIONS TABLE */}
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-6">
          <div className="px-4 md:px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900">
                Daftar Transaksi
              </h2>
              <div className="inline-flex p-1 rounded-xl bg-slate-100 text-[13px] md:text-xs font-medium">
                {(["all", "income", "expense", "split"] as const).map((tab) => (
                  <button
                    key={tab}
                    className={`px-3 py-1 rounded-lg transition-all capitalize ${
                      txTab === tab
                        ? "bg-white text-slate-900 font-bold shadow-xs"
                        : "text-slate-500 hover:text-slate-900"
                    }`}
                    onClick={() => setTxTab(tab)}
                    type="button"
                  >
                    {tab === "all"
                      ? "Semua"
                      : tab === "income"
                        ? "Pemasukan"
                        : tab === "expense"
                          ? "Pengeluaran"
                          : "Split Bill"}
                  </button>
                ))}
              </div>
            </div>
            <div className=" gap-2 text-[13px] md:text-xs  text-slate-600 ">
              <div className="p-2 flex items-center gap-1 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer">
                <DownloadIcon className="w-5 h-5 md:w-4 md:h-4" /> Export
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-[640px] md:min-w-0 w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs md:text-[11px] uppercase tracking-wider font-semibold">
                  <th className="py-3.5 px-5">Tanggal & Waktu</th>
                  <th className="py-3.5 px-5">Deskripsi & Merchant</th>
                  <th className="py-3.5 px-5">Kategori</th>
                  <th className="py-3.5 px-5">Akun</th>
                  <th className="py-3.5 px-5">Tipe</th>
                  <th className="py-3.5 px-5 text-right">Nominal</th>
                  <th className="py-3.5 px-5 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {transactions
                  .filter((tx) => txTab === "all" || tx.type === txTab)
                  .map((trx, index) => (
                    <tr
                      key={index}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-4 px-5 whitespace-nowrap text-[13px] md:text-xs">
                        <div className="font-medium text-slate-900">
                          {trx.date}
                        </div>
                        <div className="text-slate-400">{trx.time}</div>
                      </td>
                      <td className="py-4 px-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                            {trx.categoryIcon}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-slate-900">
                                {trx.title}
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-5 whitespace-nowrap">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[13px] md:text-xs bg-slate-100 text-slate-800 border border-slate-200 font-medium">
                          {trx.categoryIcon} {trx.category}
                        </span>
                      </td>
                      <td className="py-4 px-5 whitespace-nowrap">
                        <div className="flex items-center gap-2 text-[13px] md:text-xs font-medium">
                          {trx.walletIcon}
                          <span>{trx.wallet}</span>
                        </div>
                      </td>
                      <td className="py-4 px-5 whitespace-nowrap text-[13px] md:text-xs font-medium">
                        {trx.type === "income" && (
                          <span className="text-emerald-600 flex items-center gap-1">
                            <ArrowDown className="w-4 h-4 md:w-3.5 md:h-3.5" /> Pemasukan
                          </span>
                        )}
                        {trx.type === "expense" && (
                          <span className="text-rose-600 flex items-center gap-1">
                            <ArrowUp className="w-4 h-4 md:w-3.5 md:h-3.5" /> Pengeluaran
                          </span>
                        )}
                        {trx.type === "transfer" && (
                          <span className="text-slate-500 flex items-center gap-1">
                            <ArrowLeftRight className="w-4 h-4 md:w-3.5 md:h-3.5" /> Mutasi
                          </span>
                        )}
                      </td>
                      <td className="py-4 px-5 text-right whitespace-nowrap">
                        <div
                          className={`font-bold tabular-nums ${
                            trx.type === "income"
                              ? "text-emerald-600"
                              : trx.type === "expense"
                                ? "text-rose-600"
                                : "text-slate-900"
                          }`}
                        >
                          {trx.amount}
                        </div>
                        {trx.extraAmountInfo && (
                          <div className="text-xs md:text-[11px] text-slate-400">
                            {trx.extraAmountInfo}
                          </div>
                        )}
                      </td>

                      <td className="py-4 px-5 text-center whitespace-nowrap">
                        <div className="flex items-center justify-center gap-1">
                          <button
                            className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg"
                            title="Detail"
                          >
                            <Eye className="w-5 h-5 md:w-4 md:h-4" />
                          </button>
                          <button
                            className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 p-1.5 text-slate-400 hover:text-sky-600 hover:bg-sky-50 rounded-lg"
                            title="Bukti"
                          >
                            <Receipt className="w-5 h-5 md:w-4 md:h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          {/* PAGINATION FOOTER */}
          <div className="px-4 md:px-6 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] md:text-xs text-slate-500">
            <div>
              Menampilkan{" "}
              <span className="font-semibold text-slate-900">1-7</span> dari{" "}
              <span className="font-semibold text-slate-900">48</span> total
              transaksi
            </div>
            <div className="flex items-center gap-1.5">
              <button
                className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 p-2 border border-slate-200 rounded-lg text-slate-400 disabled:opacity-40"
                disabled
              >
                <ChevronLeft className="w-5 h-5 md:w-4 md:h-4" />
              </button>
              <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-8 h-8 rounded-lg bg-sky-600 text-white font-semibold flex items-center justify-center">
                1
              </button>
              <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-700 font-medium flex items-center justify-center">
                2
              </button>
              <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-700 font-medium flex items-center justify-center">
                3
              </button>
              <span className="px-1 text-slate-400">...</span>
              <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-700 font-medium flex items-center justify-center">
                7
              </button>
              <button className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-100">
                <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
