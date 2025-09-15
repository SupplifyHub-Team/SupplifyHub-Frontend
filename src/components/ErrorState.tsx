import { AlertCircle, RefreshCw } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";

export default function ErrorState({
  onRetry,
  title,
  description,
}: {
  onRetry?: () => void;
  title?: string;
  description?: string;
}) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 px-4">
      <div className="relative mb-8">
        <div className="w-28 h-28 bg-gradient-to-br from-red-100 to-red-50 rounded-3xl flex items-center justify-center shadow-lg">
          <AlertCircle className="w-14 h-14 text-red-500" />
        </div>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-ping"></div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-3">
        {title || "حدث خطأ"}
      </h3>
      <p className="text-gray-600 mb-8 text-center max-w-md leading-relaxed">
        {description || "عذراً، حدث خطأ أثناء التحميل."}
      </p>
      {onRetry && (
        <Button
          onClick={onRetry}
          className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
          <RefreshCw className="w-5 h-5 mr-2" />
          إعادة المحاولة
        </Button>
      )}
    </div>
  );
}
