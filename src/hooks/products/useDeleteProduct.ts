import { deleteProduct } from "@/services/productsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function useDeleteProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteProduct,
    onError: (error) => {
      console.error("Error deleting product:", error);
      toast.error("حدث خطأ أثناء حذف المنتج.");
    },
    onSuccess: () => {
      toast.success("تم حذف المنتج بنجاح.");
      queryClient.invalidateQueries({
        queryKey: ["supplier-self-products"],
      });
      queryClient.invalidateQueries({ queryKey: ["supplier-quota"] });
    },
  });
}
