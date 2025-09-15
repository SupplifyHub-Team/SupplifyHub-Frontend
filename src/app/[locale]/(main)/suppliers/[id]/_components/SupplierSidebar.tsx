"use client";

import { Badge } from "@/components/ui/badge";
import useGetSupplierViews from "@/hooks/suppliers/useGetSupplierViews";
import { ISupplierInfo } from "@/types/supplier";
import { Box, CheckCircle, Eye, Star, Award,  } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface SupplierSidebarProps {
  supplier: ISupplierInfo;
}

export default function SupplierSidebar({ supplier }: SupplierSidebarProps) {
  const supplierId = supplier.id;
  const { data, isLoading, isError } = useGetSupplierViews(supplierId);
  const visitors = Number(data?.data?.message ?? 0);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const stats = [
    {
      icon: Eye,
      label: "عدد الزوار",
      value: isLoading ? "..." : isError ? "-" : visitors.toLocaleString(),
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      isLoading,
    },
    {
      icon: Box,
      label: "عدد المنتجات",
      value: (supplier?.productCount || 0).toLocaleString(),
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
    },
    {
      icon: CheckCircle,
      label: "الطلبات المكتملة",
      value: (supplier?.countOfOrderAccepted || 0).toLocaleString(),
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
    },
    {
      icon: Star,
      label: "التقييم",
      value: supplier?.averageRating.toFixed(1),
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full md:w-80"
    >
      {/* Main Stats Card */}
      <div className=" bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl overflow-hidden sticky top-20">
        {/* Header Background */}
        <div className="relative bg-gradient-to-r from-indigo-300 to-purple-300  p-6 text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <Award className="w-8 h-8 mb-3 text-yellow-300" />
            <h3 className="text-2xl font-bold mb-2">إحصائيات المورد</h3>
            <p className="text-white-100 text-sm">
              معلومات شاملة وتحديثات مستمرة
            </p>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="p-6 space-y-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -2 }}
                onHoverStart={() => setActiveCard(index)}
                onHoverEnd={() => setActiveCard(null)}
                className="relative group"
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${stat.bgColor} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>

                {/* Card Content */}
                <div className="relative bg-white/80 backdrop-blur-sm border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    {/* Icon and Label */}
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-md`}
                      >
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">
                          {stat.label}
                        </p>
                        <motion.div
                          animate={
                            activeCard === index ? { scale: [1, 1.05, 1] } : {}
                          }
                          transition={{ duration: 0.5 }}
                          className="text-xs text-gray-500"
                        >
                          {index === 0 && "هذا الشهر"}
                          {index === 1 && "متاح حالياً"}
                          {index === 2 && "بنجاح"}
                          {index === 3 && "من 5"}
                        </motion.div>
                      </div>
                    </div>

                    {/* Value Badge */}
                    <motion.div
                      animate={stat.isLoading ? { opacity: [1, 0.5, 1] } : {}}
                      transition={{
                        duration: 1,
                        repeat: stat.isLoading ? Infinity : 0,
                      }}
                    >
                      <Badge
                        className={`bg-gradient-to-r ${stat.color} text-white px-3 py-1 text-sm font-bold shadow-md`}
                      >
                        {stat.value}
                      </Badge>
                    </motion.div>
                  </div>

                  {/* Progress Bar for Rating */}
                  {index === 3 && (
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${(supplier?.averageRating / 5) * 100}%`,
                          }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-60 animate-ping"></div>
      <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-60 animate-ping delay-1000"></div>
    </motion.div>
  );
}
