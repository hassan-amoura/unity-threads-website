import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "soft";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-ut-primary/15 text-ut-primary",
        variant === "outline" && "border border-ut-muted/40 text-ut-slate",
        variant === "soft" && "bg-ut-muted/15 text-ut-muted",
        className
      )}
      {...props}
    />
  );
}
