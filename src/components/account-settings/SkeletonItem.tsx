import { cn } from "@/lib/utils";

interface SkeletonItemProps {
  className?: string;
}

export default function SkeletonItem({ className }: SkeletonItemProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-2xl",
        "animate-[shimmer_1.5s_ease-in-out_infinite]",
        className
      )}
    />
  );
}

// Add this to your globals.css
/*
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
*/
