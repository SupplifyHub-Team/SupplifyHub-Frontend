import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import useDeleteProduct from "@/hooks/products/useDeleteProduct";
import { Crown, Sparkles, Trash } from "lucide-react";
import Image from "next/image";

export default function ProductCard({ product }: { product: ISelfProduct }) {
  const discountPercentage =
    product.isSpecial && product.offer
      ? Math.round(((product.price - product.offer) / product.price) * 100)
      : 0;

  const { mutate: deleteProduct, isPending } = useDeleteProduct();

  return (
    <Card
      className={`group relative overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 ${
        product.isSpecial
          ? "bg-gradient-to-br from-amber-50 via-white to-orange-50 shadow-xl shadow-amber-500/20 ring-1 ring-amber-200/50"
          : "bg-white shadow-lg hover:shadow-xl"
      }`}>
      {/* Special Product Crown */}
      {product.isSpecial && (
        <div className="absolute top-4 right-4 z-20">
          <div className="relative">
            <Badge className="bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white px-3 py-1.5 text-sm font-bold shadow-lg rounded-full border-2 border-white">
              <Crown className="w-3 h-3 mr-1" />
              مميز
            </Badge>
            <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-md opacity-60 animate-pulse"></div>
          </div>
        </div>
      )}

      <CardContent className="p-0">
        {/* Product Image Container */}
        <div className="relative h-56 overflow-hidden">
          {/* Background Pattern for Special Products */}
          {product.isSpecial && (
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/50 to-orange-100/50 opacity-30"></div>
          )}

          <Image
            src={product.productImageURl}
            alt={product.name}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "/placeholder-product.jpg";
            }}
          />

          {/* Discount Badge */}
          {product.isSpecial && discountPercentage > 0 && (
            <div className="absolute top-4 left-4 z-10">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border-2 border-white">
                <span className="text-lg">-{discountPercentage}%</span>
              </div>
            </div>
          )}

          {/* Special Product Sparkle Effect */}
          {product.isSpecial && (
            <div className="absolute inset-0 pointer-events-none">
              <Sparkles className="absolute top-8 right-8 w-4 h-4 text-amber-400 animate-pulse" />
              <Sparkles className="absolute bottom-8 left-8 w-3 h-3 text-orange-400 animate-pulse delay-300" />
              <Sparkles className="absolute top-1/2 left-1/4 w-2 h-2 text-yellow-400 animate-pulse delay-700" />
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-5">
          {/* Header with Company Badge */}
          <div className="flex items-center justify-between mb-3">
            <Badge
              variant="secondary"
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-lg font-medium">
              {product.companyName}
            </Badge>
          </div>

          {/* Product Name */}
          <h3
            className={`font-bold text-xl mb-2 line-clamp-1 leading-tight ${
              product.isSpecial ? "text-gray-900" : "text-gray-800"
            }`}>
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
            {product.description}
          </p>

          {/* Pricing Section */}
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2">
              {product.isSpecial && product.offer ? (
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-emerald-600">
                    {product.offer.toLocaleString("ar-SA")} ج.م
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {product.price.toLocaleString("ar-SA")} ج.م
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  {product.price.toLocaleString("ar-SA")} ج.م
                </span>
              )}
            </div>
          </div>

          <AreYouSureDeleteing
            TriggerButton={
              <Button size="sm" variant="destructive" className="w-full">
                <Trash className=" h-4 mr-2 " />
                حذف
              </Button>
            }
            onAccept={() => deleteProduct({ id: product.id })}
            isLoading={isPending}
          />
        </div>
      </CardContent>
    </Card>
  );
}
