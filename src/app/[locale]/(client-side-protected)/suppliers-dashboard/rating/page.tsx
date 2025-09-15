"use client";

import { MessageSquare } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import useGetSupplierRatingSummary from "@/hooks/reviews/useGetSupplierRatingSummary";
import useGetSupplierRatingReviews from "@/hooks/reviews/useGetSupplierRatingReviews";
import RatingSummaryCard from "./_components/RatingSummaryCard";
import ReviewCard from "./_components/ReviewCard";
import LoadingMore from "@/components/LoadingMore";
import EmptyState from "@/components/EmptyState";

export default function RatingPage() {
  const { data: summaryData, isPending: isSummaryLoading } =
    useGetSupplierRatingSummary();

  const {
    data: reviews,
    ref,
    isPending,
    isFetching,
    isError,
    refetch,
  } = useGetSupplierRatingReviews({});

  const allReviews = reviews?.pages.flatMap((p) => p.data) || [];

  return (
    <div className="space-y-10 p-6 max-w-6xl mx-auto" dir="rtl">
      {/* Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RatingSummaryCard
          totalRatings={summaryData?.data.totalRatings || 0}
          distribution={summaryData?.data.Distribution || [0, 0, 0, 0, 0]}
          isLoading={isSummaryLoading}
        />
      </div>

      {/* Reviews */}
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800">مراجعات العملاء</h3>
              <p className="text-sm text-gray-600">
                قراءات من العملاء الذين استخدموا خدمات المورد
              </p>
            </div>
          </div>
          <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
        </div>

        {isError ? (
          <EmptyState
            title="خطأ في تحميل المراجعات"
            description="حدث خطأ أثناء تحميل المراجعات. حاول مرة أخرى."
            onReset={refetch}
          />
        ) : allReviews.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {allReviews.map((review, i) => (
              <div
                key={`${review.reviewerName}-${i}`}
                ref={i === allReviews.length - 1 ? ref : null}
                className="animate-fade-in"
              >
                <ReviewCard review={review} />
              </div>
            ))}

            {/* Loading more */}
            {(isPending || isFetching) && <LoadingMore />}
          </div>
        ) : isPending ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-36 rounded-xl" />
            ))}
          </div>
        ) : (
          <EmptyState
            title="لا توجد مراجعات"
            description="لم يقم أي عميل بترك مراجعة حتى الآن."
          />
        )}
      </div>
    </div>
  );
}
