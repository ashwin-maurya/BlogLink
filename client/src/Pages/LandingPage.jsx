import React from "react";

import Hero from "../Section/LandingSection/Hero";
import MiddleCards from "../Section/LandingSection/MiddleCards";
export default function LandingPage() {
  return (
    <>
      <section className="container w-full">
        <Hero />
        <MiddleCards></MiddleCards>
      </section>
    </>
  );
}
