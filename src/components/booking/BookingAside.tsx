import Image from "next/image";
import emmie from "@/assets/images/emmie.webp";
import { BOOKING_STEPS, BOOKING_TOPICS } from "@/data/booking";
import { EMMIE } from "@/data/home";
import { PHONE } from "@/data/site";
import CheckBadge from "@/components/ui/CheckBadge";
import { PhoneIcon } from "@/components/ui/Icons";

export default function BookingAside() {
  return (
    <aside className="booking-aside rise d5">
      <div className="booking-card booking-host">
        <span className="booking-host__photo">
          <span className="booking-host__ripple" />
          <span className="booking-host__ripple booking-host__ripple--delayed" />
          <Image className="booking-host__avatar" src={emmie} alt="" width={64} height={64} />
          <span className="booking-host__status" />
        </span>
        <div className="booking-host__text">
          <span className="booking-host__label">You&apos;ll meet with</span>
          <span className="booking-host__name">{EMMIE.shortName}</span>
          <span className="booking-host__role">{EMMIE.role}</span>
        </div>
      </div>

      <div className="booking-card">
        <h3 className="booking-card__title">What we&apos;ll cover</h3>
        <ul className="booking-card__list">
          {BOOKING_TOPICS.map((topic) => (
            <li key={topic} className="point">
              <CheckBadge alt />
              <span>{topic}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="booking-card">
        <h3 className="booking-card__title">How it works</h3>
        <ol className="booking-steps">
          {BOOKING_STEPS.map((step, i) => (
            <li key={step.title} className="booking-steps__item">
              <span className="booking-steps__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="booking-steps__body">
                <span className="booking-steps__title">{step.title}</span>
                <span className="booking-steps__text">{step.text}</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="booking-card booking-card--dark">
        <h3 className="booking-card__title">Prefer to talk now?</h3>
        <p className="booking-card__text">Call our team and we&apos;ll help you find a time.</p>
        <a className="booking-call" href={PHONE.href}>
          <span className="booking-call__icon">
            <PhoneIcon size={17} />
          </span>
          {PHONE.display}
        </a>
      </div>
    </aside>
  );
}
