"use client";
import { useFormContext } from "react-hook-form";
import FormInput from "../../forms-fields/FormInput";
import FormInfiniteCombobox from "../../forms-fields/FormInfiniteCombobox";
import { getCategories } from "@/services/categoriesServices";
import { Users, Grid3X3 } from "lucide-react";
import { CompleteOrderInput } from "@/schemas/orderSchema";
import ProductDescription from "./ProductDescription";

export default function ProductDetailsStep() {
  const { control } = useFormContext<CompleteOrderInput>();

  return (
    <div className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
          <Grid3X3 className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          تفاصيل الطلب
        </h3>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          تفاصيل المنتج والكمية المطلوبة
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormInfiniteCombobox<CompleteOrderInput, ICategory>
          name="categoryId"
          queryKey={["categories"]}
          fetchFn={(page, search) => getCategories({ page, search })}
          getOptionLabel={(item) => item.categoryName}
          getOptionValue={(item) => String(item.categoryId)}
          label="فئة الطلب"
          placeholder="اختر فئة الطلب..."
          description="سيصل طلبك للموردين المشتركين في هذه الفئة فقط"
        />
        <div className="col-span-2">
          <ProductDescription />
        </div>

        <FormInput<CompleteOrderInput>
          control={control}
          name="numSuppliersDesired"
          placeholder="عدد الموردين..."
          type="number"
          label="عدد الموردين المطلوب للتواصل"
          Icon={<Users className="w-5 h-5" />}
          min={1}
          max={50}
          description="هذا اقصى عدد للموردين الذين سيصلهم اشعار بطلبك (اقل من او يساوي 50)"
        />
      </div>
    </div>
  );
}
