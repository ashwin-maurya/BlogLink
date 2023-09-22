import { CardData } from "../../Component/constants";
import { BlogCard } from "../../Component/common";
import { useContext, useEffect, useMemo } from "react";
import blogContext from "../../Helper/Context/blogContext";

export default function LeftSection() {
  const context = useContext(blogContext);
  const { blog, getblogs } = context;
  useEffect(() => {
    // async () => {
    // await
    getblogs();
    // };
    console.log(blog);
  }, []);

  return (
    <section className=" flex justify-center max-lg:justify-start rounded-md">
      <div className=" grid grid-cols-1  w-full place-items-center">
        {blog.map((card, index) => (
          <BlogCard key={index} card={card}></BlogCard>
        ))}
      </div>
    </section>
  );
}
