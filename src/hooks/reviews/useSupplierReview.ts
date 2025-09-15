import { supplierReviewSchemaOutput } from "@/schemas/supplierReviewsSchema";
import { postSupplierReview } from "@/services/reviewsService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useSupplierReview({
  dealId,
}: {
  dealId: string | number;
}) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: supplierReviewSchemaOutput) =>
      postSupplierReview({ ...data, dealId }),
    onSuccess: () => {
      toast.success("تم إرسال المراجعة بنجاح");
      queryClient.invalidateQueries({ queryKey: ["supplier-deals"] });
    },
    onError: (error) => {
      console.error("Error submitting review:", error);
      toast.error("فشل إرسال المراجعة");
    },
  });
}
