import api from "@/lib/axios";

import { handleApiError } from "@/utils/handleApiError";

export async function getSupplierSelfProducts() {
  try {
    const res = await api.get<IApiResponse<ISelfProduct[]>>(
      `/supplier/products`
    );
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function postProduct(data: FormData) {
  try {
    const res = await api.post(`/supplier/product`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function deleteProduct({ id }: { id: string | number }) {
  try {
    const res = await api.delete(`/supplier/product`, {
      params: {
        productId: id,
      },
    });
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
