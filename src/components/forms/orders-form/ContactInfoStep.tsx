"use client";
import { useFormContext } from "react-hook-form";
import FormInput from "../../forms-fields/FormInput";
import { Phone, User, Shield } from "lucide-react";
import { CompleteOrderInput } from "@/schemas/orderSchema";

export default function ContactInfoStep() {
  const { control } = useFormContext<CompleteOrderInput>();

  return (
    <div className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
          <User className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          معلومات التواصل
        </h3>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          أدخل بياناتك للتواصل معك وإتمام الطلب
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormInput<CompleteOrderInput>
          control={control}
          name="contactPersonName"
          placeholder="الاسم الكامل للشخص المسؤول..."
          label="اسم مقدم الطلب"
          type="text"
          Icon={<User className="w-5 h-5" />}
        />
        <div dir="ltr">
          <FormInput<CompleteOrderInput>
            control={control}
            name="contactPersonPhone"
            placeholder="01234567890"
            label="رقم الهاتف"
            type="tel"
            dir="ltr"
            Icon={<Phone className="w-5 h-5" />}
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-purple-800 mb-2">
              حماية بياناتك
            </h4>
            <p className="text-sm text-purple-700">
              معلوماتك الشخصية محمية بالكامل ولن تُستخدم إلا للتواصل معك بخصوص
              هذا الطلب فقط. نحن نلتزم بأعلى معايير الخصوصية والأمان.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
