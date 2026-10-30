import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-[15px] font-medium transition-all duration-150 active:scale-[.98] disabled:opacity-50",
  { variants: { variant: {
      default: "bg-black text-white hover:bg-emerald-700 hover:shadow-[0_10px_30px_rgba(4,120,87,.4)]",
      outline: "border border-ink/20 text-ink hover:border-ink/50 hover:bg-ink/5",
      ghost: "text-muted hover:text-white" } },
    defaultVariants: { variant: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> { asChild?: boolean }
export function Button({ className, variant, asChild, ...p }: ButtonProps) {
  const C = asChild ? Slot : "button";
  return <C className={cn(variants({ variant }), className)} {...p} />;
}
