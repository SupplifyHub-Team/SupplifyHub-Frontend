import { addProductSchemaOutput } from "@/schemas/productSchema";
import { postProduct } from "@/services/productsServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePostProduct() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: addProductSchemaOutput) => {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price.toString());
      formData.append("ProductImage", data.ProductImage);
      formData.append("IsSpecial", data.IsSpecial.toString());
      formData.append("offer", data?.offer?.toString() || "");
      return postProduct(formData);
    },
    onSuccess: () => {
      toast.success("تمت اضافة المنتج بنجاح:", {
        position: "top-center",
      });
      queryClient.invalidateQueries({
        queryKey: ["supplier-self-products"],
      });
      queryClient.invalidateQueries({ queryKey: ["supplier-quota"] });
    },
    onError: (error) => {
      console.error("Mutation error:", error);
      toast.error("فشل في اضافة المنتج:", {
        position: "top-center",
      });
    },
  });
}
