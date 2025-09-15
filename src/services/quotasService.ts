import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";

export async function getSupplierQuotas() {
  try {
    const res = await api.get<IApiResponse<ISupplierQuota>>(`/quota/supplier`);
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function postSupplierProductQuota(data: { amount: number }) {
  try {
    const res = await api.post<IApiResponse<ISupplierQuota>>(
      `/supplier/quota/product`,
      data
    );
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function postSupplierOfferQuota(data: { amount: number }) {
  try {
    const res = await api.post<IApiResponse<ISupplierQuota>>(
      `/supplier/quota/offer`,
      data
    );
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function postSupplierAdsQuota(data: { amount: number }) {
  try {
    const res = await api.post<IApiResponse<ISupplierQuota>>(
      `/supplier/quota/ads`,
      data
    );
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}


