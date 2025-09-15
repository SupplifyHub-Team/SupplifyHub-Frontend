import SupplierReviewForm from "@/components/forms/supplier-review-form/SupplierReviewForm";
import { ResponsiveModal } from "@/components/ResponsiveModal";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function SupplierReview({ id }: { id: string | number }) {
  return (
    <ResponsiveModal
      trigger={
        <Button variant="gradient-indigo" className="w-fit">
          
          <CheckCircle />
        </Button>
      }
      height="90vh"
      scrollable={true}>
      <SupplierReviewForm dealId={id} />
    </ResponsiveModal>
  );
}
