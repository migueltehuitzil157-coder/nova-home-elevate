import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/Cta";
import { LeadForm } from "@/components/site/LeadForm";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import serviceRoofing from "@/assets/service-roofing.jpg";
import serviceSolar from "@/assets/service-solar.jpg";

const TITLE = "Roofing in New Jersey — Replacement & Repair | Nova Solar & Water";
const DESCRIPTION =
  "Roof replacement, repairs and solar-ready roofing for New Jersey homes. Decking, underlayment, flashing and ventilation handled properly.";

export const Route = createFileRoute("/roofing")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: RoofingPage,
});

const WORK = [
  { title: "Roof replacement", copy: "Full tear-off and replacement with attention to decking, underlayment, flashing and ventilation — not just shingles." },
  { title: "Repairs", copy: "Targeted work on leaks, storm damage and failed flashing, with a clear explanation of what caused it." },
  { title: "Solar-ready roofing", copy: "Roofs prepared with a future array in mind, so panels don't have to come off a few years later." },
  { title: "Inspections", copy: "An honest read on remaining roof life before you commit to any larger project." },
];

const FAQS = [
  { q: "How do I know if I need a full replacement?", a: "Age, granule loss, repeated leaks and decking condition all factor in. An inspection gives you a straight answer rather than a guess." },
  { q: "Can you install solar on a new roof right away?", a: "Yes, and sequencing them together is usually the cleanest approach — one plan, one crew, one schedule." },
  { q: "What happens to my property during the work?", a: "We protect landscaping and surfaces, keep the site contained and clean up daily. The property should look like we were never there." },
];

function RoofingPage() {
  return (
    <>
      <PageHero
        eyebrow="Roofing"
        title="Protect what powers your home."
        copy="Protection and improvement for one of your home's most important systems."
        image={serviceRoofing}
        imageAlt="Newly installed dark shingle roof on a suburban New Jersey home"
        primaryCta="Get a Roofing Estimate"
      />

      <section className="bg-background">
        <div className="shell section-y">
          <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Workmanship is the product</p>
              <h2 className="display-md mt-6 text-navy">Roofs rarely fail at the shingle.</h2>
            </Reveal>
            <Reveal delay={110} className="space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
              <p>
                Materials matter, but roofs fail at the edges, the valleys and the penetrations — the places
                that only show up in the details of how a crew works.
              </p>
              <CtaLink to="/contact" variant="outline">
                Get a Roofing Estimate
              </CtaLink>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-x-10 gap-y-10 sm:grid-cols-2">
            {WORK.map((item, i) => (
              <Reveal key={item.title} delay={i * 90} className="border-t border-line pt-6">
                <h3 className="display-sm text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="shell section-y grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="eyebrow text-navy-foreground/45">Roof + solar</p>
            <h2 className="display-md mt-6">One project, in the right order.</h2>
            <p className="mt-7 max-w-lg text-[1.02rem] leading-relaxed text-navy-foreground/70">
              Installing panels over a roof with five years left is an expensive way to buy a future problem.
              When both are handled by the same company, the sequence gets decided honestly.
            </p>
            <CtaLink to="/contact" variant="light" className="mt-9">
              Get a Roofing Estimate
            </CtaLink>
          </Reveal>
          <Reveal delay={120}>
            <img src={serviceSolar} alt="Solar panels installed on a well-maintained roof" className="aspect-[5/4] w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="shell section-y grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Roofing questions</p>
            <h2 className="display-md mt-6 text-navy">Straight answers.</h2>
          </Reveal>
          <Reveal delay={110}>
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell section-y grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Free estimate</p>
            <h2 className="display-md mt-6 text-navy">Have the roof looked at properly.</h2>
            <p className="lede mt-7 max-w-md">
              An inspection is the cheapest step in any roofing decision. Start there.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <LeadForm defaultService="Roofing" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Roofing"
        title="Get a roofing estimate."
        copy="We'll inspect what's there, explain what we find, and give you the options in plain language."
        cta="Request Your Free Estimate"
      />
    </>
  );
}
