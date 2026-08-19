import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/Cta";
import { LeadForm } from "@/components/site/LeadForm";
import { CtaBand } from "@/components/site/CtaBand";
import serviceSolar from "@/assets/service-solar.jpg";
import solarExperience from "@/assets/solar-experience.jpg";
import aboutCrew from "@/assets/about-crew.jpg";

const TITLE = "Residential Solar in New Jersey | Nova Solar & Water";
const DESCRIPTION =
  "Residential solar designed for one specific roof: yours. Site-specific design, permitting and installation by Nova's own New Jersey crews.";

export const Route = createFileRoute("/solar")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: SolarPage,
});

const STEPS = [
  { step: "01", title: "Consultation", copy: "We review your electric usage, your roof and your goals — before anyone talks about equipment." },
  { step: "02", title: "Design", copy: "A layout built for your specific roof planes, shading and electrical service." },
  { step: "03", title: "Approvals", copy: "Permitting and utility paperwork handled on your behalf, with status you can follow." },
  { step: "04", title: "Installation", copy: "A scheduled install by our crew, with the property left the way we found it." },
  { step: "05", title: "Activation", copy: "Inspection, utility approval and a walkthrough of your monitoring before we call it done." },
];

function SolarPage() {
  return (
    <>
      <PageHero
        eyebrow="Solar"
        title="A better way to power home."
        copy="Clean energy solutions designed around your home — your roof, your shading, your usage."
        image={serviceSolar}
        imageAlt="Black solar panels on a New Jersey residential roof"
        primaryCta="See If Your Home Qualifies"
      />

      <section className="bg-background">
        <div className="shell section-y grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Why homeowners go solar</p>
            <h2 className="display-md mt-6 text-navy">Electricity is one cost you can change.</h2>
          </Reveal>
          <Reveal delay={110} className="space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
            <p>
              Electricity rises without notice and without negotiation. Producing power on-site changes that
              relationship — you generate during the day, draw from the grid when you need to, and see exactly
              what the system is doing.
            </p>
            <p>
              What solar can do for a specific house depends on that house. We'd rather show you a realistic
              picture than a promising one.
            </p>
            <CtaLink to="/contact" variant="outline">
              See If Your Home Qualifies
            </CtaLink>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="shell section-y">
          <Reveal>
            <p className="eyebrow text-muted-foreground">The Nova process</p>
            <h2 className="display-md mt-6 max-w-xl text-navy">Five steps, handled for you.</h2>
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {STEPS.map((item, i) => (
              <Reveal key={item.step} delay={i * 80} className="border-t border-line pt-6">
                <span className="font-display text-3xl font-bold text-navy/15">{item.step}</span>
                <h3 className="display-sm mt-4 text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy text-navy-foreground">
        <div className="relative h-[42vh] min-h-[260px] overflow-hidden">
          <img src={solarExperience} alt="Home with solar at blue hour" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
        </div>
        <div className="shell grid gap-12 pb-[clamp(4.5rem,9vw,9rem)] pt-16 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="display-md">Technology that stays out of the way.</h2>
            <p className="mt-7 text-[1.02rem] leading-relaxed text-navy-foreground/70">
              Low-profile, flush-mounted panels, clean conduit runs and hardware chosen to age well on a
              residential roof. Good solar work is work you stop noticing.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img src={aboutCrew} alt="Installers fastening a solar panel to a roof" className="aspect-[5/4] w-full object-cover" loading="lazy" />
            <h3 className="display-sm mt-8">Roof integration matters</h3>
            <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65">
              Every mount is a penetration through a roof. Flashing, placement and sealing are where
              installations succeed or quietly fail years later. Our roofing crew and our solar crew answer to
              the same standard.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="shell section-y grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Free estimate</p>
            <h2 className="display-md mt-6 text-navy">Find out what your roof can do.</h2>
            <p className="lede mt-7 max-w-md">
              A short conversation, a look at your usage, and a straight answer about whether solar makes sense
              for your home.
            </p>
          </Reveal>
          <Reveal delay={110}>
            <LeadForm defaultService="Solar" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Solar"
        title="See if your home qualifies."
        copy="We'll review your roof, your shading and your usage — and tell you honestly what solar can do."
        cta="Get a Free Estimate"
      />
    </>
  );
}
