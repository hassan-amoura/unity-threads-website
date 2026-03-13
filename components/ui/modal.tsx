"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center bg-ut-slate/20 backdrop-blur-sm px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />
      <div
        className={cn(
          "relative z-50 w-full max-w-md rounded-boutique-lg bg-ut-surface p-6 shadow-soft border border-ut-muted/10"
        )}
      >
        {title ? (
          <h2 className="mb-4 font-display text-lg font-semibold tracking-tight text-ut-slate">
            {title}
          </h2>
        ) : null}
        <div>{children}</div>
      </div>
    </div>
  );
}
