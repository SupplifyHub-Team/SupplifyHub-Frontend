import { useRouter } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";

export function usePagination(table: string): [number, (page: number) => void] {
  const searchParams = useSearchParams();
  const router = useRouter();
  const param = `${table}-page`;
  const page = Number(searchParams.get(param)) || 1;

  const setPage = (next: number) => {
    const updated = new URLSearchParams(searchParams);
    updated.set(param, String(next));
    router.push(`?${updated.toString()}`);
  };

  return [page, setPage];
}
