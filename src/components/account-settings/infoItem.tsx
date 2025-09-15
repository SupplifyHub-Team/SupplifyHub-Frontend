import { Skeleton } from "@/components/ui/skeleton";

interface InfoItemProps {
  label: string;
  value?: string | number | null;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export default function InfoItem({
  label,
  value,
  icon,
  isLoading,
}: InfoItemProps) {
  if (isLoading) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="w-6 h-6 rounded-md" />
        <div className="flex-1">
          <Skeleton className="w-3/4 h-4 mb-1" />
          <Skeleton className="w-1/2 h-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1 text-sm">
      <p className="flex items-center gap-2 text-gray-500">
        {icon}
        <span>{label}</span>
      </p>
      <p className="rounded-md p-1 font-medium text-gray-900">
        {value ?? "N/A"}
      </p>
    </div>
  );
}
