import { getSupplierViews } from "@/services/suppliersServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetSupplierViews(supplierId: number) {
  return useQuery({
    queryKey: ["supplier-views", supplierId],
    queryFn: () => getSupplierViews(supplierId),
    enabled: !!supplierId,
  });
}
