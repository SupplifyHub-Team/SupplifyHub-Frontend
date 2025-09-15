"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FormInput from "@/components/forms-fields/FormInput";
import { Crown, SendIcon } from "lucide-react";
import Spinner from "@/components/ui/spinner";
import {
  quotaSchema,
  quotaSchemaInput,
  quotaSchemaOutput,
} from "@/schemas/quotasSchema";
import usePostSupplierProductQuota from "@/hooks/quotas/usePostSupplierProductQuota";

export default function SupplierProductQuotaForm() {
  const form = useForm<
    quotaSchemaInput,
    undefined,
    quotaSchemaOutput
  >({
    resolver: zodResolver(quotaSchema),
    defaultValues: {
      amount: 1,
    },
  });
  const { mutate: postProduct, isPending } = usePostSupplierProductQuota();

  function onSubmit(values: quotaSchemaOutput) {
    postProduct(values);
  }

  return (
    <div className="max-w-4xl mx-auto p-6" dir="rtl">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-2">
          زيادة باقة المنتجات
        </h1>
        <p className="text-gray-600">
          أضف منتجاً جديداً إلى متجرك واجذب المزيد من العملاء
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset disabled={isPending} className="space-y-8">
            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div
                className={`absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-10 group-hover:opacity-15 transition-opacity duration-500`}></div>
              <CardContent className="relative p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        كمية المنتجات المميزة
                      </h3>
                      <p className="text-sm text-gray-600">المتبقي لك</p>
                    </div>
                  </div>
                </div>

                <FormInput
                  control={form.control}
                  name="amount"
                  label="الكمية"
                  placeholder="أدخل الكمية"
                  min={1}
                  type="number"
                />
              </CardContent>
            </Card>
            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button type="submit" variant="gradient-orange">
                {isPending ? (
                  <Spinner />
                ) : (
                  <>
                    ارسل طلبك
                    <SendIcon className="w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </fieldset>
        </form>
      </Form>
    </div>
  );
}
