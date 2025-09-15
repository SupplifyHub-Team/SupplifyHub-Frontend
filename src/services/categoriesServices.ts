import api from "@/lib/axios";
import { CATEGORIES_PAGE_SIZE } from "@/lib/constants";
import { fetchData } from "@/lib/fetchApi";
import { handleApiError } from "@/utils/handleApiError";

export async function getCategories(params?: ICategoryFilters) {
  try {
    const response = await api.get<IPaginatedResponse<ICategory>>(
      "/categories",
      {
        params: {
          ...params,
          pageSize: CATEGORIES_PAGE_SIZE,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function getCategoriesServer(params?: ICategoryFilters) {
  try {
    const response = await fetchData<IPaginatedResponse<ICategory>>(
      "/categories?pageSize=" + 100000,
      {
        method: "GET",
        cache: "force-cache",
        next: { revalidate: 60 * 60 },
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function postSuggestCategory(data: { name: string }) {
  try {
    const response = await api.post<
      IApiResponse<{
        message: string;
      }>
    >("/categories/suggest", data);
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
