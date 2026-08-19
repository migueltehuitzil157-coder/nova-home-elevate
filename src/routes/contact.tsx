import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { LeadForm } from "@/components/site/LeadForm";
import { NewJerseyMap } from "@/components/site/NewJerseyMap";
import { NOVA } from "@/lib/nova";

const TITLE = "Get a Free Estimate — Nova Solar & Water, New Jersey";
const DESCRIPTION =
  "Request a free estimate for solar, roofing or water services in New Jersey. Short form, no obligation, and a straight recommendation from Nova.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  { label: "Phone", value: NOVA.phone, href: NOVA.phoneHref },
  { label: "Email", value: NOVA.email, href: `mailto:${NOVA.email}` },
  { label: "Service area", value: NOVA.serviceArea },
  { label: "Languages", value: NOVA.languages },
];

function ContactPage() {
  return (
    <>
      <section className="bg-navy-deep pb-20 pt-36 text-navy-foreground lg:pb-28 lg:pt-44">
        <div className="shell">
          <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="eyebrow text-navy-foreground/50">Free estimate</p>
              <h1 className="display-lg mt-6 max-w-[18ch]">Let's talk about your home.</h1>
              <p className="mt-7 max-w-md text-[1.02rem] leading-relaxed text-navy-foreground/70">
                Tell us a little about the property. A Nova specialist will follow up to schedule your
                walkthrough — no obligation, no pressure.
              </p>

              <dl className="mt-12 grid gap-7 sm:grid-cols-2">
                {DETAILS.map((item) => (
                  <div key={item.label}>
                    <dt className="eyebrow text-[0.58rem] text-navy-foreground/45">{item.label}</dt>
                    <dd className="mt-2 text-[0.95rem]">
                      {item.href ? (
                        <a href={item.href} className="text-navy-foreground/85 hover:text-navy-foreground">
                          {item.value}
                        </a>
                      ) : (
                        <span className="text-navy-foreground/70">{item.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-14 hidden justify-start lg:flex">
                <NewJerseyMap className="h-64 w-auto text-navy-foreground/70" />
              </div>
            </div>

            <div>
              <LeadForm variant="dark" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
