import { cn } from "@/lib/utils";
import Logo from "../Logo";
import MainHeaderNav from "./MainHeaderNav";
import MobileHeaderNav from "./MobileHeaderNav";
import AuthButtonts from "./AuthButtonts";

export default function MainHeader() {
  return (
    <header
      className={cn(
        "sticky top-0 z-[50] w-full transition-all duration-300",
        "bg-indigo-200/10 backdrop-blur-md shadow-lg border-b border-gray-200"
      )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Logo />
          <div className="md:flex gap-6  hidden ">
            <MainHeaderNav />
          </div>
          <div className="md:block hidden">
            <AuthButtonts />
          </div>

          <div className="md:hidden flex items-center gap-2 ">
            <MobileHeaderNav />
          </div>
        </div>
      </div>
    </header>
  );
}
