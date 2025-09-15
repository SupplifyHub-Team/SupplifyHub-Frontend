"use client";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveModal } from "@/components/ResponsiveModal";
import SupplierProductQuotaForm from "@/components/forms/supplier-quotas/SupplierProductQuotaForm";

export function IncreaseProductQuota() {
  return (
    <ResponsiveModal
      trigger={
        <Button variant="gradient-indigo">
          <Plus className="w-4 h-4 mr-2" />
          زيادة باقة المنتجات
        </Button>
      }
      description="إضافة منتج جديد إلى المتجر"
      title="إضافة منتج جديد"
      maxWidth="xl"
      height="auto"
      scrollable={true}
    >
      <SupplierProductQuotaForm />
    </ResponsiveModal>
  );
}