import { useContext, useEffect, useState } from "react";

import FilterContext from "../../Helper/Context/FilterContext";
import CategoryBlogs from "../../Component/SingleBlogComponents/CategoryBlogs";
import { Link } from "react-router-dom";

const RightSection = ({ blog }) => {
  const [catBlog, setcatBlog] = useState([]);
  const context = useContext(FilterContext);
  const { getcategoryblogs } = context;

  useEffect(() => {
    async function func() {
      setcatBlog(await getcategoryblogs(blog?.Category));
    }
    func();
  }, [blog]);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="w-[90%] p-2 dark:border-gray-700">
        <h5 className="text-xl w-full my-2 font-bold leading-none text-gray-900 dark:text-white">
          Similar Blogs
        </h5>
        <ul className="divide-y divide-gray-200 dark:divide-darkBorderAll">
          {catBlog?.map((blog, index) => (
            <CategoryBlogs key={blog._id} blog={blog}></CategoryBlogs>
          ))}
        </ul>
        <Link
          to="/blog"
          className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
        >
          View all
        </Link>
      </div>
    </section>
  );
};

export default RightSection;
