interface PriceProps {
  amount: number;
  className?: string;
}

export function Price({ amount, className }: PriceProps) {
  return (
    <p className={className}>
      <span className="text-sm font-medium tracking-tight">
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0
        }).format(amount)}
      </span>
    </p>
  );
}

