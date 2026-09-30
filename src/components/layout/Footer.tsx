import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.webp";
import { NAV_LINKS, PHONE, SITE } from "@/data/site";
import SignupButton from "@/components/ui/SignupButton";
import { ArrowUpIcon, PhoneIcon } from "@/components/ui/Icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__brand">
            <Link href="/" className="site-footer__logo-link">
              <Image className="site-footer__logo" src={logo} alt="Champion Dentists & Doctors" />
            </Link>
            <p className="site-footer__tagline">
              Empowering practices to thrive — through community outreach, referral partnerships,
              and qualified leads.
            </p>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__head">Explore</span>
            <nav className="site-footer__nav" aria-label="Footer">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} className="footer-link" href={link.href}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__head">Get in touch</span>
            <a href={PHONE.href} className="site-footer__phone">
              <span className="site-footer__phone-icon">
                <PhoneIcon size={17} />
              </span>
              {PHONE.display}
            </a>
            <SignupButton size="sm" className="site-footer__cta">
              Connect With Us
            </SignupButton>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span className="site-footer__copy">
            © {year} {SITE.name}. All rights reserved.
          </span>
          <a href="#top" className="to-top" aria-label="Back to top">
            <ArrowUpIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
