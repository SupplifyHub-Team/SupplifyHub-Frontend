"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";

interface EmptyStateProps {
  title?: string;
  description?: string;
  onReset?: () => void;
  resetLabel?: string;
  icon?: React.ReactNode;
}

export default function EmptyState({
  title = "لا توجد نتائج",
  description = "جرب تعديل معايير البحث للعثور على نتائج أفضل",
  onReset,
  resetLabel = "إعادة تعيين الفلاتر",
  icon,
}: EmptyStateProps) {
  return (
    <div className="text-center py-16">
      <div className="w-24 h-24 animate-bounce bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        {icon ?? <Search className="w-12 h-12 text-gray-400" />}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      {onReset && (
        <Button onClick={onReset} type="button">
          {resetLabel}
        </Button>
      )}
    </div>
  );
}
