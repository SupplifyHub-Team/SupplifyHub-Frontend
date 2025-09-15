import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@/i18n/navigation";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  DollarSign,
  Globe,
  Package,
  Shield,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const buyerBenefits = [
  {
    icon: Star,
    title: "100% مجاني",
    description: "يمكنك الاستفادة من المنصة مجانا بدون قيود",
    metric: "100%",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: DollarSign,
    title: "أسعار تنافسية",
    description: "قارن بين عروض متعددة واختر الأفضل لميزانيتك",
    metric: "25%",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Shield,
    title: "موردين موثوقين",
    description: "جميع الموردين تم التحقق منهم وتقييمهم",
    metric: "100%",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: BarChart3,
    title: "تحليلات متقدمة",
    description: "تتبع أداء المشتريات وحسّن استراتيجية التوريد",
    metric: "∞",
    color: "from-orange-500 to-red-600",
  },
];

const supplierBenefits = [
  {
    icon: Users,
    title: "وصول لعملاء جدد",
    description: "تواصل مع آلاف الفنادق والمطاعم المهتمة",
    metric: "1000+",
    color: "from-blue-500 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "زيادة المبيعات",
    description: "احصل على طلبات توريد أكثر وحسّن دخلك",
    metric: "300%",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Globe,
    title: "توسع جغرافي",
    description: "وصّل منتجاتك لمناطق جديدة بسهولة",
    metric: "50+",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Package,
    title: "إدارة أفضل",
    description: "نظام متطور لإدارة الطلبات والعملاء",
    metric: "24/7",
    color: "from-orange-500 to-red-600",
  },
];

function ValuePropositionTabContent({
  benefit,
}: {
  benefit: {
    icon: React.ElementType;
    title: string;
    description: string;
    metric: string;
    color: string;
  };
}) {
  return (
    <div className="">
      <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
        <CardContent className="p-6 text-center">
          {/* Icon with Metric */}
          <div className="relative mb-6">
            <div
              className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
              <benefit.icon className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
              {benefit.metric}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            {benefit.title}
          </h3>
          <p className="text-slate-600 leading-relaxed">
            {benefit.description}
          </p>

          {/* Check Mark */}
          <div className="mt-4 flex justify-center">
            <CheckCircle className="w-5 h-5 text-green-500" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ValuePropositionTabs() {
  return (
    <Tabs defaultValue="buyers" className=" items-center justify-center ">
      <TabsList className="py-8 px-4 rounded-lg bg-white border-slate-200/50 border shadow-2xl gap-2 mb-10">
        <TabsTrigger value="buyers" asChild>
          <Button
            variant="ghost"
            className="
                                rounded-xl px-8 py-4 transition-all shadow-lg
                                data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white
                                data-[state=inactive]:bg-white data-[state=inactive]:text-slate-700 data-[state=inactive]:border data-[state=inactive]:border-slate-200
                                hover:data-[state=inactive]:bg-slate-50">
            للمشترين
          </Button>
        </TabsTrigger>

        <TabsTrigger value="suppliers" asChild>
          <Button
            variant="ghost"
            className="rounded-xl px-8 py-4 transition-all shadow-lg
                                    data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-600 data-[state=active]:to-purple-600 data-[state=active]:text-white
                                    data-[state=inactive]:bg-white data-[state=inactive]:text-slate-700 data-[state=inactive]:border data-[state=inactive]:border-slate-200
                                    hover:data-[state=inactive]:bg-slate-50
      ">
            للموردين
          </Button>
        </TabsTrigger>
      </TabsList>
      <TabsContent
        value="buyers"
        className=" max-w-7xl mx-auto animate-fade-in ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {buyerBenefits.map((benefit, index) => (
            <ValuePropositionTabContent key={index} benefit={benefit} />
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ابدأ في توفير الوقت والمال
            </h3>
            <p className="text-slate-600 mb-6">
              انضم لآلاف الشركات التي تستخدم SupplifyHub لتحسين عمليات التوريد
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                انضم كعميل
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="suppliers"
        className=" max-w-7xl mx-auto animate-fade-in ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {supplierBenefits.map((benefit, index) => (
            <ValuePropositionTabContent key={index} benefit={benefit} />
          ))}
        </div>
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              ابدأ في زيادة مبيعاتك
            </h3>
            <p className="text-slate-600 mb-6">
              انضم لشبكة الموردين المتنامية واحصل على عملاء جدد
            </p>
            <Link href="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                انضم كمورد
                <ArrowRight className="w-5 h-5 mr-2" />
              </Button>
            </Link>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}
