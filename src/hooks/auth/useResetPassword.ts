import { useRouter } from "@/i18n/navigation";
import { resetPasswordSchema } from "@/schemas/authSchema";
import { resetPasswordService } from "@/services/authServices";
import { ApiError } from "@/utils/handleApiError";
import { useMutation } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function useResetPassword() {
  const searchParams = useSearchParams();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: resetPasswordSchema) =>
      resetPasswordService({
        ...data,
        token: searchParams.get("token") || "",
      }),
    onSuccess: (data) => {
      toast.success(data.data.message, {
        position: "top-center",
      });
      router.push("/login");
    },
    onError: (error: ApiError) => {
      toast.error(error.message);
      console.error(error);
    },
  });
}
