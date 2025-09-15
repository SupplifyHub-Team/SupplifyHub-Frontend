import { Link } from "@/i18n/navigation";

const HEADER_LINKS = [
  { href: "/", label: "الرئيسية" },
  { href: "/suppliers", label: "الموردين" },
  { href: "/blog", label: "المدونة" },
  { href: "/about-us", label: "من نحن" },
  { href: "/contact-us", label: "اتصل بنا" },
  { href: "/terms", label: " الشروط والاحكام" },
];
export default function MainHeaderNav({
  closeSheet,
}: {
  closeSheet?: () => void;
}) {
  return (
    <div className="md:flex justify-between  gap-4" onClick={closeSheet}>
      <nav className="flex md:mb-0 mb-4  md:flex-row flex-col md:items-center gap-6">
        {HEADER_LINKS.map((link) => (
          <Link
            onClick={closeSheet}
            key={link.href}
            href={link.href}
            className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group">
            {link.label}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 md:group-hover:w-full"></span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
