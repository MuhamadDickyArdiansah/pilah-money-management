"use client";

import React, { useState } from "react";

import {
  ChevronDown,
  ChevronRight,
  DownloadIcon,
  Wallet,
  Banknote,
} from "lucide-react";

import {
  ComposedChart,
  Line,
  PieChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Pie,
  Cell,
  Legend,
} from "recharts";

export default function Pengeluaran() {
  const [filter, setFilter] = useState("Harian");
  const options = ["Harian", "Mingguan", "Bulanan"];

  const [txTab, setTxTab] = useState<"kategori" | "sumber" | "merchant">(
    "kategori",
  );

  const data = [
    { nama: "Mei `26", total: 400000 },
    { nama: "Jun `26", total: 300000 },
    { nama: "Jul `26", total: 200000 },
    { nama: "Agt `26", total: 278000 },
    { nama: "Sep `26", total: 189000 },
    { nama: "Okt `26", total: 239000 },
  ];

  const pieDataMap = {
    kategori: [
      { name: "Makanan & Minuman", value: 350000, color: "#0284c7" },
      { name: "Belanja", value: 200000, color: "#38bdf8" },
      { name: "Transportasi", value: 150000, color: "#818cf8" },
      { name: "Tagihan", value: 100000, color: "#c084fc" },
    ],
    sumber: [
      { name: "Bank BNI", value: 500000, color: "#10b981" },
      { name: "E-Wallet (Gopay/OVO)", value: 200000, color: "#f59e0b" },
      { name: "Tunai", value: 100000, color: "#64748b" },
    ],
    merchant: [
      { name: "Indomaret / Alfamart", value: 300000, color: "#ef4444" },
      { name: "Tokopedia", value: 250000, color: "#10b981" },
      { name: "Starbucks", value: 150000, color: "#059669" },
      { name: "Lainnya", value: 100000, color: "#94a3b8" },
    ],
  };

  const currentPieData = pieDataMap[txTab];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 pb-14 md:pb-0">
      <main className="w-full max-w-7xl mx-auto px-4 lg:px-8 pt-6 flex flex-col gap-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="truncate cursor-pointer text-sm font-bold items-center text-slate-900">
              <span className="mr-1 text-slate-400">
                Total Pengeluaran <ChevronRight className="inline h-4 w-4" />
              </span>
              <span className="text-blue-500">Oktober</span>
            </h1>
            <div>
              <h3>Rp150.000</h3>
            </div>
          </div>

          <div className="flex justify-between items-center gap-3">
            <span className="text-[13px] md:text-xs font-semibold bg-blue-50 dark:bg-emerald-950/50 text-slate-600 dark:text-slate-400 border border-blue-200 dark:border-emerald-800/60 px-3 py-1 rounded-full flex items-center gap-1">
              Oktober 2026 <ChevronDown className="w-3.5" />
            </span>

            <span className="text-[13px] md:text-xs font-semibold cursor-pointer bg-white dark:bg-white-950/50 text-slate-600 dark:text-slate-400 :hover:bg-slate-400 border border-slate-200 dark:border-slate-800/60 px-3 py-1 rounded-full flex items-center gap-1">
              <DownloadIcon className="w-3.5" /> Unduh Laporan
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {/* Cashflow */}
          <div className="grid-cols-10 lg:col-span-10  p-4 md:p-6 flex flex-col gap-4">
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
                      tickFormatter={(value) => {
                        if (value >= 1000) {
                          return `${value / 1000}rb`;
                        }
                        return value;
                      }}
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
        </div>

        <div className="flex flex-col box-border bg-white rounded-2xl border border-slate-100 items-center p-4 gap-3">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 text-[13px] md:text-xs font-medium">
            {(["kategori", "sumber", "merchant"] as const).map((tab) => (
              <button
                key={tab}
                className={`px-3 py-1 rounded-lg cursor-pointer transition-all capitalize ${
                  txTab === tab
                    ? "bg-white text-slate-900 font-bold shadow-xs"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                onClick={() => setTxTab(tab)}
                type="button"
              >
                {tab === "kategori"
                  ? "Kategori"
                  : tab === "sumber"
                    ? "Sumber"
                    : tab === "merchant"
                      ? "Merchant"
                      : ""}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full justify-between items-center">
            <div className="col-span-1">
              <h3>Pengeluaran Bulan Oktober 2026</h3>
              <h2 className="font-bold">Rp24000</h2>
            </div>

            <div className="col-span-1 h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={currentPieData}
                    cx="50%"
                    cy="45%"
                    innerRadius={60}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {currentPieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value) => [
                      `Rp ${Number(value).toLocaleString("id-ID")}`,
                      "Total",
                    ]}
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      borderRadius: "8px",
                      color: "#fff",
                      border: "none",
                    }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Legend verticalAlign="bottom" height={36} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
