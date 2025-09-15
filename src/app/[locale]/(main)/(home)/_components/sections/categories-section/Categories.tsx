"use client";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { ArrowLeft, Building2, Globe, Users } from "lucide-react";
import Image from "next/image";

function Categories({ categories }: { categories: ICategory[] }) {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto" dir="rtl">
      {/* Minimal Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          ابحث في مجموعة متنوعة من التصنيفات للوصول إلى الموردين المناسبين
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          ابحث في مجموعة متنوعة من التصنيفات للوصول إلى الموردين وعروض الأسعار
          المناسبة
        </p>
      </div>

      {/* Clean Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.categoryId}
            href={`/suppliers?suppliers-category=${category.categoryId}`}
          >
            <div className="group cursor-pointer">
              {/* Card Container */}
              <div
                className="
              bg-white rounded-2xl border border-slate-100/50
              transition-all duration-300 ease-out
              hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]
              hover:scale-[1.02]
              hover:border-indigo-200/50
              h-full overflow-hidden
            "
              >
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden">
                  {category.imageURL ? (
                    <Image
                      src={category.imageURL}
                      alt={category.categoryName}
                      className="
                      w-full h-full object-cover
                      transition-transform duration-500
                      group-hover:scale-110
                    "
                      loading="lazy"
                      fill
                    />
                  ) : (
                    <div
                      className="
                    w-full h-full 
                    bg-gradient-to-br from-slate-50 to-slate-100
                    flex items-center justify-center
                    transition-all duration-300
                    group-hover:from-indigo-50 group-hover:to-purple-50
                  "
                    >
                      <Globe />
                    </div>
                  )}

                  {/* Subtle Overlay */}
                  <div
                    className="
                  absolute inset-0 
                  bg-gradient-to-t from-black/5 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
                  />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Category Name */}
                  <h3
                    className="
                  text-lg font-bold text-slate-900 mb-4
                 
                  line-clamp-2 leading-snug
                  group-hover:text-indigo-700
                  transition-colors duration-200
                "
                  >
                    {category.categoryName}
                  </h3>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="p-1.5 bg-indigo-50 rounded-lg text-indigo-600">
                        <Building2 />
                      </div>
                      <span className="font-medium">
                        {category.numberOfAssociatedSuppliers.toLocaleString()}{" "}
                        مورد
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="p-1.5 bg-purple-50 rounded-lg text-purple-600">
                        <Users />
                      </div>
                      <span className="font-medium">
                        {category.numberOfAssociatedClients.toLocaleString()}{" "}
                        عميل
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <p className="text-slate-600 mb-6">لم تجد ما تبحث عنه؟</p>
        <Link href="/suppliers">
          <Button variant="gradient-indigo">
            <span>تصفح جميع الموردين</span>
            <ArrowLeft />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Categories;
