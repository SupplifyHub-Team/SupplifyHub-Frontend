import Image from "next/image";
import LogoImage from "../../public/Logo.webp";
import { Link } from "@/i18n/navigation";

export default function Logo({ size = 200 }: { size?: number }) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        sizes="(max-width: 768px) 100vw, 50vw"
        src={LogoImage}
        alt="شعار المنصة"
        width={size}
        height={size}
      />
    </Link>
  );
}
