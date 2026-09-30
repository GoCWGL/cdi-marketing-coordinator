import { PHONE, SITE } from "@/data/site";

export default function TopStrip() {
  return (
    <div className="top-strip">
      <div className="top-strip__inner">
        <span className="top-strip__lead">
          <span className="pulse-dot" />
          Done-for-you community outreach for healthcare practices
        </span>
        <span className="top-strip__right">
          <span>{SITE.tagline}</span>
          <a href={PHONE.href}>{PHONE.display}</a>
        </span>
      </div>
    </div>
  );
}
