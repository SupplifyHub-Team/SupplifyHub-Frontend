import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle, Search, Zap } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80dvh] py-6 flex items-center justify-center overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-slate-900/5" />
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 rounded-3xl blur-xl" />
        <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-indigo-500/20 rounded-full blur-lg" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-7xl font-bold bg-gradient-to-r from-slate-900 via-indigo-700 to-purple-600 bg-clip-text text-transparent leading-tight mb-6">
            <Badge className="inline-flex items-center bg-gradient-to-r from-indigo-50 via-purple-50 to-indigo-50 text-indigo-700 px-8 py-4 rounded-full text-7xl md:text-7xl font-bold mb-8 border border-indigo-200/30 shadow-lg shadow-indigo-500/10 hover:shadow-xl hover:shadow-indigo-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                SUPPLIFYHUB
              </span>
            </Badge>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            منصة ذكية تربط الموردين بأصحاب الأعمال لتبسيط إدارة الطلبات، تعزيز
            التنافسية، وخلق فرص موثوقة
          </p>

          {/* النقاط التوضيحية */}
          <div className="mt-8 space-y-4 text-slate-700 text-lg font-medium max-w-3xl mx-auto text-right">
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>
                منصة رقمية متكاملة لتوفير الوقت والجهد لربط الموردين بالشركات.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>
                تعزيز التنافسية يضمن حصول العملاء على عروض متعددة من موردين
                موثوقين خلال دقائق.
              </span>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
              <span>
                خلق فرص جديدة في بيئة رقمية موثوقة تربط الموردين بأصحاب الأعمال
                بكفاءة وسلاسة.
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 mt-12">
            <Link href="#pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                <span>
                  كمورد سجل الان واشترك في الخطة المجانية بدون أي التزام
                </span>
                <ArrowLeft className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-indigo-200 hover:border-indigo-300 text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                <Search className="w-5 h-5 ml-2" />
                <span>كعميل سجل الان واطلب مشترياتك بدون أي التزام</span>
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="shadow-lg hover:scale-105 transition">
              <CardHeader className="flex items-center justify-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">100%</div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-medium">موردين موثوقين</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:scale-105 transition">
              <CardHeader className="flex items-center justify-center gap-3 ">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-slate-900">
                  15 دقائق
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 font-medium">
                  متوسط الحصول على عرض
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Security Assurance */}
        <div className="text-center mt-12">
          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm">بيانات مشفرة بأعلى معايير الأمان</span>
            </div>
            <span className="text-slate-400">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span className="text-sm">دعم فني على مدار الساعة</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
