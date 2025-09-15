import { Link } from "@/i18n/navigation";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white border-t border-slate-700/50">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Vision */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              SupplifyHub
            </span>
            <p className="text-sm text-slate-300 max-w-sm text-center md:text-right leading-relaxed">
              منصة رقمية تربط الموردين بأصحاب الأعمال وتدعم نمو قطاع الأعمال B2B
              بكفاءة واحترافية
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            <Link
              href="https://www.facebook.com/profile.php?id=61579797784804"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تويتر"
              className="p-3 rounded-xl bg-slate-800 hover:bg-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/supplifyhub/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="انستجرام"
              className="p-3 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="لينكدإن"
              className="p-3 rounded-xl bg-slate-800 hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Linkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} منصة SupplifyHub. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}