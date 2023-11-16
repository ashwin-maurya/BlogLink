import React from "react";
import { useNavigate } from "react-router";
const CategoryBlogs = ({ blog }) => {
  const navigate = useNavigate();
  // console.log(blog);
  return (
    <>
      <li
        className="py-3 sm:py-4 hover:bg-gray-100 dark:hover:bg-darkBgPrimary px-2 cursor-pointer"
        onClick={() => {
          navigate(`/blogs/${blog._id}`);
        }}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="w-8 h-8" src={blog.Blog_url} alt="Neil image" />
          </div>
          <div className="flex-1 min-w-0 ms-4">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {blog?.Title}
            </p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
              {new Date(blog?.Date).toLocaleString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default CategoryBlogs;
