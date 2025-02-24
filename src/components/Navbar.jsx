"use client";

import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TransitionLink from "./snippets/TransitionLink";

export default function Navbar() {
  const linkRef = useRef(null);

  useEffect(() => {
    const link = linkRef.current;
    gsap.to(link, {
      scale: 1.1,
      duration: 0.5,
      ease: "power1.inOut",
      paused: true,
    });

    link.addEventListener("mouseenter", () => {
      gsap.to(link, { scale: 1.1 });
    });

    link.addEventListener("mouseleave", () => {
      gsap.to(link, { scale: 1 });
    });
  }, []);

  return (
    <header className={`${styles.navheader} `}>
      <nav className={`${styles.navMobile}`}></nav>
      <nav className={`${styles.navDesktop} container ${styles.glowingBorder}`}>
        <div className={`${styles.navDesktopInner}`}>
          <div className={`${styles.navLeft}`}>
            <Link href="/">
              <div className="logo" ref={linkRef}>
                Odyssey
              </div>
            </Link>
          </div>

          <div className={`${styles.navMiddle}`}>
            <ul>
              <li>
                <TransitionLink href="/events">Events</TransitionLink>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/sponsors">Sponsors</Link>
              </li>
              <li>
                <Link href="/team">Team</Link>
              </li>
            </ul>
          </div>
          <div className={`${styles.navRight}`}>
            <button>Register</button>
          </div>
        </div>
      </nav>
    </header>
  );
}
