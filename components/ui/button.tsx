import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase font-bold tracking-wide",
  {
    variants: {
      variant: {
        // shad-ui variants
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",

        // Custom variants
        default:
          "bg-white text-black border-2 border-b-4 active:border-b-2 hover:bg-slate-100 hover:text-slate-500",
        primary:
          "bg-sky-500 text-white border-sky-600 border-b-4 active:border-b-0 hover:bg-sky-400",
        primaryOutline:
          "text-sky-500 bg-transparent border-none hover:bg-sky-100 hover:text-sky-600",
        secondary:
          "bg-green-500 text-white border-green-600 border-b-4 active:border-b-0 hover:bg-green-400",
        secondaryOutline:
          "text-green-500 bg-transparent border-none hover:bg-green-100 hover:text-green-600",
        danger:
          "bg-red-500 text-white border-red-600 border-b-4 active:border-b-0 hover:bg-red-400",
        dangerOutline:
          "text-red-500 bg-transparent border-none hover:bg-red-100 hover:text-red-600",
        super:
          "bg-purple-500 text-white border-purple-600 border-b-4 active:border-b-0 hover:bg-purple-400",
        superOutline:
          "text-purple-500 bg-transparent border-none hover:bg-purple-100 hover:text-purple-600",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-xl px-3 text-xs",
        lg: "h-12 rounded-xl px-8",
        icon: "h-9 w-9",
        rounded: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
