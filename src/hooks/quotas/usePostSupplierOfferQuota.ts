import { postSupplierOfferQuota } from "@/services/quotasService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostSupplierOfferQuota() {
  return useMutation({
    mutationFn: postSupplierOfferQuota,
    onSuccess: () => {
      toast.success("تم ارسال طلبك لزيادة عدد العروض بنجاح");
    },
    onError: (error) => {
      console.error("Error posting offer quota:", error);
      toast.error("فشل ارسال طلبك لزيادة عدد العروض");
    },
  });
}
