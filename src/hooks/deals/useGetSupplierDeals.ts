import { getSupplierDeals } from "@/services/dealsServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetSupplierDeals() {
  return useQuery({
    queryKey: ["supplier-deals"],
    queryFn: getSupplierDeals,
  });
}
