import React from "react";
import { BlogCard } from "../../Component/common";
export default function UserBlogs({ filterData }) {
  return (
    <>
      <section className="relative py-4 ">
        <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 bg-white  dark:bg-secondary w-full mb-6 rounded-lg p-10">
            <h1 className="text-xl font-semibold my-1">Your blogs</h1>
            {filterData?.map((card, index) => {
              return <BlogCard key={index} card={card}></BlogCard>;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
