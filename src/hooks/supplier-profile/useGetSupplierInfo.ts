import { getSupplierInfo } from "@/services/accountSettingServices";
import useAuth from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";

export default function useGetSupplierInfo() {
  const id = useAuth((state) => state.user?.id);
  return useQuery({
    queryKey: ["supplier", id],
    queryFn: () => getSupplierInfo(id as number),
  });
}
