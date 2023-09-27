import React from "react";

import Hero from "../Section/LandingSection/Hero";
import MiddleCards from "../Section/LandingSection/MiddleCards";
import { toast } from "react-toastify";
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
