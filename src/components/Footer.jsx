"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

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
