import { Container } from "lucide-react";

export default function Loading() {
  return (
    <>
      <main
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
        role="status"
        aria-live="polite"
        aria-label="جاري تحميل الصفحة">
        {/* Animated Background */}
        <div className="absolute inset-0 gradient-bg" />

        <div className="absolute inset-0 bg-white opacity-70" />

        {/* Floating Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating Blobs */}
          <div
            className="animate-float absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-full blur-xl"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="animate-float absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-xl"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="animate-float absolute top-40 left-20 w-28 h-28 bg-gradient-to-br from-indigo-300/20 to-purple-400/20 rounded-full blur-xl"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="animate-float absolute bottom-20 right-40 w-20 h-20 bg-gradient-to-br from-purple-300/20 to-indigo-400/20 rounded-full blur-xl"
            style={{ animationDelay: "6s" }}
          />
        </div>

        {/* Main Content */}
        <div className="text-center z-10 px-6 relative">
          {/* Logo */}
          <div className="animate-pulse relative mb-8">
            {/* Main Logo Container */}
            <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl shadow-2xl flex items-center justify-center">
              <Container className="size-12 text-white" />
            </div>

            {/* Orbiting elements */}
            <div className="animate-spin absolute inset-0 pointer-events-none">
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full shadow-lg" />
            </div>
            <div className="animate-spin absolute inset-0 pointer-events-none">
              <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-orange-400 to-red-500 rounded-full shadow-lg" />
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-700 via-purple-600 to-violet-700 bg-clip-text text-transparent mb-3 font-['Cairo',sans-serif]">
              SupplifyHub
            </h1>
            <p className="text-slate-600 text-xl font-medium font-['Cairo',sans-serif]">
              منصة التوريد الذكية
            </p>
          </div>

          <div className="mb-8" dir="rtl">
            <div className="flex justify-center gap-2 mb-6">
              <div className="animate-bounce-dots-1 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
              <div className="animate-bounce-dots-2 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
              <div className="animate-bounce-dots-3 w-3 h-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            </div>
          </div>

          <p
            className="text-slate-500 text-lg font-medium font-['Cairo',sans-serif]"
            dir="rtl">
            يرجى الانتظار بينما نحضر لك أفضل تجربة ...
          </p>

          <div className="mt-8 flex justify-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-green-500 rounded-full text-fade" />
              <span className="font-['Cairo',sans-serif]">
                جاري الاتصال بالخوادم
              </span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <div className="w-2 h-2 bg-blue-500 rounded-full dot-2" />
              <span className="font-['Cairo',sans-serif]">تحميل البيانات</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
