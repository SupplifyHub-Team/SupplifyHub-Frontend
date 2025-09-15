"use client";

import React from "react";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

interface FormRadioGroupProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  options: Option[];
  itemClassName?: string;
  labelClassName?: string;
  direction?: "horizontal" | "vertical";
}

export default function FormRadioGroup<TFormValues extends FieldValues>({
  control,
  name,
  label,
  description,
  options,
  itemClassName,
  labelClassName,
  direction = "vertical",
}: FormRadioGroupProps<TFormValues>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className={cn("mb-2")}>{label}</FormLabel>}
          <FormControl>
            <RadioGroup
              name={name}
              id={name}
              onValueChange={field.onChange}
              value={field.value}
              className={cn("gap-4", direction === "horizontal" && "flex")}
            >
              {options.map((option) => (
                <FormItem
                  key={option.value}
                  className={cn(
                    "flex items-center",
                    direction === "vertical" ? "flex-row" : "",
                    itemClassName,
                  )}
                >
                  <RadioGroupItem
                    value={option.value}
                    id={`${name}-${option.value}`}
                  />
                  <FormLabel
                    htmlFor={`${name}-${option.value}`}
                    className={cn(
                      "cursor-pointer flex items-center gap-2",
                      labelClassName,
                    )}
                  >
                    {option.icon && <span>{option.icon}</span>}
                    <span>{option.label}</span>
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
