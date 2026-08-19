import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { CtaLink } from "@/components/site/Cta";
import { CtaBand } from "@/components/site/CtaBand";
import { NewJerseyMap } from "@/components/site/NewJerseyMap";
import aboutCrew from "@/assets/about-crew.jpg";
import introHome from "@/assets/intro-home.jpg";

const TITLE = "About Nova Solar & Water — A New Jersey Home-Services Company";
const DESCRIPTION =
  "Nova Solar & Water is a New Jersey company built around the property first: solar, roofing and water handled by one coordinated team.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: AboutPage,
});

const PRINCIPLES = [
  { title: "Say the real thing", copy: "Including when a project isn't worth doing yet. A recommendation is only useful if it can also be no." },
  { title: "Do the unseen work", copy: "Flashing, sealing, wire management, cleanup. The parts nobody photographs are the parts that last." },
  { title: "Coordinate, don't hand off", copy: "Homeowners shouldn't be the project manager between three contractors who've never spoken." },
  { title: "Speak your language", copy: "English or Spanish, from the first call through the final walkthrough." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for the homeowners we serve."
        copy="A New Jersey company working on the systems that keep a house running."
        image={aboutCrew}
        imageAlt="Nova crew installing solar panels on a residential roof"
        primaryCta="Get a Free Estimate"
      />

      <section className="bg-background">
        <div className="shell section-y grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Our story</p>
            <h2 className="display-md mt-6 text-navy">One team instead of three.</h2>
          </Reveal>
          <Reveal delay={110} className="space-y-6 text-[1.02rem] leading-relaxed text-muted-foreground">
            <p>
              Nova started from a familiar frustration: homeowners were being sold single products by companies
              that never looked at the rest of the house. Solar quoted without checking the roof. Roofs replaced
              without a thought for what would go on them. Water treated as somebody else's category entirely.
            </p>
            <p>
              We built the company the other way around — starting with the property, then deciding what it
              actually needs and in what order. That means fewer projects sold in some cases, and better
              sequencing in most.
            </p>
            <p>
              We work with English- and Spanish-speaking homeowners across New Jersey, and we treat both
              conversations with the same care.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-sand">
        <div className="shell section-y grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <img src={introHome} alt="New Jersey home exterior" className="aspect-[5/4] w-full object-cover" loading="lazy" />
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow text-muted-foreground">How we work</p>
              <h2 className="display-md mt-6 text-navy">Make the right work easy to say yes to.</h2>
            </Reveal>
            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {PRINCIPLES.map((item, i) => (
                <Reveal key={item.title} delay={i * 90} className="border-t border-line pt-5">
                  <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="shell section-y grid items-center gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-24">
          <Reveal>
            <p className="eyebrow text-muted-foreground">Where we work</p>
            <h2 className="display-md mt-6 text-navy">Proudly New Jersey.</h2>
            <p className="lede mt-7 max-w-lg">
              North, Central and South Jersey — close enough to know the townships, the inspectors and the
              housing stock.
            </p>
            <CtaLink to="/contact" size="lg" className="mt-9">
              Check Availability In Your Town
            </CtaLink>
          </Reveal>
          <Reveal delay={130} className="flex justify-center">
            <NewJerseyMap className="h-[clamp(18rem,52vw,30rem)] w-auto text-navy" />
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Work with Nova"
        title="Let's build a better home."
        copy="Questions about solar, roofing or water? Start with a free estimate and a straight recommendation."
      />
    </>
  );
}
