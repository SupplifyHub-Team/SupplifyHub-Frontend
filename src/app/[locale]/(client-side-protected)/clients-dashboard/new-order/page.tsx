import { OrdersFormV2 } from "@/components/forms/orders-form/OrdersFormV2";



export default function ClientDashboard() {


  return (
    <div className="min-h-screen flex flex-col gap-6   animate-fade-in p-6" >
      <OrdersFormV2/>
      
    </div>
  );
}