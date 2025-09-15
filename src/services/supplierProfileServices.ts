import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";

export async function getSupplierProfile() {
  try {
    const res = await api.get<IApiResponse<ISupplierProfile>>(`/supplier/profile`);
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
