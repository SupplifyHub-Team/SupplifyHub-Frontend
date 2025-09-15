// "use client";

// import { getCategories } from "@/services/categoriesServices";
// import { useQuery } from "@tanstack/react-query";

// export default function useGetCategories(page: number = 1) {
//   return useQuery<IApiResponse<ICategory[]>, IErrorResponse>({
//     queryKey: ["categories", page],
//     queryFn: getCategories,
//     staleTime: 5 * 60 * 1000,
//   });
// }
