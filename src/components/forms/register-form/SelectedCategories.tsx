import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allCachedCategories } from "@/lib/categories";
import { Tag, X } from "lucide-react";
import { motion } from "motion/react";

import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
const getCategoryNameById = (
  categoryId: string | number,
  allCategories: ICategory[]
): string => {
  const category = allCategories?.find((cat) => cat.categoryId == categoryId);

  return category?.categoryName || `Category ${categoryId}`;
};

interface ISelectedCategoriesProps<TFormValues extends FieldValues> {
  name: Path<TFormValues>;
}

export default function SelectedCategories<TFormValues extends FieldValues>({
  name,
}: ISelectedCategoriesProps<TFormValues>) {
  const { watch, setValue } = useFormContext<TFormValues>();
  const selectedCategoryIds = (watch(name) as (string | number)[]) || [];

  const removeCategory = (categoryIdToRemove: string | number) => {
    const updatedCategories = selectedCategoryIds.filter(
      (id) => id !== categoryIdToRemove
    );
    setValue(name, updatedCategories as PathValue<TFormValues, typeof name>, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  return (
    selectedCategoryIds.length > 0 && (
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.3 }}>
        <h4 className="text-sm font-medium text-gray-700">
          الخدمات المختارة ({selectedCategoryIds.length})
        </h4>

        <div className="flex flex-wrap gap-2">
          {selectedCategoryIds.map((categoryId, index) => (
            <motion.div
              key={`selected-category-${categoryId}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}>
              <Badge variant="default" className="p-2 text-indigo-50">
                <Tag className="w-3 h-3" />
                <span className="font-medium">
                  {getCategoryNameById(categoryId, allCachedCategories())}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className=" p-0 w-4 h-4 ml-1 hover:bg-transparent"
                  onClick={() => removeCategory(categoryId)}>
                  <X className="w-3 h-3  hover:text-red-600 transition-colors" />
                  <span className="sr-only">إزالة الفئة</span>
                </Button>
              </Badge>
            </motion.div>
          ))}
        </div>

        <Button
          type="button"
          variant="destructive"
          size="sm"
          onClick={() =>
            setValue(name, [] as PathValue<TFormValues, typeof name>, {
              shouldValidate: true,
            })
          }>
          مسح جميع الفئات
          <X className="w-4 h-4 mr-2" />
        </Button>
      </motion.div>
    )
  );
}
