import { AreYouSureDeleteing } from "@/components/AreYouSureDeleteing";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useClientCancelDeal from "@/hooks/deals/clients/useClientCancelDeal";
import { EllipsisVertical, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
export default function ClientDealActions({
  deal,
}: {
  deal: IGetOrderResponse;
}) {
  const { mutate: cancelDeal } = useClientCancelDeal();

  return (
    <Popover>
      <PopoverTrigger>
        {" "}
        <Button variant="ghost">
          <EllipsisVertical />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 flex flex-col gap-4"></PopoverContent>
    </Popover>
  );
}
