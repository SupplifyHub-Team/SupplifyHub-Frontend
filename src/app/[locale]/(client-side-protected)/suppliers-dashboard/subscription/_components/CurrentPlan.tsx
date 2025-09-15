"use client";

import { Card, CardContent } from "@/components/ui/card";
import useGetSupplierProfile from "@/hooks/supplier-profile/useGetSupplierProfile";
import {
  Check,
  Info,
  ListChecks,
} from "lucide-react";
import CurrentPlanSkeleton from "./CurrentPlanSkeleton";
import ErrorState from "@/components/ErrorState";
import { differenceInDays, format } from "date-fns";
import { ar } from "date-fns/locale";



export default function CurrentPlan() {
  const { data: profile, isLoading, error, refetch } = useGetSupplierProfile();

  if (error) {
    return <ErrorState onRetry={refetch} />;
  }

  if (isLoading || !profile) {
    return <CurrentPlanSkeleton />;
  }

  const profileData: ISupplierProfile = profile.data;
  const daysRemaining = differenceInDays(
    profileData.subscriptionEndDate,
    profileData.subscriptionStartDate
  );

  return (
    <Card className="relative overflow-hidden mb-10  transition-all duration-500">
      <CardContent className="relative ">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className={`w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 border rounded-2xl flex items-center justify-center shadow-lg`}>
              <ListChecks />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              {profileData.planName}
            </h2>
          </div>
        </div>

        {/* Subscription Timeline */}
        <div className="space-y-3">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              تاريخ بداية الاشتراك
            </p>
            <p className="text-lg font-bold text-gray-900">
              {format(
                new Date(profileData.subscriptionStartDate),
                "MMMM d, yyyy",
                { locale: ar }
              )}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">
              تاريخ انتهاء الاشتراك
            </p>
            <p className="text-lg font-bold text-gray-900">
              {format(
                new Date(profileData.subscriptionEndDate),
                "MMMM d, yyyy",
                { locale: ar }
              )}{" "}
            </p>
            {daysRemaining > 0 && (
              <p
                className={`text-sm font-medium mt-1 flex items-center ${
                  daysRemaining <= 7 ? "text-amber-600" : "text-green-600"
                }`}>
                {daysRemaining <= 7 ? <Info /> : <Check />} {daysRemaining} يوم
                متبقي
              </p>
            )}
            {daysRemaining <= 0 && (
              <p className="text-sm font-medium text-red-600 mt-1">
                انتهت صلاحية الاشتراك
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
