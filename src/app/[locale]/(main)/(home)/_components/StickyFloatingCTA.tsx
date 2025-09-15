"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageCircle, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export default function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show after scrolling 50% of viewport
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Sticky Bottom Bar */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200 shadow-2xl"
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-bold text-slate-900 text-lg">
                    ابدأ في توفير الوقت والمال اليوم
                  </h3>
                  <p className="text-slate-600 text-sm">
                    انضم لآلاف الشركات التي تستخدم SupplifyHub
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsExpanded(true)}
                    className="border-slate-300 hover:border-indigo-300 hover:bg-indigo-50"
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    اتصل بنا
                  </Button>

                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    ابدأ مجانًا
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating RFQ Launcher */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="fixed bottom-24 left-6 z-50"
          >
            <Button
              size="lg"
              onClick={() => setIsExpanded(true)}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>طلب سريع</span>
            </Button>
          </motion.div>

          {/* Quick Contact Modal */}
          <AnimatePresence>
            {isExpanded && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsExpanded(false)}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                />

                {/* Modal */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.8, opacity: 0, y: 20 }}
                  transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-8 shadow-2xl z-50 w-full max-w-md mx-4"
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-slate-900">
                      تواصل معنا الآن
                    </h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsExpanded(false)}
                      className="text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-5 h-5" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 rounded-xl font-semibold">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      بدء محادثة واتساب
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-slate-300 hover:border-indigo-300 hover:bg-indigo-50 py-3 rounded-xl font-semibold"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      حجز مكالمة مجانية
                    </Button>

                    <div className="text-center pt-4 border-t border-slate-200">
                      <p className="text-sm text-slate-600">
                        أو أرسل لنا طلبك وسنتواصل معك خلال 5 دقائق
                      </p>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
