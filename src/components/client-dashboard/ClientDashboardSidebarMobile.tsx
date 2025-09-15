import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { SquareMenu } from "lucide-react";
import ClientDashboardSidebar from "./ClientDashboardSidebar";
export default function ClientDashboardSidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button>
          <SquareMenu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-w-xs">
        <SheetHeader>
          <SheetTitle className="sr-only">
            قائمة جانبية للتنقل في لوحة تحكم العملاء
          </SheetTitle>
          <SheetDescription className="sr-only">
            استخدم هذه القائمة للتنقل بين أقسام لوحة التحكم الخاصة بك.
          </SheetDescription>
        </SheetHeader>
        <ClientDashboardSidebar />
      </SheetContent>
    </Sheet>
  );
}
