"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, rows = 4, ...props }, ref) => (
    <textarea
      ref={ref}
      rows={rows}
      className={cn(
        "flex w-full rounded-boutique border border-ut-muted/30 bg-ut-surface px-4 py-3 text-sm text-ut-slate transition-colors focus-ring focus:border-ut-primary/50 placeholder:text-ut-muted",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

