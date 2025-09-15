import { Package, Plus } from "lucide-react";
import { AddProduct } from "./AddProduct";

export default function EmptyProductsList() {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-20 px-4">
      <div className="relative mb-8">
        <div className="w-28 h-28 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center shadow-lg">
          <Package className="w-14 h-14 text-indigo-500" />
        </div>
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
          <Plus className="w-4 h-4 text-white" />
        </div>
      </div>
      <h3 className="text-3xl font-bold text-gray-900 mb-3">
        لا توجد منتجات بعد
      </h3>
      <p className="text-gray-600 mb-8 text-center max-w-md leading-relaxed">
        ابدأ رحلتك التجارية بإضافة منتجاتك الأولى وجذب المزيد من العملاء
      </p>
      <AddProduct />
    </div>
  );
}
