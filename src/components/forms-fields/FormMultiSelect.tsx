"use client";

import React, { useState, useMemo } from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, X, Loader2 } from "lucide-react";

interface MultiSelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface FormMultiSelectComboboxProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  options: MultiSelectOption[];
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  maxSelectedDisplay?: number;
  allowClear?: boolean;
  showSelectedCount?: boolean;
}

export default function FormMultiSelectCombobox<
  TFormValues extends FieldValues,
>({
  control,
  name,
  label,
  description,
  placeholder = "اختر عناصر...",
  searchPlaceholder = "ابحث عن عنصر...",
  emptyText = "لا توجد نتائج",
  options = [],
  isLoading = false,
  disabled = false,
  className,
  maxSelectedDisplay = 3,
  allowClear = true,
  showSelectedCount = true,
}: FormMultiSelectComboboxProps<TFormValues>) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  // Filter options based on search
  const filteredOptions = useMemo(() => {
    if (!searchValue) return options;
    return options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [options, searchValue]);

  // Helper to get selected options
  const getSelectedOptions = (selectedValues: (string | number)[]) => {
    return options.filter((option) => selectedValues.includes(option.value));
  };

  // Helper to format display text
  const getDisplayText = (selectedValues: (string | number)[]) => {
    if (!selectedValues || selectedValues.length === 0) {
      return placeholder;
    }

    const selectedOptions = getSelectedOptions(selectedValues);

    if (showSelectedCount && selectedValues.length > maxSelectedDisplay) {
      return `تم اختيار ${selectedValues.length} عنصر`;
    }

    return (
      selectedOptions
        .slice(0, maxSelectedDisplay)
        .map((option) => option.label)
        .join(", ") + (selectedValues.length > maxSelectedDisplay ? "..." : "")
    );
  };

  // Toggle selection
  const toggleOption = (
    optionValue: string | number,
    currentValues: (string | number)[],
    onChange: (values: (string | number)[]) => void,
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

  // Clear all selections
  const clearAll = (onChange: (values: (string | number)[]) => void) => {
    onChange([]);
    setOpen(false);
  };

  // Remove single selection
  const removeSelection = (
    valueToRemove: string | number,
    currentValues: (string | number)[],
    onChange: (values: (string | number)[]) => void,
  ) => {
    onChange(currentValues.filter((value) => value !== valueToRemove));
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        const selectedValues: (string | number)[] = Array.isArray(field.value)
          ? (field.value as (string | number)[])
          : [];
        const selectedOptions = getSelectedOptions(selectedValues);

        return (
          <FormItem className={className}>
            {label && (
              <FormLabel className="text-sm font-medium text-gray-900">
                {label}
              </FormLabel>
            )}
            <FormControl>
              <div className="space-y-2">
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      disabled={disabled}
                      className={cn(
                        "w-full justify-between text-right h-auto min-h-[40px] px-3 py-2",
                        selectedValues.length === 0 && "text-muted-foreground",
                      )}
                    >
                      <span className="truncate flex-1 text-right">
                        {getDisplayText(selectedValues)}
                      </span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {isLoading && (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        )}
                        {allowClear && selectedValues.length > 0 && (
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              clearAll(field.onChange);
                            }}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        )}
                        <ChevronDown className="h-4 w-4 opacity-50" />
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0" align="start">
                    <Command>
                      <CommandInput
                        placeholder={searchPlaceholder}
                        value={searchValue}
                        onValueChange={setSearchValue}
                        className="text-right"
                      />
                      <CommandList>
                        <CommandEmpty>
                          {isLoading ? (
                            <div className="flex items-center justify-center py-6">
                              <Loader2 className="h-4 w-4 animate-spin ml-2" />
                              جاري التحميل...
                            </div>
                          ) : (
                            emptyText
                          )}
                        </CommandEmpty>
                        <CommandGroup>
                          {filteredOptions.map((option) => {
                            const isSelected = selectedValues.includes(
                              option.value,
                            );

                            return (
                              <CommandItem
                                key={option.value}
                                value={option.label}
                                disabled={option.disabled}
                                onSelect={() => {
                                  toggleOption(
                                    option.value,
                                    selectedValues,
                                    field.onChange,
                                  );
                                }}
                                className={cn(
                                  "flex items-center justify-between cursor-pointer",
                                  isSelected && "bg-accent",
                                )}
                              >
                                <div className="flex items-center gap-2">
                                  <div
                                    className={cn(
                                      "flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                                      isSelected
                                        ? "bg-primary text-primary-foreground"
                                        : "opacity-50 [&_svg]:invisible",
                                    )}
                                  >
                                    <Check className="h-3 w-3" />
                                  </div>
                                  <span
                                    className={cn(
                                      "flex-1 text-right",
                                      option.disabled &&
                                        "text-muted-foreground",
                                    )}
                                  >
                                    {option.label}
                                  </span>
                                </div>
                              </CommandItem>
                            );
                          })}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>

                {/* Selected Items Display */}
                {selectedOptions.length > 0 && (
                  <div className="flex flex-wrap gap-1">
                    {selectedOptions.map((option) => (
                      <Badge
                        key={`selected-${option.value}`}
                        variant="secondary"
                        className="flex items-center gap-1 px-2 py-1 text-xs"
                      >
                        <span>{option.label}</span>
                        <button
                          type="button"
                          onClick={() =>
                            removeSelection(
                              option.value,
                              selectedValues,
                              field.onChange,
                            )
                          }
                          className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </FormControl>
            {description && (
              <FormDescription className="text-xs text-muted-foreground">
                {description}
              </FormDescription>
            )}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
