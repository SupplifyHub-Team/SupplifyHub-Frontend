import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Home,  Target } from "lucide-react";
import BusinessSuggestions from "./BusinessSuggestions";
import MainHeader from "../main-header/MainHeader";
import { Link } from "@/i18n/navigation";

export default function NotFoundPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-auto"
      dir="rtl">
        <MainHeader/>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Top badge */}
        <div className="mb-8">
          <Badge className="px-6 py-2 bg-gradient-to-r from-red-100 to-red-100 text-red-700 border-red-200 hover:shadow-lg transition-all duration-300">
            <Target className="w-4 h-4 ml-2" />
            <span className="font-semibold">الصفحة غير موجودة</span>
          </Badge>
        </div>

        <div className="mb-12 text-9xl font-bold">404</div>

        {/* Main content */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            الصفحة التي تبحث عنها غير موجودة
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            لا تقلق! يمكنك العودة إلى الصفحة الرئيسية أو استكشاف الخيارات
            المتاحة أدناه لمتابعة رحلتك التجارية
          </p>

          <Link href="/">
            <Button
              variant="gradient-indigo"
              className="px-8 py-4 text-lg font-semibold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Home className="w-5 h-5 ml-2" />
              العودة للرئيسية
            </Button>
          </Link>
        </div>

        {/* Business suggestions */}
        <div className="w-full max-w-7xl mx-auto ">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ما تريد فعله بدلاً من ذلك؟
            </h2>
            <p className="text-gray-600 text-lg">
              اختر من الخيارات التالية لتبدأ رحلتك التجارية على منصتنا
            </p>
          </div>
          <BusinessSuggestions />
        </div>

        {/* Footer message */}
        <div className="text-center mt-16 space-y-4">
          <div className="flex justify-center items-center gap-3 text-gray-500">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-lg">نحن هنا لمساعدتك في رحلتك التجارية</span>
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-100"></div>
          </div>

          <p className="text-gray-400 text-sm">
            &nbsp;إذا كنت تواجه مشكلة، يرجى &nbsp;
            <Link
              href="/contact-us"
              className="text-blue-600 hover:text-blue-700 font-semibold underline">
              التواصل معنا
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
