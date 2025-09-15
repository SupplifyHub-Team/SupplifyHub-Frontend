import { Package, Target } from "lucide-react";
import NavLink from "../NavLink";

const sidebarItems = [
  { path: "/clients-dashboard/overview", label: "لوحة التحكم", icon: Target },
  { path: "/clients-dashboard/new-order", label: "إنشاء طلب", icon: Package },
];

export default function ClientDashboardSidebar() {
  return (
    <aside className="p-4 h-full  shadow-md">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">لوحة العميل</h2>
        <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>

      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              href={`${item.path}`}
              activeClassName="bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
              nonActiveClassName="text-gray-700 hover:bg-gray-100"
              className="w-full flex items-center gap-3 p-3 rounded-xl text-right transition-all duration-200">
              <Icon className="size-5" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}
