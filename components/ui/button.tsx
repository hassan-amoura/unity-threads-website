"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-200 focus-ring disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-ut-primary text-white shadow-soft-sm hover:bg-ut-primary/90 hover:shadow-soft",
        outline:
          "border-2 border-ut-primary/50 bg-transparent text-ut-primary hover:bg-ut-primary/10 hover:border-ut-primary",
        ghost: "text-ut-slate hover:bg-ut-muted/15",
        subtle: "bg-ut-bg-alt text-ut-slate hover:bg-ut-muted/20"
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10"
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
