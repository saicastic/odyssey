import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeEvent from "@/components/sections/HomeEvent";
import HomePastExperience from "@/components/sections/HomePastExperience";
import HomeSponsors from "@/components/sections/HomeSponsors";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeEvent />
      <HomeSponsors />
      <HomePastExperience />
    </>
  );
}
