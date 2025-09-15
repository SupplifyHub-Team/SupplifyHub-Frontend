"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  addProductSchema,
  addProductSchemaInput,
  addProductSchemaOutput,
} from "@/schemas/productSchema";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import FormInput from "@/components/forms-fields/FormInput";
import FormTextArea from "@/components/forms-fields/FormTextArea";
import FormDropzone from "@/components/forms-fields/form-dropzone/FormDropzone";
import {
  DollarSign,
  Crown,
  Sparkles,
  Star,
  Zap,
  Package,
  Save,
} from "lucide-react";
import Spinner from "@/components/ui/spinner";
import usePostProduct from "@/hooks/products/usePostProduct";
import { setFormErrors } from "@/utils/handleApiError";

export default function ProductsForm() {
  const form = useForm<
    addProductSchemaInput,
    undefined,
    addProductSchemaOutput
  >({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      ProductImage: undefined,
      IsSpecial: false,
      offer: 0,
    },
  });
  const { mutate: postProduct, isPending } = usePostProduct();

  const isSpecial = form.watch("IsSpecial");
  const price = Number(form.watch("price"));
  const offer = Number(form.watch("offer"));

  // Calculate discount percentage
  const discountPercentage =
    price > 0 && offer ? Math.round(((price - offer) / price) * 100) : 0;

  function onSubmit(values: addProductSchemaOutput) {
    console.log(values);
    postProduct(values, {
      onSuccess: () => {
        form.reset();
      },
      onError: (err) => {
        setFormErrors(form, err);
      },
    });
  }

  return (
    <div className="max-w-4xl mx-auto p-6" dir="rtl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
          إضافة منتج جديد
        </h1>
        <p className="text-gray-600">
          أضف منتجاً جديداً إلى متجرك واجذب المزيد من العملاء
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset disabled={isPending} className="space-y-8">
            {/* Basic Information */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  المعلومات الأساسية
                </h3>

                <div className="grid gap-6 sm:grid-cols-2">
                  <FormInput
                    control={form.control}
                    name="name"
                    label="اسم المنتج"
                    placeholder="أدخل اسم المنتج"
                  />
                  <FormInput
                    Icon={<DollarSign className="w-4 h-4" />}
                    control={form.control}
                    name="price"
                    label="السعر الأصلي (ج.م)"
                    placeholder="0.00"
                    min={0}
                    type="number"
                  />
                </div>

                <div className="mt-6">
                  <FormTextArea
                    control={form.control}
                    name="description"
                    label="وصف المنتج"
                    placeholder="اكتب وصفاً مفصلاً عن المنتج وميزاته..."
                    rows={4}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Product Image */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  صورة المنتج
                </h3>
                <FormDropzone
                  control={form.control}
                  name="ProductImage"
                  label="اختر صورة المنتج"
                  accept={{
                    "image/*": [".jpg", ".jpeg", ".png", ".webp"],
                  }}
                  multiple={false}
                />
              </CardContent>
            </Card>

            {/* Special Product Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                نوع المنتج
              </h3>

              <div className="grid gap-4 sm:grid-cols-2">
                {/* Regular Product Card */}
                <Card
                  className={`cursor-pointer transition-all duration-300 border-2 ${
                    !isSpecial
                      ? "border-indigo-500 bg-indigo-50 shadow-lg"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => form.setValue("IsSpecial", false)}>
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        !isSpecial ? "bg-indigo-500" : "bg-gray-400"
                      }`}>
                      <Package className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">
                      منتج عادي
                    </h4>
                    <p className="text-sm text-gray-600">
                      منتج بسعر ثابت بدون عروض خاصة
                    </p>
                    {!isSpecial && (
                      <Badge className="mt-3 bg-indigo-500 text-white">
                        مُحدد
                      </Badge>
                    )}
                  </CardContent>
                </Card>

                {/* Special Product Card */}
                <Card
                  className={`cursor-pointer transition-all duration-500 border-2 relative overflow-hidden ${
                    isSpecial
                      ? "border-amber-400 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 shadow-2xl shadow-amber-500/25"
                      : "border-gray-200 hover:border-amber-300 hover:shadow-lg"
                  }`}
                  onClick={() => form.setValue("IsSpecial", true)}>
                  {/* Glow Effect */}
                  {isSpecial && (
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-yellow-400/10 to-orange-400/20 animate-pulse"></div>
                  )}

                  {/* Sparkle Effects */}
                  {isSpecial && (
                    <div className="absolute inset-0 pointer-events-none">
                      <Sparkles className="absolute top-4 right-4 w-4 h-4 text-amber-400 animate-pulse" />
                      <Sparkles className="absolute bottom-4 left-4 w-3 h-3 text-yellow-400 animate-pulse delay-300" />
                      <Star className="absolute top-4 left-6 w-3 h-3 text-orange-400 animate-pulse delay-700" />
                    </div>
                  )}

                  <CardContent className="p-6 text-center relative z-10">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isSpecial
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 shadow-lg"
                          : "bg-gray-400"
                      }`}>
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 flex items-center justify-center gap-2">
                      منتج مميز
                      {isSpecial && <Zap className="w-4 h-4 text-amber-500" />}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      منتج بعرض خاص وسعر مخفض
                    </p>
                    {isSpecial && (
                      <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
                        <Crown className="w-3 h-3 mr-1" />
                        مُحدد
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Special Product Offer Section */}
            {isSpecial && (
              <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                        إعدادات العرض الخاص
                      </h3>
                      <p className="text-sm text-gray-600">
                        حدد سعر العرض المخفض للمنتج المميز
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <FormInput
                      Icon={<DollarSign className="w-4 h-4" />}
                      control={form.control}
                      name="offer"
                      label="سعر العرض (ج.م)"
                      placeholder="أدخل السعر المخفض"
                      type="number"
                      min={0}
                    />

                    {/* Discount Preview */}
                    {price > 0 && offer && offer < price && (
                      <div className="flex items-center justify-center">
                        <Card className="bg-white border-amber-200 shadow-md">
                          <CardContent className="p-4 text-center">
                            <div className="text-2xl font-bold text-green-600 mb-1">
                              {discountPercentage}% خصم
                            </div>
                            <div className="text-sm text-gray-600">
                              توفير {(price - offer).toLocaleString("ar-SA")}{" "}
                              ج.م
                            </div>
                            <div className="flex items-center justify-center gap-2 mt-2">
                              <span className="text-lg font-semibold text-green-600">
                                {offer.toLocaleString("ar-SA")} ج.م
                              </span>
                              <span className="text-sm text-gray-500 line-through">
                                {price.toLocaleString("ar-SA")} ج.م
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button
                type="submit"
                className={`px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${
                  isSpecial
                    ? "bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 hover:from-amber-600 hover:via-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
                }`}>
                {isPending ? (
                  <Spinner />
                ) : (
                  <>
                    <Save className="w-5 h-5 mr-2" />
                    {isSpecial ? "إضافة منتج مميز" : "إضافة منتج"}
                  </>
                )}
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
}
