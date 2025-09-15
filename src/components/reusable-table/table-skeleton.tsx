import { TableCell, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface TableSkeletonProps
  extends React.HTMLAttributes<HTMLTableCellElement> {
  rows?: number;
  cells?: number;
  cellWidths?: string[];
  className?: string;
}

export default function TableSkeleton({
  rows = 5,
  cells = 4,
  className,
  ...props
}: TableSkeletonProps) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {Array.from({ length: cells }).map((_, cellIndex) => (
            <TableCell {...props} key={cellIndex} className={className}>
              <div className="flex flex-col gap-1">
                <Skeleton className={cn(`h-4 w-full}`)} />
              </div>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
}
