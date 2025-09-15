"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "motion/react";
import {
  Search,
  MapPin,
  Star,
  Clock,
  Phone,
  MessageCircle,
  Building2,
  Package,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

const mockSuppliers = [
  {
    id: 1,
    name: "شركة الفرات للتوريد",
    category: "منتجات غذائية",
    location: "الرياض",
    rating: 4.8,
    responseTime: "15 دقيقة",
    verified: true,
    featured: true,
    price: "تنافسي",
    deliveryTime: "24 ساعة",
  },
  {
    id: 2,
    name: "مؤسسة النخيل التجارية",
    category: "مستلزمات فندقية",
    location: "جدة",
    rating: 4.9,
    responseTime: "8 دقائق",
    verified: true,
    featured: false,
    price: "ممتاز",
    deliveryTime: "48 ساعة",
  },
  {
    id: 3,
    name: "شركة الأصالة للمطاعم",
    category: "أدوات مطبخ",
    location: "الدمام",
    rating: 4.7,
    responseTime: "22 دقيقة",
    verified: true,
    featured: false,
    price: "جيد جداً",
    deliveryTime: "72 ساعة",
  },
];

const searchSuggestions = [
  "لوازم مطبخ",
  "أواني فندقية",
  "منتجات تنظيف",
  "مواد غذائية",
  "أثاث مطاعم",
];

export default function RFQPreviewSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [typingIndex, setTypingIndex] = useState(0);
  const [displayedSuppliers, setDisplayedSuppliers] = useState<
    typeof mockSuppliers
  >([]);

  useEffect(() => {
    if (searchQuery.length > 2) {
      setShowResults(true);
      // Simulate API delay
      setTimeout(() => {
        setDisplayedSuppliers(mockSuppliers);
      }, 500);
    } else {
      setShowResults(false);
      setDisplayedSuppliers([]);
    }
  }, [searchQuery]);

  // Auto-typing demo effect
  useEffect(() => {
    const demoText = "أواني مطبخ للمطاعم";
    if (typingIndex < demoText.length) {
      const timer = setTimeout(() => {
        setSearchQuery(demoText.slice(0, typingIndex + 1));
        setTypingIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [typingIndex]);

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #6366f1 25%, transparent 25%), linear-gradient(-45deg, #6366f1 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #6366f1 75%), linear-gradient(-45deg, transparent 75%, #6366f1 75%)",
            backgroundSize: "20px 20px",
            backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0px",
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
          <Badge className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-purple-200/50">
            <Zap className="w-4 h-4 mr-1" />
            جرب البحث الذكي
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            اكتشف الموردين في ثوانٍ
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            جرب محرك البحث الذكي واعثر على الموردين المناسبين لاحتياجاتك فوراً
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Search Interface */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/50 mb-8"
          >
            <div className="relative">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
                <Input
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setTypingIndex(e.target.value.length);
                  }}
                  placeholder="اكتب ما تحتاجه... مثل: أواني مطبخ، أثاث مطاعم، مواد تنظيف"
                  className="w-full h-16 pr-14 pl-6 text-lg rounded-2xl border-2 border-slate-200 focus:border-indigo-400 focus:ring-0 bg-white/50 backdrop-blur-sm"
                />
                <Button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl">
                  بحث
                </Button>
              </div>

              {/* Quick Suggestions */}
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-sm text-slate-600 mr-2">اقتراحات:</span>
                {searchSuggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => setSearchQuery(suggestion)}
                    className="bg-slate-50 hover:bg-indigo-50 border-slate-200 hover:border-indigo-300 text-slate-700 hover:text-indigo-700 rounded-full text-xs"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Search Results */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      النتائج ({displayedSuppliers.length})
                    </h3>
                    <Badge className="bg-green-100 text-green-700 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      نتائج فورية
                    </Badge>
                  </div>
                  <div className="text-sm text-slate-600">
                    تم العثور على النتائج خلال 0.3 ثانية
                  </div>
                </div>

                {displayedSuppliers.map((supplier, index) => (
                  <motion.div
                    key={supplier.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/90 backdrop-blur-sm border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 flex-1">
                            {/* Supplier Avatar */}
                            <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                              <Building2 className="w-8 h-8 text-indigo-600" />
                            </div>

                            {/* Supplier Info */}
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                                  {supplier.name}
                                </h4>

                                <div className="flex items-center gap-1">
                                  {supplier.verified && (
                                    <Badge className="bg-green-100 text-green-700 text-xs border-0">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      موثق
                                    </Badge>
                                  )}
                                  {supplier.featured && (
                                    <Badge className="bg-orange-100 text-orange-700 text-xs border-0">
                                      <Star className="w-3 h-3 mr-1" />
                                      مميز
                                    </Badge>
                                  )}
                                </div>
                              </div>

                              <div className="flex items-center gap-4 text-sm text-slate-600 mb-2">
                                <div className="flex items-center gap-1">
                                  <Package className="w-4 h-4 text-blue-500" />
                                  <span>{supplier.category}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4 text-red-500" />
                                  <span>{supplier.location}</span>
                                </div>
                              </div>

                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                  <span className="font-medium">
                                    {supplier.rating}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4 text-green-500" />
                                  <span>يرد خلال {supplier.responseTime}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Actions */}
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-slate-200 hover:border-green-300 hover:bg-green-50 hover:text-green-700"
                            >
                              <Phone className="w-4 h-4 mr-1" />
                              اتصال
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-slate-200 hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                            >
                              <MessageCircle className="w-4 h-4 mr-1" />
                              رسالة
                            </Button>
                            <Button
                              size="sm"
                              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white"
                            >
                              طلب عرض سعر
                              <ArrowRight className="w-4 h-4 mr-2" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}

                {/* Continue CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-center mt-8 p-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-indigo-100"
                >
                  <h4 className="text-xl font-bold text-slate-900 mb-4">
                    أعجبك ما رأيت؟ ابدأ رحلتك الآن!
                  </h4>
                  <p className="text-slate-600 mb-6">
                    سجل مجاناً واحصل على عروض أسعار حقيقية من موردين موثوقين
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    ابدأ مجاناً الآن
                    <ArrowRight className="w-5 h-5 mr-2" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
