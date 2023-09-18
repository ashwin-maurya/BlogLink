import { useParams } from "react-router";
import { CardData } from "../Component/constants";
import LeftSection from "../Section/SingleBlogSection/LeftSection";
import MiddleSection from "../Section/SingleBlogSection/MiddleSection";
import RightSection from "../Section/SingleBlogSection/RightSection";

const SingleBlog = () => {
  const { handle } = useParams();
  console.log(typeof handle);
  const blog = CardData.filter((card) => {
    console.log(card.id + typeof card.id + "id...");
    return card.id === handle;
  });

  return (
    <section className="flex flex-col gap-20 py-20 justify-center items-center">
      <div className=" flex max-w-[70%] flex-col   justify-center  gap-2">
        <p className="tracking-[2px] font-semibold text-primaryMain m-1">
          {blog[0].category}
        </p>
        <h1 className=" hover:text-primaryMain font-bold leading-[75px] text-[65px] font-serif">
          {blog[0].label}{" "}
        </h1>
      </div>
      <div className=" h-[500px] overflow-hidden bg-red-600">
        <img className="overflow-hidden" src={blog[0].blog_imgURL} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="w-[30%]">
          <LeftSection blog={blog[0]}></LeftSection>
        </div>
        <div className="w-[60%] ">
          <MiddleSection blog={blog[0]}></MiddleSection>
        </div>
        <div className="w-[30%]">
          <RightSection blog={blog[0]}></RightSection>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
