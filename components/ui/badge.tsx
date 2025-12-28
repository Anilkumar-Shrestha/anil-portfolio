import * as React from "react";
import { cn } from "@/lib/utils";
import { VariantProps, tv } from "tailwind-variants";

const badgeVariants = tv({
  base: "inline-flex items-center rounded-full px-2 py-1 text-xs font-medium",
  variants: {
    variant: {
      default: "bg-gray-100 text-gray-800",
      // add other variants
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  as?: React.ElementType;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, as: Comp = "span", ...props }, ref) => {
    return (
      <Comp
        ref={ref as any} // ✅ quick fix
        className={cn(badgeVariants({ variant }), className)}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
