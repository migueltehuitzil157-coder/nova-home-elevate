import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { CtaLink } from "./Cta";
import { NAV, NOVA } from "@/lib/nova";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const solid = scrolled || pathname !== "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-700",
        solid
          ? "border-b border-line bg-background/92 backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-navy-deep/55 to-transparent",
      )}
    >
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6 lg:h-20">
        <Link to="/" className="flex items-baseline gap-2.5" aria-label="Nova Solar & Water — home">
          <span
            className={cn(
              "font-display text-lg font-bold uppercase tracking-[0.04em] transition-colors duration-500 lg:text-xl",
              solid ? "text-navy" : "text-navy-foreground",
            )}
          >
            Nova
          </span>
          <span
            className={cn(
              "eyebrow text-[0.6rem] transition-colors duration-500",
              solid ? "text-muted-foreground" : "text-navy-foreground/70",
            )}
          >
            Solar &amp; Water
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "relative py-1 text-sm transition-colors duration-300",
                solid ? "text-foreground/75 hover:text-navy" : "text-navy-foreground/80 hover:text-navy-foreground",
              )}
              activeProps={{
                className: cn(
                  "after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:bg-current",
                  solid ? "text-navy" : "text-navy-foreground",
                ),
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={NOVA.phoneHref}
            className={cn(
              "hidden items-center gap-2 text-sm transition-colors duration-300 xl:inline-flex",
              solid ? "text-foreground/70 hover:text-navy" : "text-navy-foreground/80 hover:text-navy-foreground",
            )}
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
            {NOVA.phone}
          </a>
          <CtaLink
            to="/contact"
            size="sm"
            variant={solid ? "primary" : "light"}
            className="hidden sm:inline-flex"
          >
            Get a Free Estimate
          </CtaLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center transition-colors lg:hidden",
              solid || open ? "text-navy" : "text-navy-foreground",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-line bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="shell flex flex-col gap-1 py-6">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="border-b border-line py-4 font-display text-xl font-semibold uppercase tracking-[-0.01em] text-navy"
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <CtaLink to="/contact" size="lg" className="mt-6 w-full">
            Get a Free Estimate
          </CtaLink>
          <a
            href={NOVA.phoneHref}
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Phone className="h-3.5 w-3.5" strokeWidth={1.6} />
            {NOVA.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
