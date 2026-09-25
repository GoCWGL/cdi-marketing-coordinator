import { PACKAGE_ITEMS } from "@/data/home";
import { PHONE } from "@/data/site";
import SignupButton from "@/components/ui/SignupButton";
import { CheckIcon } from "@/components/ui/Icons";

export default function Package() {
  return (
    <section id="package" className="package">
      <div className="package__head reveal">
        <span className="eyebrow eyebrow--center">The Package</span>
        <h2 className="section-title package__title">
          One package. Everything your practice needs to grow in the community.
        </h2>
        <p className="package__lead">
          Every practice is different — Emmie will walk you through the details and tailor the
          program to your goals.
        </p>
      </div>

      <div className="pk-card reveal">
        <div className="pk-card__aside">
          <span className="pk-card__shine" />
          <div className="pk-card__intro">
            <span className="pk-card__badge">Community Coordinator</span>
            <h3 className="pk-card__title">Business Liaison Manager Package</h3>
            <p className="pk-card__text">
              A dedicated Business Liaison Manager who plans your outreach, represents your
              practice in the community, and brings you qualified leads every month.
            </p>
          </div>

          <div className="pk-card__stat">
            <span className="pk-card__stat-value">4+</span>
            <span className="pk-card__stat-label">
              community events
              <br />
              every month
            </span>
          </div>

          <div className="pk-card__cta">
            <SignupButton className="btn--wrap pk-card__cta-btn">
              Connect with Emmie for the specific details
            </SignupButton>
            <span className="pk-card__call">Or call {PHONE.display}</span>
          </div>
        </div>

        <div className="pk-card__details">
          <span className="pk-card__label">What&apos;s in the package</span>
          <ul className="pk-card__list">
            {PACKAGE_ITEMS.map((item) => (
              <li key={item} className="pk-item">
                <span className="pk-item__check">
                  <CheckIcon size={12} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="pk-card__footnote">*Production and printing fees billed separately.</p>
        </div>
      </div>
    </section>
  );
}
