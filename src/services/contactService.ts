import api from "@/lib/axios";
import { contactSchema } from "@/schemas/contactSchema";
import { handleApiError } from "@/utils/handleApiError";

export async function postContactService(data: contactSchema) {
  try {
    const response = await api.post<IApiResponse<{
        message:string
    }>>(
      "/contact",
      data
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}


