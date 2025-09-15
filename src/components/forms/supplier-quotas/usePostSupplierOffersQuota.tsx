import { postSupplierOfferQuota } from "@/services/quotasService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostSupplierOfferQuota() {
  return useMutation({
    mutationFn: postSupplierOfferQuota,
    onSuccess: () => {
      toast.success("تم ارسال طلبك لزيادة عدد تلقى العروض بنجاح");
    },
    onError: (error) => {
      console.error("Error posting Offer quota:", error);
      toast.error(" فشل ارسال طلبك لزيادة عدد تلقى العروض");
    },
  });
}
