export const SITE = {
  name: "Champion Dentists",
  title: "Community Liaison Coordinator | Champion Dentists",
  description:
    "A dedicated Community Liaison Coordinator who represents your practice in the community: a minimum of four events a month, referral partnerships, and a consistent flow of qualified leads.",
  tagline: "Empowering Dental Practices to Thrive.",
};

export const PHONE = {
  display: "(888) 873-8890",
  href: "tel:8888738890",
};

export type NavLink = { href: string; label: string };

export const NAV_LINKS: NavLink[] = [
  { href: "/#approach", label: "Approach" },
  { href: "/#included", label: "What's Included" },
  { href: "/#team", label: "Meet Emmie" },
  { href: "/#package", label: "Package" },
];

// LeadConnector (GoHighLevel) booking calendar
export const BOOKING_CALENDAR = {
  id: "8Nlc9Ia77Z8bzFVeZxir",
  iframeId: "8Nlc9Ia77Z8bzFVeZxir_1790379721529",
  src: "https://api.leadconnectorhq.com/widget/booking/8Nlc9Ia77Z8bzFVeZxir",
};

// LeadConnector (GoHighLevel) embedded sign-up form
export const SIGNUP_FORM = {
  id: "eLr3gR2kEhocXcdXpv6w",
  name: "Go CWGL - Sign up Form",
  src: "https://api.leadconnectorhq.com/widget/form/eLr3gR2kEhocXcdXpv6w",
  embedScript: "https://link.msgsndr.com/js/form_embed.js",
  height: 469,
};
