import React from "react";

import Hero from "../Section/LandingSection/Hero";
import MiddleCards from "../Section/LandingSection/MiddleCards";
import Newsletter from "../Section/LandingSection/Newsletter";
import Reviews from "../Section/LandingSection/Reviews";
export default function LandingPage() {
  return (
    <>
      <section className="container w-full">
        <Hero />
        <MiddleCards></MiddleCards>
        <Reviews></Reviews>
        <Newsletter></Newsletter>
      </section>
    </>
  );
}
