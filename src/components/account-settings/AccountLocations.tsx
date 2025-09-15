import { MapPin, PlusCircleIcon } from "lucide-react";
import { Button } from "../ui/button";
import SkeletonItem from "./SkeletonItem";
import { useFormContext } from "react-hook-form";

export default function AccountLocations({
  supplier,
  isPending,
  isEditMode,
  fields,
  append,
  remove,
}: {
  supplier?: ISupplierProfile;
  isPending: boolean;
  isEditMode: boolean;
  fields: { id: string }[];
  append: (v: string) => void;
  remove: (index: number) => void;
}) {
  const form = useFormContext();
  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">مواقع شركتك</h3>
        {isEditMode && (
          <Button
            type="button"
            variant="outline"
            onClick={() => append("")}
            className="mt-2">
            <PlusCircleIcon size={16} /> إضافة موقع
          </Button>
        )}
      </div>

      <div className="space-y-3 min-h-[60px]">
        {fields.length === 0 && !isPending ? (
          <p className="text-sm text-gray-500">لا توجد مواقع متاحة</p>
        ) : (
          fields.map((field, index) => (
            <div
              key={field.id}
              className="flex items-center gap-3 text-sm text-gray-700">
              <MapPin size={18} className="text-gray-400 flex-shrink-0 mt-1" />

              {isEditMode ? (
                <>
                  <input
                    {...form.register(`locations.${index}` as const)}
                    className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="أدخل موقع الشركة"
                  />
                  <Button
                    type="button"
                    variant="destructive"
                    onClick={() => remove(index)}
                    className="ml-2">
                    حذف
                  </Button>
                </>
              ) : (
                <div className="flex-1">
                  {isPending ? (
                    <SkeletonItem className="h-6 w-40" />
                  ) : (
                    supplier?.locations?.[index] || "موقع غير معروف"
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
