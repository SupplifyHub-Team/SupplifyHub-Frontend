import { loginService } from "@/services/authServices";
import useAuth from "@/store/authStore";
import { ApiError } from "@/utils/handleApiError";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "@/i18n/navigation";
import { toast } from "sonner";

export default function useLogin() {
  const login = useAuth((s) => s.login);
  const router = useRouter();

  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      toast.success("تم تسجيل الدخول بنجاح!");
      login(data);
      router.push(
        data.user.role === "Clients"
          ? "/clients-dashboard/overview"
          : "/suppliers-dashboard/orders"
      );
    },

    onError: (error: ApiError) => {
      toast.error(error.message);
      console.error(error);
    },
  });
}
