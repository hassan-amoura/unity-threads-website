"use client";

import { Button } from "@/components/ui/button";

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99
}: QuantitySelectorProps) {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };
  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-ut-muted/40 bg-white px-2 py-1">
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Decrease quantity"
        onClick={decrement}
      >
        −
      </Button>
      <span className="min-w-[2ch] text-center text-sm font-medium">
        {value}
      </span>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Increase quantity"
        onClick={increment}
      >
        +
      </Button>
    </div>
  );
}

