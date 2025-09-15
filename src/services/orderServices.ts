import api from "@/lib/axios";
import { CompleteOrderOutput } from "@/schemas/orderSchema";
import { handleApiError } from "@/utils/handleApiError";

export async function postOrderService(data: CompleteOrderOutput) {
  try {
    const response = await api.post<IApiResponse<IPostOrderResponse>>(
      "/order",
      data
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function getClientDeals() {
  try {
    const response = await api.get<IApiResponse<IGetOrderResponse[]>>(
      "/client/deals"
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function clientCancelDeal({ id }: { id: string | number }) {
  try {
    const response = await api.patch<IApiResponse<{ message: string }>>(
      `/client/cancel-order/${id}`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function clientConfirmDeal({ id }: { id: string | number }) {
  try {
    const response = await api.patch<IApiResponse<{ message: string }>>(
      `/client/cancel-order/${id}`
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
