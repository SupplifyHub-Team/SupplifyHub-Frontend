export function SupplierSkeletonCard() {
  return (
    <div className="relative  bg-white rounded-3xl shadow-xl border border-gray-100 animate-pulse overflow-hidden">
      <div className="h-2 bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400" />
      <div className="p-6 flex flex-col items-center">
        {/* Logo skeleton */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-indigo-200 mb-4" />
        {/* Company name */}
        <div className="h-5 w-32 bg-gray-200 rounded mb-2" />
        {/* Username */}
        <div className="h-4 w-20 bg-gray-100 rounded mb-3" />
        {/* Categories */}
        <div className="flex gap-2 mb-3">
          <div className="h-4 w-12 bg-indigo-100 rounded-full" />
          <div className="h-4 w-10 bg-indigo-100 rounded-full" />
          <div className="h-4 w-8 bg-indigo-100 rounded-full" />
        </div>
        {/* Location */}
        <div className="h-4 w-40 bg-gray-100 rounded mb-3" />
        {/* Email & phone */}
        <div className="h-4 w-36 bg-gray-100 rounded mb-2" />
        <div className="h-4 w-28 bg-gray-100 rounded mb-4" />
        {/* Join date */}
        <div className="h-3 w-24 bg-gray-100 rounded mb-4" />
        {/* Button */}
        <div className="h-10 w-full bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-300 rounded-xl" />
      </div>
    </div>
  );
}

export default function SupplierSkeletons({ count = 3 }: { count?: number }) {
  return Array.from({ length: count }).map((_, i) => (
    <SupplierSkeletonCard key={i} />
  ));
}
