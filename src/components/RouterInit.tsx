"use client";
import { useRouter } from "@/i18n/navigation";
import { setRouterPush } from "@/utils/navigationHelper";
import { useEffect } from "react";

export default function RouterInit() {
  const router = useRouter();
  useEffect(() => {
    setRouterPush(router.push);
  }, [router]);

  return null;
}
