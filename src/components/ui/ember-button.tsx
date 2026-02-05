import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const emberButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-ember text-bone hover:bg-ember-light hover:scale-105 hover:shadow-[0_0_20px_hsl(var(--ember)/0.5)] glow-ember",
        outline:
          "border-2 border-ember text-ember hover:bg-ember hover:text-bone hover:scale-105 hover:shadow-[0_0_15px_hsl(var(--ember)/0.4)]",
        ghost:
          "text-bone hover:text-ember hover:bg-bone/5 hover:scale-105",
        brass:
          "bg-brass text-charcoal hover:bg-brass/90 font-semibold",
        link:
          "text-ember underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 text-sm tracking-wide",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface EmberButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof emberButtonVariants> {
  asChild?: boolean;
}

const EmberButton = React.forwardRef<HTMLButtonElement, EmberButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(emberButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
EmberButton.displayName = "EmberButton";

export { EmberButton, emberButtonVariants };
