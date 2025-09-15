"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="fixed bottom-6 left-6 z-50 animate-fade-in">
        <Button
          onClick={scrollToTop}
          size="lg"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-indigo-800  text-white shadow-2xl hover:shadow-indigo-500/25 transition-all"
        >
          <ChevronUp className="w-5 h-5" />
        </Button>
      </div>
    )
  );
}
