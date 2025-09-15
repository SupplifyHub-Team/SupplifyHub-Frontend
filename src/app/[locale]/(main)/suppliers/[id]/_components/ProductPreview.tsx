"use client";

import { Button } from "@/components/ui/button";
import { ISupplierProducts } from "@/types/supplier";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Link } from "@/i18n/navigation";
import {  Heart, ShoppingCart, Tag } from "lucide-react";
import { useState } from "react";

interface ProductPreviewProps {
  product: ISupplierProducts;
  viewMode?: "grid" | "list";
}

export default function ProductPreview({
  product,
  viewMode = "grid",
}: ProductPreviewProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const discountPercentage =
    product.isSpecial && product.offer > 0
      ? Math.round(((product.price - product.offer) / product.price) * 100)
      : 0;

  if (viewMode === "list") {
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative flex flex-col md:flex-row p-6 gap-6">
          {/* Image Section */}
          <div className="relative w-full md:w-48 h-48 flex-shrink-0">
            {product.isSpecial && (
              <Badge className="absolute top-2 left-2 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-lg animate-bounce">
                خصم {discountPercentage}%
              </Badge>
            )}

            <Link href="#" className="block relative h-full">
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl animate-pulse"
                style={{ display: imageLoaded ? "none" : "block" }}
              ></div>
              <Image
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                src={product.productImageURl || "/logo-placeholder.png"}
                alt={product.name || "Product Image"}
                sizes="(max-width: 768px) 100vw, 200px"
                width={200}
                height={200}
                onLoad={() => setImageLoaded(true)}
              />
            </Link>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <Link href="#">
                <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300 line-clamp-1 mb-2">
                  {product.name || "اسم المنتج"}
                </h3>
              </Link>

              <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                {product.description || "وصف المنتج غير متوفر"}
              </p>
            </div>

            <div className="flex items-center justify-between">
              {/* Price Section */}
              <div className="flex items-center gap-3">
                {product.isSpecial && product.offer > 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-green-600">
                      {product.offer} ج.م
                    </span>
                    <span className="text-gray-400 line-through text-lg">
                      {product.price} ج.م
                    </span>
                  </div>
                ) : (
                  <span className="text-2xl font-semibold text-gray-900">
                    {product.price} ج.م
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-2 hover:bg-red-50 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isLiked ? "fill-red-500 text-red-500" : "text-gray-400"
                    } transition-colors`}
                  />
                </Button>

                <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <ShoppingCart className="w-4 h-4 ml-2" />
                  تفاصيل المنتج
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ y: -8, scale: 1.02 }} className="relative group">
      {/* Card Container */}
      <div className="relative bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
        {/* Gradient Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 via-white to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Special Badge */}
        {product.isSpecial && (
          <Badge className="absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full shadow-lg animate-bounce">
            <Tag className="w-3 h-3 ml-1" />
            خصم {discountPercentage}%
          </Badge>
        )}

        {/* Product Image */}
        <Link href="#" className="block relative">
          <div className="relative h-64 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 animate-pulse"
              style={{ display: imageLoaded ? "none" : "block" }}
            ></div>
            <Image
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              src={product.productImageURl || "/logo-placeholder.png"}
              alt={product.name || "Product Image"}
              sizes="(max-width: 450px) 100vw, 450px"
              width={450}
              height={450}
              onLoad={() => setImageLoaded(true)}
            />
          </div>
        </Link>

        {/* Product Details */}
        <div className="relative p-5 space-y-2">
          {/* Product Name */}
          <h3 className="text-xl font-bold text-gray-900 hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
            {product.name || "اسم المنتج"}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
            {product.description || "وصف المنتج غير متوفر"}
          </p>

          {/* Price Section */}
          <div className="flex items-center justify-between">
            {product.isSpecial && product.offer > 0 ? (
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-green-600">
                    {product.offer} ج.م
                  </span>
                  <span className="text-gray-400 line-through text-lg">
                    {product.price} ج.م
                  </span>
                </div>
                
              </div>
            ) : (
              <span className="text-2xl font-semibold text-gray-900">
                {product.price} ج.م
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
