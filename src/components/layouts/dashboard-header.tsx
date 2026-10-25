"use client";

import { Bell, ChevronRight, Search, Wallet, UserCircle } from "lucide-react";
import { usePathname } from "next/navigation";

type HeaderConfig = {
  title: string;
  searchPlaceholder: string;
};

const headerConfig: Record<string, HeaderConfig> = {
  "/beranda": {
    title: "Dashboard",
    searchPlaceholder: "Cari transaksi / teman...",
  },
  "/budget": {
    title: "Budget",
    searchPlaceholder: "Cari rekening, bank, atau mutasi...",
  },
  "/pengeluaran": {
    title: "Pengeluaran",
    searchPlaceholder: "Pengeluaran anda",
  },
  "/split-bill": {
    title: "Split Bill",
    searchPlaceholder: "Cari tagihan / teman...",
  },
  "/transactions": {
    title: "Riwayat Transaksi",
    searchPlaceholder: "Cari transaksi cepat...",
  },
  "/settings": {
    title: "Pengaturan",
    searchPlaceholder: "Cari pengaturan...",
  },
  "/addTransaction": {
    title: "Tambah Transaksi",
    searchPlaceholder: "Cari kategori / dompet...",
  },
};

function getHeaderConfig(pathname: string) {
  const matchedPath = Object.keys(headerConfig)
    .sort((a, b) => b.length - a.length)
    .find((path) => pathname === path || pathname.startsWith(`${path}/`));

  return headerConfig[matchedPath ?? "/dashboard"];
}

export default function DashboardHeader() {
  const pathname = usePathname();
  const config = getHeaderConfig(pathname);

  return (
    <header className="sticky top-0 z-20 w-full border-b border-slate-200/80 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex items-center gap-2 md:hidden">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sky-600 text-white">
              <Wallet className="h-4 w-4" />
            </div>
            <span className="text-xl font-black text-slate-900">Pilah</span>
          </div>

          <div className="hidden min-w-0 flex-col md:flex">
            <h1 className="truncate text-sm font-bold items-center text-slate-900">
              <span className="mr-1 text-slate-400">
                Home <ChevronRight className="inline h-4 w-4" />
              </span>
              {config.title}
            </h1>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <div className="relative hidden w-64 items-center lg:flex">
            <Search className="absolute left-3 h-4 w-4 text-slate-400" />
            <input
              className="min-h-11 w-full rounded-xl border border-slate-200 bg-slate-100 py-2 pr-3 pl-9 text-base md:text-sm text-slate-900 transition-all placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 focus:outline-none"
              placeholder={config.searchPlaceholder}
              type="text"
            />
          </div>

          <button
            aria-label="Notifikasi"
            className="min-h-11 min-w-11 md:min-h-0 md:min-w-0 relative rounded-xl border border-slate-200/60 p-2.5 text-slate-600 transition-colors hover:bg-slate-100"
            type="button"
          >
            <Bell className="h-4 w-4" />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          <div className="flex items-center">
            <div
              className={`flex items-center gap-3 p-2 rounded-xl bg-slate-50 border border-slate-200/60 overflow-hidden`}
            >
              <UserCircle className="h-5 w-5 max-w-full rounded-full object-cover border border-slate-200 shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
