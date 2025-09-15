"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import FormInput from "@/components/forms-fields/FormInput";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { suppliersFiltersSchema } from "@/schemas/suppliersFiltersSchema";
import SuppliersFilters from "./SuppliersFilters";
import SuppliersFiltersSheet from "./SuppliersFiltersSheet";
import SuppliersList from "./SuppliersList";
import { useFilterFormWithQuery } from "@/hooks/useFilterFormWithQuery";
import { SUPPLIERS_BASE_KEY } from "@/lib/constants";
import { useSearchParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";

export const defaultSuppliersFiltersValues: suppliersFiltersSchema = {
  category: "",
  location: "",
  sortColumnDirection: undefined,
  search: "",
};

export default function SuppliersMainContent({
  initialSuppliers,
}: {
  initialSuppliers?: IPaginatedResponse<ISupplier>;
}) {
  const searchParams = useSearchParams();

  const initialValues: suppliersFiltersSchema = {
    ...defaultSuppliersFiltersValues,
    ...Object.fromEntries(
      Array.from(searchParams?.entries() || [])
        .filter(([key]) => key.startsWith(`${SUPPLIERS_BASE_KEY}-`))
        .map(([key, value]) => [
          key.slice(SUPPLIERS_BASE_KEY.length + 1),
          value,
        ])
    ),
  } as suppliersFiltersSchema;

  const form = useForm<suppliersFiltersSchema>({
    resolver: zodResolver(suppliersFiltersSchema),
    defaultValues: initialValues,
  });
  useFilterFormWithQuery({
    form,
    debounceTime: 1,
    baseKey: SUPPLIERS_BASE_KEY,
  });

  return (
    <section>
      <Form {...form}>
        <form className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 grid lg:grid-cols-12 lg:gap-8  pt-10 ">
          <aside className="lg:col-span-3 hidden lg:block ">
            <div className="sticky top-24 space-y-6 overflow-auto">
              <Card className="shadow-lg border ">
                <CardContent className="p-6 ">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <SlidersHorizontal className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">تصفية النتائج</h3>
                      <p className="text-sm text-gray-600">ابحث بدقة أكثر</p>
                    </div>
                  </div>
                  <SuppliersFilters />
                </CardContent>
              </Card>
            </div>
          </aside>
          <div className="lg:col-span-9 space-y-6 relative ">
            <div className="flex gap-6 items-center w-full sticky top-16 lg:top-[82px] shadow bg-white p-3 pt-4 z-20 overflow-auto rounded-xl">
              <div className="lg:hidden ">
                <SuppliersFiltersSheet />
              </div>
              <div className="flex-1">
                <FormInput
                  control={form.control}
                  name="search"
                  placeholder="ابحث باسم المورد ..."
                  label="اسم المورد"
                  labelClassName="sr-only"
                  className="  bg-white h-12 "
                  Icon={
                    <Button
                      type="button"
                      variant="link"
                      onClick={() => form.setValue("search", "")}>
                      {form.watch("search") ? (
                        <X />
                      ) : (
                        <Search className="text-gray-600 size-6" />
                      )}
                    </Button>
                  }
                />
              </div>
            </div>
            <SuppliersList initialSuppliers={initialSuppliers} />
          </div>
        </form>
      </Form>
    </section>
  );
}
