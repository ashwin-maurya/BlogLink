import React from "react";

import Hero from "../Section/LandingSection/Hero";
import ThreeCarketeers from "../Section/LandingSection/ThreeCarketeers";
export default function LandingPage() {
  return (
    <>
      <section className="container w-full">
        <Hero />
        <ThreeCarketeers></ThreeCarketeers>
      </section>
    </>
  );
}
