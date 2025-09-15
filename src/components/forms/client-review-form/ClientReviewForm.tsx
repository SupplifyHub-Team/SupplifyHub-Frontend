"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  clientReviewSchema,
  clientReviewSchemaInput,
  clientReviewSchemaOutput,
} from "@/schemas/clientReviewSchema";
import useClientReview from "@/hooks/reviews/useClientReview";
import FormInfiniteCombobox from "@/components/forms-fields/FormInfiniteCombobox";
import FormInput from "@/components/forms-fields/FormInput";
import FormTextArea from "@/components/forms-fields/FormTextArea";
import FormDatePicker from "@/components/forms-fields/FormDatePicker";
import { getSuppliers } from "@/services/suppliersServices";
import { SUPPLIERS_BASE_KEY } from "@/lib/constants";
import {
  Star,
  CheckCircle,
  Package,
  DollarSign,
  MessageSquare,
  Sparkles,
  Building2,
  ShieldCheck,
} from "lucide-react";
import FormRating from "@/components/forms-fields/FormRating";
import { setFormErrors } from "@/utils/handleApiError";
import ProductDescription from "../orders-form/ProductDescription";
import OrderDescription from "./OrderDescription";

export default function ClientReviewForm({
  orderId,
}: {
  orderId: string | number;
}) {
  const form = useForm<
    clientReviewSchemaInput,
    undefined,
    clientReviewSchemaOutput
  >({
    resolver: zodResolver(clientReviewSchema),
    defaultValues: {
      rating: 1,
      comment: "",
      dealDoneAt: new Date(),
      dateOfDelivered: new Date(),
      items: [{ name: "", quantity: 1, price: 1 }],
    },
  });

  const { mutate: postClientReview, isPending } = useClientReview({
    orderId,
  });

  function onSubmit(values: clientReviewSchemaOutput) {
    postClientReview(values, {
      onSuccess: () => {
        form.reset();
      },
      onError: (err) => {
        setFormErrors(form, err);
      },
    });
  }

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-12 px-4"
      dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full border border-blue-200/50 shadow-lg">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-blue-700 font-semibold ">تأكيد الصفقة</span>
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            تقييم المورد
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شاركنا تجربتك مع المورد وساعد الآخرين في اتخاذ قرارات أفضل
          </p>
        </div>

        {/* Form Card */}
        <div>
          <Card className="border-0 shadow-3xl bg-white/90 backdrop-blur-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50" />
            <CardContent className="relative p-4 ">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-10">
                  <fieldset disabled={isPending} className="space-y-10">
                    {/* Supplier Selection Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Building2 className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                            معلومات المورد
                          </h3>
                          <p className="text-gray-600 ">
                            حدد المورد الذي تمت الصفقة معه
                          </p>
                        </div>
                      </div>

                      <FormInfiniteCombobox<clientReviewSchemaInput, ISupplier>
                        name="userId"
                        placeholder="اختر المورد..."
                        queryKey={[SUPPLIERS_BASE_KEY]}
                        getOptionLabel={(item) => item.companyName}
                        getOptionValue={(item) => item.id}
                        fetchFn={(page, search) =>
                          getSuppliers({ page, search })
                        }
                        label="المورد"
                      />
                    </div>

                    {/* Deal Details Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="sm:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            تفاصيل الصفقة
                          </h3>
                          <p className="text-gray-600">
                            أدخل تفاصيل الصفقة والمعاملة التجارية
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormDatePicker<clientReviewSchemaInput>
                          control={form.control}
                          name="dealDoneAt"
                          placeholder="تاريخ الاتفاق على الصفقة..."
                          label="تاريخ الاتفاق على الصفقة"
                          type="datetime-local"
                        />

                        <FormDatePicker<clientReviewSchemaInput>
                          control={form.control}
                          name="dateOfDelivered"
                          placeholder="تاريخ التسليم..."
                          label="تاريخ التسليم"
                          type="datetime-local"
                        />
                      </div>
                      <OrderDescription />
                    </div>

                    {/* Rating Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                            تقييم المورد
                          </h3>
                          <p className="text-gray-600">
                            قيم تجربتك مع المورد من 1 إلى 5 نجوم
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-center">
                        <FormRating name="rating" />
                      </div>
                    </div>

                    {/* Comment Section */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                          <MessageSquare className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="sm:text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                            التعليق والمراجعة
                          </h3>
                          <p className="text-gray-600">
                            شاركنا تجربتك التفصيلية مع المورد
                          </p>
                        </div>
                      </div>

                      <FormTextArea<clientReviewSchemaInput>
                        control={form.control}
                        name="comment"
                        placeholder="شاركنا تجربتك مع هذا المورد... ما الذي أعجبك؟ ما الذي يمكن تحسينه؟"
                        label="التعليق والمراجعة"
                        rows={6}
                      />
                      {/* Review Tips */}
                      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h4 className="font-bold text-blue-800 text-lg mb-3">
                                نصائح لكتابة مراجعة مفيدة
                              </h4>
                              <ul className="space-y-2 text-blue-700">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span>اذكر جودة المنتج والخدمة</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span>تحدث عن سرعة التسليم والتواصل</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-green-500" />
                                  <span>كن صادقاً وموضوعياً في تقييمك</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center pt-8 border-t border-gray-200/60">
                      <Button
                        type="submit"
                        variant="gradient-green"
                        className="px-12 py-4 sm:text-xl font-bold rounded-3xl shadow-2xl hover:shadow-3xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none">
                        {isPending ? (
                          <div className="flex items-center gap-3">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>جاري الإرسال...</span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span>تأكيد الصفقة</span>
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                        )}
                      </Button>
                    </div>
                  </fieldset>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>

        <div className="text-center  space-y-4">
          <div className="flex justify-center items-center gap-3 text-gray-500">
            <span className="text-lg">
              تقييمك يساعد المجتمع في اتخاذ قرارات أفضل
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
