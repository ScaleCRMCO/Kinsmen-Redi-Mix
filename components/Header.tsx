"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#service-area", label: "Service Area" },
  { href: "#contact", label: "Contact" },
];

// Transparent over the hero, solid white once the page scrolls (like infinityconstructions.com.au).
export default function Header() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${solid ? "header-solid" : ""}`}>
      <div className="header-inner">
        <a href="/" aria-label="Kinsmen Redi-Mix home">
          <Image
            src={solid ? "/logo-dark.svg" : "/logo.svg"}
            alt="Kinsmen Redi-Mix"
            width={120}
            height={90}
            priority
            className="header-logo"
          />
        </a>
        <nav className="header-nav">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}
