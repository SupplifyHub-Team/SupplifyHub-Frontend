import ResetPasswordForm from "@/components/forms/ResetPasswordForm";
import { Link } from "@/i18n/navigation";
import { Lock } from "lucide-react";

export default function page() {
  return (
    <div className="bg-white h-fit w-[clamp(300px,95vw,550px)] rounded-2xl p-6 font-medium border shadow-lg">
      <p className="flex justify-center mb-5 text-indigo-500 items-center gap-2 text-2xl ">
        <span className="font-bold ">تغير كلمة المرور</span>
        <Lock className="" />
      </p>

      <ResetPasswordForm />

      <div className="flex items-center justify-center my-6 gap-2">
        <hr className="w-full" />
        <span>او</span>
        <hr className="w-full" />
      </div>

      <p className="text-center text-gray-500 mb-4 font-semibold">
        <span>هل تتذكر كلمة المرور الخاصة بك؟</span>&nbsp;
        <Link href="/login" className="text-indigo-500 hover:underline">
          سجل الدخول
        </Link>
      </p>
    </div>
  );
}
