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
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Control, FieldValues, Path } from "react-hook-form";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { Check } from "lucide-react";

interface RadioCardOption {
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
  badge?: string;
  disabled?: boolean;
}

interface FormRadioCardsProps<TFormValues extends FieldValues> {
  control: Control<TFormValues>;
  name: Path<TFormValues>;
  label?: string;
  description?: string;
  options: RadioCardOption[];
  className?: string;
  direction?: "horizontal" | "vertical";
  cardSize?: "sm" | "md" | "lg";
  showCheckmark?: boolean;
  constainerClassName?: string;
}

export default function FormRadioCards<TFormValues extends FieldValues>({
  control,
  name,
  label,
  description,
  options,
  className,
  direction = "vertical",
  cardSize = "md",
  showCheckmark = true,
  constainerClassName,
}: FormRadioCardsProps<TFormValues>) {
  const cardSizes = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {label && (
            <FormLabel className="text-lg font-semibold text-gray-900 mb-4 block">
              {label}
            </FormLabel>
          )}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className={cn(
                "flex gap-4 flex-wrap",
                direction === "horizontal" ? "" : "flex-col",
                constainerClassName
              )}>
              {options.map((option, index) => {
                const isSelected = field.value === option.value;
                const isDisabled = option.disabled;

                return (
                  <motion.div
                    key={option.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="relative ">
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem
                          value={option.value}
                          id={`${name}-${option.value}`}
                          disabled={isDisabled}
                          className="sr-only"
                        />
                      </FormControl>
                      <FormLabel
                        htmlFor={`${name}-${option.value}`}
                        className={cn(
                          "relative flex flex-col cursor-pointer rounded-2xl border-2 transition-all duration-300 group w-full",
                          cardSizes[cardSize],
                          isSelected
                            ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-200"
                            : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md",
                          isDisabled
                            ? "opacity-50 cursor-not-allowed"
                            : "hover:scale-[1.02] hover:-translate-y-1",
                          "focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
                        )}>
                        {/* Selection Indicator */}
                        <AnimatePresence>
                          {isSelected && showCheckmark && (
                            <motion.div
                              initial={{ scale: 0, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              exit={{ scale: 0, opacity: 0 }}
                              transition={{ duration: 0.2, type: "spring" }}
                              className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center z-10">
                              <Check className="w-4 h-4 text-white" />
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Badge */}
                        {option.badge && (
                          <div className="absolute top-4 left-4 z-10">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                              {option.badge}
                            </span>
                          </div>
                        )}

                        {/* Icon */}
                        {option.icon && (
                          <div
                            className={cn(
                              "flex items-center justify-center mb-4",
                              option.badge ? "mt-6" : "mt-0"
                            )}>
                            <div
                              className={cn(
                                "transition-transform duration-300",
                                isSelected
                                  ? "scale-110"
                                  : "group-hover:scale-105"
                              )}>
                              {option.icon}
                            </div>
                          </div>
                        )}

                        {/* Content */}
                        <div className="flex-1 text-center">
                          <div
                            className={cn(
                              "font-semibold text-gray-900 mb-2 transition-colors duration-300",
                              cardSize === "sm"
                                ? "text-sm"
                                : cardSize === "md"
                                ? "text-base"
                                : "text-lg"
                            )}>
                            {option.label}
                          </div>

                          {option.description && (
                            <p
                              className={cn(
                                "text-gray-600 leading-relaxed",
                                cardSize === "sm" ? "text-xs" : "text-sm"
                              )}>
                              {option.description}
                            </p>
                          )}
                        </div>

                        {/* Selection Indicator (Alternative Style) */}
                        {!showCheckmark && (
                          <div className="absolute top-4 right-4 z-10">
                            <div
                              className={cn(
                                "w-5 h-5 rounded-full border-2 transition-all duration-300",
                                isSelected
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-300 group-hover:border-gray-400"
                              )}>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  className="w-full h-full rounded-full bg-white scale-50"
                                />
                              )}
                            </div>
                          </div>
                        )}

                        {/* Hover Effect Overlay */}
                        <div
                          className={cn(
                            "absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none",
                            isSelected
                              ? "bg-blue-500 opacity-5"
                              : "bg-gray-900 opacity-0 group-hover:opacity-5"
                          )}
                        />
                      </FormLabel>
                    </FormItem>
                  </motion.div>
                );
              })}
            </RadioGroup>
          </FormControl>
          {description && (
            <FormDescription className="mt-3 text-gray-600">
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
