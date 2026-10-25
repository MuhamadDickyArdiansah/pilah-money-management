import DashboardHeader from "@/src/components/layouts/dashboard-header";
import MobileBottomNav from "@/src/components/layouts/mobile-bottom-nav";
import Sidebar from "@/src/components/layouts/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col pb-24 md:pb-8">
        <DashboardHeader />
        {children}
      </div>
      <MobileBottomNav />
    </div>
  );
}
