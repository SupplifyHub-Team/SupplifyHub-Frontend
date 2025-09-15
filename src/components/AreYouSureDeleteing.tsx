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
import { AlertTriangle, Trash2, X } from "lucide-react";
import { useState } from "react";
import Spinner from "./ui/spinner";

export function AreYouSureDeleteing({
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

  const t = title || "تأكيد الحذف";
  const d =
    description ||
    "هذا الإجراء لا يمكن التراجع عنه. سيتم حذف البيانات نهائياً.";
  const b = TriggerButton || <Button>حذف</Button>;

  // Desktop Dialog
  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{b}</DialogTrigger>
        <DialogContent className="sm:max-w-md" dir="rtl">
          <DialogHeader className="text-center space-y-4">
            {/* Warning Icon */}
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>

            <DialogTitle className="text-xl font-bold text-gray-900 text-center!">
              {t}
            </DialogTitle>

            <DialogDescription className="text-gray-600 text-base leading-relaxed text-center!">
              {d}
            </DialogDescription>
          </DialogHeader>

          {/* Warning Message */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-red-800">
                <p className="font-medium mb-1">تحذير!</p>
                <p>هذا الإجراء لا يمكن التراجع عنه.</p>
              </div>
            </div>
          </div>

          <DialogFooter className="grid grid-cols-2 gap-3">
            <Button
              variant="outline"
              onClick={handleCancel}
              disabled={isLoading}
              className="flex-1 sm:flex-none">
              <X className="w-4 h-4 mr-2" />
              إلغاء
            </Button>

            <Button
              onClick={handleAccept}
              disabled={isLoading}
              className="flex-1 sm:flex-none bg-red-600 hover:bg-red-700 text-white">
              {isLoading ? (
                <>
                  <Spinner />
                  جاري الحذف...
                </>
              ) : (
                <>
                  <Trash2 className="w-4 h-4 mr-2" />
                  نعم، احذف
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
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
            <AlertTriangle className="w-8 h-8 text-red-600" />
          </div>

          <DrawerTitle className="text-xl font-bold text-gray-900 text-center!">
            {t}
          </DrawerTitle>

          <DrawerDescription className="text-gray-600 text-base leading-relaxed px-4 text-center">
            {d}
          </DrawerDescription>
        </DrawerHeader>

        <div className="px-4 pb-6">
          {/* Warning Message */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-red-800 text-center">
                <p className="font-medium mb-1">تحذير!</p>
                <p>
                  هذا الإجراء لا يمكن التراجع عنه. سيتم حذف البيانات نهائياً.
                </p>
              </div>
            </div>
          </div>

          <DrawerFooter className="px-0 pt-0">
            <div className="flex flex-col gap-3">
              <Button
                onClick={handleAccept}
                disabled={isLoading}
                className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl">
                {isLoading ? (
                  <>
                    <Spinner />
                    جاري الحذف...
                  </>
                ) : (
                  <>
                    <Trash2 className="w-4 h-4 mr-2" />
                    نعم، احذف
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
