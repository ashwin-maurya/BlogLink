import React, { useContext, useEffect } from "react";
import MapFilteredData from "../../Component/FilterDataComponents/MapFilteredData";
import blogContext from "../../Helper/Context/blogContext";

export default function UserBlogs({ username }) {
  const context = useContext(blogContext);
  const { filterblogs, filterData } = context;
  useEffect(() => {
    // filterblogs(username);
  }, []);
  return (
    <>
      <section className="relative py-4 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 bg-white  dark:bg-darkBgPrimary w-full mb-6 shadow-xl rounded-lg p-10">
            {/* <MapFilteredData filterData={filterData}></MapFilteredData> */}
            <div>Hellow</div>
          </div>
        </div>
      </section>
    </>
  );
}
