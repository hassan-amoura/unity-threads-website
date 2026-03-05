import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "soft";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        variant === "default" && "border-transparent bg-ut-primary/10 text-ut-primary",
        variant === "outline" && "border-ut-muted/50 text-ut-slate",
        variant === "soft" && "border-transparent bg-ut-muted/20 text-ut-muted",
        className
      )}
      {...props}
    />
  );
}

