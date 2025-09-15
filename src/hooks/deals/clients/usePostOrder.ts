import { postOrderService } from "@/services/orderServices";
import { ApiError } from "@/utils/handleApiError";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

import { CompleteOrderOutput } from "@/schemas/orderSchema";
export default function usePostOrder() {
  const queryClient = useQueryClient();
  return useMutation<
    IApiResponse<IPostOrderResponse>,
    ApiError,
    CompleteOrderOutput
  >({
    mutationFn: postOrderService,
    onSuccess: () => {
      toast.success("تم ارسال الطلب بنجاح!",{
        position: "top-center"
      });
      queryClient.invalidateQueries({ queryKey: ["client-deals"] });
    },
    onError: (error) => {
      toast.error(`فشل ارسال الطلب: ${error.message}`);
    },
  });
}
