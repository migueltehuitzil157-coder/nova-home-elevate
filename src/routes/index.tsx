import { createFileRoute, Link } from "@tanstack/react-router";
import { CtaAnchor, CtaLink } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { NewJerseyMap } from "@/components/site/NewJerseyMap";
import { CtaBand } from "@/components/site/CtaBand";
import { NOVA, SERVICES } from "@/lib/nova";
import heroHome from "@/assets/hero-home.jpg";
import introHome from "@/assets/intro-home.jpg";
import serviceSolar from "@/assets/service-solar.jpg";
import serviceRoofing from "@/assets/service-roofing.jpg";
import serviceWater from "@/assets/service-water.jpg";
import solarExperience from "@/assets/solar-experience.jpg";
import aboutCrew from "@/assets/about-crew.jpg";

const TITLE = "Nova Solar & Water — Solar, Roofing & Water for New Jersey Homes";
const DESCRIPTION =
  "Nova Solar & Water is a New Jersey home-services company handling solar, roofing and water treatment with one team and one standard. Request a free estimate.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const SERVICE_IMAGES: Record<string, string> = {
  solar: serviceSolar,
  roofing: serviceRoofing,
  water: serviceWater,
};

const SOLAR_POINTS = [
  { title: "Site-specific design", copy: "Roof pitch, orientation, shading and your usage history shape the layout before anything is ordered." },
  { title: "Professional installation", copy: "Permitting, inspection and utility coordination handled by the team that designed the system." },
  { title: "Roof integration", copy: "Panels are only as sound as what's under them. We assess the roof first, every time." },
  { title: "Monitoring", copy: "See production from your phone, so the system's performance is never a mystery." },
  { title: "Energy independence", copy: "Generating on-site changes your relationship with the grid and with rate increases." },
  { title: "Straight answers", copy: "We'll tell you when solar isn't the right move for a property. That happens, and it's worth saying." },
];

const PROCESS = [
  { step: "01", title: "Free estimate", copy: "A short conversation about the house, then a walkthrough at no cost and no obligation." },
  { step: "02", title: "A plan in order", copy: "Roof, energy and water considered together, so one project never undoes another." },
  { step: "03", title: "Work that lasts", copy: "Our own crews, clear scheduling, and a walkthrough before we call anything finished." },
];

const WHY = [
  { title: "Local knowledge", copy: "Built around New Jersey homes, New Jersey roofs and New Jersey utility programs." },
  { title: "One team", copy: "Solar, roofing and water under one roof means fewer contractors and fewer gaps between them." },
  { title: "Built for the long term", copy: "Decisions measured in decades of ownership, not the length of a sales conversation." },
  { title: "People first", copy: "Clear communication in English or Spanish, from first consultation through completion." },
];

const RESOURCES = [
  { tag: "Solar", title: "Understanding solar in New Jersey", copy: "How sunlight, roof orientation and state programs shape what a system can do.", image: serviceSolar, to: "/solar" as const },
  { tag: "Planning", title: "Solar and roofing: what comes first?", copy: "Why the condition of your roof should be settled before panels are scheduled.", image: serviceRoofing, to: "/roofing" as const },
  { tag: "Water", title: "What's actually in your water", copy: "Testing first is the only honest way to choose a treatment system.", image: serviceWater, to: "/water" as const },
];

