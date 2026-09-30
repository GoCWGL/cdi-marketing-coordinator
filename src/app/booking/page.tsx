import type { Metadata } from "next";
import BookingHero from "@/components/booking/BookingHero";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingAside from "@/components/booking/BookingAside";

export const metadata: Metadata = {
  title: "Book a Call | Champion Dentists",
  description:
    "Schedule a one-on-one call with Emmie Saavedra to see how a Community Liaison Coordinator can grow your practice in the community.",
};

export default function BookingPage() {
  return (
    <>
      <BookingHero />
      <section className="booking" aria-label="Book a call">
        <div className="booking__grid">
          <BookingCalendar />
          <BookingAside />
        </div>
      </section>
    </>
  );
}
