"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { AlertTriangle, Check, Info, X } from "lucide-react";
import { useState } from "react";
import Spinner from "./ui/spinner";

export function AreYouSure({
  onAccept,
  TriggerButton,
  description,
  title,
  isLoading = false,
}: {
  onAccept: () => void;
  TriggerButton?: React.ReactNode;
  title?: string;
  description?: string;
  isLoading?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleAccept = () => {
    onAccept();
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const t = title || "تاكيد";
  const d = description || "هل انت متاكد من هذا الاجراء؟";
  const b = TriggerButton || <Button>تاكيد</Button>;

  // Desktop Dialog
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{b}</DialogTrigger>
        <DialogContent className="sm:max-w-md" dir="rtl">
          <DialogHeader className="text-center space-y-4">
            {/* Warning Icon */}
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
              <Info className="w-8 h-8 " />
            </div>

            <DialogTitle className="text-xl font-bold text-gray-900 text-center!">
              {t}
            </DialogTitle>

            <DialogDescription className="text-gray-600 text-base leading-relaxed text-center!">
              {d}
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={isLoading}
              className="flex-1 sm:flex-none">
              <X className="w-4 h-4 mr-2" />
              إلغاء
            </Button>

            <Button onClick={handleAccept} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner />
                  جاري التحميل...
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  نعم، متأكد
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
  }

  // Mobile Drawer
  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{b}</DrawerTrigger>
      <DrawerContent dir="rtl">
        <DrawerHeader className="text-center space-y-4 pb-6">
          {/* Warning Icon */}
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 " />
          </div>

          <DrawerTitle className="text-xl font-bold text-gray-900 text-center!">
            {t}
          </DrawerTitle>

          <DrawerDescription className="text-gray-600 text-base leading-relaxed px-4 text-center">
            {d}
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 pb-6">
          <DrawerFooter className="px-0 pt-0">
            <div className="flex flex-col gap-3">
              <Button onClick={handleAccept} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Spinner />
                    جاري التحميل...
                  </>
                ) : (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    نعم، متأكد
                  </>
                )}
              </Button>

              <DrawerClose asChild>
                <Button
                  variant="outline"
                  disabled={isLoading}
                  className="w-full py-3 rounded-xl">
                  <X className="w-4 h-4 mr-2" />
                  إلغاء
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
