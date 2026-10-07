"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/assets/images/logo.webp";

// Minimum time the loader stays up, so it reads as a deliberate transition
// rather than a flicker on fast (prefetched) navigations.
const MIN_VISIBLE_MS = 700;

export default function PageLoader() {
  const pathname = usePathname();
  // Rendered visible on the server so it covers the first paint.
  const [active, setActive] = useState(true);
  const shownAt = useRef(0);
  const firstPath = useRef(true);

  // Hide after the minimum time once a page (initial or new) has rendered.
  useEffect(() => {
    const wasFirst = firstPath.current;
    firstPath.current = false;

    // Back/forward navigation doesn't go through a link click, so show it here.
    if (!wasFirst && shownAt.current === 0) {
      shownAt.current = Date.now();
      setActive(true);
    }

    const elapsed = wasFirst ? 0 : Date.now() - shownAt.current;
    const timer = window.setTimeout(() => {
      setActive(false);
      shownAt.current = 0;
    }, Math.max(MIN_VISIBLE_MS - elapsed, 0));

    return () => window.clearTimeout(timer);
  }, [pathname]);

  // Show immediately when an internal link to a different page is clicked.
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || !anchor.href) return;
      if (anchor.target && anchor.target !== "_self") return;
      if (anchor.hasAttribute("download")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      // Same page (e.g. "/#team" while on "/") just scrolls — no loader.
      if (url.pathname === window.location.pathname) return;

      shownAt.current = Date.now();
      setActive(true);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <div
      className={`page-loader${active ? " is-active" : ""}`}
      role="status"
      aria-live="polite"
      aria-hidden={!active}
    >
      <Image className="page-loader__logo" src={logo} alt="" priority />
      <span className="page-loader__dots" aria-hidden="true">
        <span className="page-loader__dot" />
        <span className="page-loader__dot" />
        <span className="page-loader__dot" />
      </span>
      <span className="page-loader__sr">{active ? "Loading…" : ""}</span>
    </div>
  );
}
