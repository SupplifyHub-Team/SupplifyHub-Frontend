import { postSupplierAdsQuota } from "@/services/quotasService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostSupplierAdsQuota() {
  return useMutation({
    mutationFn: postSupplierAdsQuota,
    onSuccess: () => {
      toast.success("تم ارسال طلبك لزيادة عدد الإعلانات بنجاح");
    },
    onError: (error) => {
      console.error("Error posting ads quota:", error);
      toast.error("فشل ارسال طلبك لزيادة عدد الإعلانات");
    },
  });
}
