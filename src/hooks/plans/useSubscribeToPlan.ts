import { subscribeToPlan } from "@/services/plansServices";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostProduct() {
  return useMutation({
    mutationFn: subscribeToPlan,
    onSuccess: () => {
      toast.success("تم ارسال طلبك للاشتراك بنجاح", {
        position: "top-center",
      });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast.error("فشل في ارسال طلب الاشتراك:", {
        position: "top-center",
      });
    },
  });
}
