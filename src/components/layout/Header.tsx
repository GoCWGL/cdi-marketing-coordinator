"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.webp";
import { NAV_LINKS, PHONE } from "@/data/site";
import SignupButton from "@/components/ui/SignupButton";
import { CloseIcon, MenuIcon } from "@/components/ui/Icons";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        <a href="#top" className="site-header__logo-link" aria-label="Champion Dentists & Doctors — home">
          <Image
            className="site-header__logo"
            src={logo}
            alt="Champion Dentists & Doctors"
            priority
          />
        </a>

        <nav className="site-header__nav" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <SignupButton size="sm" className="site-header__cta">
            Connect With Us
          </SignupButton>
          <button
            type="button"
            className="icon-btn site-header__menu-btn"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>

        <span className="site-header__progress" aria-hidden="true" />
      </div>

      <nav className="mobile-menu" id="mobile-menu" aria-label="Mobile" hidden={!menuOpen}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} className="mobile-menu__link" href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <div className="mobile-menu__actions">
          <SignupButton size="sm" onClick={closeMenu}>
            Connect With Us
          </SignupButton>
          <a className="btn-outline" href={PHONE.href}>
            {PHONE.display}
          </a>
        </div>
      </nav>
    </header>
  );
}
