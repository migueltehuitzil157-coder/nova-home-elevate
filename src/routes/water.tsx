import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/Cta";
import { LeadForm } from "@/components/site/LeadForm";
import { CtaBand } from "@/components/site/CtaBand";
import { Faq } from "@/components/site/Faq";
import serviceWater from "@/assets/service-water.jpg";
import introHome from "@/assets/intro-home.jpg";

const TITLE = "Home Water Filtration & Treatment in New Jersey | Nova Solar & Water";
const DESCRIPTION =
  "Whole-home filtration, drinking water systems and hard water treatment for New Jersey homes — chosen from a test result, not a catalog.";

export const Route = createFileRoute("/water")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: WaterPage,
});

const SOLUTIONS = [
  { title: "Whole-home filtration", copy: "Treatment at the point of entry, so every tap, shower and appliance draws from the same filtered supply." },
  { title: "Drinking water systems", copy: "Focused treatment at the kitchen for the water your household actually drinks and cooks with." },
  { title: "Hardness and scale", copy: "Addressing hard water protects fixtures, water heaters and the appliances that quietly wear out because of it." },
];

const FAQS = [
  { q: "How do I know what's in my water?", a: "Testing. Municipal supply and private wells present different questions, and the right system depends entirely on the result." },
  { q: "Do I need whole-home treatment or just drinking water?", a: "It depends on the concern. Taste and drinking quality can often be handled at one point of use; hardness and scale affect the whole plumbing system." },
  { q: "How much maintenance is involved?", a: "Most systems need periodic filter or media service. We'll tell you the interval before installation, not after." },
];

function WaterPage() {
  return (
    <>
      <PageHero
        eyebrow="Water"
        title="Better water starts at home."
        copy="Better water solutions for your home and family — chosen from a test result, not a catalog."
        image={serviceWater}
        imageAlt="Clear water filling a glass at a modern kitchen sink"
        primaryCta="Get a Free Water Assessment"
      />

      <section className="bg-background">
        <div className="shell section-y grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Start with the water itself</p>
            <h2 className="display-md mt-6 text-navy">We test first and recommend second.</h2>
          </Reveal>
          <Reveal delay={110} className="space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
            <p>
              Water quality in New Jersey varies street by street, and between municipal supply and private
              wells. Hardness, taste, odor and staining are all symptoms of different things.
            </p>
            <p>If your water doesn't need a system, we'll say so.</p>
            <CtaLink to="/contact" variant="outline">
              Get a Free Water Assessment
            </CtaLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="shell section-y">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Solutions</p>
            <h2 className="display-md mt-6 max-w-xl text-navy">Matched to your home, not a catalog.</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {SOLUTIONS.map((item, i) => (
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
          <Reveal delay={100}>
            <img src={introHome} alt="New Jersey home exterior" className="aspect-[5/4] w-full object-cover" loading="lazy" />
          </Reveal>
          <Reveal>
            <h2 className="display-md">Installed cleanly. Explained plainly.</h2>
            <p className="mt-7 max-w-lg text-[1.02rem] leading-relaxed text-navy-foreground/70">
              You should know where the system sits, what it removes, when it needs service and what it costs to
              keep running — before it's installed.
            </p>
            <CtaLink to="/contact" variant="light" className="mt-9">
              Get a Free Water Assessment
            </CtaLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell section-y grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Water questions</p>
            <h2 className="display-md mt-6 text-navy">Straight answers.</h2>
          </Reveal>
          <Reveal delay={110}>
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="shell section-y grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Free assessment</p>
            <h2 className="display-md mt-6 text-navy">Find out what's in your water.</h2>
            <p className="lede mt-7 max-w-md">
              A test is a short conversation and a clear result. Everything else follows from it.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <LeadForm defaultService="Water" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Water"
        title="Get a free water assessment."
        copy="We'll test what's coming into the house and recommend only what the result calls for."
        cta="Request Your Free Estimate"
      />
    </>
  );
}
