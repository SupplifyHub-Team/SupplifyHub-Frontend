"use client";

import Image from "next/image";
import { Tag, Star, MapPin } from "lucide-react";
import { ISupplierInfo } from "@/types/supplier";

export default function SupplierHero({
  supplier,
}: {
  supplier: ISupplierInfo;
}) {
  return (
    <div className="relative  text-white">
      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col  md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 text-center md:text-right max-w-2xl">
            <h2 className="text-4xl lg:text-5xl leading-tight font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6 py-2">
              {supplier.name}
            </h2>
            <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
              <div className="bg-yellow-200 backdrop-blur-sm px-3 my-2 py-1 rounded-full flex items-center">
                <Star fill="#FFD700" className="text-yellow-400  ml-1" />
                <span className="font-bold text-black">
                  {supplier.averageRating.toFixed(1)} 
                </span>
              </div>
            </div>
            {supplier.description && (
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {supplier.description}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
              {supplier.categories.map((category, idx) => (
                <span
                  key={idx}
                  className="text-white flex items-center backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium bg-primary shadow-lg"
                >
                  <Tag className="w-3.5 h-3.5 text-white ml-2 " />
                  {category || "غير محدد"}
                </span>
              ))}
            </div>

            {/* المواقع */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
              {supplier.locations.map(
                (location, idx) =>
                  location && (
                    <span
                      key={idx}
                      className="text-white flex items-center backdrop-blur-sm px-3 py-2 rounded-full text-sm font-medium bg-gray-400 shadow-lg"
                    >
                      <MapPin className="w-3.5 h-3.5 text-white ml-2 " />
                      {location || "غير محدد"}
                    </span>
                  )
              )}
            </div>
          </div>

          <div className="relative">
            <div className="w-48 h-48 relative overflow-hidden rounded-full   ">
              <Image
                src={supplier?.logoUrl || "/logo-placeholder.png"}
                alt={supplier?.name || "Supplier Logo"}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw"
                width={1920}
                height={1080}
                className="object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
