import Image from "next/image";
import emmie from "@/assets/images/emmie.webp";
import { EMMIE, HERO_STATS } from "@/data/home";
import { PHONE } from "@/data/site";
import SignupButton from "@/components/ui/SignupButton";
import { ArrowRightIcon } from "@/components/ui/Icons";
import HeroOrbit from "./HeroOrbit";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__grid">
        <div className="hero__content">
          <span className="hero-pill rise d1">
            <span className="hero-pill__tag">
              <span className="pulse-dot" />
              Community Coordinator
            </span>
            Business Liaison Manager Program
          </span>

          <h1 className="hero__title">
            <span className="hero__line">
              <span className="hero__line-inner">Build trust.</span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">Build visibility.</span>
            </span>
            <span className="hero__line">
              <span className="hero__line-inner">
                <span className="hero__highlight">
                  Build your patient base.
                  <svg
                    className="hero__underline"
                    viewBox="0 0 400 18"
                    preserveAspectRatio="none"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path d="M3 13C90 4 210 3 397 10" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>
              </span>
            </span>
          </h1>

          <p className="hero__lead rise d3">
            A dedicated Business Liaison Manager who represents your practice in the community —
            attending at least 4 events a month, building referral partnerships, and generating
            qualified leads to strengthen your local reputation.
          </p>

          <div className="hero__actions rise d4">
            <SignupButton variant="dark">Sign Up Now</SignupButton>
            <a className="btn-outline" href={PHONE.href}>
              Call {PHONE.display}
            </a>
          </div>

          <a href="#team" className="trust-row rise d5">
            <Image className="trust-row__avatar" src={emmie} alt="" width={52} height={52} />
            <span className="trust-row__text">
              <span className="trust-row__name">Led by {EMMIE.shortName}</span>
              <span className="trust-row__meta">{EMMIE.summary}</span>
            </span>
            <span className="trust-row__arrow">
              <ArrowRightIcon size={16} />
            </span>
          </a>
        </div>

        <HeroOrbit />
      </div>

      <div className="stats reveal">
        {HERO_STATS.map((stat) => (
          <div key={stat.value} className="stat">
            <span className={stat.tone === "deep" ? "stat__value stat__value--deep" : "stat__value"}>
              {stat.value}
            </span>
            <span className="stat__label">
              {stat.label[0]}
              <br />
              {stat.label[1]}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
