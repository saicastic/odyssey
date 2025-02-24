"use client";

import NodeCanvas from "../snippets/NodeCanvas";
import styles from "../styles/sections/Hero.module.css";
import { useEffect, useRef } from "react";

const Hero = () => {
  return (
    <section className={styles.heroSec}>
      <div className={styles.hero}></div>
    </section>
  );
};

export default Hero;
