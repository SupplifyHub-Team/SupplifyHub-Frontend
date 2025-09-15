"use client";

import SupplierDashboardHeader from "@/components/supplier-dashboard-layout.tsx/SupplierDashboardHeader";
import SupplierDashboardSidebar from "@/components/supplier-dashboard-layout.tsx/SupplierDashboardSidebar";

export default function SupplierLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 h-screen w-full">
      <div className="lg:col-span-2 hidden h-full lg:block">
        <SupplierDashboardSidebar />
      </div>
      <div className="lg:col-span-10">
        <SupplierDashboardHeader />
        <main className="p-4 space-y-4">{children}</main>
      </div>
    </div>
  );
}
