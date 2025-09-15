"use client";

import useGetSupplierDeals from "@/hooks/deals/useGetSupplierDeals";
import ReusableTable from "@/components/reusable-table/ReusableTable";
import { SUPPLIER_DEALS_TABLE_NAME } from "@/lib/constants";
import SupplierDealsTableRow from "./SupplierDealsTableRow";

const TABLE_HEADERS: string[] = [
  "رقم الصفقة",
  "معلومات الشركة",
  "تفاصيل الصفقة",
  "شخص الاتصال",
  "حالة الصفقة", 
  "الاجراءات",
];

export default function SupplierDealsTable() {
  const { data, isPending } = useGetSupplierDeals();

  return (
    <div className="space-y-6">
      <ReusableTable
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: data?.data.length || 0,
          name: SUPPLIER_DEALS_TABLE_NAME,
          totalPages: 1,
        }}
        data={data?.data || []}
        isPending={isPending}
        renderRow={(deal) => (
          <SupplierDealsTableRow deal={deal} key={deal.dealId} />
        )}

        height={80}
      />
    </div>
  );
}