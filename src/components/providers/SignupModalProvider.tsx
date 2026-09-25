"use client";

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";
import SignupModal from "@/components/ui/SignupModal";

type SignupModalContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const SignupModalContext = createContext<SignupModalContextValue | null>(null);

export function SignupModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <SignupModalContext.Provider value={value}>
      {children}
      <SignupModal isOpen={isOpen} onClose={close} />
    </SignupModalContext.Provider>
  );
}

export function useSignupModal() {
  const ctx = useContext(SignupModalContext);
  if (!ctx) throw new Error("useSignupModal must be used inside <SignupModalProvider>");
  return ctx;
}
