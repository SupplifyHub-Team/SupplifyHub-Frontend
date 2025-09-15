"use client";
import { useEffect } from "react";
import useAuth from "@/store/authStore";
import Loading from "../(main)/loading";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (auth.hasHydrated) {
      if (!auth.user) {
        router.replace("/login");
      } else {
        if (
          auth.user?.role === "Suppliers" &&
          pathname.includes("/clients-dashboard")
        ) {
          router.replace("/suppliers-dashboard/orders");
        } else if (
          auth.user?.role === "Clients" &&
          pathname.includes("/suppliers-dashboard")
        ) {
          router.replace("/clients-dashboard/overview");
        }
      }
    }
  }, [auth.hasHydrated, auth.user, router, pathname]);

  if (!auth.hasHydrated) {
    return <Loading />;
  }

  return children;
}
