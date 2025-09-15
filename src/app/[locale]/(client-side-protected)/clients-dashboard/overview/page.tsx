import OrdersStats from "@/components/client-dashboard/OrdersStats";
import ClientDealsTable from "@/components/tables/client-deals-table/ClientDealsTable";



export default function ClientDashboard() {


  return (
    <div className="min-h-screen flex flex-col gap-6   animate-fade-in p-6" >
      <OrdersStats/>
      <ClientDealsTable />
      
    </div>
  );
}