import React from "react";

export default function HeroSection() {
  return (
    <section className="">
      <div className="text-center mb-8 space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent p-3">
          قدم طلبك الآن
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          املأ النموذج التالي بعناية لنتمكن من ربطك بأفضل الموردين المناسبين
          لاحتياجاتك
        </p>
      </div>
    </section>
  );
}
