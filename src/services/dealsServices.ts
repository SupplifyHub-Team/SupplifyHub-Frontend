import api from "@/lib/axios";

import { handleApiError } from "@/utils/handleApiError";

export async function getSupplierDeals() {
  try {
    const res = await api.get<IApiResponse<ISupplierDeal[]>>(`/supplier/deals`);
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
