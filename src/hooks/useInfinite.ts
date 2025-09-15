import { InfiniteData, useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export interface IInfiniteQueryOptions<T> {
  queryKey: unknown[];
  fetchFn: (
    page: number,
    options?: { signal?: AbortSignal },
  ) => Promise<IPaginatedResponse<T>>;
  refetchInterval?: number;
  enabled?: boolean;
  initialData?: IPaginatedResponse<T>;
}

function useInfinite<T>({
  queryKey,
  fetchFn,
  refetchInterval,
  enabled = true,
  initialData,
}: IInfiniteQueryOptions<T>) {
  const result = useInfiniteQuery<
    IPaginatedResponse<T>,
    IErrorResponse,
    InfiniteData<IPaginatedResponse<T>>,
    typeof queryKey,
    number
  >({
    queryKey,
    refetchInterval,
    queryFn: ({ pageParam = 1, signal }) => fetchFn(pageParam, { signal }),
    getNextPageParam: (lastPage, _, lastPageParam) => {
      const nextPage =
        lastPage.meta.currentPage < lastPage.meta.totalPages
          ? lastPage.meta.currentPage + 1
          : undefined;
      return nextPage;
    },
    initialPageParam: 1,
    enabled,
    ...(initialData && {
      initialData: {
        pages: [initialData],
        pageParams: [1],
      },
    }),
  });

  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView && result.hasNextPage && !result.isFetchingNextPage) {
      result.fetchNextPage();
    }
  }, [
    inView,
    result.hasNextPage,
    result.isFetchingNextPage,
    result.fetchNextPage,
    result,
  ]);
  return {
    ...result,
    ref,
  };
}

export default useInfinite;
