import { getSupplierSelfProducts } from "@/services/productsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetSupplierSelfProducts() {
  return useQuery({
    queryKey: ["supplier-self-products"],
    queryFn: () => getSupplierSelfProducts(),
    
  });
}
