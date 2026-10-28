import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-[15px] font-medium transition-all duration-150 active:scale-[.98] disabled:opacity-50",
  { variants: { variant: {
      default: "bg-white text-ink hover:bg-accent hover:shadow-[0_0_32px_rgba(34,211,238,.35)]",
      outline: "border border-white/15 text-white hover:border-white/40 hover:bg-white/5",
      ghost: "text-muted hover:text-white" } },
    defaultVariants: { variant: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof variants> { asChild?: boolean }
export function Button({ className, variant, asChild, ...p }: ButtonProps) {
  const C = asChild ? Slot : "button";
  return <C className={cn(variants({ variant }), className)} {...p} />;
}
