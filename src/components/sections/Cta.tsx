import { PHONE } from "@/data/site";
import SignupButton from "@/components/ui/SignupButton";

export default function Cta() {
  return (
    <section id="signup" className="cta">
      <div className="cta__box reveal">
        <div className="cta__ring cta__ring--outer" />
        <div className="cta__ring cta__ring--inner" />
        <div className="cta__content">
          <span className="eyebrow eyebrow--light eyebrow--center">Our Mission</span>
          <h2 className="section-title section-title--light cta__title">
            Foster connections and generate leads for you through committed networking.
          </h2>
          <p className="cta__lead">Speak with our team about which plan fits your practice.</p>
          <div className="cta__actions">
            <SignupButton>Sign Up Now</SignupButton>
            <a className="btn-outline btn-outline--light" href={PHONE.href}>
              {PHONE.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
