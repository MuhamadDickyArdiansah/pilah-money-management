"use client";

import { useState } from "react";
import Link from "next/link";
import { redirect, usePathname } from "next/navigation";
import {
  Wallet,
  PanelLeftClose,
  PanelLeftOpen,
  Plus,
  Settings,
} from "lucide-react";

import { dashboardNavItems } from "./nav-items";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname(); // Mendapatkan URL halaman saat ini

  return (
    <aside
      id="sidebar"
      className={`hidden md:flex flex-col justify-between h-screen sticky top-0 border-r border-slate-200/80 bg-white p-4 z-30 shrink-0 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col gap-6">
        {/* Brand Logo */}
        <div className="flex items-center justify-between px-1 py-1">
          <div
            className="group relative flex items-center gap-3 min-w-0 cursor-pointer"
            onClick={() => isCollapsed && setIsCollapsed(false)}
            title={isCollapsed ? "Buka Sidebar" : "Pilah"}
          >
            <div className="w-9 h-9 rounded-xl bg-sky-600 hover:bg-sky-700 flex items-center justify-center text-white shadow-xs shrink-0 relative transition-colors overflow-hidden">
              <Wallet
                className={`w-5 h-5 transition-all duration-200 ${
                  isCollapsed
                    ? "group-hover:opacity-0 group-hover:scale-75"
                    : ""
                }`}
              />
              {isCollapsed && (
                <PanelLeftOpen className="w-5 h-5 absolute opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-200" />
              )}
            </div>

            {!isCollapsed && (
              <span className="text-xl font-black text-sky-600 tracking-tight truncate select-none">
                Pilah<span className="text-sky-400">.</span>
              </span>
            )}
          </div>

          {!isCollapsed && (
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900 transition-colors focus:outline-none"
              title="Tutup Sidebar"
              type="button"
            >
              <PanelLeftClose className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Action CTA */}
        <button
          className={`w-full flex items-center justify-center gap-2 cursor-pointer bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 rounded-xl shadow-xs transition-all active:scale-[0.98] ${
            isCollapsed ? "px-2" : "px-4"
          }`}
          onClick={() => {
            redirect("/addTransaction");
          }}
          title="Tambah Transaksi"
          type="button"
        >
          <Plus className="w-5 h-5 md:w-4 md:h-4 shrink-0" />
          {!isCollapsed && (
            <span className="text-[13px] md:text-xs font-bold whitespace-nowrap truncate">
              Tambah Transaksi
            </span>
          )}
        </button>

        {/* Navigasi Otomatis */}
        <nav className="flex flex-col gap-1.5">
          {dashboardNavItems
            .filter((item) => item.label !== "Tambah Transaksi")
            .map((item) => {
              const Icon = item.icon;
              // Aktif jika path URL diawali atau sama dengan href menu
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  title={item.label}
                  className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 active:scale-[0.99] ${
                    isActive
                      ? "bg-sky-100 text-sky-700 font-bold"
                      : "text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 font-medium"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 shrink-0 ${isActive ? "text-sky-700" : ""}`}
                  />
                  {!isCollapsed && (
                    <span className="text-[13px] md:text-xs truncate">{item.label}</span>
                  )}
                </Link>
              );
            })}
        </nav>
      </div>

      {/* Profile & Settings */}
      <div className="flex flex-col gap-3 pt-4 border-t border-slate-200/80">
        <Link
          href="/settings"
          title="Pengaturan"
          className="flex items-center gap-3 text-slate-600 hover:bg-slate-100/80 hover:text-slate-900 rounded-xl px-3 py-2 transition-colors text-[13px] md:text-xs font-medium"
        >
          <Settings className="w-5 h-5 shrink-0" />
          {!isCollapsed && <span className="truncate">Pengaturan</span>}
        </Link>
      </div>
    </aside>
  );
}
