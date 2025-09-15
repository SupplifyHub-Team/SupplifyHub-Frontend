import { isAxiosError } from "axios";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export class ApiError extends Error {
  details?: Record<string, string>;

  constructor(message: string, details?: Record<string, string>) {
    super(message);
    this.name = this.constructor.name;
    Object.setPrototypeOf(this, new.target.prototype);
    this.details = details;
  }
}

export function handleApiError(error: unknown): ApiError {
  console.error(error);

  if (error instanceof ApiError) {
    return error;
  }

  if (isAxiosError<IErrorResponse>(error)) {
    const message =
      error.response?.data?.data.message || "حدث خطأ غير متوقع في الخادم";
    const details = error.response?.data.data.details || {};
    return new ApiError(message, details);
  }

  if (
    typeof error === "object" &&
    error !== null &&
    "data" in error &&
    typeof (error as IErrorResponse).data?.message === "string"
  ) {
    const err = error as IErrorResponse;
    return new ApiError(err.data.message, err.data.details || {});
  }

  if (error instanceof Error) {
    return new ApiError(error.message, {});
  }

  return new ApiError("حدث خطأ غير متوقع", {});
}

export function setFormErrors<T extends FieldValues>(
  form: UseFormReturn<T>,
  err: unknown
) {
  if (err instanceof ApiError) {
    if (err.details) {
      Object.entries(err.details).forEach(([field, message]) => {
        form.setError(field as Path<T>, {
          type: "server",
          message,
        });
      });
    }
  }
}
