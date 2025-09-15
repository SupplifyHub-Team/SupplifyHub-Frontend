import { Badge } from "@/components/ui/badge";

import ValuePropositionTabs from "./ValuePropositionTabs";

export default function ValuePropositionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-200/50">
            قيمة مضافة للجميع
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            فوائد حقيقية لكل طرف
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            منصة مصممة لتحقيق النجاح المشترك بين المشترين والموردين
          </p>
        </div>

        <ValuePropositionTabs />
      </div>
    </section>
  );
}
