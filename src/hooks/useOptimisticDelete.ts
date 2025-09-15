import { useMutation, useQueryClient, QueryKey } from "@tanstack/react-query";
import { toast } from "sonner";

// Helpers for paginated and non-paginated types
type MaybePaginated<T> = T[] | { pages: { data: T[] }[] };

interface OptimisticDeleteConfig<TData, TId> {
  deleteFn: (id: TId) => Promise<unknown>;
  queryKey: QueryKey;
  matcher: (item: TData, id: TId) => boolean;
  messages?: {
    success?: string;
    error?: string;
  };
}

export default function useOptimisticDelete<TData, TId>({
  deleteFn,
  queryKey,
  matcher,
  messages = {
    success: "تم الحذف بنجاح",
    error: "حدث خطأ في الحذف",
  },
}: OptimisticDeleteConfig<TData, TId>) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteFn,

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey });

      const previousData =
        queryClient.getQueryData<MaybePaginated<TData>>(queryKey);

      // Handle paginated data (infinite queries)
      if (isPaginated(previousData)) {
        queryClient.setQueryData(queryKey, {
          ...previousData,
          pages: previousData.pages.map((page) => ({
            ...page,
            data: page.data.filter((item) => !matcher(item, id)),
          })),
        });
      }

      // Handle flat array (normal query)
      else if (Array.isArray(previousData)) {
        queryClient.setQueryData(
          queryKey,
          previousData.filter((item) => !matcher(item, id)),
        );
      }

      return { previousData };
    },

    onSuccess: (_, id) => {
      toast.success(messages.success);
      queryClient.invalidateQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey: ["plansStatistics"] });
    },

    onError: (error, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(queryKey, context.previousData);
      }
      toast.error(error instanceof Error ? error.message : messages.error);
    },
  });
}

// Type guard
function isPaginated<T>(data: unknown): data is { pages: { data: T[] }[] } {
  return (
    typeof data === "object" &&
    data !== null &&
    "pages" in data &&
    Array.isArray((data as { pages?: unknown }).pages)
  );
}
