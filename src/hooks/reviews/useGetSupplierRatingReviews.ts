import { getSupplierRatingReviews } from "@/services/reviewsService";
import useInfinite from "../useInfinite";
import { REVIEWS_BASE_KEY, REVIEWS_PAGE_SIZE } from "@/lib/constants";
import useAuth from "@/store/authStore";

export default function useGetSupplierRatingReviews({
  initialData,
}: {
  initialData?: IPaginatedResponse<IReview>;
}) {
  const { user } = useAuth();
  return useInfinite<IReview>({
    fetchFn: (page) =>
      getSupplierRatingReviews(user?.id as number, page, REVIEWS_PAGE_SIZE),
    queryKey: [REVIEWS_BASE_KEY, user?.id, REVIEWS_PAGE_SIZE],
    initialData,
  });
}
