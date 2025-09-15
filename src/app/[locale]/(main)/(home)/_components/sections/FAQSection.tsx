import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "@/i18n/navigation";
const faqs = [
  {
    question: "ما هي SupplifyHub وكيف تعمل؟",
    answer:
      "SupplifyHub هي منصة B2B تربط الفنادق والمطاعم والمقاهي بموردين موثوقين. ببساطة، تطلب ما تحتاجه وتحصل على عروض أسعار من عدة موردين خلال دقائق، ثم تختار الأفضل لك.",
  },
  {
    question: "هل الاشتراك مجاني حقاً؟",
    answer:
      "نعم! نقدم خطة مجانية تتيح لك إرسال 5 طلبات توريد شهرياً مع الوصول لجميع الموردين الأساسيين. يمكنك الترقية لاحقاً للحصول على مميزات إضافية.",
  },
  {
    question: "كم من الوقت يستغرق الحصول على عروض الأسعار؟",
    answer:
      "معظم العروض تصلك خلال 15-30 دقيقة من إرسال الطلب. الموردين النشطين على المنصة يتنافسون للرد السريع لضمان حصولهم على المزيد من الأعمال.",
  },
  {
    question: "كيف تضمنون جودة الموردين؟",
    answer:
      "جميع موردينا يخضعون لعملية فحص دقيقة تشمل التحقق من التراخيص، تقييم العملاء السابقين، والزيارات الميدانية. كما نتابع أداءهم باستمرار.",
  },
  {
    question: "كيف يمكنني التواصل مع الدعم الفني؟",
    answer:
      "فريق الدعم متاح 24/7 عبر الواتساب، البريد الإلكتروني، أو الهاتف. العملاء المميزون يحصلون على مدير حساب مخصص للدعم الفوري.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0  ">
        <div
          className=" absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 8px 8px, rgba(99, 102, 241, 0.3) 1.5px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-indigo-200/50">
            <HelpCircle className="w-4 h-4 mr-1" />
            الأسئلة الشائعة
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            إجابات لأهم أسئلتك
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            كل ما تحتاج معرفته عن SupplifyHub وكيفية الاستفادة القصوى من المنصة
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="multiple" className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                className="bg-white p-4 hover:outline rounded-2xl shadow-md hover:shadow-lg transition"
                key={`item-${index}`}
                value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                لم تجد إجابة لسؤالك؟
              </h3>
              <p className="text-slate-600 mb-6">
                فريق دعمنا متاح لمساعدتك على مدار الساعة
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://wa.me/201014563940">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full font-semibold">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    دردشة واتساب
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
