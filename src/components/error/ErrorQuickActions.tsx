import { ChevronRight, Headphones, Home, RefreshCw } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../ui/card";

export default function ErrorQuickActions({ reset }: { reset: () => void }) {
  const actions = [
    {
      icon: RefreshCw,
      title: "إعادة المحاولة",
      description: "جرب تحديث الصفحة",
      action: reset,
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: Home,
      title: "الصفحة الرئيسية",
      description: "العودة للرئيسية",
      action: () => (window.location.href = "/"),
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Headphones,
      title: "الدعم التقني",
      description: "تواصل مع الفريق",
      action: () => (window.location.href = "/contact-us"),
      color: "from-purple-500 to-violet-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {actions.map((action, index) => (
        <div key={index}>
          <Card
            className="group cursor-pointer border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            onClick={action.action}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${action.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <action.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">
                    {action.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transform group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}
