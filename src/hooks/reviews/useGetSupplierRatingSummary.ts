import { getSupplierRatingSummary } from "@/services/reviewsService";
import { useQuery } from "@tanstack/react-query";
import useAuth from "@/store/authStore";

export default function useGetSupplierRatingSummary() {
  const { user } = useAuth();
  return useQuery<IApiResponse<IRatingSummary>, IErrorResponse>({
    queryKey: ["supplier-rating-summary", user?.id],
    queryFn: () => getSupplierRatingSummary(user?.id as number),
    staleTime: 5 * 60 * 1000,
  });
}
