import { ResponsiveModal } from "@/components/ResponsiveModal";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import DealDetails from "./DealDetails";

export default function OrderDetails({ deal }: { deal: ISupplierDeal }) {
  return (
    <ResponsiveModal
      trigger={
        <Button variant="gradient-lime" className="w-fit">
          <Info />
        </Button>
      }
      maxWidth="xl"
      height="90vh"
      scrollable={true}>
      <DealDetails deal={deal} />
    </ResponsiveModal>
  );
}
