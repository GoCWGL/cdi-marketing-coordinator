import {
  BuildingIcon,
  CalendarIcon,
  HeartIcon,
  HeartPlusIcon,
  MegaphoneIcon,
  ShieldCheckIcon,
  TargetIcon,
  TrendUpIcon,
  UsersIcon,
  type IconComponent,
} from "@/components/ui/Icons";

// ---- Hero ---------------------------------------------------------------

export type OrbitChip = { label: string; icon: IconComponent; left: string; top: string };

export const ORBIT_CHIPS: OrbitChip[] = [
  { label: "Chambers of Commerce", icon: BuildingIcon, left: "50%", top: "0" },
  { label: "Health Providers", icon: HeartIcon, left: "100%", top: "50%" },
  { label: "Referral Partners", icon: UsersIcon, left: "50%", top: "100%" },
  { label: "Community Events", icon: CalendarIcon, left: "0", top: "50%" },
];

export type OrbitDot = { left: string; top: string; ink?: boolean };

export const ORBIT_DOTS: OrbitDot[] = [
  { left: "14.6%", top: "14.6%" },
  { left: "85.4%", top: "85.4%" },
  { left: "100%", top: "50%", ink: true },
];

export type Stat = { value: string; label: [string, string]; tone?: "deep" };

export const HERO_STATS: Stat[] = [
  { value: "4+", label: ["community events", "every month"] },
  { value: "1", label: ["dedicated Business", "Liaison Manager"], tone: "deep" },
  { value: "Every", label: ["lead captured and", "organized for you"] },
];

// ---- Marquee ------------------------------------------------------------

export const MARQUEE_ITEMS = [
  "Chambers of Commerce",
  "Community Events",
  "Local Health Providers",
  "Referral Partners",
  "Strategic Organizations",
  "Business Networking",
];

// ---- Approach -----------------------------------------------------------

export type Step = {
  title: string;
  summary: string;
  tag: string;
  description: string;
  points: string[];
};

export const STEPS: Step[] = [
  {
    title: "Plan the outreach calendar",
    summary: "At least 4 events a month, matched to your market.",
    tag: "Plan",
    description:
      "We build a monthly outreach calendar of community events chosen to fit your target market — and we consider any event suggestions you send us.",
    points: [
      "Minimum of 4 community events every month",
      "Events matched to your target market",
      "Your event suggestions always considered",
    ],
  },
  {
    title: "Represent your practice",
    summary: "We show up for you across the community.",
    tag: "Represent",
    description:
      "We attend and take part in each event on your behalf — from chambers of commerce to strategic organizations — building trust in your name.",
    points: [
      "Chambers of commerce and strategic organizations",
      "Your name, logo, and branding used only for outreach and program promotion",
      "Relationships with local health business providers",
    ],
  },
  {
    title: "Capture & convert leads",
    summary: "Every lead organized and followed through.",
    tag: "Convert",
    description:
      "We capture and organize every lead for your team, then help turn those conversations into new patients.",
    points: [
      "Lead information captured and organized for you",
      "Referral partner relationships identified and fostered",
      "Conversion through communication, patient advocacy, and integrity",
    ],
  },
];

// ---- How the work is done ----------------------------------------------

export type WorkItem = { label: string; title: string; text: string };

export const WORK_ITEMS: WorkItem[] = [
  {
    label: "Event Selection",
    title: "Events that fit your market",
    text: "We identify and choose events that fit your target market, and consider any event suggestions you submit.",
  },
  {
    label: "Lead Capture",
    title: "Leads captured & organized",
    text: "We capture and organize lead information for you, so your team can follow up with confidence.",
  },
  {
    label: "Your Brand",
    title: "Your brand, used responsibly",
    text: "Your name, logo, and branding are used only for community outreach and program promotion.",
  },
];

// ---- What's included ----------------------------------------------------

export type Feature = {
  title: string;
  text: string;
  icon: IconComponent;
  alt?: boolean;
  dark?: boolean;
  note?: string;
};

