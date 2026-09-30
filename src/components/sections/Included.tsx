import {
  CALENDAR_EVENTS,
  CALENDAR_FEATURE,
  FEATURES,
  TRUST_FEATURE,
  type Feature,
} from "@/data/home";
import { ArrowRightIcon } from "@/components/ui/Icons";

function IconBadge({ feature, size = 22 }: { feature: Feature; size?: number }) {
  const Icon = feature.icon;
  return (
    <div className={feature.alt ? "icon-badge icon-badge--alt" : "icon-badge"}>
      <Icon size={size} strokeWidth={1.8} />
    </div>
  );
}

function MiniCalendar() {
  return (
    <div className="mini-cal" aria-hidden="true">
      <div className="mini-cal__head">
        <span>THIS MONTH</span>
        <span className="mini-cal__count">4+ EVENTS</span>
      </div>
      <div className="mini-cal__grid">
        {Array.from({ length: 28 }, (_, i) => {
          const delay = CALENDAR_EVENTS[i];
          const isEvent = delay !== undefined;
          return (
            <div
              key={i}
              className={isEvent ? "mini-cal__cell mini-cal__cell--on" : "mini-cal__cell"}
              style={isEvent && delay ? { animationDelay: `${delay}s` } : undefined}
            />
          );
        })}
      </div>
    </div>
  );
}

export default function Included() {
  return (
    <section id="included" className="included">
      <div className="included__head reveal">
        <div className="included__intro">
          <span className="eyebrow">What&apos;s Included</span>
          <h2 className="section-title">Everything your Community Liaison Coordinator delivers.</h2>
        </div>
        <p className="included__lead">
          One dedicated partner to generate awareness, build relationships, and grow your presence in the community.
        </p>
      </div>

      <div className="feature-grid reveal">
        {/* Wide card with calendar preview */}
        <div className="card feature feature--wide feature--split">
          <div className="feature__body">
            <IconBadge feature={CALENDAR_FEATURE} size={24} />
            <h3 className="feature__title">{CALENDAR_FEATURE.title}</h3>
            <p className="feature__text">{CALENDAR_FEATURE.text}</p>
          </div>
          <MiniCalendar />
        </div>

        {FEATURES.map((feature) => (
          <div key={feature.title} className={feature.dark ? "card card--dark feature" : "card feature"}>
            <IconBadge feature={feature} />
            <h3 className="feature__title">{feature.title}</h3>
            <p className="feature__text">{feature.text}</p>
            {feature.note && <p className="feature__note">{feature.note}</p>}
          </div>
        ))}

        {/* Wide closing card */}
        <div className="card feature feature--wide feature--row">
          <IconBadge feature={TRUST_FEATURE} size={24} />
          <div className="feature__body">
            <h3 className="feature__title">{TRUST_FEATURE.title}</h3>
            <p className="feature__text">{TRUST_FEATURE.text}</p>
            <a className="card-more" href="#signup">
              Get started <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
