import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { forgotPasswordService } from "@/services/authServices";
import { ApiError } from "@/utils/handleApiError";

export default function useForgotPassword() {
  return useMutation({
    mutationFn: forgotPasswordService,
    onSuccess: (data) => {
      toast.success(data, {
        position: "top-center",
      });
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
      console.error(error);
    },
  });
}
