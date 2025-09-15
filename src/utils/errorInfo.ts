import { Bug, Database, Server, Wifi } from "lucide-react";
import { ApiError } from "./handleApiError";

export const getErrorInfo = (error: ApiError) => {
  const message = error.message.toLowerCase();
  console.log(error);

  if (message.includes("network") || message.includes("fetch")) {
    return {
      type: "شبكة",
      icon: Wifi,
      title: "مشكلة في الاتصال",
      description: "تعذر الاتصال بالخادم. تحقق من اتصالك بالإنترنت.",
      color: "from-blue-500 to-cyan-600",
      bgColor: "from-blue-50 to-cyan-50",
    };
  }

  if (message.includes("database") || message.includes("sql")) {
    return {
      type: "قاعدة بيانات",
      icon: Database,
      title: "خطأ في قاعدة البيانات",
      description: "مشكلة مؤقتة في قاعدة البيانات. نعمل على إصلاحها.",
      color: "from-purple-500 to-violet-600",
      bgColor: "from-purple-50 to-violet-50",
    };
  }

  if (message.includes("server") || message.includes("500")) {
    return {
      type: "خادم",
      icon: Server,
      title: "خطأ في الخادم",
      description: "مشكلة داخلية في الخادم. فريقنا التقني يعمل على الحل.",
      color: "from-red-500 to-rose-600",
      bgColor: "from-red-50 to-rose-50",
    };
  }

  return {
    type: "عام",
    icon: Bug,
    title: "خطأ غير متوقع",
    description: "حدث خطأ غير متوقع. يرجى المحاولة مرة أخرى.",
    color: "from-orange-500 to-amber-600",
    bgColor: "from-orange-50 to-amber-50",
  };
};
