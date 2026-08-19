import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-navy text-navy-foreground shadow-[var(--shadow-soft)] hover:bg-navy-soft hover:shadow-[var(--shadow-lift)]",
        accent:
          "bg-accent text-accent-foreground shadow-[var(--shadow-soft)] hover:brightness-110 hover:shadow-[var(--shadow-lift)]",
        outline: "border border-navy/25 text-navy hover:border-navy hover:bg-navy hover:text-navy-foreground",
        light: "bg-background text-navy hover:bg-sand",
        outlineLight:
          "border border-navy-foreground/35 text-navy-foreground hover:border-navy-foreground hover:bg-navy-foreground hover:text-navy",
        quiet:
          "border-b border-navy/25 pb-1 text-navy hover:border-navy hover:text-navy [&]:tracking-[0.14em]",
        quietLight:
          "border-b border-navy-foreground/30 pb-1 text-navy-foreground hover:border-navy-foreground [&]:tracking-[0.14em]",
      },
      size: {
        md: "h-12 px-7",
        lg: "h-14 px-9 text-[0.75rem]",
        sm: "h-10 px-5 text-[0.68rem]",
        bare: "h-auto p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

type CtaShared = VariantProps<typeof ctaVariants> & { className?: string; children: ReactNode };

export function CtaLink({
  variant,
  size,
  className,
  children,
  ...props
}: CtaShared & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
      <Arrow />
    </Link>
  );
}

export function CtaAnchor({
  variant,
  size,
  className,
  children,
  ...props
}: CtaShared & ComponentProps<"a">) {
  return (
    <a className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
      <Arrow />
    </a>
  );
}

export function CtaButton({
  variant,
  size,
  className,
  children,
  withArrow = true,
  ...props
}: CtaShared & ComponentProps<"button"> & { withArrow?: boolean }) {
  return (
    <button className={cn(ctaVariants({ variant, size }), className)} {...props}>
      {children}
      {withArrow ? <Arrow /> : null}
    </button>
  );
}

function Arrow() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 10"
      className="h-2.5 w-4 transition-transform duration-500 group-hover:translate-x-1"
      fill="none"
    >
      <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export { ctaVariants };
