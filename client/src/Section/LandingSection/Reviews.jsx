import React, { useState, useEffect } from "react";
import { reviews } from "../../Component/constants";
export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="my-32 max-lg:my-20 mx-auto ">
        <div className="flex flex-col text-center w-full mb-10">
          <h2 className="text-xs dark:text-secondary text-primaryMain font-medium title-font tracking-[5px]">
            USER EXPERIENCES
          </h2>
        </div>
        <div className="relative flex">
          <button
            className=" text-primaryMain dark:text-secondary hover:underline  hover:bg-gray-100 dark:hover:bg-darkBgPrimary p-5 rounded-r-lg"
            onClick={prevSlide}
          >
            <i className="fa fa-chevron-left text-lg w-5 h-3"></i>
          </button>{" "}
          <div className="xl:w-[50%] lg:w-3/4 w-full mx-auto text-center">
            <i className="fa fa-quote-right text-4xl text-gray-400 dark:text-darkTextPrimary mb-8"></i>
            <p className="leading-relaxed text-lg max-lg:text-md text-lightTextMain dark:text-darkTextMain ">
              {reviews[currentIndex].review}
            </p>
            <span className="inline-block h-1 w-10 rounded bg-primaryMain dark:bg-secondary mt-8 mb-6"></span>
            <img
              src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2022/02/YSaplakoglu_1.jpg"
              alt=""
              className="rounded-full m-auto mb-1 "
              width={35}
              height={35}
            />
            <h2 className="font-medium title-font tracking-wider text-sm text-lightTextMain dark:text-darkTextMain">
              {reviews[currentIndex].author}
            </h2>
            <p className="text-gray-500 dark:text-darkTextPrimary">
              {reviews[currentIndex].jobTitle}
            </p>
          </div>
          <button
            className=" text-primaryMain dark:text-secondary hover:underline  hover:bg-gray-100 dark:hover:bg-darkBgPrimary p-5  rounded-l-lg"
            onClick={nextSlide}
          >
            <i className="fa fa-chevron-right text-lg w-5 h-3"></i>
          </button>
          <div className="absolute w-[100%] flex justify-between"></div>
        </div>
      </div>
    </>
  );
}
