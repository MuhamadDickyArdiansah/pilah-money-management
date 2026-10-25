"use client";

import React from "react";
import Link from "next/link";
import {
  RefreshCw,
  PlusCircle,
  TrendingUp,
  Lock,
  Split,
  QrCode,
  Filter,
  MoreVertical,
  ShieldCheck,
  ArrowLeftRight,
  Calendar,
  Banknote,
  Edit3,
  Download,
  ArrowDownLeft,
  ArrowUpRight,
  ChevronRight,
  Share2,
  Info,
  SmileIcon,
} from "lucide-react";

export default function WalletsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      {/* Main Canvas */}
      <main
        className="w-full pt-10 pb-10 md:pb-12 px-4 sm:px-6 lg:px-8 min-h-screen transition-all duration-300"
        id="mainContent"
      >
        <div className="max-w-[1280px] mx-auto space-y-8">
          {/* Header Section & Quick Actions */}
          <section className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2">
            <div className="space-y-1">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-50">
                Budget Planner
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl">
                Kelola dan pantau anggaran keuangan Anda dengan mudah. Buat
                rencana anggaran, lacak pengeluaran, dan pastikan keuangan Anda
                tetap sehat.
              </p>
            </div>
          </section>

          {/* Bento Grid Section: Ringkasan Saldo Likuiditas */}
          <section className="grid grid-cols-1 lg:grid-cols-8 gap-6">
            {/* Total Likuiditas Card (Large Bento Panel) */}
            <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 md:p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4 mb-5">
                  <div>
                    <span className="text-[13px] md:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Sisa Budget
                    </span>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-lg font-semibold text-slate-400">
                        Rp
                      </span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums tracking-tight">
                        4.450.000
                      </span>
                    </div>
                  </div>
                  <span className="text-[13px] md:text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 px-3 py-1 rounded-full flex items-center gap-1">
                    <TrendingUp className="w-4 h-4 md:w-3.5 md:h-3.5" />
                    +4.2% bln ini
                  </span>
                </div>

                {/* Distribution Progress Bar */}
                <div className="space-y-2 mb-6">
                  <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden flex gap-0.5">
                    <div
                      className="bg-sky-600 h-full rounded-l-full"
                      style={{ width: "10%" }}
                      title="BCA 64.15%"
                    ></div>

                    <div
                      className="bg-slate-400 dark:bg-slate-600 h-full rounded-r-full"
                      style={{ width: "90%" }}
                      title="Cash 7.03%"
                    ></div>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <div>
                      <span>Terpakai Rp.150000 (1%)</span>
                    </div>
                    <div>
                      <span>dari Rp.5000000</span>
                    </div>
                  </div>
                </div>

                {/* 4 Summary Micro-Metrics */}
                <div className="gap-3 pt-2 flex justify-center ">
                  <div className="flex w-3/4 sm:w-1/2  items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <div className="gap-1.5 text-slate-500 dark:text-slate-400 mb-1">
                      <span className="text-[13px] md:text-xs font-medium">
                        <SmileIcon />
                      </span>
                    </div>
                    <p className="text-[13px] md:text-xs text-slate-500 dark:text-slate-400">
                      Masih Aman, kamu bisa pakai{" "}
                      <span className="text-sm font-bold text-slate-900 dark:text-white tabular-nums">
                        Rp.30.000
                      </span>{" "}
                      setiap harinya untuk bulan ini
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
