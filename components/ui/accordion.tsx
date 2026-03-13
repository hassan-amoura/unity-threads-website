"use client";

import * as React from "react";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = React.useState<string | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = item.id === openId;
        return (
          <div
            key={item.id}
            className="rounded-boutique-lg border border-ut-muted/20 bg-ut-surface p-4 shadow-soft-sm"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left focus-ring rounded-lg px-1 py-1"
              aria-expanded={isOpen}
              onClick={() => setOpenId(isOpen ? null : item.id)}
            >
              <span className="text-sm font-medium">{item.title}</span>
              <span
                aria-hidden="true"
                className="text-xs text-ut-muted"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <div className="mt-2 text-sm text-ut-muted">
                {item.content}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

