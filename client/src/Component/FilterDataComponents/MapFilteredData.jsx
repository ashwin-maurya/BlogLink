import React from "react";
import BlogCard from "../common/BlogCard";

const MapFilteredData = ({ filterData }) => {
  return (
    <div className="w-[65%] max-lg:w-[100%] max-lg:border-0 ">
      <div className=" grid grid-cols-1  w-full place-items-center">
        {/* <div className="">{filterData[0]?.Author_name}</div> */}
        {filterData?.map((card, index) => {
          return <BlogCard key={index} card={card}></BlogCard>;
        })}
      </div>
    </div>
  );
};

export default MapFilteredData;