function Home() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-navy-deep pb-16 pt-32 sm:pb-20 lg:min-h-screen lg:pb-24">
        <img
          src={heroHome}
          alt="New Jersey colonial home at dusk with roof-mounted solar panels"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/70 to-navy-deep/45" />
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-navy-foreground/70">New Jersey — Solar · Roofing · Water</p>
            <h1 className="display-xl mt-7 max-w-[16ch] text-navy-foreground">Elevating New Jersey Homes.</h1>
          </Reveal>

          <Reveal delay={140} className="mt-10 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <p className="max-w-lg text-[1.05rem] leading-relaxed text-navy-foreground/80 sm:text-lg">
              Complete home solutions from one New Jersey team — solar, roofing and water, planned together
              and built to last.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaLink to="/contact" variant="light" size="lg" className="w-full sm:w-auto">
                Get a Free Estimate
              </CtaLink>
              <CtaAnchor href="#services" variant="outlineLight" size="lg" className="w-full sm:w-auto">
                Explore Our Services
              </CtaAnchor>
            </div>
          </Reveal>

          <Reveal delay={260} className="mt-14 border-t border-line-inverse pt-6">
            <ul className="grid gap-4 sm:grid-cols-3">
              {SERVICES.map((s) => (
                <li key={s.slug} className="flex items-baseline gap-3">
                  <span className="eyebrow text-[0.6rem] text-navy-foreground/40">{s.index}</span>
                  <Link
                    to={s.to}
                    className="font-display text-base font-semibold uppercase tracking-[0.06em] text-navy-foreground/90 transition-colors hover:text-navy-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- Positioning ---------- */}
      <section className="bg-background">
        <div className="shell section-y">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
            <Reveal>
              <p className="eyebrow text-muted-foreground">More than solar</p>
              <h2 className="display-md mt-6 text-navy">
                Your home. Your energy. Your water.
              </h2>
              <p className="lede mt-7 max-w-xl">
                Nova works with New Jersey homeowners on the systems that keep a house running. One team, one
                standard, one point of contact — from the first walkthrough to the final inspection.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CtaLink to="/about" variant="outline">
                  Discover Nova
                </CtaLink>
                <CtaLink to="/contact" variant="quiet" size="bare">
                  Get Started
                </CtaLink>
              </div>
            </Reveal>
            <Reveal delay={120} className="relative">
              <img
                src={introHome}
                alt="Modern New Jersey residence with cedar and stone facade"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-0 hidden bg-navy px-8 py-6 text-navy-foreground lg:block">
                <p className="eyebrow text-[0.58rem] text-navy-foreground/50">One point of contact</p>
                <p className="mt-2 font-display text-lg font-semibold">Solar · Roofing · Water</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section id="services" className="scroll-mt-24 bg-sand">
        <div className="shell section-y">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-muted-foreground">What we do</p>
              <h2 className="display-md mt-6 max-w-2xl text-navy">
                Complete solutions for the modern New Jersey home.
              </h2>
            </div>
            <CtaLink to="/contact" variant="outline" className="shrink-0">
              Get Started
            </CtaLink>
          </Reveal>

          <div className="mt-16 grid gap-x-8 gap-y-14 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.slug} delay={i * 110} className="flex flex-col">
                <Link to={service.to} className="group block overflow-hidden">
                  <img
                    src={SERVICE_IMAGES[service.slug]}
                    alt={service.title}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </Link>
                <p className="eyebrow mt-7 text-muted-foreground">
                  {service.index} — {service.label}
                </p>
                <h3 className="display-sm mt-4 text-navy">{service.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{service.copy}</p>
                <div className="mt-7">
                  <CtaLink to="/contact" variant="quiet" size="bare">
                    {service.cta}
                  </CtaLink>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Solar experience ---------- */}
      <section className="bg-navy text-navy-foreground">
        <div className="relative h-[46vh] min-h-[280px] w-full overflow-hidden">
          <img
            src={solarExperience}
            alt="New Jersey home with solar panels at blue hour"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
        </div>
        <div className="shell pb-[clamp(4.5rem,9vw,9rem)] pt-16">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-navy-foreground/45">The solar experience</p>
              <h2 className="display-md mt-6 max-w-2xl">A smarter way to power your home.</h2>
            </div>
            <CtaLink to="/contact" variant="light" className="shrink-0">
              See If Your Home Qualifies
            </CtaLink>
          </Reveal>
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {SOLAR_POINTS.map((point, i) => (
              <Reveal key={point.title} delay={i * 70} className="border-t border-line-inverse pt-6">
                <h3 className="font-display text-lg font-semibold">{point.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/65">{point.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Process (replaces "Built around your home") ---------- */}
      <section className="bg-background">
        <div className="shell section-y">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">How it works</p>
            <h2 className="display-md mt-6 text-navy">Three steps, no pressure.</h2>
            <p className="lede mt-7">
              A clear path from the first call to the final walkthrough — so you always know what happens next.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {PROCESS.map((item, i) => (
              <Reveal key={item.step} delay={i * 110} className="border-t border-line pt-7">
                <span className="font-display text-4xl font-bold text-navy/15">{item.step}</span>
                <h3 className="display-sm mt-5 text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-14 flex flex-wrap items-center gap-4">
            <CtaLink to="/contact" size="lg">
              Get a Free Estimate
            </CtaLink>
            <CtaAnchor href={NOVA.phoneHref} variant="outline" size="lg">
              {NOVA.phone}
            </CtaAnchor>
          </Reveal>
        </div>
      </section>

      {/* ---------- Why Nova ---------- */}
      <section className="bg-sand">
        <div className="shell section-y">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Why Nova</p>
              <h2 className="display-md mt-6 text-navy">The contractor homeowners call back.</h2>
              <p className="lede mt-7 max-w-md">
                Nova was built to be the company that shows up, explains the work, and stands behind it.
              </p>
            </Reveal>
            <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
              {WHY.map((item, i) => (
                <Reveal key={item.title} delay={i * 90} className="border-t border-line pt-6">
                  <h3 className="font-display text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Service areas / NJ map ---------- */}
      <section className="bg-background">
        <div className="shell section-y">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.85fr] lg:gap-24">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Service areas</p>
              <h2 className="display-md mt-6 text-navy">Proudly New Jersey.</h2>
              <p className="lede mt-7 max-w-lg">
                We work across North, Central and South Jersey — close enough to know the townships, the
                inspectors and the housing stock.
              </p>
              <ul className="mt-10 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-muted-foreground sm:grid-cols-3">
                {["Newark", "Jersey City", "Paterson", "Elizabeth", "Edison", "Trenton", "Princeton", "New Brunswick", "Morristown"].map(
                  (city) => (
                    <li key={city} className="border-b border-line pb-2">
                      {city}
                    </li>
                  ),
                )}
              </ul>
              <div className="mt-10">
                <CtaLink to="/contact" size="lg">
                  Check Availability In Your Town
                </CtaLink>
              </div>
            </Reveal>
            <Reveal delay={140} className="flex justify-center">
              <NewJerseyMap className="h-[clamp(20rem,58vw,34rem)] w-auto text-navy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Company ---------- */}
      <section className="bg-sand">
        <div className="shell section-y">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal>
              <img
                src={aboutCrew}
                alt="Nova installation crew setting a solar panel on a residential roof"
                className="aspect-[5/4] w-full object-cover"
                loading="lazy"
              />
            </Reveal>
            <Reveal delay={120}>
              <p className="eyebrow text-muted-foreground">The company</p>
              <h2 className="display-md mt-6 text-navy">Built for the homeowners we serve.</h2>
              <p className="lede mt-7 max-w-lg">
                One team instead of three. We start with the property, then decide what it actually needs — and
                in what order.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <CtaLink to="/about" variant="outline">
                  Our Story
                </CtaLink>
                <CtaLink to="/contact" variant="quiet" size="bare">
                  Talk To Nova
                </CtaLink>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Resources ---------- */}
      <section className="bg-background">
        <div className="shell section-y">
          <Reveal className="max-w-2xl">
            <p className="eyebrow text-muted-foreground">Homeowner resources</p>
            <h2 className="display-md mt-6 text-navy">Decisions worth understanding first.</h2>
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {RESOURCES.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <Link to={item.to} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="aspect-[16/10] w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                      loading="lazy"
                    />
                  </div>
                  <p className="eyebrow mt-6 text-muted-foreground">{item.tag}</p>
                  <h3 className="display-sm mt-3 text-navy">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.copy}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Inline lead form ---------- */}
      <section id="estimate" className="scroll-mt-24 bg-sand">
        <div className="shell section-y">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <Reveal>
              <p className="eyebrow text-muted-foreground">Free estimate</p>
              <h2 className="display-md mt-6 text-navy">Start with a conversation.</h2>
              <p className="lede mt-7 max-w-md">
                Share a few details and a Nova specialist will follow up to schedule your walkthrough. No
                pressure, no obligation.
              </p>
              <dl className="mt-10 space-y-5 text-sm">
                <div>
                  <dt className="eyebrow text-[0.58rem] text-muted-foreground">Phone</dt>
                  <dd className="mt-1.5">
                    <a href={NOVA.phoneHref} className="text-navy hover:underline">
                      {NOVA.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.58rem] text-muted-foreground">Email</dt>
                  <dd className="mt-1.5">
                    <a href={`mailto:${NOVA.email}`} className="text-navy hover:underline">
                      {NOVA.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-[0.58rem] text-muted-foreground">Languages</dt>
                  <dd className="mt-1.5 text-muted-foreground">{NOVA.languages}</dd>
                </div>
              </dl>
            </Reveal>
            <Reveal delay={120}>
              <LeadForm />
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
