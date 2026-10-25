"use client";

import { useState } from "react";
import {
  Wallet,
  Split,
  Eye,
  EyeOff,
  TrendingUp,
  ArrowDownRight,
  ArrowUpRight,
  ArrowDownLeft,
  Users,
  ArrowRight,
  Banknote,
  MessageCircle,
  Briefcase,
  Utensils,
  Car,
  ShoppingBag,
  ChevronRight,
  BarChart2Icon,
  ArrowDown,
  ArrowUp,
  ChartBarBigIcon,
  Upload,
  Target,
  FileText,
  MoreHorizontal,
} from "lucide-react";

import {
  ComposedChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const [showBalance, setShowBalance] = useState(true);
  const [txTab, setTxTab] = useState<"all" | "income" | "expense" | "split">(
    "all",
  );

  const [filter, setFilter] = useState("Harian");

  const options = ["Harian", "Mingguan", "Bulanan"];

  const flows = [
    { name: "Total Balance", amount: 15000, change: -15.45, type: "down" },
    { name: "Monthly Income", amount: 15000, change: 15.45, type: "up" },
    { name: "Monthly Expenses", amount: 15000, change: -15.45, type: "down" },
    { name: "Saved This Month", amount: 15000, change: -15.45, type: "down" },
  ];

  const data = [
    { nama: "Senin", total: 4000 },
    { nama: "Selasa", total: 3000 },
    { nama: "Rabu", total: 2000 },
    { nama: "Kamis", total: 2780 },
    { nama: "Jumat", total: 1890 },
    { nama: "Sabtu", total: 2390 },
    { nama: "Minggu", total: 3490 },
  ];

  const transactions = [
    {
      icon: <Briefcase />,
      name: "Gaji Bulanan",
      date: "Okt 23, 10:00",
      category: "Gaji/Bonus",
      amount: 5000000,
      type: "income",
      method: "BNI",
    },
    {
      icon: <Utensils />,
      name: "Makan Siang",
      date: "Okt 23, 12:30",
      category: "Makanan/Minuman",
      amount: 75000,
      type: "expense",
      method: "OVO",
    },
    {
      icon: <Car />,
      name: "Bensin Mobil",
      date: "Okt 22, 09:15",
      category: "Transportasi",
      amount: 300000,
      type: "expense",
      method: "BRI",
    },
    {
      icon: <ShoppingBag />,
      name: "Belanja Online",
      date: "Okt 21, 18:45",
      category: "Belanja",
      amount: 250000,
      type: "expense",
      method: "Mandiri",
    },
    {
      icon: <Users />,
      name: "Split Bill Makan Malam",
      date: "Okt 20, 20:00",
      category: "Makanan/Minuman",
      amount: 150000,
      type: "split",
      method: "BNI",
    },
  ];

  return (
    <>
      {/* Main Body */}
      <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-6 flex flex-col gap-6">
        <div className="gap-6">
          <div className=" justify-between">
            <h3 className="text-lg font-bold text-slate-900">Hi, Dicky</h3>
            <p className="text-sm text-slate-500">
              Selamat datang di Pilah! Mari kita kelola keuangan kita bersama.
            </p>
          </div>
        </div>
        {/* Bento Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-16 gap-6">
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
        </div>

        {/* shortcut */}

        <div className="flex justify-center items-center">
          <div className="flex justify-between text-[13px] md:text-xs lg:col-span-16 w-lg bg-white border border-slate-200/80 rounded-2xl p-4 shadow-sm">
            <div className=" flex flex-col items-center gap-2 cursor-pointer">
              <div className=" flex items-center gap-3 p-1 rounded-full bg-blue-50 border border-blue-200/60 overflow-hidden">
                <ChartBarBigIcon />
              </div>
              <span className="text-center">Laporan Keuangan</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div className="flex items-center gap-3 p-1 rounded-full bg-blue-50 border border-blue-200/60 overflow-hidden">
                <Upload />
              </div>
              <span className="text-center">Upload Dokumen</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div className="flex items-center gap-3 p-1 rounded-full bg-blue-50 border border-blue-200/60 overflow-hidden">
                <Target />
              </div>
              <span className="text-center">Target Finansial</span>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-pointer">
              <div className="flex items-center gap-3 p-1 rounded-full bg-blue-50 border border-blue-200/60 overflow-hidden">
                <FileText />
              </div>
              <span className="text-center">Catat Tagihan</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-16 gap-6">
          {/* Cashflow */}
          <div className="grid-cols-10 lg:col-span-10 bg-white border border-slate-200/80 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between px-2 ">
              <div className="flex items-center gap-2">
                <Wallet className="w-5 h-5 text-sky-600" />
                <h2 className="text-sm">Cashflow</h2>
              </div>
            </div>

            <div className="bg-slate-100 rounded-xl p-1 flex items-center justify-center w-56 ">
              <div className="inline-flex text-[13px] md:text-xs items-center justify-between p-0.5 gap-1 w-full ">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => setFilter(option)}
                    className={`px-2 py-1 cursor-pointer rounded-xl ${filter === option ? "bg-white text-slate-900 font-bold shadow-xs" : "transparent text-slate-500 hover:text-slate-900"}  peer-checked:bg-white`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={data}
                    margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f1f5f9"
                    />
                    <XAxis
                      dataKey="nama"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#64748b", fontSize: 12 }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1e293b",
                        borderRadius: "8px",
                        color: "#fff",
                        border: "none",
                      }}
                      itemStyle={{ color: "#fff" }}
                    />

                    {/* Grafik Batang */}
                    <Bar dataKey="total" fill="#bae6fd" radius={[6, 6, 0, 0]} />

                    {/* Garis Penghubung Nilai di Atas Batang */}
                    <Line
                      type="monotone"
                      dataKey="total"
                      stroke="#0284c7"
                      strokeWidth={3}
                      dot={{
                        r: 5,
                        fill: "#0284c7",
                        strokeWidth: 2,
                        stroke: "#fff",
                      }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Tagihan Langganan */}
          <div className="grid-cols-6 lg:col-span-6 bg-white border border-slate-200/80 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 ">
              <div className="flex items-center gap-2">
                <Banknote className="w-5 h-5 text-sky-600" />
                <h2 className="text-sm text-slate-900">Tagihan</h2>
              </div>
              <span className="px-2.5 py-0.5 rounded-full cursor-pointer text-xs md:text-[10px] font-bold bg-gray-50 text-gray-700 border border-gray-200 uppercase">
                Lihat Semua
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-row items-center justify-between gap-3">
                <div className="flex gap-1 items-center">
                  <div className="w-10 h-10 rounded-xl bg-slate-400 flex items-center justify-center shrink-0">
                    <img
                      src="https://images.ctfassets.net/y2ske730sjqp/4aEQ1zAUZF5pLSDtfviWjb/ba04f8d5bd01428f6e3803cc6effaf30/Netflix_N.png?w=20"
                      alt="Netflix"
                      className="h-7 w-7 max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm">Netflix</h3>
                    <span className="text-[13px] md:text-xs text-slate-500">
                      Nov 15, 2026
                    </span>
                  </div>
                </div>

                <div>
                  <span>Rp 150.000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Columns: Receivables & Transactions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Recent Transactions */}
          <section className="lg:col-span-8 bg-white border border-slate-200/80 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-900">
                Transaksi Terakhir
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

            <div className="flex flex-col divide-y divide-slate-100">
              {/* Item 1 */}

              {transactions
                .filter((tx) => txTab === "all" || tx.type === txTab)
                .map((tx, index) => (
                  <div
                    className="py-3 grid grid-cols-12 gap-2 sm:gap-4 hover:bg-slate-50 rounded-xl px-3 transition-colors items-center text-slate-600"
                    key={index}
                  >
                    {/* 1. Nama & Ikon */}
                    <div className="col-span-4 sm:col-span-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h4 className="text-[13px] md:text-xs md:text-sm font-semibold text-slate-900 truncate">
                        {tx.name}
                      </h4>
                    </div>

                    {/* 2. Tanggal */}
                    <div className="col-span-2 sm:col-span-2 text-xs md:text-[11px] text-slate-500 whitespace-nowrap">
                      <span>{tx.date}</span>
                    </div>

                    {/* 3. Kategori / Badge */}
                    <div className="col-span-2 sm:col-span-2">
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[13px] md:text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200 whitespace-nowrap">
                        {tx.category}
                      </span>
                    </div>

                    {/* 4. Nominal (Dipastikan 1 Baris) */}
                    <div className="col-span-3 sm:col-span-3 text-right flex flex-col items-end justify-center">
                      <span
                        className={`text-[13px] md:text-xs font-bold  tabular-nums whitespace-nowrap ${tx.type === "expense" ? "text-red-600" : "text-emerald-600"}`}
                      >
                        {tx.type === "expense" ? "- " : ""}
                        {tx.amount.toLocaleString("id-ID", {
                          style: "currency",
                          currency: "IDR",
                        })}
                      </span>
                    </div>

                    {/* 5. Metode Pembayaran */}
                    <div className="col-span-1 sm:col-span-1 sm:text-right">
                      <span className="text-[13px] md:text-xs text-right font-medium text-slate-500  whitespace-nowrap">
                        {tx.method}
                      </span>
                    </div>
                  </div>
                ))}
            </div>

            <div className="pt-2 text-center">
              <a
                className="text-[13px] md:text-xs font-bold text-sky-600 hover:text-sky-700 transition-colors inline-flex items-center gap-1"
                href="#"
              >
                <span>Lihat Riwayat Transaksi Lengkap</span>
                <ChevronRight className="w-5 h-5 md:w-4 md:h-4" />
              </a>
            </div>
          </section>

          {/* Split Bill Receivables */}
          <section className="lg:col-span-4 bg-white border border-slate-200/80 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col gap-4">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Split className="w-5 h-5 text-sky-600" />
                <h2 className="text-sm font-bold text-slate-900">
                  Keuangan Bulan Ini
                </h2>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Budget</h3>
                  </div>
                  <p className="text-[13px] md:text-xs text-slate-500 mt-0.5">
                    Total tagihan:{" "}
                    <span className="font-bold text-slate-900">Rp 450.000</span>
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between text-[13px] md:text-xs">
                    <span className="font-bold text-sky-600">60%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-500 h-full rounded-full transition-all duration-500"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                </div>

                <div className="pt-1 flex h-auto items-center justify-between gap-2">
                  <span className="text-[13px] md:text-xs text-slate-400">
                    terpakai{" "}
                    <span className="font-bold text-slate-900">Rp 270.000</span>{" "}
                    / Rp 5.000.000
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
