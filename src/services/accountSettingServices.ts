import api from "@/lib/axios";
import { fetchData } from "@/lib/fetchApi";
import { editSupplierInfoSchemaOutput } from "@/schemas/accountSettingSchema";
import { IAccountInfoPatchResponse, ISupplierInfo } from "@/types/supplier";
import { handleApiError } from "@/utils/handleApiError";

// fetch supplier info function
export async function getSupplierInfo(supplierId: number) {
  try {
    const response = await fetchData<IApiResponse<ISupplierInfo>>(
      `/supplier-info/${supplierId}`,
      {
        cache: "force-cache",
        next: { revalidate: 3600 },
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

// function to patch supplier info
export async function patchSupplierInfo(
  id: number | string,
  data: editSupplierInfoSchemaOutput,
) {
  try {
    const response = await api.patch<IAccountInfoPatchResponse>(
      `/supplier/supplier-info/${id}`,
      data,
    );
    return response?.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function patchSupplierLogo(id: number, file: string | File) {
  const formData = new FormData();
  formData.append("logo", file);

  const { data } = await api.patch(`/supplier/supplier-logo/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}
