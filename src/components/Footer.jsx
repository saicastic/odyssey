"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    gsap.fromTo(
      footer,
      { opacity: 0, y: 100 }, // Initial state (hidden, pushed down)
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: footer,
          start: "top bottom", // When the top of footer enters the bottom of viewport
          end: "top center", // Animation completes when the footer is in the center
          scrub: true, // Smooth animation with scroll
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white w-full  text-center absolute bottom-0"
    >
      <h2 className="text-2xl font-semibold">Footer Content</h2>
      <p>Scroll to see the animation!</p>
    </footer>
  );
};

export default Footer;
