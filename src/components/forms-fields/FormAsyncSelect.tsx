import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

interface FormAsyncSelectProps<TFormValues extends FieldValues, TOption> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  queryKey: string[];
  fetchFn: () => Promise<IApiResponse<TOption[]>>;
  getOptionLabel: (item: TOption) => string;
  getOptionValue: (item: TOption) => string | number;
  label?: string;
  description?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  autoFocus?: boolean;
}

export default function FormAsyncSelect<
  TFormValues extends FieldValues,
  TOption,
>({
  control,
  name,
  queryKey,
  fetchFn,
  getOptionLabel,
  getOptionValue,
  label,
  description,
  labelClassName,
  placeholder,
  className,
  disabled,
}: FormAsyncSelectProps<TFormValues, TOption>) {
  const { data, isPending, error, refetch } = useQuery<IApiResponse<TOption[]>>(
    {
      queryKey,
      queryFn: fetchFn,
    },
  );

  const options = data?.data || [];

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem dir="rtl">
          {label && (
            <FormLabel htmlFor={name} className={cn("mb-1", labelClassName)}>
              {label}
            </FormLabel>
          )}
          <FormControl>
            <Select
              onValueChange={field.onChange}
              value={field.value?.toString()}
              disabled={disabled || isPending}
            >
              <SelectTrigger
                dir="rtl"
                id={name}
                className={cn("w-full", className)}
              >
                <SelectValue
                  placeholder={isPending ? "جاري التحميل..." : placeholder}
                />
              </SelectTrigger>
              <SelectContent dir="rtl" className="max-h-56">
                {isPending && (
                  <div className="flex items-center justify-center py-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent"></div>
                      <span className="text-sm">جاري تحميل البيانات...</span>
                    </div>
                  </div>
                )}

                {error && !isPending && (
                  <div className="flex flex-col items-center justify-center py-6 px-4">
                    <div className="text-red-500 mb-2">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground text-center mb-3">
                      فشل في تحميل البيانات
                    </p>
                    <button
                      onClick={() => refetch()}
                      className="px-3 py-1.5 text-xs bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                    >
                      إعادة المحاولة
                    </button>
                  </div>
                )}

                {!isPending &&
                  !error &&
                  options?.map((item) => {
                    const value = getOptionValue(item);
                    const stringValue = value?.toString();

                    // Skip items with empty or invalid values
                    if (!stringValue || stringValue.trim() === "") {
                      return null;
                    }

                    return (
                      <SelectItem key={stringValue} value={stringValue}>
                        {getOptionLabel(item)}
                      </SelectItem>
                    );
                  })}

                {!isPending && !error && options.length === 0 && (
                  <div className="flex flex-col items-center justify-center py-6 text-muted-foreground">
                    <svg
                      className="h-8 w-8 mb-2 opacity-50"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                      />
                    </svg>
                    <p className="text-sm">لا توجد خيارات متاحة</p>
                  </div>
                )}
              </SelectContent>
            </Select>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
