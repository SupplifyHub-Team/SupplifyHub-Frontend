import { Building2, Users, Target, Globe, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { aboutMetadata } from "@/config/metadata";
import { Link } from "@/i18n/navigation";

export const metadata = aboutMetadata;

const values = [
  {
    icon: Target,
    title: "الهدف",
    description: "ربط قطاع الضيافة بأفضل الموردين لضمان جودة الخدمة",
  },
  {
    icon: Globe,
    title: "الرؤية",
    description: "منصة رقمية شاملة تحدث نقلة في صناعة الضيافة",
  },
  {
    icon: TrendingUp,
    title: "النمو",
    description: "تطوير مستدام للأعمال من خلال الشراكات الاستراتيجية",
  },
];

export default function AboutUsPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white"
      dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-200-50-500/10 to-purple-200/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent leading-tight">
                  نحن SupplifyHub
                </h1>
                <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                  <p>
                    منصة رقمية متطورة تربط بين الموردين والمشترين في قطاع
                    الضيافة (الفنادق والمطاعم والمقاهي). نسعى لتحويل طريقة
                    التعامل التجاري في هذا القطاع من خلال توفير حلول ذكية
                    وموثوقة.
                  </p>
                  <p>
                    نؤمن بقوة الشراكات الاستراتيجية في بناء أعمال مستدامة.
                    منصتنا تجمع أفضل الموردين مع أصحاب الأعمال الطموحين لخلق
                    تجارب استثنائية وتحقيق النمو المشترك.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                    ابدأ رحلتك معنا
                  </Button>
                </Link>
                <Link href="/contact-us">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto border-2 border-gray-300 hover:border-indigo-300 px-8 py-4 rounded-xl text-lg font-medium transition-all">
                    تواصل معنا
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-2">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl opacity-10" />
                <div className="relative space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">للموردين</h3>
                      <p className="text-gray-600 text-sm">وصول لعملاء جدد</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">للمشترين</h3>
                      <p className="text-gray-600 text-sm">موردين معتمدين</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              قيمنا ومبادئنا
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              المبادئ التي توجه عملنا وتشكل هويتنا
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
          <div className="space-y-8 slide-out-to-top">
            <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
              جاهز لتطوير أعمالك؟
            </h2>
            <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
              انضم إلى مجتمعنا من الموردين والمشترين واكتشف فرص نمو جديدة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/register">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all">
                  إنشاء حساب جديد
                </Button>
              </Link>
              <Link href="/contact-us">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl text-lg font-medium transition-all">
                  تحدث مع فريقنا
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
