import { FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "الشروط والأحكام – SupplifyHub",
  description: "تعرف على الشروط والأحكام الخاصة باستخدام منصة SupplifyHub.",
};

export default function TermsAndConditionsPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Soft background gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />

          {/* Subtle blurred circles */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-200/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-8">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-700 font-medium">
              سياسة الاستخدام والخصوصية
            </span>
          </div>

          <h5
            className="text-5xl leading-tight h-fit lg:text-6xl font-extrabold mb-4 relative 
  bg-gradient-to-r from-gray-900 via-indigo-900 to-gray-900 
  bg-clip-text text-transparent"
          >
            الشروط والأحكام
          </h5>

          {/* خط فاصل ديكوري */}
          <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto" />

          {/* الوصف */}
          <p className="mt-6 text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            مرحباً بك في <span className="font-bold">منصة SupplifyHub</span>،
            باستخدامك خدماتنا فإنك توافق على الالتزام بالشروط والأحكام الموضحة
            أدناه.
          </p>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {[
            {
              title: "أولاً: شروط استخدام المنصة",
              points: [
                "يجب أن يكون المستخدم كامل الأهلية القانونية والنظامية للتعامل.",
                "إدخال بيانات صحيحة ودقيقة وكاملة عند التسجيل.",
                "المستخدم مسؤول عن سرية حسابه وكلمة المرور.",
                "عدم استخدام المنصة لأغراض غير قانونية.",
                "للمنصة الحق في إيقاف أو إلغاء الحسابات المخالفة.",
              ],
            },
            {
              title: "ثانياً: خدمات المنصة",
              points: [
                "المنصة وسيط رقمي لطلب عروض الأسعار من الموردين المعتمدين.",
                "توفير بيئة آمنة وموثوقة للتواصل بين الموردين والعملاء.",
                "المسؤولية عن جودة المنتجات والتسليم تقع على المورد مباشرة.",
                "للمنصة الحق في تعديل أو تحديث الخدمات في أي وقت.",
              ],
            },
            {
              title: "ثالثاً: الطلبات والدفع",
              points: [
                "إدخال تفاصيل الطلب بشكل صحيح وواضح.",
                "إرسال الطلبات إلى الموردين دون كشف بيانات العميل إلا بعد قبول العرض.",
                "العميل مسؤول عن دفع قيمة الطلب حسب وسائل الدفع المعتمدة.",
                "للمنصة الحق في فرض رسوم أو عمولات وفق الباقات المعلنة.",
              ],
            },
            {
              title: "رابعاً: حقوق الموردين والعملاء",
              points: [
                "للمورد الرد على الطلبات ضمن المدة الزمنية المحددة.",
                "يلتزم المورد بتقديم أسعار دقيقة وعروض مطابقة للمواصفات.",
                "يلتزم العملاء بعدم تقديم طلبات وهمية أو مضللة.",
                "للمنصة الحق في تعليق أو إلغاء الحساب عند إساءة الاستخدام.",
              ],
            },
            {
              title: "خامساً: سياسة العمولة والاشتراكات",
              points: [
                "الخدمات متاحة عبر باقات (مجانية – أساسية – مميزة).",
                "قد يتم فرض عمولة على بعض الصفقات أو الخدمات الخاصة.",
                "الالتزام بدفع الرسوم أو الاشتراكات وفق طرق الدفع المعتمدة.",
              ],
            },
            {
              title: "سادساً: حدود المسؤولية",
              points: [
                "المنصة ليست طرفاً في اتفاقيات البيع أو الشراء.",
                "لا تتحمل المنصة مسؤولية النزاعات، لكنها قد تتدخل لتسويتها ودياً.",
                "لا تضمن المنصة جودة المنتجات أو الالتزام بمواعيد التسليم.",
              ],
            },
            {
              title: "سابعاً: سياسة الخصوصية",
              points: [
                "المنصة ملتزمة بالحفاظ على سرية بيانات المستخدمين.",
                "لا تتم مشاركة البيانات مع طرف ثالث إلا عند الضرورة أو بموجب القانون.",
                "باستخدام المنصة فإنك توافق على جمع بياناتك واستخدامها وفق سياسة الخصوصية.",
              ],
            },
            {
              title: "ثامناً: القانون المطبق والاختصاص القضائي",
              points: [
                "تخضع هذه الشروط والأحكام لأنظمة المملكة العربية السعودية.",
                "أي نزاع يتم الفصل فيه عبر المحاكم السعودية المختصة.",
              ],
            },
          ].map((section, i) => (
            <Card
              key={i}
              className="p-8 shadow-md border border-indigo-100 bg-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  {section.title}
                </h2>
              </div>
              <ul className="list-disc list-inside space-y-3 text-gray-700 leading-relaxed">
                {section.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
