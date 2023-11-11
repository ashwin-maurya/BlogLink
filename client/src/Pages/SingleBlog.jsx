import LeftSection from "../Section/SingleBlogSection/LeftSection";
import MiddleSection from "../Section/SingleBlogSection/MiddleSection";
import RightSection from "../Section/SingleBlogSection/RightSection";
import { useContext, useRef, useState } from "react";
import blogContext from "../Helper/Context/blogContext";
import { useEffect } from "react";
import TopicBar from "../Component/SingleBlogComponents/TopicBar";
import { Comments } from "../Component/common";
import HelperContext from "../Helper/Context/HelperContext";
import TopSection from "../Section/SingleBlogSection/TopSection";
import LeftSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/LeftSectionSkeleton";
import TopSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/TopSectionSkeleton";
import MiddleSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/MiddleSectionSkeleton";
import RightSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/RightSectionSkeleton";
const SingleBlog = ({ blog1, loading }) => {
  // console.log(window.innerHeight);
  // const context = useContext(blogContext);
  // const { blog, getblogs } = context;
  // // console.log(blog1);
  // useEffect(() => {
  //   const fetchdata = async () => {
  //     await getblogs();
  //   };
  //   fetchdata();
  //   console.log(blog);
  // }, []);
  // console.log(blog1.description);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarRef = useRef(null);
  const pageRef = useRef(null);

  // let top = window.pageYOffset + window.innerHeight;
  // console.log(top);

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

  const context2 = useContext(HelperContext);
  const { startTime, setstartTime } = context2;

  // console.log(endTime);
  let ch = startTime == "";
  useEffect(() => {
    setstartTime({ start: new Date().getTime() });
    console.log(startTime);
  }, [ch]);

  return (
    <>
      <section
        className="flex bg-slate-50 dark:text-white dark:bg-darkBgMain flex-col   justify-center items-center"
        ref={pageRef}
      >
        {loading ? (
          <TopSectionSkeleton></TopSectionSkeleton>
        ) : (
          <TopSection blog1={blog1}></TopSection>
        )}
        <div className="flex max-xl:w-full w-full px-4  max-xl:flex max-xl:flex-col max-xl:justify-evenly max-xl:items-center justify-evenly">
          <div className="w-[26%] max-2xl:hidden ">
            {loading ? (
              <LeftSectionSkeleton></LeftSectionSkeleton>
            ) : (
              <LeftSection blog={blog1}></LeftSection>
            )}
          </div>
          <div className="xl:w-[70%] max-xl:w-[70%] mx-14 max-md:w-[90%]  ">
            {loading ? (
              <MiddleSectionSkeleton></MiddleSectionSkeleton>
            ) : (
              <MiddleSection blog={blog1}></MiddleSection>
            )}
          </div>
          <div className="w-[26%] max-2xl:hidden">
            {loading ? (
              <RightSectionSkeleton></RightSectionSkeleton>
            ) : (
              <RightSection blog={blog1}></RightSection>
            )}
          </div>
        </div>
        <div className="max-md:flex max-md:flex-col 2xl:hidden border-t-[2px] dark:border-gray-500   flex w-full  justify-center">
          <div className="w-[30%] max-2xl:w-full flex border-r-[2px] dark:border-gray-500 ">
            {loading ? (
              <LeftSectionSkeleton></LeftSectionSkeleton>
            ) : (
              <LeftSection blog={blog1}></LeftSection>
            )}
          </div>
          <div className="w-[30%] max-2xl:w-full flex justify-center items-center">
            {loading ? (
              <RightSectionSkeleton></RightSectionSkeleton>
            ) : (
              <RightSection blog={blog1}></RightSection>
            )}
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
