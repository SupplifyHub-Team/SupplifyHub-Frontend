"use client";
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
import { getErrorInfo } from "@/utils/errorInfo";
import BusinessMessage from "./BusinessMessage";
import ErrorQuickActions from "./ErrorQuickActions";
import { Link } from "@/i18n/navigation";

export default function ErrorPage({ error, reset }: ErrorProps) {
  const errorInfo = getErrorInfo(error);

  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-red-50/30 relative overflow-hidden"
      dir="rtl">
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        <div className="mb-8">
          <div className="text-6xl md:text-8xl font-black text-red-500">
            خطأ
          </div>
        </div>

        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div
            className={`inline-flex items-center gap-4 p-6 rounded-3xl bg-gradient-to-r ${errorInfo.bgColor} border border-red-200/50 shadow-xl mb-8`}>
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${errorInfo.color} flex items-center justify-center shadow-lg`}>
              <errorInfo.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-right">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {errorInfo.title}
              </h1>
              <p className="text-gray-600 text-lg">{errorInfo.description}</p>
            </div>
          </div>

          {error.digest && (
            <Card className="bg-gray-50 border border-gray-200 mb-8">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Code className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                  <div className="text-right">
                    <h3 className="font-semibold text-gray-700 mb-2">
                      تفاصيل تقنية
                    </h3>
                    <code className="text-sm text-gray-600 bg-white px-3 py-2 rounded-lg border font-mono break-all">
                      Error ID: {error.digest}
                    </code>
                    <p className="text-xs text-gray-500 mt-2">
                      يرجى تضمين هذا المعرف عند التواصل مع فريق الدعم
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick actions */}
        <div className="w-full max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              ماذا يمكنك فعله؟
            </h2>
            <p className="text-gray-600">
              جرب إحدى الخيارات التالية لحل المشكلة
            </p>
          </div>

          <ErrorQuickActions reset={reset} />
        </div>

        <BusinessMessage />

        {/* Footer */}
        <footer className="text-center mt-12 space-y-4">
          <div className="flex justify-center items-center gap-3 text-gray-500">
            <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
            <span className="text-lg">نعتذر عن أي إزعاج وشكراً لصبركم</span>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></div>
          </div>

          <p className="text-gray-400 text-sm">
            للدعم الفوري:{" "}
            <Link
              href="/support"
              className="text-blue-600 hover:text-blue-700 font-semibold underline">
              تواصل معنا
            </Link>{" "}
            +201028800187
          </p>
        </footer>
      </div>
    </div>
  );
}
