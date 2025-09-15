"use client";
import { FileText, Handshake, ShoppingCart, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import useGetClientDeals from "@/hooks/deals/clients/useGetClientDeals";
import ErrorState from "../ErrorState";
import StatCardSkeleton from "./orders-stats/StatCardSkeleton";

export default function OrdersStats() {
  const { data: deals, error, isPending, refetch } = useGetClientDeals();

  const activeDeals = (deals?.data || []).filter(
    (deal) => deal.dealStatus === "Pending"
  );
  const confirmedDeals = (deals?.data || []).filter(
    (deal) => deal.OrderStatus === "Completed"
  );

  if (isPending) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCardSkeleton />
        <StatCardSkeleton />
        <StatCardSkeleton />
      </div>
    );
  }
  if (error) {
    return (
      <ErrorState
        title="خطأ في تحميل البيانات"
        onRetry={refetch}
        description="حدث خطأ أثناء تحميل البيانات"
      />
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-600 font-medium mb-1">إجمالي الطلبات</p>
              <p className="text-3xl font-bold text-blue-900">
                {deals?.data.length || 0}
              </p>
            </div>
            <div className="w-14 h-14 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
              <FileText className="w-7 h-7 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-purple-50 to-pink-100">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-600 font-medium mb-1">
                الصفقات المكتملة
              </p>
              <p className="text-3xl font-bold text-purple-900">
                {confirmedDeals.length}
              </p>
            </div>
            <div className="w-14 h-14 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Handshake className="w-7 h-7 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="relative overflow-hidden border-0 shadow-xl bg-gradient-to-br from-green-50 to-emerald-100">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400/20 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>
        <CardContent className="p-6 relative">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 font-medium mb-1">الطلبات النشطة</p>
              <p className="text-3xl font-bold text-green-900">
                {activeDeals.length}
              </p>
            </div>
            <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg">
              <ShoppingCart className="w-7 h-7 text-white" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
