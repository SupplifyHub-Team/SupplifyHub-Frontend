import api from "@/lib/axios";
import { fetchData } from "@/lib/fetchApi";
import { handleApiError } from "@/utils/handleApiError";

export async function fetchPlans() {
  try {
    const res = await fetchData<IApiResponse<IPlan[]>>("/plans", {
      method: "GET",
      next: {
        revalidate: 3600,
        tags: ["plans"],
      },
      cache: "force-cache",
    });
    return res;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function subscribeToPlan(planId: string | number) {
  try {
    const res = await api.post<IApiResponse<{ message: string }>>(
      `/supplier/subscribe/${planId}`
    );
    return res;
  } catch (error) {
    throw handleApiError(error);
  }
}

// funcation to get plans
