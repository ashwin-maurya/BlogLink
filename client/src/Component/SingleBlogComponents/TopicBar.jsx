import { useState } from "react";
import { useRef } from "react";
import { target } from "../../Assets/icons";

const TopicBar = ({ navbarRef, card }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        ref={navbarRef}
        className="fixed  flex justify-between  items-center bg-bgBlue dark:bg-darkBgPrimary dark:text-white w-full transition-all ease-in-out duration-300 delay-300"
      >
        <div className="pl-10  items-center flex  dark:hover:text-secondary  py-3 tracking-wider ">
          <div className=" pr-3 border-gray-400 border-r-2">
            <img src={target} alt="" />
          </div>

          <p className="pl-3 font-bold text-slate-500 text-[23px]">
            {card?.Title}
          </p>
        </div>
        <div
          className="flex gap-10    "
          onMouseLeave={() => setIsHovered(false)}
        >
          <i
            htmlFor="comment"
            className="dark:text-white fa fa-comment  text-gray-600 hover:text-primaryMain text-[20px] "
          ></i>
          <p className="border-[1px] border-gray-400"></p>
          <i className="dark:text-white fa fa-bookmark  text-gray-600 hover:text-primaryMain text-[20px] "></i>
          <p className="border-[1px] border-gray-400"></p>
          <div onMouseEnter={() => setIsHovered(true)}>
            <i
              className={` dark:text-white ${
                isHovered ? "hidden  " : "block"
              } fa fa-share  text-gray-600 hover:text-primaryMain  text-[20px] `}
            ></i>
          </div>
          <div
            className={` w-0 ${
              isHovered ? "w-36" : ""
            } transition-all duration-300 ease-in-out`}
          >
            {isHovered && (
              <div className="flex gap-5">
                <i className="fa text-[26px] fa-linkedin"></i>
                <i className="fa text-[26px] fa-instagram"></i>
                <i className="fa text-[26px] fa-twitter"></i>
                <i className="fa  text-[26px] fa-facebook"></i>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TopicBar;
