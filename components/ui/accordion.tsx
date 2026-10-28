"use client";
import * as A from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
export const Accordion = A.Root;
export const AccordionItem = ({ className, ...p }: A.AccordionItemProps) => <A.Item className={cn("border-b border-white/10", className)} {...p} />;
export const AccordionTrigger = ({ children, ...p }: A.AccordionTriggerProps) => (
  <A.Header><A.Trigger className="group flex min-h-14 w-full items-center justify-between gap-4 py-4 text-left text-lg font-medium" {...p}>
    {children}<Plus className="size-5 shrink-0 text-accent transition-transform duration-200 group-data-[state=open]:rotate-45" aria-hidden /></A.Trigger></A.Header>);
export const AccordionContent = ({ children, ...p }: A.AccordionContentProps) => (
  <A.Content className="overflow-hidden text-muted data-[state=closed]:animate-[up_.2s_ease] data-[state=open]:animate-[down_.2s_ease]" {...p}><div className="pb-5 leading-7">{children}</div></A.Content>);
