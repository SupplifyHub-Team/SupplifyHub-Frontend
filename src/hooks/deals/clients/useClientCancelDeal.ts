import { clientCancelDeal } from "@/services/orderServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useClientCancelDeal() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: clientCancelDeal,
    onSuccess: () => {
      toast.success("تمت الغاء الطلب بنجاح:", {
        position: "top-center",
      });
      queryClient.invalidateQueries({
        queryKey: ["client-deals"],
      });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast.error("فشل في الغاء الطلب:", {
        position: "top-center",
      });
    },
  });
}
