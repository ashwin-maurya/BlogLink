import React from "react";

const TitleandContent = ({ blogs, getInput }) => {
  return (
    <div className="  flex-col  flex  bg-gray-100 p-3 rounded ">
      <div className="">Title</div>
      <div className="">
        <input
          name="Title"
          value={blogs?.Title}
          onChange={(e) => {
            getInput(e);
          }}
          className="dark:text-darkTextMain text-gray-900 border-2 dark:bg-darkBgPrimary border-gray-300 dark:border-gray-700 hover:border-primaryMain hover:dark:border-secondary focus:border-primaryMain focus:dark:border-secondary outline-none transition-colors duration-300 ease-in-out  max-lg:mt-2  w-full  rounded-md p-3 text-[23px]"
          type="text"
        />
      </div>
    </div>
  );
};

export default TitleandContent;
