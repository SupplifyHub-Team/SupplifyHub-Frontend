import { fetchData } from "@/lib/fetchApi";
import { buildQueryString } from "@/lib/utils";
import { handleApiError } from "@/utils/handleApiError";

export async function fetchBlogsCards({
  page = 1,
  pageSize = 1000,
}: {
  page?: number;
  pageSize?: number;
} = {}) {
  const query = buildQueryString({
    page,
    pageSize,
  });
  try {
    const response = await fetchData<IPaginatedResponse<IBlogCard>>(
      "/posts?" + query,
      {
        next: {
          revalidate: 3600,
          tags: ["blogs"],
        },
        cache: "force-cache",
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
export async function fetchBlogPost({ slug }: { slug: string }) {
  const query = buildQueryString({
    slug,
  });
  try {
    const response = await fetchData<IApiResponse<IBlogPost>>(
      "/post?" + query,
      {
        next: {
          revalidate: process.env.NODE_ENV === "development" ? 0 : 3600,
          tags: ["blog-post", slug],
        },
        cache: "force-cache",
      }
    );
    return response.data;
  } catch (error) {
    throw handleApiError(error);
  }
}
