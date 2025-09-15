"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";
import { Star, Quote, TrendingUp, Clock, DollarSign } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "أحمد السالم",
    position: "مدير المشتريات",
    company: "فندق الرياض الذهبي",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    content:
      "SupplifyHub غيّر طريقة عملنا بالكامل. وفرنا 40% من الوقت و 25% من التكاليف. الموردون موثوقون والخدمة ممتازة.",
    metrics: {
      timeSaved: "40%",
      costSaved: "25%",
      responseTime: "15 دقيقة",
    },
    category: "فنادق",
  },
  {
    id: 2,
    name: "فاطمة الزهراني",
    position: "مالكة",
    company: "مطعم الأصالة للمأكولات الشعبية",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    content:
      "كمطعم صغير، كان صعب علينا نحصل على أسعار تنافسية. SupplifyHub ساعدنا نوصل لموردين ما كنا نعرفهم وحسّن هوامش ربحنا.",
    metrics: {
      timeSaved: "60%",
      costSaved: "30%",
      responseTime: "8 دقائق",
    },
    category: "مطاعم",
  },
  {
    id: 3,
    name: "محمد الغامدي",
    position: "مدير التشغيل",
    company: "كافيه الزاوية",
    avatar: "/api/placeholder/64/64",
    rating: 5,
    content:
      "المنصة سهلة الاستخدام والدعم الفني رائع. حصلنا على عروض أسعار من 5 موردين خلال ساعة واحدة فقط.",
    metrics: {
      timeSaved: "50%",
      costSaved: "20%",
      responseTime: "12 دقيقة",
    },
    category: "مقاهي",
  },
];

const companyLogos = [
  "فندق الفيصلية",
  "مطعم البيك",
  "كوفي ديز",
  "فندق الإنتركونتيننتال",
  "مطعم هرفي",
  "كافيه نيرو",
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(99, 102, 241, 0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-green-200/50">
            <TrendingUp className="w-4 h-4 mr-1" />
            قصص نجاح حقيقية
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            اكتشف كيف ساعدت SupplifyHub مئات الشركات في تحسين عمليات التوريد وزيادة
            الأرباح
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-8">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Quote className="w-6 h-6 text-indigo-600" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-700 leading-relaxed mb-6 text-lg">
                    {testimonial.content}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-6 p-4 bg-gradient-to-r from-slate-50 to-indigo-50 rounded-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600 flex items-center justify-center gap-1">
                        <Clock className="w-4 h-4" />
                        {testimonial.metrics.timeSaved}
                      </div>
                      <div className="text-xs text-slate-600">وفر بالوقت</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600 flex items-center justify-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {testimonial.metrics.costSaved}
                      </div>
                      <div className="text-xs text-slate-600">وفر بالتكلفة</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">
                        {testimonial.metrics.responseTime}
                      </div>
                      <div className="text-xs text-slate-600">متوسط الرد</div>
                    </div>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-600">
                        {testimonial.position}
                      </div>
                      <div className="text-sm text-indigo-600 font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-indigo-50 text-indigo-700 border-indigo-200 text-xs"
                    >
                      {testimonial.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-lg font-semibold text-slate-700 mb-8">
            يثق بنا أكثر من 500 شركة في المنطقة
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companyLogos.map((logo, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="bg-white/60 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="text-slate-700 font-medium text-sm">{logo}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
