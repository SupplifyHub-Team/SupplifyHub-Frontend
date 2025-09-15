import { getClientDeals } from "@/services/orderServices";
import { useQuery } from "@tanstack/react-query";

export default function useGetClientDeals() {
  return useQuery({
    queryKey: ["client-deals"],
    queryFn: getClientDeals,
  });
}
