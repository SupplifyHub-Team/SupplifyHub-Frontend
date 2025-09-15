"use client";

import FormInfiniteCombobox from "@/components/forms-fields/FormInfiniteCombobox";
import { getCategories } from "@/services/categoriesServices";
import FormInput from "@/components/forms-fields/FormInput";
import FormSelect from "@/components/forms-fields/FormSelect";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

import { suppliersFiltersSchema } from "@/schemas/suppliersFiltersSchema";
import { defaultSuppliersFiltersValues } from "./SuppliersMainContent";

export default function SuppliersFilters() {
  const form = useFormContext<suppliersFiltersSchema>();

  return (
    <div className="space-y-8 h-fit">
      <FormInfiniteCombobox<suppliersFiltersSchema, ICategory>
        name="category"
        placeholder="اختار فئة للبحث..."
        fetchFn={(page, search) => getCategories({ page, search })}
        getOptionLabel={(option) => option.categoryName}
        getOptionValue={(option) => option.categoryId}
        queryKey={["categories"]}
        label="الفئة"
      />
      <FormInput
        control={form.control}
        name="location"
        placeholder="ابحث بموقع الموردين حسب الموقع الجغرافي"
        label="الموقع"
      />
      <FormSelect
        control={form.control}
        name="sortColumnDirection"
        placeholder="ترتيب الموردين"
        label="ترتيب الموردين"
        options={[
          { value: "Asc", label: "تصاعدي" },
          { value: "Desc", label: "تنازلي" },
        ]}
      />
      <Button
        className="w-full"
        type="button"
        onClick={() => form.reset(defaultSuppliersFiltersValues)}>
        مسح الفلاتر
      </Button>
    </div>
  );
}
