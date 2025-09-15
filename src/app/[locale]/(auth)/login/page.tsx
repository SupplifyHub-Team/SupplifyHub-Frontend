import LoginForm from "@/components/forms/LoginForm";
import { Link } from "@/i18n/navigation";
import { HeartHandshake } from "lucide-react";

export default function page() {
  return (
    <div className="bg-white h-fit w-[clamp(300px,95vw,550px)] rounded-2xl p-6 font-medium border shadow-lg">
      <p className="flex justify-center mb-5 text-indigo-500 items-center gap-2 text-2xl ">
        <span className="font-bold ">مرحبًا بعودتك</span>
        <HeartHandshake className="" />
      </p>

      <LoginForm />

      <div className="flex items-center justify-center my-6 gap-2">
        <hr className="w-full" />
        <span>او</span>
        <hr className="w-full" />
      </div>

      <p className="text-center text-gray-500 mb-4 font-semibold">
        <span>لست عضوا حتى الان؟</span>&nbsp;
        <Link href="/register" className="text-indigo-500 hover:underline">
          انضم الآن
        </Link>
      </p>
    </div>
  );
}
