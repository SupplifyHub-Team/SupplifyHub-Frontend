import { postSupplierProductQuota } from "@/services/quotasService";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostSupplierProductQuota() {
  return useMutation({
    mutationFn: postSupplierProductQuota,
    onSuccess: () => {
      toast.success("تم ارسال طلبك لزيادة عدد المنتجات المميزة بنجاح");
    },
    onError: (error) => {
      console.error("Error posting product quota:", error);
      toast.error("فشل ارسال طلبك لزيادة عدد المنتجات المميزة");
    },
  });
}
