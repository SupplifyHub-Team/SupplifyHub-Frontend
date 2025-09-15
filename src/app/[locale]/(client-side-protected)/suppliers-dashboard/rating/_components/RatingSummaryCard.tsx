"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { motion } from "motion/react";

import { useMemo } from "react";

const barGradients = [
  "from-amber-500 to-orange-600",
  "from-yellow-400 to-amber-500",
  "from-lime-400 to-green-400",
  "from-cyan-500 to-blue-500",
  "from-blue-500 to-cyan-600",
];

interface RatingSummaryCardProps {
  totalRatings: number;
  distribution: number[];
  isLoading: boolean;
}

export default function RatingSummaryCard({
  totalRatings,
  distribution,
  isLoading,
}: RatingSummaryCardProps) {
  const { averageRating, percentages } = useMemo(() => {
    const avg =
      totalRatings > 0
        ? (
            distribution.reduce(
              (sum, count, index) => sum + count * (index + 1),
              0
            ) / totalRatings
          ).toFixed(1)
        : "0.0";

    const percs = distribution.map((count) =>
      totalRatings > 0 ? Math.round((count / totalRatings) * 100) : 0
    );

    return { averageRating: avg, percentages: percs };
  }, [distribution, totalRatings]);

  if (isLoading) {
    return (
      <Card className="border-0 shadow-xl p-8 h-[260px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <Skeleton className="w-full h-full rounded-2xl" />
      </Card>
    );
  }

  return (
    <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-50 to-cyan-50">
      <CardContent className="p-8 flex flex-col gap-6">
        {/* Average */}
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600 shadow-lg">
            <Star className="w-10 h-10 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">
              ملخص التقييمات
            </h3>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-blue-600">
                {averageRating}
              </span>
              <span className="text-xl font-bold text-gray-400">/ 5</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              <Badge className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                {totalRatings} تقييم
              </Badge>
            </p>
          </div>
        </div>

        {/* Distribution */}
        <h5 className="text-lg font-semibold text-gray-700">
          نسبة تقيمك بالنجوم
        </h5>
        <div className=" space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const index = star - 1;
            const percentage = percentages[index] || 0;

            return (
              <div key={star} className="flex items-center gap-3">
                {/* نجوم */}
                <span className="text-sm font-bold text-gray-700 w-8 text-right">
                  {star}
                  <Star
                    className="w-4 h-4 text-amber-400 inline-block -mt-1 ml-1"
                    fill="currentColor"
                  />
                </span>

                {/* Progress bar */}
                <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${
                      barGradients[5 - star]
                    }`}
                  />
                </div>

                {/* نسبة مئوية */}
                <span className="text-xs text-gray-600 font-medium w-10 text-left">
                  {percentage}%
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
