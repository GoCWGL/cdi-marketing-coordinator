import { Fragment } from "react";
import { MARQUEE_ITEMS } from "@/data/home";

function MarqueeGroup({ hidden }: { hidden?: boolean }) {
  return (
    <div className="marquee__group" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item) => (
        <Fragment key={item}>
          {item}
          <span className="marquee__star">✦</span>
        </Fragment>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="marquee-band" aria-label="Where we represent you">
      <div className="marquee">
        {/* Two identical groups so the -50% translate loops seamlessly */}
        <div className="marquee__track">
          <MarqueeGroup />
          <MarqueeGroup hidden />
        </div>
      </div>
    </section>
  );
}
