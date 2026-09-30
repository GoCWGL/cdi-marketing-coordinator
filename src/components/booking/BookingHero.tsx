import { BOOKING_HIGHLIGHTS } from "@/data/booking";
import { CheckIcon } from "@/components/ui/Icons";

export default function BookingHero() {
  return (
    <section className="booking-hero">
      {/* Moving background: panning dot grid + drifting glow orbs */}
      <div className="booking-hero__bg" aria-hidden="true">
        <span className="booking-hero__dots" />
        <span className="booking-hero__orb booking-hero__orb--blue" />
        <span className="booking-hero__orb booking-hero__orb--orange" />
        <span className="booking-hero__orb booking-hero__orb--light" />
      </div>

      <div className="booking-hero__inner">
        <span className="eyebrow eyebrow--light eyebrow--center rise d1">Book a Call</span>
        <h1 className="booking-hero__title rise d2">
          Schedule your strategy call with <span className="booking-hero__accent">
            Emmie
            <svg
              className="booking-hero__underline"
              viewBox="0 0 400 18"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <path d="M3 13C90 4 210 3 397 10" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </span>
          .
        </h1>
        <p className="booking-hero__lead rise d3">
          Pick a time that works for you. We&apos;ll learn about your practice, your market, and
          your goals — and map out how a Community Liaison Coordinator can grow your patient base.
        </p>
        <ul className="booking-hero__highlights rise d4">
          {BOOKING_HIGHLIGHTS.map((item) => (
            <li key={item} className="booking-hero__highlight">
              <CheckIcon size={12} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
