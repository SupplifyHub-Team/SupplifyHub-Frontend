"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Megaphone, Plus } from "lucide-react";
import useGetSupplierQuota from "@/hooks/quotas/useGetSupplierQuota";
import { ResponsiveModal } from "@/components/ResponsiveModal";
import SupplierAdsQuotaForm from "@/components/forms/supplier-quotas/SupplierAdsQuotaForm";

export default function AdsQuotaSection() {
  const { data: quotaData, isPending } = useGetSupplierQuota();

  if (isPending) {
    return (
      <Card className="border-0 shadow-lg animate-pulse">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div className="h-6 bg-gray-200 rounded w-1/3"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  const remainingAds = quotaData?.data?.ads || 0;

  return (
    <div className="mb-8 flex">
      <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-60"></div>

        <CardContent className="relative p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Megaphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  الإعلانات المتاحة
                </h3>
                <p className="text-sm text-gray-600">إعلانات متبقية في حسابك</p>
              </div>
            </div>
          </div>

          {/* Ads Count Display */}
          <div className="text-center mb-6">
            <div className={`text-6xl font-black mb-2 text-indigo-500`}>
              {remainingAds}
            </div>
            <p className="text-gray-600 font-medium">إعلان متبقي</p>
          </div>
          <div className="flex justify-center items-center">
            <ResponsiveModal
              trigger={
                <Button variant="gradient-indigo">
                  <Plus className="w-4 h-4 mr-2" />
                  زود باقة الاعلانات
                </Button>
              }
              description="قم بزيادة باقة الإعلانات الخاصة بك"
              title="زيادة باقة الإعلانات"
              maxWidth="xl"
              height="auto"
              scrollable={true}>
              <SupplierAdsQuotaForm />
            </ResponsiveModal>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
