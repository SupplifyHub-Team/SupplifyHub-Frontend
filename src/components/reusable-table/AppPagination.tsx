import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TABLE_ROWS } from "@/lib/constants";
import { usePagination } from "@/hooks/usePagination";

interface AppPaginationProps {
  name: string;
  totalPages: number;
  totalItems: number;
}

export default function AppPagination({
  name,
  totalPages,
  totalItems,
}: AppPaginationProps) {
  const [page, setPage] = usePagination(name);

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const page = parseInt(value);

    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      setPage(page);
    }
  };

  const startItem = (page - 1) * TABLE_ROWS + 1;
  const endItem = Math.min(page * TABLE_ROWS, totalItems);

  return (
    <div className="flex  px-2 gap-3 items-center justify-between">
      <div className="flex  gap-2 items-center">
        <Pagination>
          <PaginationContent className="gap-2">
            <PaginationItem>
              <Button
                size="icon"
                onClick={() => setPage(page - 1)}
                disabled={page <= 1}
                className="h-8 w-8 bg-primary">
                <ChevronRight className="h-4 w-4 text-white" />
              </Button>
            </PaginationItem>

            <PaginationItem>
              <label htmlFor={`page-input-${name}`} className="sr-only">
                Page {name}
              </label>
              <Input
                min={1}
                max={totalPages}
                value={page}
                onChange={handlePageInput}
                className="w-[5ch] h-8 px-1 text-center"
                id={`page-input-${name}`}
              />
            </PaginationItem>

            <PaginationItem>
              <Button
                size="icon"
                onClick={() => setPage(page + 1)}
                disabled={page >= totalPages}
                className="h-8 w-8 ">
                <ChevronLeft className="h-4 w-4 text-white" />
              </Button>
            </PaginationItem>
          </PaginationContent>
        </Pagination>
        <p className="text-xs text-nowrap">اقصى صفحة : {totalPages}</p>
      </div>
      <div className="text-xs text-muted-foreground">
        عرض {startItem} الى {endItem}
      </div>
    </div>
  );
}
