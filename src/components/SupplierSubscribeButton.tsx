"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import useSubscribeToPlan from "@/hooks/plans/useSubscribeToPlan";
import { AreYouSure } from "./AreYouSure";
import useIsDashboard from "@/hooks/useIsDashboard";
import { Link } from "@/i18n/navigation";

export default function SupplierSubscribeButton({
  planId,
  isFree,
}: {
  planId: string | number;
  isFree: boolean;
}) {
  const isDashboard = useIsDashboard();
  const { mutate: subscribe, isPending } = useSubscribeToPlan();

  return isDashboard ? (
    !isFree ? (
      <AreYouSure
        TriggerButton={
          <Button
            variant="gradient-indigo"
            className="w-full py-3 rounded-xl font-semibold">
            اشترك الآن
            <ArrowLeft className="w-4 h-4 mr-2" />
          </Button>
        }
        onAccept={() => subscribe(planId)}
        description="هل أنت متأكد أنك تريد الاشتراك في هذه الخطة؟"
        title="تأكيد الاشتراك"
        isLoading={isPending}
      />
    ) : null
  ) : isFree ? (
    <Link href="/register?role=suppliers">
      <Button
        variant="gradient-indigo"
        className="w-full py-3 rounded-xl font-semibold">
        سجل واشترك كفترة تجربة
        <ArrowLeft className="w-4 h-4 mr-2" />
      </Button>
    </Link>
  ) : (
    <Link href="/register?role=suppliers">
      <Button
        variant="gradient-indigo"
        className="w-full py-3 rounded-xl font-semibold">
        اشترك الآن
        <ArrowLeft className="w-4 h-4 mr-2" />
      </Button>
    </Link>
  );
}
