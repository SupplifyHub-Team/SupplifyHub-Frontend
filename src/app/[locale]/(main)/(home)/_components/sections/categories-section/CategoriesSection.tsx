"use client";

import CategoryCard from "./CategoryCard";
import useGetCategories from "@/hooks/categories/useGetCategories";
import CategoryCardSkeleton from "./CategoryCardSkeleton";
interface CategoriesSectionProps {
  initialCategories?: IPaginatedResponse<ICategory>;
}

export default function CategoriesSection({
  initialCategories,
}: CategoriesSectionProps) {
  const { data, ref, isPending, isFetching, hasNextPage } = useGetCategories({
    initialData: initialCategories,
  });

  const allCategories = data?.pages.flatMap((page) => page.data) || [];

  return (
    <div className="px-4 pb-20">
      {allCategories.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {allCategories.map((category, i) => (
            <div
              key={category.categoryId}
              ref={i === allCategories.length - 1 && hasNextPage ? ref : null}
              className="transition-all duration-300 ease-in-out hover:scale-105 animate-fade-in"
            >
              <CategoryCard category={category} />
            </div>
          ))}
          {(isPending || isFetching) && <CategoryCardSkeleton />}
        </div>
      )}

      {!isPending && !isFetching && allCategories.length === 0 && (
        <div className="col-span-full text-center py-10">
          <p className="text-gray-500">لا توجد فئات متاحة حاليا</p>
        </div>
      )}
    </div>
  );
}
