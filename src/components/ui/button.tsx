import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer ",
  {
    variants: {
      variant: {
        "default":
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        "destructive":
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        "outline":
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        "secondary":
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        "ghost":
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        "link": "text-primary underline-offset-4 hover:underline",
        "gradient-orange":" bg-gradient-to-br from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700",
        "gradient-indigo":
          "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700",
        "gradient-green":
          "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:from-emerald-600 hover:to-teal-700 hover:shadow-xl focus-visible:ring-emerald-500/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 border-0 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/10 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        "gradient-mint":
          "bg-gradient-to-r from-green-400 to-cyan-500 text-white shadow-lg hover:from-green-500 hover:to-cyan-600 hover:shadow-xl focus-visible:ring-green-400/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        "gradient-forest":
          "bg-gradient-to-r from-green-600 to-emerald-700 text-white shadow-lg hover:from-green-700 hover:to-emerald-800 hover:shadow-xl focus-visible:ring-green-600/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        "gradient-lime":
          "bg-gradient-to-r from-lime-500 to-green-600 text-white shadow-lg hover:from-lime-600 hover:to-green-700 hover:shadow-xl focus-visible:ring-lime-500/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
        "gradient-ocean":
          "bg-gradient-to-r from-teal-500 to-emerald-600 text-white shadow-lg hover:from-teal-600 hover:to-emerald-700 hover:shadow-xl focus-visible:ring-teal-500/30 transform hover:scale-[1.02] active:scale-[0.98] transition-all duration-200",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
