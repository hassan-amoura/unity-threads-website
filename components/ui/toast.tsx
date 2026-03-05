"use client";

import * as React from "react";
import { create } from "zustand";
import { cn } from "@/lib/utils";

type ToastIntent = "success" | "error" | "info";

interface Toast {
  id: number;
  title: string;
  description?: string;
  intent: ToastIntent;
}

interface ToastStore {
  toasts: Toast[];
  show: (toast: Omit<Toast, "id">) => void;
  dismiss: (id: number) => void;
}

const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  show: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id: Date.now() }]
    })),
  dismiss: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id)
    }))
}));

export function useToast() {
  const show = useToastStore((s) => s.show);
  return {
    success: (title: string, description?: string) =>
      show({ title, description, intent: "success" }),
    error: (title: string, description?: string) =>
      show({ title, description, intent: "error" }),
    info: (title: string, description?: string) =>
      show({ title, description, intent: "info" })
  };
}

export function ToastViewport() {
  const { toasts, dismiss } = useToastStore();

  if (!toasts.length) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex flex-col items-center gap-2 px-4 sm:items-end sm:px-6">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "w-full max-w-sm rounded-xl border bg-white px-4 py-3 shadow-soft border-ut-muted/30",
            toast.intent === "success" && "border-ut-primary/50 bg-ut-primary/10",
            toast.intent === "error" && "border-ut-muted bg-ut-muted/20",
            toast.intent === "info" && "border-ut-primary/30 bg-ut-primary/5"
          )}
          role="status"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-ut-slate">{toast.title}</p>
              {toast.description ? (
                <p className="mt-1 text-xs text-ut-muted">
                  {toast.description}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              onClick={() => dismiss(toast.id)}
              className="text-xs text-ut-muted hover:text-ut-slate focus-ring rounded-full px-1"
              aria-label="Dismiss notification"
            >
              ×
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

