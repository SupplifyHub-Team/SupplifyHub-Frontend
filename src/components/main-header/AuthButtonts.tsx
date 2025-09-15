import { Link } from "@/i18n/navigation";
import { Button } from "../ui/button";
import { LogIn, UserPlus } from "lucide-react";

export default function AuthButtonts() {
  return (
    <div className="flex md:flex-row flex-col md:items-center gap-4">
      <Button
        variant="ghost"
        className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium transition-all duration-200"
        asChild
      >
        <Link href="/login" className="flex items-center gap-2">
          <LogIn className="w-4 h-4" />
          تسجيل الدخول
        </Link>
      </Button>
      <Button
        className="  font-medium px-6 py-2 rounded-xl shadow-lg hover:shadow-xl text-white transition-all duration-200 transform "
        asChild
      >
        <Link href="/register" className="flex items-center gap-2">
          <UserPlus className="w-4 h-4" />
          انشاء حساب
        </Link>
      </Button>
    </div>
  );
}
