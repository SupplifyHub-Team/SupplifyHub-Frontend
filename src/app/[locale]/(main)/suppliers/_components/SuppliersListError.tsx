import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

export default function SuppliersListError({
  onRetry,
}: {
  onRetry: () => void;
}) {
  return (
    <div className="col-span-full text-center py-12">
      <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <AlertCircle className="w-8 h-8 text-red-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        حدث خطأ في تحميل البيانات
      </h3>
      <p className="text-gray-600 mb-6">
        نعتذر، لم نتمكن من تحميل قائمة الموردين. يرجى المحاولة مرة أخرى.
      </p>
      <Button
        onClick={onRetry}
        className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
      >
        <RefreshCw className="w-4 h-4 ml-2" />
        إعادة المحاولة
      </Button>
    </div>
  );
}
