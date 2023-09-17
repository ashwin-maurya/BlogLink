import LeftSection from "../Section/SingleBlogSection/LeftSection";
import MiddleSection from "../Section/SingleBlogSection/MiddleSection";
import RightSection from "../Section/SingleBlogSection/RightSection";

const SingleBlog = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[15%]">
        <LeftSection></LeftSection>
      </div>
      <div className="w-[70%] ">
        <MiddleSection></MiddleSection>
      </div>
      <div className="w-[25%]">
        <RightSection></RightSection>
      </div>
    </section>
  );
};

export default SingleBlog;
