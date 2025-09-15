import { getSuppliers } from "@/services/suppliersServices";
import useGetSearchQueries from "../useGetSearchQueries";
import useInfinite from "../useInfinite";
import { SUPPLIERS_BASE_KEY } from "@/lib/constants";

export default function useGetSuppliers({
  initialData,
}: {
  initialData?: IPaginatedResponse<ISupplier>;
}) {
  const searchQueries = useGetSearchQueries(SUPPLIERS_BASE_KEY).filters;

  return useInfinite<ISupplier>({
    fetchFn: (page) => getSuppliers({ ...searchQueries, page }),
    queryKey: [SUPPLIERS_BASE_KEY, searchQueries],
    initialData,
  });
}
