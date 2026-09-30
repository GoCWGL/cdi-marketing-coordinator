import { WORK_ITEMS } from "@/data/home";

export default function HowWeWork() {
  return (
    <section id="how" className="how">
      <div className="how__head reveal">
        <span className="eyebrow">Service Standards</span>
        <h2 className="section-title">Clear standards behind every event.</h2>
      </div>

      <div className="work-grid reveal">
        {WORK_ITEMS.map((item, i) => (
          <div key={item.label} className="work-card">
            <span className="work-card__num">
              {String(i + 1).padStart(2, "0")} — {item.label.toUpperCase()}
            </span>
            <div className="work-card__line" />
            <h3 className="work-card__title">{item.title}</h3>
            <p className="work-card__text">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
