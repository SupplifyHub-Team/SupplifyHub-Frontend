"use client";
import { Check,  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveModal } from "@/components/ResponsiveModal";
import ClientReviewForm from "@/components/forms/client-review-form/ClientReviewForm";

export function ConfirmDeal({dealId}:{
  dealId:string| number
}) {
  return (
    <ResponsiveModal
      trigger={
        <Button variant="gradient-ocean" >
          <Check />
        </Button>
      }
      description="تأكيد الصفقة وإضافتها إلى المتجر"
      title="تأكيد الصفقة"
      height="90vh"
      scrollable={true}>
      <ClientReviewForm orderId={dealId} />
    </ResponsiveModal>
  );
}