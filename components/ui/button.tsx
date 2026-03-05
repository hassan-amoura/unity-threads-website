"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-ring disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default: "bg-ut-primary text-white shadow-soft hover:bg-ut-primary/90",
        outline:
          "border border-ut-primary bg-transparent text-ut-primary hover:bg-ut-primary/5",
        ghost: "text-ut-slate hover:bg-ut-muted/20",
        subtle: "bg-ut-muted/20 text-ut-slate hover:bg-ut-muted/30"
      },
      size: {
        default: "h-10 px-5",
        sm: "h-9 px-4 text-xs",
        lg: "h-11 px-6 text-sm",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className);
    if (asChild && React.Children.only(props.children)) {
      const child = props.children as React.ReactElement;
      return React.cloneElement(child, {
        ...child.props,
        className: cn(child.props?.className, classes),
        ref: (child as any).ref ?? ref
      });
    }
    return (
      <button
        ref={ref}
        className={classes}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

