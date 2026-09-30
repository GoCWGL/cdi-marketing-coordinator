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
  { value: "1", label: ["dedicated Community", "Liaison Coordinator"], tone: "deep" },
  { value: "6-mo", label: ["engagement with a", "results review"] },
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
    summary: "A minimum of 4 events a month, matched to your market.",
    tag: "Plan",
    description:
      "We strategize a monthly outreach calendar of community events selected for your target market. You are always welcome to submit events for our consideration.",
    points: [
      "Minimum of 4 community events every month",
      "Events matched to your target market",
      "Your event suggestions welcomed",
    ],
  },
  {
    title: "Represent your practice",
    summary: "A trusted presence on your behalf.",
    tag: "Represent",
    description:
      "We attend each event on your behalf — from business chambers of commerce to strategic organizations — building community trust and strengthening your local reputation.",
    points: [
      "Business chambers of commerce and strategic organizations",
      "Your name, logo, and branding used only for outreach and program promotion",
      "Established, ongoing relationships with local health business providers",
    ],
  },
  {
    title: "Capture & convert leads",
    summary: "Measurable results, not just activity.",
    tag: "Convert",
    description:
      "We capture and organize qualified leads for your team and support their conversion — while your practice retains scheduling and patient care.",
    points: [
      "Lead information captured and organized for you",
      "Referral partner relationships identified and fostered",
      "Conversion supported through communication, patient advocacy, and integrity",
    ],
  },
];

// ---- How the work is done ----------------------------------------------

export type WorkItem = { label: string; title: string; text: string };

export const WORK_ITEMS: WorkItem[] = [
  {
    label: "Event Selection",
    title: "Events that fit your market",
    text: "We identify and select a minimum of four events each month based on your target market. Your suggestions are always welcome.",
  },
  {
    label: "Lead Capture",
    title: "Leads captured & supported",
    text: "We capture and organize lead information and support conversion through communication and patient advocacy. Your team manages scheduling and patient care.",
  },
  {
    label: "Your Brand",
    title: "Your brand, used responsibly",
    text: "Your name, logo, and branding are used under a non-exclusive license, solely for community outreach and program promotion.",
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
  text: "A strategic calendar of at least four community events every month — business chambers of commerce, strategic organizations, and events selected for your target market — attended on your behalf.",
  icon: CalendarIcon,
};

export const FEATURES: Feature[] = [
  {
    title: "A Consistent Flow of Qualified Leads",
    text: "Qualified leads from your local community, captured and organized for your team — with support converting them into patients.",
    icon: TargetIcon,
    dark: true,
  },
  {
    title: "Referral Partner Relationships",
    text: "We identify and foster referral partner relationships that keep new patients coming to your practice.",
    icon: UsersIcon,
    alt: true,
  },
  {
    title: "Health Provider Relationships",
    text: "We establish and maintain relationships with local health business providers across your community.",
    icon: HeartPlusIcon,
  },
  {
    title: "Marketing Materials",
    text: "Assistance creating brochures, flyers, and promotional items that support your outreach.",
    icon: MegaphoneIcon,
    alt: true,
    note: "Production and printing fees billed separately.",
  },
  {
    title: "New Growth Opportunities",
    text: "We continually identify new opportunities to grow your practice in the community.",
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
  "Strategize and attend community events monthly (a minimum of four events)",
  "Establish and maintain relationships with local health business providers",
  "Generate qualified leads",
  "Identify and foster referral partner relationships",
  "Assist in the creation of marketing assets such as brochures, flyers, and promotional items",
  "Represent the practice at community events such as business chambers of commerce and strategic organizations",
  "Build community trust and strengthen the practice's local reputation",
  "Identify new growth opportunities",
  "Facilitate lead conversion through effective communication, strong patient advocacy, and fostering integrity",
];

// ---- Package ------------------------------------------------------------

export const PACKAGE_ITEMS = [
  "Monthly outreach calendar with a minimum of four community events",
  "Strategy for and attendance at every event on your behalf",
  "Representation at chambers of commerce and strategic organizations",
  "Qualified leads captured and organized for your team",
  "Referral partner relationships identified and fostered",
  "Established relationships with local health business providers",
  "Assistance creating brochures, flyers, and promotional items*",
  "Lead conversion support through communication, patient advocacy, and integrity",
  "Ongoing identification of new growth opportunities",
];

export type PackageTerm = { value: string; label: string };

export const PACKAGE_TERMS: PackageTerm[] = [
  { value: "6 months", label: "Minimum engagement, followed by a joint results review" },
  { value: "30 days", label: "Written notice to end the agreement after the minimum term" },
  { value: "Pause anytime", label: "After month six — resume within 30 days to keep your rate" },
];
