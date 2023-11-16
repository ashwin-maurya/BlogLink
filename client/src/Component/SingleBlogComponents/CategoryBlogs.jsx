import React from "react";
import { useNavigate } from "react-router";
const CategoryBlogs = ({ blog }) => {
  const navigate = useNavigate();
  // console.log(blog);
  return (
    <article className="flex items-center rounded-sm  p-[10px]    bg-gray-200 mb-2 flex-col ">
      <div
        onClick={() => {
          navigate(`/blogs/${blog._id}`);
        }}
      >
        <img
          src={blog.Blog_url}
          alt="blog img"
          className="w-[150px]    max-md:mx-4 object-cover"
        />
      </div>
      <div className=" ">
        <p className="text-[14px] font-semibold ">{blog?.Title}</p>
      </div>
    </article>
  );
};

export default CategoryBlogs;
