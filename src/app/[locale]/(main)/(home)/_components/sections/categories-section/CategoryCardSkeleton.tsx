import React from "react";

export default function CategoryCardSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-2 p-2 bg-white rounded-lg shadow-md animate-pulse h-full text-center">
      <div className="rounded-full bg-gray-200 w-24 h-24 mb-2"></div>
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-1"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>
    </div>
  );
}
