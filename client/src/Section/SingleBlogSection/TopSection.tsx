import React from "react";

const TopSection = ({ blog1 }) => {
  // console.log(blog1)
  return (
    <div className="flex bg-slate-50 dark:text-white dark:bg-darkBgMain flex-col gap-20 py-10 justify-center items-center w-[70%]  ">
      <div className=" relative flex  flex-col   justify-center  gap-2">
        <p className="tracking-[1.5px] text-[15px]   rounded-md    font-semibold dark:text-secondary text-primaryMain m-1 uppercase">
          {blog1?.Category}
        </p>
        <h1 className=" my-[-26px] font-bold leading-[75px] text-[40px] font-montserrat capitalize">
          {blog1?.Title}{" "}
        </h1>
      </div>
      <div className=" mt-[-35px] overflow-hidden w-[100%] h-[400px] max-lg:h-auto">
        <img
          className="overflow-hidden w-[100%]"
          src={blog1?.Blog_url}
          alt="Blog_url"
        />
      </div>
    </div>
  );
};

export default TopSection;
