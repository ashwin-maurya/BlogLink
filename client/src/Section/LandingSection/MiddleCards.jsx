import React, { useContext, useEffect } from "react";
import { LandingCards } from "../../Component/common";
import blogContext from "../../Helper/Context/blogContext";
import { Link } from "react-router-dom";
import { dark, darkprofileDefault } from "../../Assets/icons";

const ThreeCarketeers = () => {
  const context = useContext(blogContext);
  const { getblogs, blog } = context;

  useEffect(() => {
    getblogs();
  }, []);
  return (
    <>
      <div className="max-lg:mt-10 max-sm:mt-0 overflow-hidden">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs text-primaryMain  dark:text-secondary tracking-[5px] font-medium title-font">
            E X P L O R E
          </h2>
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 dark:text-darkTextMain">
            Trending Reads of the Day
          </h1>
        </div>

        <div className="box-border px-2 max-md:mx-1 gap-6 max-sm:columns-2 max-sm:gap-0 sm:columns-2 mx-10 mb-10 md:columns-2 lg:columns-3 xl:columns-3 max-sm:p-0">
          {blog?.slice(0, 6)?.map((card, index) => (
            <LandingCards key={index} card={card}></LandingCards>
          ))}
        </div>
        <div className="flex flex-col text-center w-full mb-10 ">
          <Link
            to="/blog"
            className="text-md font-semibold text-primaryMain   hover:text-blue-400 cursor-pointer "
          >
            Read More...
          </Link>
        </div>
      </div>
    </>
  );
};

export default ThreeCarketeers;
