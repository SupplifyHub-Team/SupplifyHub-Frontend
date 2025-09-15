import { Link } from '@/i18n/navigation';
import { Card, CardContent } from '../ui/card';
import { ArrowLeft,  Package, Search } from 'lucide-react';


const NOT_FOUND_SUGGESTIONS = [
  {
    icon: Search,
    title: "البحث عن موردين",
    description: "ابحث عن أفضل الموردين في مجالك",
    link: "/suppliers",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Package,
    title: "التسجيل بالمنصة",
    description: "قم بالتسجيل للوصول إلى المزيد من الميزات",
    link: "/register",
    color: "from-purple-500 to-pink-600",
  },
];


export default function BusinessSuggestions() {

return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
    {NOT_FOUND_SUGGESTIONS.map((item, index) => (
      <div key={index}>
        <Link href={item.link}>
          <Card className="group cursor-pointer border-0 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
            />
            <CardContent className="p-6 relative">
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transform group-hover:-translate-x-1 transition-all duration-300" />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    ))}
  </div>
);
}
