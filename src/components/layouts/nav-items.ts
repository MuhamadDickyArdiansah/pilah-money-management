import {
  LayoutDashboard,
  Receipt,
  ShoppingCart,
  Wallet,
  Plus,
  type LucideIcon,
} from "lucide-react";

export type DashboardNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const dashboardNavItems: DashboardNavItem[] = [
  { label: "Beranda", href: "/beranda", icon: LayoutDashboard },
  { label: "Pengeluaran", href: "/pengeluaran", icon: ShoppingCart },
  { label: "Tambah Transaksi", href: "/addTransaction", icon: Plus },
  { label: "Budget", href: "/budget", icon: Wallet },
  { label: "Transaksi", href: "/transactions", icon: Receipt},
];
