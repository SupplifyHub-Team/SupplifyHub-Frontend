"use client";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ReactNode, useState } from "react";

interface ResponsiveModalProps {
  trigger: ReactNode;

  title?: string;
  description?: string;
  children: ReactNode;

  open?: boolean;
  onOpenChange?: (open: boolean) => void;

  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "fit";
  height?: "auto" | "90vh" | "80vh" | "70vh" | "full";
  scrollable?: boolean;

  dir?: "rtl" | "ltr";
}

export function ResponsiveModal({
  trigger,
  title,
  description,
  children,
  open: controlledOpen,
  onOpenChange: controlledOnOpenChange,
  maxWidth = "fit",
  height = "90vh",
  scrollable = true,
  dir = "rtl",
}: ResponsiveModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
  const onOpenChange = controlledOnOpenChange || setInternalOpen;

  const getMaxWidthClass = () => {
    const widthMap = {
      "sm": "sm:max-w-sm",
      "md": "sm:max-w-md",
      "lg": "sm:max-w-lg",
      "xl": "sm:max-w-xl",
      "2xl": "sm:max-w-2xl",
      "fit": "w-fit max-w-[90vw]",
    };
    return widthMap[maxWidth];
  };

  const getHeightClass = () => {
    const heightMap = {
      "auto": "h-auto",
      "90vh": "h-[90dvh]",
      "80vh": "h-[80dvh]",
      "70vh": "h-[70dvh]",
      "full": "h-full",
    };
    return heightMap[height];
  };


  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          className={`${getMaxWidthClass()} ${
            scrollable ? `${getHeightClass()} overflow-auto` : ""
          }`}
          dir={dir}>
          <DialogHeader>
            <DialogTitle className="text-center sr-only">{title}</DialogTitle>
            {description && (
              <DialogDescription className="text-center sr-only">
                {description}
              </DialogDescription>
            )}
          </DialogHeader>

          <div className={scrollable ? "flex-1 overflow-y-auto" : ""}>
            {children}
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent dir={dir}>
        <div
          className={`flex flex-col ${getHeightClass()} ${
            scrollable ? "overflow-y-auto" : ""
          }`}>
          <DrawerHeader className="shrink-0">
            <DrawerTitle className="sr-only">{title}</DrawerTitle>
            {description && (
              <DrawerDescription className="sr-only">
                {description}
              </DrawerDescription>
            )}
          </DrawerHeader>

          <div
            className={`${
              scrollable ? "flex-1 overflow-y-auto px-4" : "px-4"
            }`}>
            {children}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
