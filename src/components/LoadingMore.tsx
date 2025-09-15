import { RefreshCw } from "lucide-react";

export default function LoadingMore() {
  return (
    <div className="col-span-full flex animate-slide-up justify-center py-8">
      <div className="flex items-center gap-3 bg-white rounded-full px-6 py-3 shadow-lg border border-gray-200">
        <RefreshCw className="w-5 h-5 text-indigo-600 animate-spin" />
        <span className="text-gray-700 font-medium">جاري تحميل المزيد...</span>
      </div>
    </div>
  );
}
