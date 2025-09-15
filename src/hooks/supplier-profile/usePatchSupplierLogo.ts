import { patchSupplierLogo } from "@/services/accountSettingServices";
import useAuth from "@/store/authStore";
import useOptimisticUpdate from "../useOptimisticUpdate";

export default function usePatchSupplierLogo() {
  const id = useAuth((state) => state.user?.id);

  return useOptimisticUpdate<IAccountLogoPatchResponse, File>({
    updateFn: (file) => patchSupplierLogo(Number(id), file),
    queryKey: ["supplier", Number(id)],
    messages: {
      success: "تم تحديث شعار شركتك بنجاح",
      error: "حدث خطأ أثناء تحديث شعار شركتك",
    },
    matcher: (supplier) => supplier.id === Number(id),
    updater: (supplier, fileResponse) => {
      const fileUrl = URL.createObjectURL(fileResponse);
      return {
        ...supplier,
        logoUrl: fileUrl ?? null,
      };
    },
  });
}
