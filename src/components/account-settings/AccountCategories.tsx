"use client";

import FormInfiniteMultiCombobox from "../forms-fields/FormMultiSelectCombobox";
import { getCategories } from "@/services/categoriesServices";
import SelectedCategories from "../forms/register-form/SelectedCategories";
import { editSupplierInfoSchemaInput } from "@/schemas/accountSettingSchema";
interface CategoryAccountProps {
  isEditMode: boolean;
  isPending: boolean;
}

export default function CategoryAccount({
  isEditMode,
  isPending,
}: CategoryAccountProps) {
  return (
    <div className="bg-white relative rounded-lg border border-gray-200 shadow-sm p-6">
      {!isEditMode && <div className="inset-0 absolute  opacity-30"></div>}

      <div className=" ">
        <FormInfiniteMultiCombobox<editSupplierInfoSchemaInput, ICategory>
          name="CategoryIds"
          label="الخدمات"
          queryKey={["categories"]}
          fetchFn={(pageNumber, search) =>
            getCategories({
              page: pageNumber,
              search,
            })
          }
          getOptionLabel={(item) => item.categoryName}
          getOptionValue={(item) => Number(item.categoryId)}
        />
      </div>

      <SelectedCategories<editSupplierInfoSchemaInput> name="CategoryIds" />
    </div>
  );
}
