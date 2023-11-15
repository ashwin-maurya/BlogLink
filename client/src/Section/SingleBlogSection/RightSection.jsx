import { useContext, useEffect, useState } from "react";
import { Share } from "../../Component/common";
import { shareData } from "../../Component/constants";
import FilterContext from "../../Helper/Context/FilterContext";
import CategoryBlogs from "../../Component/SingleBlogComponents/CategoryBlogs";

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
    <section className="flex max-2xl:mt-1     flex-col mt-[8%] justify-center items-center ">
      <div className="max-xl:flex max-xl:flex-col  pb-8 border-b-2 items-center justify-center flex flex-col max-xl:justify-center max-xl:items-center">
        <p className="text-3xl max-md:text-[26px] font-semibold py-3">
          Share the article
        </p>
        {
          <ul className="grid grid-cols-2  max-xl:gap-5 justify-start items-center gap-2  ">
            {shareData.map((share, index) => (
              <Share share={share} check={false} key={index}></Share>
            ))}
          </ul>
        }
      </div>

      <div className=" mt-20 ">
        <p>Also from {blog?.Category} blogs</p>
        <div className="mt-4  max-md:w-full flex flex-col justify-center items-center">
          {catBlog?.map((blog, index) => (
            <CategoryBlogs key={blog._id} blog={blog}></CategoryBlogs>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSection;
