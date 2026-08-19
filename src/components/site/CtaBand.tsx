import { CtaAnchor, CtaLink } from "./Cta";
import { Reveal } from "./Reveal";
import { NOVA } from "@/lib/nova";

export function CtaBand({
  eyebrow = "Next step",
  title = "Request your free estimate.",
  copy = "Tell us about your home and we'll put together a straight, no-pressure recommendation.",
  cta = "Request Your Free Estimate",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
  cta?: string;
}) {
  return (
    <section className="bg-navy text-navy-foreground">
      <div className="shell section-y">
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow text-navy-foreground/45">{eyebrow}</p>
            <h2 className="display-lg mt-6 max-w-xl">{title}</h2>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-md text-[1.02rem] leading-relaxed text-navy-foreground/70">{copy}</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CtaLink to="/contact" variant="light" size="lg">
                {cta}
              </CtaLink>
              <CtaAnchor href={NOVA.phoneHref} variant="outlineLight" size="lg">
                {NOVA.phone}
              </CtaAnchor>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
