"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Send, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { AnimatePresence } from "motion/react";
import usePostSuggestCategory from "@/hooks/categories/usePostSuggestCategory";

export default function SuggestCategoryInput() {
  const [categoryName, setCategoryName] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { mutate: suggestCategory, isPending } = usePostSuggestCategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoryName.trim()) return;

    console.log(categoryName);

    suggestCategory(
      { name: categoryName.trim() },
      {
        onSuccess: () => {
          setCategoryName("");
          setIsSubmitted(true);
          setTimeout(() => setIsSubmitted(false), 3000);
        },
      }
    );
  };

  const isValid = categoryName.trim().length >= 2;
  const charCount = categoryName.length;
  const maxLength = 50;

  return (
    <div>
      <Card className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 overflow-hidden group hover:shadow-2xl transition-all duration-500">
        <CardHeader className=" border-amber-100/50">
          <CardTitle className="text-2xl font-bold text-gray-900">
            اقتراح فئة جديدة
          </CardTitle>
        </CardHeader>

        <CardContent>
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <div key="success" className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  تم إرسال اقتراحك بنجاح!
                </h3>
                <p className="text-green-700">
                  شكراً لك، سيتم مراجعة اقتراحك وإضافته قريباً
                </p>
              </div>
            ) : (
              <div key="form" className="space-y-6">
                {/* Input Field */}
                <div className="space-y-3">
                  <label className="block text-lg font-semibold text-gray-900">
                    اسم الفئة المقترحة
                  </label>

                  <div className="relative">
                    <Input
                      value={categoryName}
                      onChange={(e) => setCategoryName(e.target.value)}
                      placeholder="مثال: الأجهزة الذكية، مستحضرات التجميل..."
                      className="text-lg py-6 pr-6 pl-16 rounded-2xl border-gray-200 focus:border-amber-300 focus:ring-amber-300 bg-white/80 backdrop-blur-sm"
                      maxLength={maxLength}
                      disabled={isPending}
                    />

                    {/* Character Counter */}
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          charCount > maxLength * 0.8
                            ? "border-amber-300 text-amber-700"
                            : "border-gray-300 text-gray-600"
                        }`}>
                        {charCount}/{maxLength}
                      </Badge>
                    </div>
                  </div>

                  {/* Validation Message */}
                  <AnimatePresence>
                    {categoryName && !isValid && (
                      <div className="flex items-center gap-2 text-amber-600">
                        <AlertCircle className="w-4 h-4" />
                        <span className="text-sm">
                          يجب أن يحتوي الاسم على حرفين على الأقل
                        </span>
                      </div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  type="button"
                  disabled={!isValid || isPending}
                  variant="gradient-indigo">
                  {isPending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin ml-2" />
                      جاري الإرسال...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الاقتراح
                    </>
                  )}
                </Button>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-6">
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-3">
                        نصائح لاقتراح فئة فعالة:
                      </h4>
                      <ul className="text-sm text-blue-700 space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          استخدم أسماء واضحة ومفهومة
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          تأكد من عدم وجود الفئة مسبقاً
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          اكتب باللغة العربية الفصحى
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          اختر أسماء عامة وليس محددة جداً
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
