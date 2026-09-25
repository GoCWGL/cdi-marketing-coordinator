"use client";

import { useState } from "react";
import { STEPS } from "@/data/home";
import CheckBadge from "@/components/ui/CheckBadge";

const pad = (n: number) => String(n + 1).padStart(2, "0");

/** "The Approach" tabs — auto-advance when the 7s progress bar fills; pause on hover. */
export default function Stepper() {
  const [active, setActive] = useState(0);
  // Bumped on every change so the active progress bar remounts and restarts.
  const [cycle, setCycle] = useState(0);

  const show = (i: number) => {
    setActive(i);
    setCycle((c) => c + 1);
  };

  return (
    <div className="stepper reveal">
      <div className="stepper__tabs" role="tablist" aria-label="How it works">
        {STEPS.map((step, i) => {
          const isActive = i === active;
          return (
            <button
              key={step.title}
              type="button"
              role="tab"
              id={`step-tab-${i}`}
              aria-controls={`step-panel-${i}`}
              aria-selected={isActive}
              className={isActive ? "step-tab is-active" : "step-tab"}
              onClick={() => show(i)}
            >
              <span className="step-tab__num">{pad(i)}</span>
              <span className="step-tab__body">
                <span className="step-tab__title">{step.title}</span>
                <span className="step-tab__sub">{step.summary}</span>
              </span>
              <span
                key={isActive ? `active-${cycle}` : "idle"}
                className="step-tab__bar"
                onAnimationEnd={isActive ? () => show((i + 1) % STEPS.length) : undefined}
              />
            </button>
          );
        })}
      </div>

      <div className="stepper__panels">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            id={`step-panel-${i}`}
            role="tabpanel"
            aria-labelledby={`step-tab-${i}`}
            className={i === active ? "step-panel is-active" : "step-panel"}
          >
            <div className="step-panel__head">
              <span className="step-panel__num">{pad(i)}</span>
              <span className="step-panel__tag">{step.tag}</span>
            </div>
            <h3 className="step-panel__title">{step.title}</h3>
            <p className="step-panel__text">{step.description}</p>
            <div className="step-panel__points">
              {step.points.map((point) => (
                <div key={point} className="point">
                  <CheckBadge alt />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
