import { json } from "react-router";
import { Tags, Share } from "../../Component/common";
import { shareData } from "../../Component/constants";
import blogContext from "../../Helper/Context/blogContext";
import { useContext, useEffect } from "react";

export default function RightSection() {
  const context = useContext(blogContext);
  const { blog, getblogs } = context;
  useEffect(() => {
    getblogs();
  }, []);
  return (
    <section className="max-lg:relative top-10 justify-center w-[80%] max-lg:w-[100%] h-auto p-5 ">
      <section>
        <h1 className="text-xl font-medium my-4 dark:text-darkTextMain">
          Follow Us
        </h1>
        <ul className="flex w-full justify-start items-center gap-5 max-xl:gap-1">
          {shareData.map((share, index) => (
            <Share share={share} key={index}></Share>
          ))}
        </ul>
      </section>
      <section className="my-8">
        <h1 className="text-xl font-medium my-4 dark:text-darkTextMain ">
          Recommended topics
        </h1>
        <div className="relative flex flex-wrap w-full ">
          {blog.map((card, index) => {
            let v = card?.tags.map((tag, index) => (
              <Tags key={index} tags={tag} />
            ));
            return v;
          })}
        </div>
      </section>
    </section>
  );
}
