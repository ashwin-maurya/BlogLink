import React, { useContext, useEffect } from "react";

import Hero from "../Section/LandingSection/Hero";
import MiddleCards from "../Section/LandingSection/MiddleCards";
import { toast } from "react-toastify";
import Newsletter from "../Section/LandingSection/Newsletter";
import Reviews from "../Section/LandingSection/Reviews";
import AuthContext from "../Helper/Context/AuthContext";
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
