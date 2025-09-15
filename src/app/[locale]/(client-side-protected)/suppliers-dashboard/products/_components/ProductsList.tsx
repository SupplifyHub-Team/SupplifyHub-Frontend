"use client";

import useGetSupplierProducts from "@/hooks/products/useGetSupplierSelfProducts";
import { Package, Crown, Plus } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import ProductSkeletonGrid from "./ProductSkeleton";
import ErrorState from "@/components/ErrorState";
import ProductCard from "./ProductCard";
import { AddProduct } from "./AddProduct";
import useGetSupplierQuota from "@/hooks/quotas/useGetSupplierQuota";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IncreaseProductQuota } from "./IncreaseProductQuota";

// Quota Card Component
const QuotaCard = ({
  title,
  remaining,
  icon: Icon,
  gradient,
  accentColor,
  bgPattern,
  isPremium = false,
}: {
  title: string;
  remaining: number;
  total: number;
  icon: any;
  gradient: string;
  accentColor: string;
  bgPattern: string;
  isPremium?: boolean;
}) => {
  return (
    <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
      {/* Background Pattern */}
      <div className={`absolute inset-0 opacity-5 ${bgPattern}`}></div>

      {/* Gradient Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10 group-hover:opacity-15 transition-opacity duration-500`}></div>

      {/* Premium Badge */}
      {isPremium && (
        <div className="absolute top-3 left-3">
          <Badge className="bg-amber-100 text-amber-800 border-amber-200 font-semibold px-2 py-1">
            <Crown className="w-3 h-3 ml-1" />
            مميز
          </Badge>
        </div>
      )}

      <CardContent className="relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-lg">{title}</h3>
              <p className="text-sm text-gray-600">المتبقي لك</p>
            </div>
          </div>
        </div>

        {/* Quota Display */}
        <div className="space-y-4">
          {/* Numbers */}
          <div className="flex items-baseline gap-2">
            <span className={`text-4xl font-black text-${accentColor}`}>
              {remaining}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function ProductsList() {
  const { data, isPending, error, refetch } = useGetSupplierProducts();
  const { data: quotaData } = useGetSupplierQuota();
  const products = data?.data || [];

  if (isPending) {
    return (
      <div className="space-y-8">
        {/* Header Skeleton */}
        <div className="p-8 bg-gray-100 rounded-3xl animate-pulse">
          <div className="text-center space-y-4">
            <Skeleton className="h-6 w-32 mx-auto" />
            <Skeleton className="h-10 w-64 mx-auto" />
            <Skeleton className="h-5 w-96 mx-auto" />
          </div>
        </div>

        {/* Quota Cards Skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Skeleton className="h-64 rounded-2xl" />
          <Skeleton className="h-64 rounded-2xl" />
        </div>

        <ProductSkeletonGrid />
      </div>
    );
  }

  if (error) {
    return (
      <ErrorState
        onRetry={() => refetch()}
        title="خطأ في تحميل المنتجات"
        description="عذراً، حدث خطأ أثناء تحميل منتجاتك. تحقق من اتصال الإنترنت وحاول مرة أخرى."
      />
    );
  }

  const specialProducts = products.filter((product) => product.isSpecial);
  const regularProducts = products.filter((product) => !product.isSpecial);

  return (
    <div className="space-y-8" dir="rtl">
      {/* Stunning Quota Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Regular Products Quota */}
        <QuotaCard
          title="المنتجات العادية"
          remaining={quotaData?.data.products || 0}
          total={100} // You can adjust this based on your plan
          icon={Package}
          gradient="from-blue-500 to-cyan-600"
          accentColor="blue-600"
          bgPattern="bg-gradient-to-br from-blue-100 to-cyan-100"
        />

        {/* Special Products Quota */}
        <QuotaCard
          title="المنتجات المميزة"
          remaining={quotaData?.data.specialProducts || 0}
          total={20} // You can adjust this based on your plan
          icon={Crown}
          gradient="from-amber-500 to-orange-600"
          accentColor="amber-600"
          bgPattern="bg-gradient-to-br from-amber-100 to-orange-100"
          isPremium={true}
        />
        <Card className="border-0 shadow-lg bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">
                    إضافة منتج جديد
                  </h3>
                  <p className="text-gray-600">
                    أضف منتجاً جديداً لمجموعتك 
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap justify-center flex-col sm:flex-row items-center gap-4">
              <AddProduct />
              <IncreaseProductQuota/>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Special Products Section */}
      {specialProducts.length > 0 && (
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                  المنتجات المميزة
                </h3>
                <p className="text-sm text-gray-600">منتجات حصرية بعروض خاصة</p>
              </div>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-amber-200 via-orange-200 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {specialProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Products Section */}
      {regularProducts.length > 0 && (
        <div className="space-y-6">
          {specialProducts.length > 0 && (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    منتجاتك الأساسية
                  </h3>
                  <p className="text-sm text-gray-600">
                    مجموعة متنوعة من المنتجات عالية الجودة
                  </p>
                </div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {regularProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
