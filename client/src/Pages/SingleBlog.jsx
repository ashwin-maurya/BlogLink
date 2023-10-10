import LeftSection from "../Section/SingleBlogSection/LeftSection";
import MiddleSection from "../Section/SingleBlogSection/MiddleSection";
import RightSection from "../Section/SingleBlogSection/RightSection";
import { useContext, useRef, useState } from "react";
import blogContext from "../Helper/Context/blogContext";
import { useEffect } from "react";
import TopicBar from "../Component/SingleBlogComponents/TopicBar";
import { Comments } from "../Component/common";

const SingleBlog = ({ blog1 }) => {
  const context = useContext(blogContext);
  const { blog, getblogs } = context;

  useEffect(() => {
    const fetchdata = async () => {
      await getblogs();
    };
    fetchdata();
    console.log(blog);
  }, []);

  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (prevScrollPos > currentScrollPos) {
        setScrollDirection("up");
      } else {
        setScrollDirection("down");
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const navbarHeight = navbarRef.current.clientHeight;
    if (scrollDirection === "up") {
      navbarRef.current.style.top = `-${navbarHeight}px`;
    } else {
      navbarRef.current.style.top = "0";
    }
  }, [scrollDirection]);

  return (
    <>
      <section className="flex bg-slate-50 dark:text-white dark:bg-darkBgMain flex-col gap-20 py-20 justify-center items-center">
        <div className=" relative flex max-w-[70%] flex-col   justify-center  gap-2">
          <p className="tracking-[2px] font-semibold dark:text-secondary text-primaryMain m-1">
            {blog1?.Category}
          </p>
          <h1 className=" font-bold leading-[75px] text-[65px] font-serif">
            {blog1?.Title}{" "}
          </h1>
        </div>
        <div className=" h-[800px] overflow-hidden w-[100%] max-lg:h-auto">
          <img
            className="overflow-hidden w-[100%]"
            src={blog1?.Blog_url}
            alt="Blog_url"
          />
        </div>
        <div className="flex max-xl:w-full  max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center justify-center">
          <div className="w-[26%] max-2xl:hidden ">
            <LeftSection blog={blog1}></LeftSection>
          </div>
          <div className="xl:w-[70%] max-xl:w-[70%] max-md:w-[90%]  ">
            <MiddleSection blog={blog1}></MiddleSection>
          </div>
          <div className="w-[26%] max-2xl:hidden">
            <RightSection blog={blog1}></RightSection>
          </div>
        </div>
        <div className="max-md:flex max-md:flex-col 2xl:hidden border-t-[2px] dark:border-gray-500   flex w-full  justify-center">
          <div className="w-[30%] max-2xl:w-full flex border-r-[2px] dark:border-gray-500 ">
            <LeftSection blog={blog1}></LeftSection>
          </div>
          <div className="w-[30%] max-2xl:w-full flex justify-center items-center">
            <RightSection blog={blog1}></RightSection>
          </div>
        </div>
        <div className="w-[58%] mt-10">
          <Comments blog={blog1} />
        </div>
      </section>
      <TopicBar navbarRef={navbarRef} card={blog1}></TopicBar>
    </>
  );
};

export default SingleBlog;
