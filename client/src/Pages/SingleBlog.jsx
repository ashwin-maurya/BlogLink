import { useNavigate, useParams } from "react-router";
import { CardData } from "../Component/constants";
import LeftSection from "../Section/SingleBlogSection/LeftSection";
import MiddleSection from "../Section/SingleBlogSection/MiddleSection";
import RightSection from "../Section/SingleBlogSection/RightSection";
import { useContext } from "react";
import blogContext from "../Helper/Context/blogContext";
import { useEffect } from "react";
import { useMemo } from "react";
import { edit } from "../Assets/icons";

const SingleBlog = ({ blog1 }) => {
  const context = useContext(blogContext);
  const navigate = useNavigate();
  const { blog, getblogs } = context;

  useEffect(() => {
    const fetchdata = async () => {
      await getblogs();
    };
    fetchdata();
    console.log(blog);
  }, []);

  //  Title,
  //  Author_name,
  //  Author_url,
  //  Description,
  //  tags,
  //  Blog_url
  const { handle } = useParams();

  // const blog1 = CardData.filter((card) => {
  //   console.log(card.id + typeof card.id + "id...");
  //   return card.id === handle;
  // });

  return (
    <section className="flex   dark:text-white flex-col gap-20 py-20 justify-center items-center">
      <div className=" relative flex max-w-[70%] flex-col   justify-center  gap-2">
        <div
          className="absolute top-0 right-0 "
          onClick={() => {
            navigate(`/write`, {
              state: { blog1 },
            });
          }}
        >
          <img src={edit} alt="" />
        </div>
        <p className="tracking-[2px] font-semibold dark:text-secondary text-primaryMain m-1">
          {blog1?.Category}
        </p>
        <h1 className="dark:hover:text-secondary  hover:text-primaryMain font-bold leading-[75px] text-[65px] font-serif">
          {blog1?.Title}{" "}
        </h1>
      </div>
      <div className=" h-[800px] overflow-hidden w-[100%] max-lg:h-auto">
        <img
          className="overflow-hidden w-[100%]"
          src={blog1.Blog_url}
          alt="Blog_url"
        />
      </div>
      <div className="flex max-xl:w-full  max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center justify-center">
        <div className="w-[30%] max-2xl:hidden ">
          <LeftSection blog={blog1}></LeftSection>
        </div>
        <div className="xl:w-[70%] max-xl:w-[70%] max-md:w-[90%]  ">
          <MiddleSection blog={blog1}></MiddleSection>
        </div>
        <div className="w-[30%] max-2xl:hidden">
          <RightSection blog={blog1}></RightSection>
        </div>
      </div>
      <div className="max-md:flex max-md:flex-col 2xl:hidden border-t-2 flex w-full  justify-center">
        <div className="w-[30%] max-2xl:w-full flex border-r-2 ">
          <LeftSection blog={blog1}></LeftSection>
        </div>
        <div className="w-[30%] max-2xl:w-full flex justify-center items-center">
          <RightSection blog={blog1}></RightSection>
        </div>
      </div>
    </section>
  );
};

export default SingleBlog;
