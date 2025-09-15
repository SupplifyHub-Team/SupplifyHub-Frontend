import SubscribeButton from "@/components/SupplierSubscribeButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { formatMonths } from "@/lib/utils";
import { Check, X } from "lucide-react";

interface IPlanCardProps {
  plan: IPlan;
  PlanIcon: React.ElementType;
  colors: {
    bgColor: string;
    color: string;
  };
  popular: boolean;
}

export default function PlanCard({
  plan,
  PlanIcon,
  colors,
  popular,
}: IPlanCardProps) {
  return (
    <div key={plan.id} className="relative">
      <Card
        className={`relative border-2 transition-all duration-300 h-full hover:shadow-2xl hover:-translate-y-1 ${
          popular
            ? "border-indigo-300 shadow-xl shadow-indigo-500/20 scale-105"
            : "border-indigo-200 shadow-lg hover:border-indigo-300"
        }`}>
        {popular && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <Badge className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
              الأكثر شعبية
            </Badge>
          </div>
        )}

        <CardContent className="p-0">
          {/* Header */}
          <div
            className={`bg-gradient-to-br ${colors.bgColor} p-8 border-b border-slate-100`}>
            <div className="flex items-center gap-3 mb-4">
              <div
                className={`w-12 h-12 bg-gradient-to-r ${colors.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <PlanIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {plan.planName}
                </h3>
                <p className="text-sm text-slate-600">
                  {formatMonths(plan.duration)}
                </p>
              </div>
            </div>

            <p className="text-slate-600 mb-6 line-clamp-2">
              {plan.description}
            </p>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-slate-900">
                {plan.price === 0
                  ? "مجاني"
                  : `${plan.price.toLocaleString("ar-SA")} ريال`}
              </span>
              {plan.price > 0 && (
                <span className="text-slate-600">
                  / {formatMonths(plan.duration)}
                </span>
              )}
            </div>

            {/* Price per month calculation */}
            {plan.price > 0 && plan.duration > 1 && (
              <p className="text-sm text-slate-500 mt-1">
                (
                {Math.round(plan.price / plan.duration).toLocaleString("ar-SA")}
                ريال/شهر)
              </p>
            )}
          </div>

          {/* Features */}
          <div className="p-6">
            {/* Pros */}
            {plan.pros && plan.pros.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-green-600" />
                  المميزات
                </h4>
                <ul className="space-y-3">
                  {plan.pros.map((pro, proIndex) => (
                    <li key={proIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">
                        {pro}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cons */}
            {plan.cons && plan.cons.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-slate-800 mb-3 flex items-center gap-2">
                  <X className="w-4 h-4 text-red-500" />
                  القيود
                </h4>
                <ul className="space-y-3">
                  {plan.cons.map((con, conIndex) => (
                    <li key={conIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-slate-600 text-sm leading-relaxed">
                        {con}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <SubscribeButton isFree={plan.price === 0} planId={plan.id} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
