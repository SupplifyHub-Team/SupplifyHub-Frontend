"use client";

import { Search, MessageCircle, HandshakeIcon, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

const steps = [
  {
    icon: Search,
    title: "اطلب عرض سعر",
    description: "وصف سريع لما تحتاجه وسنجد الموردين المناسبين لك",
    color: "from-blue-500 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
  },
  {
    icon: MessageCircle,
    title: "استقبل العروض",
    description: "احصل على عروض أسعار تنافسية من موردين موثوقين خلال دقائق",
    color: "from-purple-500 to-violet-600",
    bgColor: "from-purple-50 to-violet-50",
  },
  {
    icon: HandshakeIcon,
    title: "أتم الصفقة",
    description: "اختر أفضل عرض وأتم الصفقة بأمان وثقة كاملة",
    color: "from-emerald-500 to-green-600",
    bgColor: "from-emerald-50 to-green-50",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            كيف تعمل المنصة؟
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            ثلاث خطوات بسيطة للحصول على أفضل عروض التوريد
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-8 h-0.5 bg-gradient-to-r from-indigo-300 to-purple-300 z-10 origin-left" />
              )}

              <div
                className={`relative bg-gradient-to-br ${step.bgColor} rounded-3xl p-8 border border-white/50 shadow-lg backdrop-blur-sm group hover:shadow-xl transition-all duration-300`}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/register">
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              سجل الان
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
