import { getSupplierQuotas } from "@/services/quotasService";
import { useQuery } from "@tanstack/react-query";

export default function useGetSupplierQuota() {
  return useQuery({
    queryKey: ["supplier-quota"],
    queryFn: getSupplierQuotas,
  });
}
