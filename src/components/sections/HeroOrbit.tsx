import Image from "next/image";
import logo from "@/assets/images/logo.webp";
import { ORBIT_CHIPS, ORBIT_DOTS } from "@/data/home";
import { UserPlusIcon } from "@/components/ui/Icons";

export default function HeroOrbit() {
  return (
    <div className="hero-visual rise d5">
      <div className="orbit orbit--outer">
        {ORBIT_CHIPS.map(({ label, icon: Icon, left, top }) => (
          <div key={label} className="orbit__slot" style={{ left, top }}>
            <div className="chip">
              <span className="chip__icon">
                <Icon size={15} />
              </span>
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="orbit orbit--inner" aria-hidden="true">
        {ORBIT_DOTS.map(({ left, top, ink }) => (
          <div key={`${left}-${top}`} className="orbit__slot" style={{ left, top }}>
            <div className={ink ? "chip-dot chip-dot--ink" : "chip-dot"} />
          </div>
        ))}
      </div>

      <div className="hub">
        <span className="hub__ripple" />
        <span className="hub__ripple hub__ripple--delayed" />
        <div className="hub__core">
          <Image className="hub__logo" src={logo} alt="" />
          <span className="hub__label">YOUR PRACTICE</span>
        </div>
      </div>

      <div className="float-card float-card--lead float">
        <span className="live-dot" />
        <div className="float-card__text">
          <span className="float-card__title">New lead captured</span>
          <span className="float-card__sub">Organized for your team</span>
        </div>
      </div>

      <div className="float-card float-card--partner float">
        <span className="float-card__icon">
          <UserPlusIcon size={18} />
        </span>
        <span className="float-card__text">
          <span className="float-card__title">Referral partner added</span>
          <span className="float-card__sub">Local health provider</span>
        </span>
      </div>

      <div className="stat-badge hero-visual__badge float float--slow">
        <span className="stat-badge__value">4+</span>
        <span className="stat-badge__label">events every month</span>
      </div>
    </div>
  );
}
