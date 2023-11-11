import React, { useState } from "react";
import { target } from "../../Assets/icons";
import ShareModal from "./ShareModal";
const TopicBar = ({ navbarRef, card }) => {
  const [shareModalVisible, setShareModalVisible] = useState(false);

  const sharemodal = () => {
    setShareModalVisible(!shareModalVisible);
  };
  return (
    <>
      {shareModalVisible && <ShareModal sharemodal={sharemodal}></ShareModal>}

      <section
        ref={navbarRef}
        className="fixed  flex justify-between  items-center border-b-[1px] border-gray-200 dark:border-darkBorderAll  dark:bg-darkBgMain dark:text-white w-full transition-all ease-in-out duration-300 delay-300"
      >
        <div className="pl-10  items-center flex  dark:hover:text-secondary  py-3 tracking-wider ">
          <div className=" pr-3 border-gray-400 border-r-2">
            <img src={target} alt="" />
          </div>

          <p className="pl-3 font-bold text-black capitalize dark:text-white text-[23px]">
            {card?.Title}
          </p>
        </div>
        <div className="flex gap-5  mr-4">
          <i className="dark:text-white fa fa-comment  text-gray-600 hover:text-primaryMain dark:hover:text-primaryMain px-2 text-[20px] "></i>
          <i className="dark:text-white fa fa-bookmark  text-gray-600 hover:text-primaryMain dark:hover:text-primaryMain px-2 text-[20px] "></i>
          <i
            className="dark:text-white block fa fa-share  text-gray-600 hover:text-primaryMain dark:hover:text-primaryMain px-2 text-[20px]"
            onClick={sharemodal}
          ></i>
        </div>
      </section>
    </>
  );
};

export default TopicBar;
