import { Link } from "@tanstack/react-router";
import { CtaLink } from "./Cta";
import { NAV, NOVA, SERVICES } from "@/lib/nova";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-baseline gap-2.5">
              <span className="font-display text-xl font-bold uppercase tracking-[0.04em]">Nova</span>
              <span className="eyebrow text-[0.6rem] text-navy-foreground/60">Solar &amp; Water</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/65">
              Solar, roofing and water for New Jersey homes — one team, one standard, one point of contact.
            </p>
            <CtaLink to="/contact" variant="light" size="sm" className="mt-7">
              Get a Free Estimate
            </CtaLink>
          </div>

          <FooterCol title="Services">
            {SERVICES.map((s) => (
              <Link key={s.to} to={s.to} className="block py-1.5 text-navy-foreground/65 hover:text-navy-foreground">
                {s.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Company">
            {NAV.filter((n) => ["Home", "About", "Contact"].includes(n.label)).map((n) => (
              <Link key={n.to} to={n.to} className="block py-1.5 text-navy-foreground/65 hover:text-navy-foreground">
                {n.label}
              </Link>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <a href={NOVA.phoneHref} className="block py-1.5 text-navy-foreground/65 hover:text-navy-foreground">
              {NOVA.phone}
            </a>
            <a
              href={`mailto:${NOVA.email}`}
              className="block py-1.5 text-navy-foreground/65 hover:text-navy-foreground"
            >
              {NOVA.email}
            </a>
            <p className="py-1.5 text-navy-foreground/65">{NOVA.serviceArea}</p>
            <p className="py-1.5 text-navy-foreground/65">{NOVA.languages}</p>
          </FooterCol>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-line-inverse pt-7 text-xs text-navy-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nova Solar &amp; Water. New Jersey.</p>
          <p>Licensed &amp; insured — serving homeowners statewide.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="eyebrow text-[0.62rem] text-navy-foreground/40">{title}</h3>
      <div className="mt-5 text-sm">{children}</div>
    </div>
  );
}
