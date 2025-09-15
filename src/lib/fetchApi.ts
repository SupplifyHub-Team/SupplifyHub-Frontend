import { handleApiError } from "@/utils/handleApiError";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://b2bapp.runasp.net/api";

export async function fetchData<T>(
  url: string,
  options?: RequestInit
): Promise<T> {
  if (url.startsWith("/")) {
    url = `${BASE_URL}${url}`;
  }
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
    },
    ...options,
  });

  if (!res.ok) {
    const error = (await res.json()) as IErrorResponse;
    throw handleApiError(error);
  }

  return res.json();
}
