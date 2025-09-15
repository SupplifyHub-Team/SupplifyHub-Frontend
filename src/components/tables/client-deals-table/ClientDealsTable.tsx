"use client";

import ReusableTable from "@/components/reusable-table/ReusableTable";
import { CLIENT_DEALS_TABLE_NAME } from "@/lib/constants";
import ClientDealsTableRow from "./ClientDealsTableRow";
import useGetClientDeals from "@/hooks/deals/clients/useGetClientDeals";

const TABLE_HEADERS: string[] = [
  "رقم الصفقة",
  "تفاصيل الصفقة",
  "شخص الاتصال",
  "حالة الصفقة",
  "الاجراءت",
];

export default function ClientDealsTable() {
  const { data, isPending } = useGetClientDeals();

  return (
    <div className="space-y-6">
      <ReusableTable
        headers={TABLE_HEADERS}
        paginationProps={{
          totalItems: data?.data.length || 0,
          name: CLIENT_DEALS_TABLE_NAME,
          totalPages: 1,
        }}
        data={data?.data || []}
        isPending={isPending}
        renderRow={(deal) => (
          <ClientDealsTableRow deal={deal} key={deal.orderId} />
        )}
        height={80}
      />
    </div>
  );
}
