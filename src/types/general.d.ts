interface IPaginationMeta {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  totalPages: number;
}

interface IPaginatedResponse<T> {
  data: T[];

  meta: IPaginationMeta;
}

interface IApiResponse<T> {
  data: T;
}

interface IErrorResponse {
  data: {
    message: string;
    details?: Record<string, string>;
  };
}



// Error Page Props handling
interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}