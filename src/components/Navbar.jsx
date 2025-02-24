"use client";

import Link from "next/link";
import styles from "./styles/Navbar.module.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TransitionLink from "./snippets/TransitionLink";
import Image from "next/image";

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
            <TransitionLink href="/">
              <div className="logo" ref={linkRef}>
                <Image
                  src={"/odyssey_circle_logo.png"}
                  width={100}
                  height={100}
                  alt="navbar logo"
                />
              </div>
            </TransitionLink>
          </div>

          <div className={`${styles.navMiddle}`}>
            <ul>
              <li>
                <TransitionLink href="/events">Events</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/about">About Us</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/sponsors">Sponsors</TransitionLink>
              </li>
              <li>
                <TransitionLink href="/team">Team</TransitionLink>
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
