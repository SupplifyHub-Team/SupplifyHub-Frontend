import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon, X } from "lucide-react";
import SuppliersFilters from "./SuppliersFilters";
export default function SuppliersFiltersSheet() {
  let Icon = <MenuIcon />;

  return (
    <Sheet
      onOpenChange={(open) => {
        Icon = open ? <X /> : <MenuIcon />;
      }}
    >
      <SheetTrigger asChild>
        <Button>{Icon}</Button>
      </SheetTrigger>
      <SheetContent side="bottom" className=" overflow-auto">
        <SheetHeader>
          <SheetTitle className="sr-only">Are you absolutely sure?</SheetTitle>
          <SheetDescription className="sr-only">
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
          <SuppliersFilters />
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
