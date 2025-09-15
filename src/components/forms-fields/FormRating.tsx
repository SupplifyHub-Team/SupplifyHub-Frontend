"use client";
import { FieldPath, FieldValues, useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormRatingProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  label?: string;
  description?: string;
  className?: string;
  disabled?: boolean;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  showCount?: boolean;
}


export default function FormRating<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({
  name,
  label,
  description,
  className,
  disabled = false,
  maxRating = 5,
  size = "md",
  showCount = true,
}: FormRatingProps<TFieldValues, TName>) {
  const form = useFormContext();

  // Size configurations
  const sizeConfig = {
    sm: {
      star: "w-5 h-5",
      text: "text-xs",
      gap: "gap-1",
    },
    md: {
      star: "w-6 h-6",
      text: "text-sm",
      gap: "gap-2",
    },
    lg: {
      star: "w-8 h-8",
      text: "text-base",
      gap: "gap-2",
    },
  };

  const config = sizeConfig[size];
  const colors = {
    filled: "text-yellow-400 hover:text-yellow-500",
    empty: "text-gray-300 hover:text-yellow-300",
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("space-y-3", className)}>
          {label && <FormLabel>{label}</FormLabel>}

          <FormControl>
            <div className="space-y-3">
              <div className={cn("flex items-center", config.gap)}>
                {Array.from({ length: maxRating }, (_, index) => {
                  const ratingValue = index + 1;
                  const isSelected = ratingValue <= (field.value || 0);

                  return (
                    <button
                      key={ratingValue}
                      type="button"
                      disabled={disabled}
                      onClick={() => field.onChange(ratingValue)}
                      className={cn(
                        "transition-all duration-200 hover:scale-110 disabled:cursor-not-allowed disabled:opacity-50",
                        isSelected ? colors.filled : colors.empty
                      )}>
                      <Star
                        className={cn(
                          config.star,
                          isSelected ? "fill-current" : "fill-none stroke-2"
                        )}
                      />
                    </button>
                  );
                })}

                {showCount && (
                  <span
                    className={cn(
                      "mr-3 font-medium text-gray-600",
                      config.text
                    )}>
                    ({field.value || 0} من {maxRating})
                  </span>
                )}
              </div>

         
            </div>
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
