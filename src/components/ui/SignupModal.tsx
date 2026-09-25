"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { SIGNUP_FORM } from "@/data/site";
import { CloseIcon } from "./Icons";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SignupModal({ isOpen, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock page scroll, focus the close button, close on Escape, restore focus.
  useEffect(() => {
    if (!isOpen) return;

    const lastFocus = document.activeElement as HTMLElement | null;
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
      lastFocus?.focus?.();
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* Kept mounted (just hidden) so the form iframe is ready when opened */}
      <div
        className="modal-overlay"
        hidden={!isOpen}
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="signup-title">
          <button
            ref={closeRef}
            type="button"
            className="modal__close"
            aria-label="Close form"
            onClick={onClose}
          >
            <CloseIcon size={18} strokeWidth={2.4} />
          </button>

          <div className="modal__header">
            <span className="eyebrow">Community Coordinator</span>
            <h2 id="signup-title" className="modal__title">
              Connect with Emmie
            </h2>
            <p className="modal__text">
              Share a few details and Emmie will personally reach out with the specific details of
              the Community Coordinator program for your practice.
            </p>
          </div>

          <div className="modal__body">
            <div className="modal__form">
              <iframe
                src={SIGNUP_FORM.src}
                id={`inline-${SIGNUP_FORM.id}`}
                title={SIGNUP_FORM.name}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name={SIGNUP_FORM.name}
                data-height={SIGNUP_FORM.height}
                data-layout-iframe-id={`inline-${SIGNUP_FORM.id}`}
                data-form-id={SIGNUP_FORM.id}
                data-cookie-consent="true"
                data-cookie-consent-provider="auto"
              />
            </div>
          </div>
        </div>
      </div>

      <Script src={SIGNUP_FORM.embedScript} strategy="lazyOnload" />
    </>
  );
}
