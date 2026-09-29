import Script from "next/script";
import { BOOKING_CALENDAR, SIGNUP_FORM } from "@/data/site";
import { CalendarIcon } from "@/components/ui/Icons";

export default function BookingCalendar() {
  return (
    <div className="booking-calendar">
      <div className="booking-calendar__head">
        <span className="booking-calendar__icon">
          <CalendarIcon size={20} strokeWidth={1.8} />
        </span>
        <div className="booking-calendar__heading">
          <h2 className="booking-calendar__title">Select a date &amp; time</h2>
          <p className="booking-calendar__sub">Times are shown in your local time zone.</p>
        </div>
      </div>

      <div className="booking-calendar__frame">
        {/* The embed script resizes this iframe to fit the calendar */}
        <iframe
          src={BOOKING_CALENDAR.src}
          id={BOOKING_CALENDAR.iframeId}
          title="Book a call with Emmie"
          allow="payment"
          scrolling="no"
        />
      </div>

      <Script src={SIGNUP_FORM.embedScript} strategy="afterInteractive" />
    </div>
  );
}
