"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FormInput from "@/components/forms-fields/FormInput";
import { ShoppingCart, SendIcon } from "lucide-react";
import Spinner from "@/components/ui/spinner";
import {
  quotaSchema,
  quotaSchemaInput,
  quotaSchemaOutput,
} from "@/schemas/quotasSchema";
import usePostSupplierOfferQuota from "@/hooks/quotas/usePostSupplierOfferQuota";

export default function SupplierOfferQuotaForm() {
  const form = useForm<quotaSchemaInput, undefined, quotaSchemaOutput>({
    resolver: zodResolver(quotaSchema),
    defaultValues: {
      amount: 1,
    },
  });
  const { mutate: postOffer, isPending } = usePostSupplierOfferQuota();

  function onSubmit(values: quotaSchemaOutput) {
    postOffer(values);
  }

  return (
    <div className="max-w-4xl mx-auto p-6" dir="rtl">
      <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-center mb-2 pb-3">
        زيادة باقة تلقى عروض الأسعار
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <fieldset disabled={isPending} className="space-y-8">
            <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-60"></div>
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">
                        كمية عروض الأسعار المطلوبة
                      </h3>
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
              <Button type="submit" variant="gradient-indigo">
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
