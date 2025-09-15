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
import { useState, useMemo } from "react";
import useDebounce from "@/hooks/useDebounce";

interface FormInfiniteMultiComboboxProps<
  TFormValues extends FieldValues,
  TData
> {
  label?: string;
  description?: string;
  labelClassName?: string;
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
  control?: Control<TFormValues>;
  name: Path<TFormValues>;
  maxDisplayItems?: number;
  showCount?: boolean;
  onOptionsChange?: (options: TData[]) => void;
}

export default function FormInfiniteMultiCombobox<
  TFormValues extends FieldValues,
  TData
>({
  control,
  name,
  label,
  description,
  className,
  labelClassName,
  disabled,
  queryKey,
  fetchFn,
  getOptionLabel,
  getOptionValue,
  onOptionsChange,
}: FormInfiniteMultiComboboxProps<TFormValues, TData>) {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const { data, isFetching, ref } = useInfinite<TData>({
    queryKey: [...queryKey, debouncedSearchTerm],
    fetchFn: (pageNumber) => fetchFn(pageNumber, debouncedSearchTerm),
  });

  const form = useFormContext<TFormValues>();

  const options = useMemo(
    () => data?.pages.flatMap((page) => page.data) ?? [],
    [data]
  );
  const lastPage = data?.pages[data.pages.length - 1];
  const hasMoreData =
    lastPage && lastPage.meta.currentPage < lastPage.meta.totalPages;

  const [open, setOpen] = useState(false);

  // Notify parent of available options
  useMemo(() => {
    if (onOptionsChange && options.length > 0) {
      onOptionsChange(options);
    }
  }, [options, onOptionsChange]);

  // Helper function to format display text
  const getDisplayText = (selectedValues: (string | number)[]) => {
    return `تم اختيار ${selectedValues.length} عنصر`;
  };

  // Toggle selection
  const toggleOption = (
    optionValue: string | number,
    currentValues: (string | number)[],
    onChange: (values: (string | number)[]) => void
  ) => {
    const isSelected = currentValues.includes(optionValue);

    if (isSelected) {
      // Remove from selection
      onChange(currentValues.filter((value) => value !== optionValue));
    } else {
      // Add to selection
      onChange([...currentValues, optionValue]);
    }
  };

  return (
    <FormField
      control={control ?? form.control}
      name={name}
      render={({ field }) => {
        const selectedValues: (string | number)[] = Array.isArray(field.value)
          ? field.value
          : [];

        return (
          <FormItem dir="rtl" className="w-full">
            {description && <FormDescription>{description}</FormDescription>}

            {label && (
              <FormLabel htmlFor={name} className={cn("mb-1", labelClassName)}>
                {label}
              </FormLabel>
            )}
            <FormControl>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    id={name}
                    variant="outline"
                    role="combobox"
                    className={cn(
                      "w-full justify-between hover:scale-100 h-auto min-h-[40px] px-3 py-2",
                      selectedValues.length === 0 && "text-muted-foreground",
                      className
                    )}
                    disabled={disabled}>
                    <span className="truncate flex-1 text-right">
                      {getDisplayText(selectedValues)}
                    </span>

                    <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0" dir="rtl">
                  <Command>
                    <CommandInput
                      placeholder="ابحث..."
                      className="h-9"
                      disabled={disabled}
                      value={searchTerm}
                      onValueChange={setSearchTerm}
                    />
                    <CommandEmpty>لا توجد نتائج</CommandEmpty>
                    <CommandGroup className="h-60 overflow-auto">
                      {options
                        .filter(
                          (item) =>
                            !selectedValues.includes(getOptionValue(item))
                        )
                        .map((item) => {
                          const value = getOptionValue(item).toString();
                          const label = getOptionLabel(item);
                      const isSelected = selectedValues.some(
                        (v) => v.toString() === value
                      );


                          return (
                            <CommandItem
                              key={label}
                              value={label}
                              onSelect={() => {
                                toggleOption(
                                  value,
                                  selectedValues,
                                  field.onChange
                                );
                              }}
                              className={cn(
                                "flex items-center justify-between cursor-pointer",
                                isSelected && "bg-accent"
                              )}>
                              <span className="flex-1 text-right">{label}</span>
                              <div
                                className={cn(
                                  "flex h-5 w-5 items-center justify-center rounded-sm border border-primary",
                                  isSelected
                                    ? "bg-primary text-primary"
                                    : "opacity-50 [&_svg]:invisible"
                                )}>
                                <Check className="h-3 w-3 text-white" />
                              </div>
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
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
