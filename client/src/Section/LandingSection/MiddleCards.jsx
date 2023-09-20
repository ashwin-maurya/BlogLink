import React from "react";
import { LandingCards } from "../../Component/common";
import { CardData } from "../../Component/constants";

const ThreeCarketeers = () => {
  return (
    <>
      <div class="box-border px-2 max-md:mx-1 sm:columns-1 mb-10 md:columns-2 lg:columns-3 xl:columns-3">
        {CardData.map((card, index) => (
          <LandingCards key={index} card={card}></LandingCards>
        ))}
      </div>
    </>
  );
};

export default ThreeCarketeers;
