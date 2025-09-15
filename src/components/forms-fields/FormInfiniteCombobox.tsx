import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Control, FieldValues, Path, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Check, ChevronDown } from "lucide-react";
import Spinner from "../ui/spinner";
import useInfinite from "@/hooks/useInfinite";
import { useState } from "react";
import useDebounce from "@/hooks/useDebounce";

interface FormInfiniteComboboxProps<TFormValues extends FieldValues, TData> {
  label?: string;
  description?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  queryKey: string[];
  fetchFn: (
    pageNumber: number,
    search: string
  ) => Promise<IPaginatedResponse<TData>>;
  getOptionLabel: (item: TData) => string;
  getOptionValue: (item: TData) => string | number;
  name: Path<TFormValues>;
}

export default function FormInfiniteCombobox<
  TFormValues extends FieldValues,
  TData
>({
  name,
  label,
  description,
  placeholder,
  className,
  labelClassName,
  disabled,
  queryKey,
  fetchFn,
  getOptionLabel,
  getOptionValue,
}: FormInfiniteComboboxProps<TFormValues, TData>) {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  const form = useFormContext<TFormValues>();

  const { data, isFetching, ref } = useInfinite<TData>({
    queryKey: [...queryKey, debouncedSearch],
    fetchFn: (pageNumber) => fetchFn(pageNumber, debouncedSearch),
  });

  const options = data?.pages.flatMap((page) => page.data) ?? [];
  const lastPage = data?.pages[data.pages.length - 1];
  const hasMoreData =
    lastPage && lastPage.meta.currentPage < lastPage.meta.totalPages;

  const [open, setOpen] = useState(false);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => {
        const selected = options.find(
          (item) => getOptionValue(item).toString() === field.value?.toString()
        );

        return (
          <FormItem dir="rtl" className="w-full">
            {label && (
              <FormLabel htmlFor={name} className={cn("mb-1", labelClassName)}>
                {label}
              </FormLabel>
            )}
            <FormControl>
              <Popover modal open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between hover:scale-100",
                      className
                    )}
                    disabled={disabled}>
                    {selected
                      ? getOptionLabel(selected)
                      : placeholder || "اختر..."}
                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0 " dir="rtl">
                  <Command>
                    <CommandInput
                      placeholder="ابحث..."
                      className="h-9"
                      disabled={disabled}
                      value={search}
                      onValueChange={setSearch}
                    />
                    <CommandEmpty>لا توجد نتائج</CommandEmpty>
                    <CommandGroup
                      className="max-h-40 overscroll-contain overflow-y-auto"
                      style={{ WebkitOverflowScrolling: "touch" }}>
                      {options.map((item) => {
                        const value = getOptionValue(item).toString();
                        const label = getOptionLabel(item);

                        return (
                          <CommandItem
                            key={value}
                            value={label}
                            onSelect={() => {
                              field.onChange(value);
                              setOpen(false);
                            }}>
                            {label}
                            {value === field.value?.toString() && (
                              <Check className="ml-auto h-4 w-4" />
                            )}
                          </CommandItem>
                        );
                      })}
                      {isFetching && (
                        <div className="flex justify-center py-2">
                          <Spinner />
                        </div>
                      )}
                      {!isFetching && !hasMoreData && (
                        <div className="text-muted-foreground py-2 text-center text-sm">
                          لا يوجد المزيد من البيانات
                        </div>
                      )}
                      <div ref={ref} className="h-1" />
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
