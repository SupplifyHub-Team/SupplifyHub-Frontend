import { Card, CardContent } from "@/components/ui/card";

// Enhanced Skeleton Component with Shimmer
export default function StatCardSkeleton() {
  return (
    <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-200/30 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
      
      {/* Shimmer overlay */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <CardContent className="p-6 relative">
        <div className="flex items-center justify-between">
          <div className="space-y-3 flex-1">
            {/* Label skeleton */}
            <div className="h-4 bg-gray-300 rounded-lg w-24 animate-pulse"></div>
            {/* Number skeleton */}
            <div className="h-8 bg-gray-300 rounded-lg w-16 animate-pulse"></div>
            {/* Trend skeleton */}
            <div className="flex items-center gap-2 mt-2">
              <div className="w-4 h-4 bg-gray-300 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-300 rounded w-8 animate-pulse"></div>
              <div className="h-3 bg-gray-300 rounded w-20 animate-pulse"></div>
            </div>
          </div>
          {/* Icon skeleton */}
          <div className="w-14 h-14 bg-gray-300 rounded-2xl animate-pulse flex items-center justify-center">
            <div className="w-7 h-7 bg-gray-400 rounded animate-pulse"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}