export const CALENDAR_FEATURE: Feature = {
  title: "Monthly Outreach Calendar",
  text: "A strategic calendar of at least 4 community events every month — chambers of commerce, strategic organizations, and events that fit your target market — carried out on your behalf.",
  icon: CalendarIcon,
};

export const FEATURES: Feature[] = [
  {
    title: "Qualified Leads Every Month",
    text: "Qualified leads captured, organized, and handed to your team — with support converting them into patients.",
    icon: TargetIcon,
    dark: true,
  },
  {
    title: "Community & Referral Partnerships",
    text: "We establish community partnerships and identify and foster referral partner relationships.",
    icon: UsersIcon,
    alt: true,
  },
  {
    title: "Health Provider Relationships",
    text: "We build and maintain relationships with local health business providers who can send patients your way.",
    icon: HeartPlusIcon,
  },
  {
    title: "Marketing Materials",
    text: "Help creating brochures, flyers, and promotional items for your outreach.",
    icon: MegaphoneIcon,
    alt: true,
    note: "Production and printing fees billed separately.",
  },
  {
    title: "New Growth Opportunities",
    text: "We keep an eye out for new opportunities to grow your practice in the community.",
    icon: TrendUpIcon,
  },
];

export const TRUST_FEATURE: Feature = {
  title: "Community Trust & Local Reputation",
  text: "Consistent, in-person representation that builds community trust and strengthens your practice's local reputation.",
  icon: ShieldCheckIcon,
  alt: true,
};

// Mini calendar: 4 weeks × 7 days; value = pulse delay (s) for event days
export const CALENDAR_EVENTS: Record<number, number> = { 2: 0, 11: 0.8, 15: 1.6, 25: 2.4 };

// ---- Team ---------------------------------------------------------------

export const EMMIE = {
  name: "Emmeline “Emmie” Saavedra",
  shortName: "Emmie Saavedra",
  role: "CEO & President, Champion Dentists Inc.",
  summary: "30+ years in the health industry · Award-winning relationship coach",
  bio: [
    "Emmie is the CEO, President, and Owner of Champion Dentists Inc., where she leads a powerhouse team of results-driven coaches, business trainers, and consultants delivering transformative strategies and implementation for dental practices nationwide.",
    "With over 30 years of experience in the health industry — as a registered nurse and co-owner of four specialty dental practices — and more than four decades as a successful entrepreneur, Emmie brings deep expertise in leadership development, team performance, and business growth. Her passion lies in building meaningful relationships, developing strong leaders, and helping individuals and teams unlock their full potential.",
    "An award-winning sales and relationship coach, Emmie is known for customized, science-backed systems that drive exceptional results in both business and life. Her mission is to help others experience personal transformation, powerful leadership, and the joy, prosperity, and peace they are fully capable of achieving.",
  ],
  credentials: [
    "Registered Nurse",
    "Co-owner of 4 specialty dental practices",
    "40+ years as an entrepreneur",
    "Award-winning sales & relationship coach",
  ],
};

export const LIAISON_DUTIES = [
  "Strategize and attend community events monthly (minimum of 4 events)",
  "Establish and maintain relationships with local health business providers",
  "Generate qualified leads",
  "Identify and foster referral partner relationships",
  "Assist in the creation of marketing assets such as brochures, flyers, and promotional items",
  "Represent the business in community events like business chambers of commerce and strategic organizations",
  "Build community trust and strengthen the practice's local reputation",
  "Identify new growth opportunities",
  "Facilitate lead conversion through effective communication, strong patient advocacy, and fostering integrity",
];

// ---- Package ------------------------------------------------------------

export const PACKAGE_ITEMS = [
  "Monthly outreach calendar with a minimum of 4 community events",
  "Strategy for and attendance at every event on your behalf",
  "Representation at chambers of commerce and strategic organizations",
  "Qualified leads captured and organized for your team",
  "Community and referral partner relationships",
  "Relationships with local health business providers",
  "Help creating brochures, flyers, and promotional items*",
  "Lead conversion support through communication, patient advocacy, and integrity",
  "Ongoing search for new growth opportunities",
];
