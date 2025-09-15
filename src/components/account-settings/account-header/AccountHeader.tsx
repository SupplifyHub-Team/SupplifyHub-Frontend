"use client";
import { useState } from "react";
import { Camera, Upload, Star, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SkeletonItem from "../SkeletonItem";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface AccountHeaderProps {
  supplier: ISupplierProfile;
  isPending: boolean;
  logoPreview: string | null;
  setLogoPreview: (preview: string | null) => void;
  patchLogo: (file: File) => void;
  isUploadingLogo: boolean;
}

export default function AccountHeader({
  supplier,
  isPending,
  logoPreview,
  setLogoPreview,
  patchLogo,
  isUploadingLogo,
}: AccountHeaderProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const preview = URL.createObjectURL(file);
      setLogoPreview(preview);
      patchLogo(file);
    }
  };

  if (isPending) {
    return (
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50">
        <CardContent className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <SkeletonItem className="w-32 h-32 rounded-3xl" />
            <div className="flex-1 space-y-4">
              <SkeletonItem className="h-8 w-64" />
              <SkeletonItem className="h-6 w-48" />
              <SkeletonItem className="h-20 w-full" />
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden group hover:shadow-2xl transition-all duration-500">
      <CardContent className="p-8 pt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Logo Section */}
          <div className="relative">
            <div
              className={`relative group/avatar size-40 rounded-full  shadow-2xl ring-4 ring-white border-4 border-gray-100 ${
                isDragOver ? "scale-105" : ""
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setIsDragOver(true);
              }}
              onDragLeave={() => setIsDragOver(false)}
              onDrop={(e) => {
                e.preventDefault();
                setIsDragOver(false);
                const file = e.dataTransfer.files[0];
                if (file) handleFileSelect(file);
              }}
            >
              <Image
                src={logoPreview ?? supplier?.logoURL}
                alt="Company Logo"
                className="object-cover rounded-full object-center"
                fill
              />

              {/* Upload Overlay */}
              <label htmlFor="logo-upload" className="cursor-pointer">
                <div className="absolute inset-0 bg-black/60 rounded-full opacity-0 group-hover/avatar:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <span className="text-sm font-medium">تغيير الشعار</span>
                  </div>
                </div>
              </label>

              <label className="absolute z-10" htmlFor="logo-upload">
                <Button
                  variant="outline"
                  size="sm"
                  className="absolute -bottom-2 -left-2 rounded-full w-10 h-10 p-0 bg-white shadow-lg border-2 border-gray-200 hover:border-indigo-300 hover:bg-indigo-50"
                  asChild
                >
                  <span>
                    <Upload className="w-4 h-4 text-indigo-600" />
                  </span>
                </Button>
              </label>

              {/* Loading Overlay */}
              {isUploadingLogo && (
                <div className="absolute inset-0 bg-indigo-600/80 rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>

            {/* Upload Button */}
            <input
              type="file"
              accept="image/*"
              id="logo-upload"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
            />
          </div>

          {/* Company Info */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {supplier?.name || "اسم الشركة"}
              </h2>
              <p className="text-lg text-gray-600 font-medium">
                {supplier?.email || "البريد الإلكتروني"}
              </p>
            </div>

            {/* Company Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-4  ">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">
                      {supplier?.averageRating || 0}
                    </div>
                    <div className="text-sm text-orange -600">التقييم</div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-700">
                      {supplier?.productCount || 0}
                    </div>
                    <div className="text-sm text-green-600">منتج</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
