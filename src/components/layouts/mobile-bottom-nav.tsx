"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardNavItems } from "./nav-items";

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around border-t border-slate-200 bg-white px-4 py-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] shadow-lg md:hidden">
      {dashboardNavItems.map((item) => {
        const Icon = item.icon;
        const isActive =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            className={`flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 transition-colors ${
              isActive
                ? "font-bold text-sky-600"
                : "text-slate-500 hover:text-sky-600"
            } ${
              item.label === "Tambah Transaksi"
                ? "relative bottom-9 bg-sky-100 text-sky-600 rounded-full w-13 h-13 flex items-center justify-center shadow-md"
                : ""
            }`}
            href={item.href}
          >
            <Icon className="h-5 w-5 shrink-0" />
            {item.label === "Tambah Transaksi" ? null : (
              <span className="max-w-16 truncate text-xs md:text-[10px] leading-none">
                {item.label}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
