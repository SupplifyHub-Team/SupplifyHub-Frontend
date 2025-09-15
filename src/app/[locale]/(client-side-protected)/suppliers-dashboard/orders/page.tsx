import SupplierDealsTable from "@/components/tables/supplier-deals-table/SupplierDealsTable";
import OrderQuotaSection from "./_components/OrderQuotaSection";

export default function page() {
  return (
    <div className="space-y-8">
      <OrderQuotaSection />

      <SupplierDealsTable />
    </div>
  );
}
