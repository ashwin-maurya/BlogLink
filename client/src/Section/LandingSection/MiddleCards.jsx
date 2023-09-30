import React, { useContext, useEffect } from "react";
import { LandingCards } from "../../Component/common";
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
      <div className="max-lg:mt-10">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs text-primaryMain  dark:text-secondary tracking-[5px] font-medium title-font">
            E X P L O R E
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-darkTextMain">
            Trending Reads of the Day
          </h1>
        </div>
        <div className="box-border px-2 max-md:mx-1 gap-6 sm:columns-1 mx-10 mb-10 md:columns-2 lg:columns-3 xl:columns-3">
          {blog?.slice(0, 6)?.map((card, index) => (
            <LandingCards key={index} card={card}></LandingCards>
          ))}
        </div>
      </div>
    </>
  );
};

export default ThreeCarketeers;
