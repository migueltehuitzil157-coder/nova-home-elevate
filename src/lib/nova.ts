export const NOVA = {
  name: "Nova Solar & Water",
  phone: "(908) 201-8655",
  phoneHref: "tel:+19082018655",
  email: "admin@novasolarwater.com",
  serviceArea: "North, Central and South Jersey",
  languages: "English & Spanish",
};

export const NAV = [
  { label: "Home", to: "/" },
  { label: "Solar", to: "/solar" },
  { label: "Roofing", to: "/roofing" },
  { label: "Water", to: "/water" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export const SERVICES = [
  {
    index: "01",
    slug: "solar",
    to: "/solar",
    label: "Solar",
    title: "Clean energy solutions designed around your home",
    copy: "Systems shaped by your roof, your shading and the way your household actually uses electricity.",
    cta: "See If Your Home Qualifies",
  },
  {
    index: "02",
    slug: "roofing",
    to: "/roofing",
    label: "Roofing",
    title: "Protection for one of your home's most important systems",
    copy: "Repairs, replacements and solar-ready roofing held to one crew standard on every project.",
    cta: "Get a Roofing Estimate",
  },
  {
    index: "03",
    slug: "water",
    to: "/water",
    label: "Water",
    title: "Better water solutions for your home and family",
    copy: "Filtration and treatment matched to what is actually in your water, installed cleanly.",
    cta: "Get a Free Water Assessment",
  },
] as const;

export type ServiceSlug = (typeof SERVICES)[number]["slug"];
