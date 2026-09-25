import Stepper from "./Stepper";

export default function Approach() {
  return (
    <section id="approach" className="approach">
      <div className="approach__inner">
        <div className="approach__intro reveal">
          <span className="eyebrow eyebrow--light">The Approach</span>
          <h2 className="section-title section-title--light">
            We represent your practice in the community — every month.
          </h2>
          <p className="approach__lead">
            Your Business Liaison Manager plans your outreach, shows up at local chambers of
            commerce and strategic organizations, and turns new connections into qualified leads
            through clear communication, strong patient advocacy, and integrity.
          </p>
        </div>

        <Stepper />
      </div>
    </section>
  );
}
