"use client";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import SkeletonItem from "./SkeletonItem";
import { FileText, Edit3, AlertCircle } from "lucide-react";
import FormTextArea from "../forms-fields/FormTextArea";
import { editSupplierInfoSchemaInput } from "@/schemas/accountSettingSchema";
import { useFormContext } from "react-hook-form";

interface AccountDescriptionProps {
  supplier: ISupplierProfile;
  isPending: boolean;
  isEditMode: boolean;
}

export default function AccountDescription({
  supplier,
  isPending,
  isEditMode,
}: AccountDescriptionProps) {
  const form = useFormContext();
  const description = form.watch("description");
  const maxLength = 2000;
  const remainingChars = maxLength - (description?.length || 0);

  if (isPending) {
    return (
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50">
        <CardHeader>
          <SkeletonItem className="h-6 w-48" />
        </CardHeader>
        <CardContent>
          <SkeletonItem className="h-32 w-full" />
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden group hover:shadow-2xl transition-all duration-500">
        <CardHeader className="bg-gradient-to-r from-gray-50 to-purple-50/30 border-b border-gray-100/50">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-2xl font-bold text-gray-900">
                  وصف الشركة
                </CardTitle>
                <p className="text-gray-600 mt-1">نبذة تعريفية عن نشاط شركتك</p>
              </div>
            </div>

            {!isEditMode && (
              <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-3 py-1">
                <Edit3 className="w-3 h-3 ml-1" />
                قابل للتحرير
              </Badge>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-8">
          {isEditMode ? (
            <div className="space-y-4">
              <div className="relative">
                <FormTextArea<editSupplierInfoSchemaInput>
                  name="description"
                  placeholder="اكتب وصفاً شاملاً عن شركتك، أنشطتها، وخدماتها..."
                  className="min-h-[200px] resize-none border-gray-200 focus:border-indigo-300 focus:ring-indigo-300 rounded-2xl text-lg leading-relaxed p-6 bg-white/80 backdrop-blur-sm"
                  maxLength={maxLength}
                />

                {/* Character Counter */}
                <div className="absolute bottom-4 left-4">
                  <div
                    className={`text-sm px-3 py-1 rounded-full ${
                      remainingChars < 50
                        ? "bg-red-100 text-red-700"
                        : remainingChars < 100
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                    {remainingChars} حرف متبقي
                  </div>
                </div>
              </div>

              {/* Guidelines */}
              <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-indigo-900 mb-2">
                      نصائح لكتابة وصف فعال:
                    </h4>
                    <ul className="text-sm text-indigo-700 space-y-1">
                      <li>• اذكر أهم المنتجات والخدمات التي تقدمها</li>
                      <li>• وضح ما يميز شركتك عن المنافسين</li>
                      <li>• اكتب بوضوح وبساطة لسهولة الفهم</li>
                      <li>• استخدم كلمات مفتاحية مهمة لنشاطك</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {supplier?.description ? (
                <div className="bg-gradient-to-br from-gray-50 to-blue-50/30 rounded-2xl p-6 border border-gray-100">
                  <p className="text-lg leading-relaxed text-gray-800 font-medium">
                    {supplier.description}
                  </p>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-200 text-center">
                  <FileText className="w-16 h-16 text-yellow-600 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                    لم يتم إضافة وصف بعد
                  </h3>
                  <p className="text-yellow-700">
                    أضف وصفاً لشركتك لمساعدة العملاء على فهم أنشطتك وخدماتك بشكل
                    أفضل
                  </p>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
