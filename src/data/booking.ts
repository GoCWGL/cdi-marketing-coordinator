export const BOOKING_HIGHLIGHTS = [
  "One-on-one with Emmie",
  "Tailored to your practice",
  "Pick any open time",
];

export const BOOKING_TOPICS = [
  "Your practice goals and target market",
  "How the monthly outreach calendar works",
  "Referral partner and lead capture strategy",
  "Next steps tailored to your practice",
];

export type BookingStep = { title: string; text: string };

export const BOOKING_STEPS: BookingStep[] = [
  { title: "Pick a time", text: "Choose a date and time that fits your schedule." },
  { title: "Confirm your details", text: "Share a few details about your practice." },
  { title: "Meet with Emmie", text: "Get a clear plan for growing in your community." },
];
