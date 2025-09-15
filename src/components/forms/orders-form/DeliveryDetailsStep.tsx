"use client";
import { useFormContext } from "react-hook-form";
import FormInput from "../../forms-fields/FormInput";
import FormDatePicker from "../../forms-fields/FormDatePicker";
import { MapPin, Calendar } from "lucide-react";
import { CompleteOrderInput } from "@/schemas/orderSchema";

export default function DeliveryDetailsStep() {
  const { control } = useFormContext<CompleteOrderInput>();

  return (
    <div className="space-y-8 animate-in fade-in-50 slide-in-from-bottom-5 duration-700">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
          <MapPin className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
          التسليم والمواصفات
        </h3>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          حدد مكان وموعد التسليم المطلوب
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormInput<CompleteOrderInput>
          control={control}
          name="requiredLocation"
          placeholder="المدينة، الحي، العنوان التفصيلي..."
          label="الموقع المطلوب للتسليم"
          type="text"
          Icon={<MapPin className="w-5 h-5" />}
        />

        <FormDatePicker<CompleteOrderInput>
          control={control}
          name="deadline"
          placeholder="اختر تاريخ ووقت التسليم..."
          label="تاريخ التسليم المطلوب"
          type="datetime-local"
        />
      </div>

      <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-6 border border-green-200">
        <div className="flex items-start gap-3">
          <Calendar className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-green-800 mb-2">نصائح مهمة</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• تأكد من دقة العنوان لتجنب التأخير</li>
              <li>• اختر موعد التسليم مع مراعاة وقت الإنتاج والشحن</li>
              <li>• يمكن التنسيق مع المورد لتعديل المواعيد</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
