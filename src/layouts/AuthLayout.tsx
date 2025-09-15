import Image from "next/image";
import Shape1 from "../../public/auth-shape-1.webp";
import Shape2 from "../../public/auth-shape-2.webp";
import Logo from "@/components/Logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col bg-[#F3F4F6]">
      <header className="p-2 shadow ">
        <Logo />
      </header>
      <main className="flex-1 flex sm:px-6 px-4  justify-center w-full sm:pt-6 pt-4">
        {children}
      </main>
      <div className="flex justify-between">
        <Image
          src={Shape2}
          className="   size-[clamp(200px,25vw,200px)] -left-5 "
          alt="شكل 1 للديكور"
        />
        <Image
          src={Shape1}
          className=" size-[clamp(200px,25vw,200px)] -left-5 "
          alt="شكل 1 للديكور"
        />
      </div>
    </div>
  );
}
