import api from "@/lib/axios";
import { handleApiError } from "@/utils/handleApiError";
import { AxiosResponse } from "axios";

export async function forgotPasswordService(data: { email: string }) {
  try {
    const response: AxiosResponse<string> = await api.get(
      `/reset-password/${data.email}`,
      { responseType: "text" }
    );
    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
}

export async function resetPasswordService(data: {
  newPassword: string;
  token: string;
}) {
  try {
    const response = await api.post<IApiResponse<IForgotPasswordResponse>>(
      `/reset-password`,
      data
    );
    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
}

export async function loginService(data: {
  email: string;
  password: string;
  rememberMe: boolean | string;
}) {
  try {
    const response = await api.post<ILoginResponse>("/login", data);
    return response.data;
  } catch (err) {
    throw handleApiError(err);
  }
}

export async function registerService(data: FormData) {
  try {
    const res = await api.post<IApiResponse<IRegisterResponse>>(
      "/register",
      data
    );
    return res.data;
  } catch (error) {
    throw handleApiError(error);
  }
}

export async function refreshToken() {
  try {
    const response = await api.post<IRefreshResponse>("/refresh");
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
