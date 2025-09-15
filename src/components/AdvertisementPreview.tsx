import { useEffect, useState } from "react";
import { Eye, Monitor } from "lucide-react";
import Image from "next/image";

interface AdvertisementPreviewProps {
  title?: string;
  imageFile?: File | null;
  targetUrl?: string;
}

const AdvertisementPreview: React.FC<AdvertisementPreviewProps> = ({
  title,
  imageFile,
  targetUrl,
}) => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

  useEffect(() => {
    if (imageFile) {
      const url = URL.createObjectURL(imageFile);
      setImagePreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setImagePreviewUrl(null);
    }
  }, [imageFile]);

  const renderCarouselPreview = () => {
    return (
      <div className={`relative transition-all duration-300 w-full`}>
        {/* Background Elements - Simplified for preview */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 opacity-5 rounded-xl"></div>

        {/* Animated Background Particles - Scaled for preview */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-xl">
          <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 w-20 h-20 bg-gradient-to-r from-indigo-400/10 to-cyan-600/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        {/* Content Container */}
        <div className="relative">
          {/* Header Section - Simplified */}
          <div className="text-center py-4 px-2 relative z-10">
            <div className="flex items-center justify-center mb-3">
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-8"></div>
              <div className="mx-2 w-1 h-1 bg-indigo-500 rounded-full"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-8"></div>
            </div>

            <h2
              className={`font-bold bg-gradient-to-r from-slate-800 via-indigo-700 to-purple-700 bg-clip-text text-transparent leading-tight text-2xl md:text-3xl`}
            >
              عروض حصرية
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative mx-2">
            {/* Glass Border Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-cyan-500/20 rounded-xl blur-sm"></div>

            {/* Main Carousel Container */}
            <div className="relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg border border-white/20">
              <div className="relative">
                {/* Advertisement Image */}
                <div
                  className={`relative w-full h-48 md:h-64 bg-gray-100 flex items-center justify-center`}
                >
                  {imagePreviewUrl ? (
                    <Image
                      src={imagePreviewUrl}
                      alt={title || "معاينة الإعلان"}
                      fill
                      className="object-cover object-center"
                    />
                  ) : (
                    <div className="text-center text-gray-400 p-4">
                      <Eye className={`mx-auto mb-2 "w-12 h-12`} />
                      <p className={`text-base`}>{title || "معاينة الإعلان"}</p>
                      <p className={`text-gray-500 text-sm mt-1`}>
                        سيظهر إعلانك هنا
                      </p>
                    </div>
                  )}

                  {/* Link Indicator */}
                  {targetUrl && (
                    <div className="absolute top-2 right-2 bg-black/20 backdrop-blur-sm rounded-full p-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>

                {/* Navigation Dots Preview */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1 px-2 py-1 bg-black/20 backdrop-blur-sm rounded-full">
                    <div className="w-2 h-2 bg-white rounded-full shadow-sm"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                    <div className="w-2 h-2 bg-white/60 rounded-full"></div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/10">
                  <div className="h-full bg-gradient-to-r from-indigo-400 to-purple-400 w-1/3"></div>
                </div>
              </div>
            </div>

            {/* Corner Accent Elements - Scaled */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-l border-t border-indigo-400 rounded-tl-lg"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-r border-t border-purple-400 rounded-tr-lg"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l border-b border-cyan-400 rounded-bl-lg"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r border-b border-pink-400 rounded-br-lg"></div>
          </div>

          {/* Bottom Accent */}
          <div className="text-center py-4">
            <div className="inline-flex items-center gap-2 text-slate-500 text-xs font-medium">
              <div className="w-6 h-px bg-gradient-to-r from-transparent to-slate-300"></div>
              <span>تحديث مستمر للعروض</span>
              <div className="w-6 h-px bg-gradient-to-l from-transparent to-slate-300"></div>
            </div>
          </div>
        </div>

        {/* Floating Elements - Scaled */}
        <div className="absolute top-8 left-2 w-0.5 h-8 bg-gradient-to-b from-indigo-400 to-transparent rounded-full opacity-30"></div>
        <div className="absolute top-12 right-2 w-0.5 h-10 bg-gradient-to-b from-purple-400 to-transparent rounded-full opacity-30"></div>
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Eye className="w-5 h-5" />
          معاينة الإعلان
        </h4>
      </div>

      {/* Preview Container */}
      <div className="border border-gray-200 rounded-xl overflow-hidden bg-gradient p-4">
        <div className="text-center mb-3">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
            <Monitor className="w-4 h-4" />
            معاينة على سطح المكتب
          </span>
        </div>

        {renderCarouselPreview()}

        {/* Preview Info */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <Eye className="w-3 h-3 text-white" />
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-blue-800 font-medium">
                هذه معاينة لكيفية ظهور إعلانك في الصفحة الرئيسية
              </p>
              <ul className="text-blue-700 space-y-1">
                <li>• سيتم عرض الإعلان في دائرة تلقائية مع الإعلانات الأخرى</li>
                <li>
                  • يمكن للمستخدمين النقر على الصورة للانتقال للرابط المحدد
                </li>
                <li>• الإعلان سيكون مرئياً لجميع زوار المنصة</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementPreview;
