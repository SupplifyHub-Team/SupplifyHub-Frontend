"use client";

import { usePathname } from "@/i18n/navigation";


export default function useIsDashboard() {
  const pathname = usePathname();
  return (
    pathname.startsWith("/suppliers-dashboard") ||
    pathname.startsWith("/clients-dashboard")
  );
}
