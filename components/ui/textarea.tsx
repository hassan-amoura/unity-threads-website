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
        "flex w-full rounded-lg border border-ut-muted/40 bg-white px-3 py-2 text-sm text-ut-slate transition focus-ring placeholder:text-ut-muted",
        className
      )}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";

