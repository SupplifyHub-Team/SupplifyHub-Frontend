"use client";

import { Sparkles } from "lucide-react";

export default function SuppliersHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10" />
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-medium">
                اكتشف أفضل الموردين
              </span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              ابحث عن الموردين المثاليين
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              اكتشف شبكة واسعة من الموردين المعتمدين والموثوقين في قطاع الضيافة.
              موردين متخصصين للفنادق والمطاعم والمقاهي مع ضمان الجودة والأسعار
              التنافسية.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
