import React, { useContext, useEffect } from "react";
import { LandingCards } from "../../Component/common";
import { CardData } from "../../Component/constants";
import blogContext from "../../Helper/Context/blogContext";

const ThreeCarketeers = () => {
  const context = useContext(blogContext);
  const { getblogs, blog } = context;

  useEffect(() => {
    const func = async () => {
      getblogs();
    };
    func();
  }, []);
  return (
    <>
      <div className="box-border px-2 max-md:mx-1 gap-6 sm:columns-1 mx-10 mb-10 md:columns-2 lg:columns-3 xl:columns-3">
        {blog.map((card, index) => (
          <LandingCards key={index} card={card}></LandingCards>
        ))}
      </div>
    </>
  );
};

export default ThreeCarketeers;
