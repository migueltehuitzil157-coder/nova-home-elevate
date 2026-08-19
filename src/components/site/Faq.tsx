import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-start justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-lg font-semibold text-navy">{item.q}</span>
              <Plus
                className={cn(
                  "mt-1 h-4 w-4 shrink-0 text-navy transition-transform duration-500",
                  isOpen && "rotate-45",
                )}
                strokeWidth={1.6}
              />
            </button>
            <div
              className={cn(
                "grid overflow-hidden transition-all duration-500 ease-[var(--ease-soft)]",
                isOpen ? "grid-rows-[1fr] pb-7 opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <p className="max-w-2xl overflow-hidden text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
