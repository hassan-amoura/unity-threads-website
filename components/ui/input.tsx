"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-11 w-full rounded-full border border-ut-muted/30 bg-ut-surface px-4 text-sm text-ut-slate transition-colors placeholder:text-ut-muted focus-ring focus:border-ut-primary/50",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";
