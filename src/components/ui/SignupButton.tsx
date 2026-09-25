"use client";

import type { ReactNode } from "react";
import { useSignupModal } from "@/components/providers/SignupModalProvider";
import { ArrowRightIcon } from "./Icons";

type Props = {
  children: ReactNode;
  variant?: "orange" | "dark";
  size?: "sm" | "md";
  className?: string;
  /** Runs before the modal opens (e.g. to close the mobile menu). */
  onClick?: () => void;
};

export default function SignupButton({
  children,
  variant = "orange",
  size = "md",
  className,
  onClick,
}: Props) {
  const { open } = useSignupModal();
  const classes = ["btn", `btn--${variant}`, size === "sm" && "btn--sm", className]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      className={classes}
      aria-haspopup="dialog"
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
      <span className="btn__arrow">
        <ArrowRightIcon size={size === "sm" ? 15 : 16} />
      </span>
    </button>
  );
}
