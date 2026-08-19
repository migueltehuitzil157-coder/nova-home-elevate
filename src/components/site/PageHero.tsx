import { CtaAnchor, CtaLink } from "./Cta";
import { Reveal } from "./Reveal";
import { NOVA } from "@/lib/nova";

export function PageHero({
  eyebrow,
  title,
  copy,
  image,
  imageAlt,
  primaryCta,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  image: string;
  imageAlt: string;
  primaryCta: string;
}) {
  return (
    <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-navy-deep pb-14 pt-36 lg:min-h-[86svh] lg:pb-20">
      <img src={image} alt={imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/72 to-navy-deep/45" />
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-navy-foreground/70">{eyebrow}</p>
          <h1 className="display-lg mt-6 max-w-[20ch] text-navy-foreground">{title}</h1>
        </Reveal>
        <Reveal delay={130} className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <p className="max-w-lg text-[1.02rem] leading-relaxed text-navy-foreground/80">{copy}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CtaLink to="/contact" variant="light" size="lg" className="w-full sm:w-auto">
              {primaryCta}
            </CtaLink>
            <CtaAnchor href={NOVA.phoneHref} variant="outlineLight" size="lg" className="w-full sm:w-auto">
              {NOVA.phone}
            </CtaAnchor>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
