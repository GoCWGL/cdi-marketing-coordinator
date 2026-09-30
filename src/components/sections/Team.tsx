import Image from "next/image";
import emmie from "@/assets/images/emmie.webp";
import { EMMIE, LIAISON_DUTIES } from "@/data/home";
import CheckBadge from "@/components/ui/CheckBadge";

export default function Team() {
  return (
    <section id="team" className="team">
      <div className="team__inner">
        <div className="team__grid">
          <div className="team-photo reveal">
            <div className="team-photo__ring" />
            <div className="team-photo__frame">
              <Image
                className="team-photo__img"
                src={emmie}
                alt={`${EMMIE.name}, CEO & President of Champion Dentists Inc.`}
                sizes="(max-width: 960px) 420px, 480px"
                placeholder="blur"
              />
            </div>
            <div className="stat-badge stat-badge--lg team-photo__badge float">
              <span className="stat-badge__value">30+ yrs</span>
              <span className="stat-badge__label">in the health industry</span>
            </div>
          </div>

          <div className="team__bio reveal">
            <span className="eyebrow">Meet Emmie</span>
            <div className="team__name-group">
              <h2 className="section-title team__name">{EMMIE.name}</h2>
              <span className="team__role">{EMMIE.role}</span>
            </div>
            {EMMIE.bio.map((para) => (
              <p key={para.slice(0, 24)} className="team__para">
                {para}
              </p>
            ))}
            <div className="team__tags">
              {EMMIE.credentials.map((credential) => (
                <span key={credential} className="team__tag">
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="team__do">
          <div className="team__do-head reveal">
            <span className="eyebrow">What I Do</span>
            <h3 className="team__do-title">As a Community Liaison Coordinator</h3>
          </div>
          <div className="do-grid reveal">
            {LIAISON_DUTIES.map((duty) => (
              <div key={duty} className="do-item">
                <CheckBadge alt />
                <span>{duty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
