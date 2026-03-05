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
        "flex h-10 w-full rounded-lg border border-ut-muted/40 bg-white px-3 text-sm text-ut-slate transition focus-ring placeholder:text-ut-muted",
        className
      )}
      {...props}
    />
  )
);

Input.displayName = "Input";

