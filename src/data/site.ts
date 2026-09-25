export const SITE = {
  name: "Champion Dentists",
  title: "Community Coordinator | Champion Dentists",
  description:
    "A dedicated Business Liaison Manager who represents your dental practice in the community: 4+ events a month, referral partnerships, and qualified leads.",
  tagline: "Empowering Dental Practices to Thrive.",
};

export const PHONE = {
  display: "(888) 873-8890",
  href: "tel:8888738890",
};

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "#approach", label: "Approach" },
  { href: "#included", label: "What's Included" },
  { href: "#team", label: "Meet Emmie" },
  { href: "#package", label: "Package" },
];

// LeadConnector (GoHighLevel) embedded sign-up form
export const SIGNUP_FORM = {
  id: "eLr3gR2kEhocXcdXpv6w",
  name: "Go CWGL - Sign up Form",
  src: "https://api.leadconnectorhq.com/widget/form/eLr3gR2kEhocXcdXpv6w",
  embedScript: "https://link.msgsndr.com/js/form_embed.js",
  height: 469,
};
