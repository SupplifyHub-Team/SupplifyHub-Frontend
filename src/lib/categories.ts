import { queryClient } from "@/providers/ReactQueryProvider";
import { InfiniteData } from "@tanstack/react-query";

export const allCachedCategories = () => {
  const cachedCats = queryClient
    .getQueryCache()
    .findAll({ queryKey: ["categories"] })
    .map(
      (query) => query.state.data as InfiniteData<IPaginatedResponse<ICategory>>
    )
    .filter(Boolean);

  return (
    cachedCats.flatMap((cache) => cache.pages.flatMap((page) => page.data)) ??
    []
  );
};
