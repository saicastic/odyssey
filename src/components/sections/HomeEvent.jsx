"use client";

import { useEffect, useReducer } from "react";
import HomeEventCard from "../snippets/HomeEventCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HomeEvent = () => {
  return (
    <section className="EventSec">
      {[...Array(4)].map((_, index) => (
        <HomeEventCard
          key={index}
          id={`card-${index + 1}`}
          frontSrc="/watergranny.jpg"
          frontAlt="Card Image"
          backText="Your card Details Appear here"
        />
      ))}
    </section>
  );
};

export default HomeEvent;
