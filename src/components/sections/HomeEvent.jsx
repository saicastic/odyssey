"use client";

import { forwardRef, useEffect, useRef } from "react";
import HomeEventCard from "../snippets/HomeEventCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const HomeEvent = forwardRef(({}, ref) => {
  return (
    <section className="EventSec">
      {[...Array(4)].map((_, index) => (
        <HomeEventCard
          key={index}
          id={`card-${index + 1}`}
          frontSrc="/watergranny.jpg"
          frontAlt="Card Image"
          backText="Your card Details Appear here"
          ref={(el) => (ref.current[index] = el)}
        />
      ))}
    </section>
  );
});

export default HomeEvent;
