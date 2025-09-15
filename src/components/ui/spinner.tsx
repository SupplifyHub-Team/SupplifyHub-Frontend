import { Loader2 } from "lucide-react";
import React from "react";

export default function Spinner({
  size = 24,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Loader2
      strokeWidth={3}
      className={`animate-spin ${className}`}
      size={size}
      style={{
        animationDuration: "1s",
      }}
    />
  );
}
