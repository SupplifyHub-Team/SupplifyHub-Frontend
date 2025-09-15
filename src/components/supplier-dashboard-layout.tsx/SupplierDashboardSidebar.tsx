import {
  CreditCard,
  Megaphone,
  Package,
  Settings,
  ShoppingCart,
  Star,
} from "lucide-react";
import NavLink from "../NavLink";

const sidebarItems = [
  { path: "/suppliers-dashboard/orders", label: "الطلبات", icon: ShoppingCart },
  { path: "/suppliers-dashboard/products", label: "المنتجات", icon: Package },
  { path: "/suppliers-dashboard/rating", label: "التقييمات", icon: Star },
  {
    path: "/suppliers-dashboard/subscription",
    label: "الاشتراكات",
    icon: CreditCard,
  },
  { path: "/suppliers-dashboard/ads", label: "الإعلانات", icon: Megaphone },
  {
    path: "/suppliers-dashboard/account-settings",
    label: "إعدادات الحساب",
    icon: Settings,
  },
];

export default function SupplierDashboardSidebar() {
  return (
    <aside className="h-full border-e">
      <div className="flex  items-center justify-between p-6 border-b border-gray-100">
        <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          لوحة المورد
        </h2>
      </div>

      <nav className="p-4 space-y-2 sticky top-0">
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
