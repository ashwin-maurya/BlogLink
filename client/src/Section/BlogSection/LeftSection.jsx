import { BlogCard } from "../../Component/common";
import { useContext, useEffect, useState } from "react";
import blogContext from "../../Helper/Context/blogContext";
import BlogCardSkeleton from "../../Component/SkeletonLoaders/BlogCardSkeleton";

export default function LeftSection() {
  const context = useContext(blogContext);
  const { blog, getblogs } = context;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getblogs()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="flex justify-center max-lg:justify-start rounded-md">
      <div className="grid grid-cols-1 w-full place-items-center">
        {loading
          ? Array.from({ length: 3 }, (_, index) => (
              <BlogCardSkeleton key={index} />
            ))
          : blog.map((card, index) => (
              <BlogCard key={index} card={card}></BlogCard>
            ))}
      </div>
    </section>
  );
}
