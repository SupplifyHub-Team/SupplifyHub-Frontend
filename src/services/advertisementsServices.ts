import api from "@/lib/axios";
import { fetchData } from "@/lib/fetchApi";
import { buildQueryString } from "@/lib/utils";
import { handleApiError } from "@/utils/handleApiError";

export async function fetchAdvertisements(searchParams?: {
  userId: string | number;
}) {
  const query = buildQueryString(searchParams);
  try {
    const response = await fetchData<IApiResponse<IAdvertisement[]>>(
      "/advertisment-client?" + query,
      {
        next: {
          revalidate: 3600,
          tags: ["advertisements"],
        },
        cache: "force-cache",
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function postAdvertisements(data: FormData) {
  try {
    const response = await api.post<IApiResponse<IPostAdvertisement>>(
      "/supplier/advertisement",
      data
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
