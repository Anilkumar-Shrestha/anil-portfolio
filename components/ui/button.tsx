import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 ...",
  {
    variants: {
      variant: { default: "bg-primary ...", secondary: "bg-secondary ..." },
      size: { default: "h-9 px-4 py-2", sm: "h-8 px-3", lg: "h-10 px-6" },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonVariants = VariantProps<typeof buttonVariants>;

type ButtonProps<C extends React.ElementType> = ButtonVariants & {
  asChild?: boolean;
} & React.ComponentPropsWithoutRef<C>;

const Button = <C extends React.ElementType = "button">(
  { className, variant, size, asChild = false, ...props }: ButtonProps<C>,
  ref: React.Ref<any>
) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export default React.forwardRef(Button);
