"use client";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProductsForm from "@/components/forms/products-form/ProductsForm";
import { ResponsiveModal } from "@/components/ResponsiveModal";

export function AddProduct() {
  return (
    <ResponsiveModal

      trigger={
        <Button variant="gradient-indigo">
          <Plus className="w-4 h-4 mr-2" />
          منتج جديد
        </Button>
      }
      description="إضافة منتج جديد إلى المتجر"
      title="إضافة منتج جديد"
      maxWidth="xl"
      height="90vh"
      scrollable={true}
    >
      <ProductsForm />
    </ResponsiveModal>
  );
}