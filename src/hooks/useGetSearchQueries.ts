import { useMemo } from "react";
import { useSearchParams } from "next/navigation";

export default function useGetSearchQueries(base: string) {
  const searchParams = useSearchParams();

  const res = useMemo(() => {
    const filters: Record<string, string> = {};
    let page = 1;

    searchParams.forEach((value, key) => {
      if (key.startsWith(`${base}-`)) {
        const filterKey = key.replace(`${base}-`, "");
        filters[filterKey] = value;

        if (filterKey === "page") {
          page = Number(value) || 1;
        }
      }
    });

    return { filters, page };
  }, [searchParams, base]);

  return res;
}
