"use client";
import { useFormContext } from "react-hook-form";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Edit3, Save, X, RotateCcw, AlertTriangle } from "lucide-react";

interface AccountActionsProps {
  isEditMode: boolean;
  setIsEditMode: (mode: boolean) => void;
  isUpdating: boolean;
  isPending: boolean;
  resetFormWithSupplier: () => void;
}

export default function AccountActions({
  isEditMode,
  setIsEditMode,
  isUpdating,
  isPending,
  resetFormWithSupplier,
}: AccountActionsProps) {
  const form = useFormContext();
  const hasChanges = form.formState.isDirty;

  return (
    <div>
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden">
        <CardContent className="p-6">
          {isEditMode ? (
            <div className="space-y-4">
              {/* Save/Cancel Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  type="submit"
                  disabled={isUpdating || isPending || !hasChanges}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 rounded-2xl py-6 text-lg font-semibold">
                  {isUpdating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2" />
                      جاري الحفظ...
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5 ml-2" />
                      حفظ التغييرات
                    </>
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setIsEditMode(false);
                    resetFormWithSupplier();
                  }}
                  disabled={isUpdating}
                  className="flex-1 border-gray-300 hover:border-red-300 hover:bg-red-50 hover:text-red-700 rounded-2xl py-6 text-lg font-semibold transform hover:scale-[1.02] transition-all duration-200">
                  <X className="w-5 h-5 ml-2" />
                  إلغاء
                </Button>
              </div>

              {/* Reset Button */}
              {hasChanges && (
                <div className="border-t border-gray-200 pt-4">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={resetFormWithSupplier}
                    disabled={isUpdating}
                    className="w-full text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-2xl py-4">
                    <RotateCcw className="w-4 h-4 ml-2" />
                    استعادة القيم الأصلية
                  </Button>
                </div>
              )}

              {/* Changes Indicator */}
              {hasChanges && (
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                    <div>
                      <p className="font-semibold text-amber-800">
                        لديك تغييرات غير محفوظة
                      </p>
                      <p className="text-sm text-amber-700">
                        تأكد من حفظ التغييرات قبل مغادرة الصفحة
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Button
              type="button"
              onClick={() => setIsEditMode(true)}
              disabled={isPending}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 rounded-2xl py-6 text-lg font-semibold">
              <Edit3 className="w-5 h-5 ml-2" />
              تحرير المعلومات
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
