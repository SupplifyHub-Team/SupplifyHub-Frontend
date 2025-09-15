import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";
import { defaultSuppliersFiltersValues } from "./SuppliersMainContent";

export default function EmptySuppliersList() {
  const form = useFormContext();
  return (
    <div className="text-center py-16 ">
      <div className="w-24 h-24 animate-bounce bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <Search className="w-12 h-12 text-gray-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        لا توجد نتائج
      </h3>
      <p className="text-gray-600 mb-6">
        جرب تعديل معايير البحث للعثور على نتائج أفضل
      </p>

      <Button
        onClick={() => {
          form.reset(defaultSuppliersFiltersValues);
        }}
        type="button"
      >
        إعادة تعيين الفلاتر
      </Button>
    </div>
  );
}
