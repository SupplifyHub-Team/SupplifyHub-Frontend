import { postSuggestCategory } from "@/services/categoriesServices";
import { ApiError } from "@/utils/handleApiError";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostSuggestCategory() {
  return useMutation<
    IApiResponse<{ message: string }>,
    ApiError,
    { name: string }
  >({
    mutationFn: postSuggestCategory,
    onSuccess: () => {
      // Handle success
      toast.success("اقتراح الفئة تم بنجاح");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
