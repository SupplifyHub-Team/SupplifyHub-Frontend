import { getCategories } from "@/services/categoriesServices";
import useInfinite from "../useInfinite";

export default function useGetCategories({
  initialData,
}: { initialData?: IPaginatedResponse<ICategory> } = {}) {
  return useInfinite<ICategory>({
    fetchFn: (page) => getCategories({ page }),
    queryKey: ["categories"],
    initialData,
  });
}
