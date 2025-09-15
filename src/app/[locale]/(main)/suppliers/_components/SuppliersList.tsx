import useGetSuppliers from "@/hooks/suppliers/useGetSuppliers";
import EmptySuppliersList from "./EmptySuppliersList";
import SupplierSkeletons from "./SupplierSkeletonCard";
import SuppliersListError from "./SuppliersListError";
import SupplierCardV2 from "./SupplierCard";
import LoadingMore from "@/components/LoadingMore";

export default function SuppliersList({
  initialSuppliers,
}: {
  initialSuppliers?: IPaginatedResponse<ISupplier>;
}) {
  const {
    data: suppliers,
    ref,
    isPending,
    isFetching,
    isError,
    refetch,
  } = useGetSuppliers({ initialData: initialSuppliers });

  const allSuppliers = suppliers?.pages.flatMap((page) => page.data) || [];

  if (isError) {
    return <SuppliersListError onRetry={refetch} />;
  }

  return (
    <div className="relative">
      {/* Results Count */}
      {allSuppliers && allSuppliers.length > 0 ? (
        <div className=" grid grid-cols-1 md:grid-cols-2  gap-6 p-4">
          {allSuppliers.map((supplier, i) => (
            <div
              key={`${supplier.id}-${i}`}
              ref={i === allSuppliers.length - 1 ? ref : null}
              className="h-full animate-slide-up"
            >
              <SupplierCardV2 supplier={supplier} />
            </div>
          ))}

          {/* Loading More Indicator */}
          {(isPending || isFetching) && <LoadingMore />}
        </div>
      ) : !isPending ? (
        <EmptySuppliersList />
      ) : null}

      {isPending && allSuppliers.length === 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4 ">
          <SupplierSkeletons count={3} />
        </div>
      )}
    </div>
  );
}
