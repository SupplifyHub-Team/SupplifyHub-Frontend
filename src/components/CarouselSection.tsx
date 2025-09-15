import React from "react";
import AdvertisementCarousel from "@/components/AdvertisementCarousel";

interface CarouselSectionProps {
  advertisements: IAdvertisement[];
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  advertisements,
}) => {
  if (!advertisements || advertisements.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden p-4">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-5"></div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-indigo-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-violet-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Content Container */}
      <div className="relative">
        <div className="text-center py-6 px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-24"></div>
              <div className="mx-4 w-2 h-2 bg-indigo-500 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-24"></div>
            </div>

            <h2 className="text-4xl md:text-4xl lg:text-4xl font-bold bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent mb-2 leading-tight">
              عروض حصرية
            </h2>
          </div>
        </div>

        {/* Carousel Container with Modern Frame */}
        <div className="relative mx-auto md:max-w-5xl">
          {/* Glass Border Effect */}
          <div className="absolute -inset-1  bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-sm"></div>

          {/* Main Carousel Container */}
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <AdvertisementCarousel
              advertisements={advertisements}
              autoplayDelay={5000}
            />
          </div>

          {/* Corner Accent Elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 border-l-2 border-t-2 border-indigo-400 rounded-tl-lg"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 border-r-2 border-t-2 border-purple-400 rounded-tr-lg"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 border-l-2 border-b-2 border-cyan-400 rounded-bl-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 border-r-2 border-b-2 border-pink-400 rounded-br-lg"></div>
        </div>

        {/* Bottom Accent */}
        <div className="text-center py-16">
          <div className="inline-flex items-center gap-3 text-slate-500 text-sm font-medium">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
            <span>تحديث مستمر للعروض</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-8 w-1 h-16 bg-gradient-to-b from-indigo-400 to-transparent rounded-full opacity-30"></div>
      <div className="absolute top-1/3 right-8 w-1 h-20 bg-gradient-to-b from-purple-400 to-transparent rounded-full opacity-30"></div>
      <div className="absolute bottom-1/4 left-12 w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-full opacity-30"></div>
    </section>
  );
};

export default CarouselSection;
