import { useContext, useRef, useState, useEffect } from "react";
import blogContext from "../Helper/Context/blogContext";
import HelperContext from "../Helper/Context/HelperContext";
import TopSection from "../Section/SingleBlogSection/TopSection";
import LeftSection from "../Section/SingleBlogSection/LeftSection";
import MiddleSection from "../Section/SingleBlogSection/MiddleSection";
import RightSection from "../Section/SingleBlogSection/RightSection";
import LeftSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/LeftSectionSkeleton";
import TopSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/TopSectionSkeleton";
import MiddleSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/MiddleSectionSkeleton";
import RightSectionSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton/RightSectionSkeleton";
import { Comments } from "../Component/common";
import TopicBar from "../Component/SingleBlogComponents/TopicBar";

const SingleBlog = ({ blog1, loading }) => {
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const navbarRef = useRef(null);
  const pageRef = useRef(null);
  const commentSectionRef = useRef(null);

  const context2 = useContext(HelperContext);
  const { startTime, setstartTime } = context2;
  const ch = startTime === "";

  useEffect(() => {
    setstartTime({ start: new Date().getTime() });
  }, [ch]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setScrollDirection(prevScrollPos > currentScrollPos ? "up" : "down");
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const navbarHeight = navbarRef.current?.clientHeight;
    if (scrollDirection === "up") {
      navbarRef.current.style.top = `-${navbarHeight}px`;
    } else {
      navbarRef.current.style.top = "0";
    }
  }, [scrollDirection]);

  const scrollToCommentSection = () => {
    if (commentSectionRef.current) {
      const element = commentSectionRef.current;
      const rect = element.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.scrollY,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section
        className="flex bg-slate-50 dark:text-white dark:bg-darkBgMain flex-col justify-center items-center"
        ref={pageRef}
      >
        {loading ? <TopSectionSkeleton /> : <TopSection blog1={blog1} />}
        <div className="flex max-xl:w-full w-full max-xl:flex max-xl:flex-col max-xl:justify-evenly max-xl:items-center justify-evenly">
          <div className="w-[20%] max-2xl:hidden">
            {loading ? <LeftSectionSkeleton /> : <LeftSection blog={blog1} />}
          </div>
          <div className="w-[60%] max-2xl:w-[70%] max-lg:w-[100%] max-lg:mt-0 mt-5">
            {loading ? (
              <MiddleSectionSkeleton />
            ) : (
              <MiddleSection blog={blog1} />
            )}
          </div>
          <div className="w-[20%] mt-10 max-2xl:hidden">
            {loading ? <RightSectionSkeleton /> : <RightSection blog={blog1} />}
          </div>
        </div>
        <div className="rounded-md max-md:flex max-md:flex-col mt-5 2xl:hidden border-t-[1px] dark:border-darkBorderAll flex w-full justify-center">
          <div className="w-full flex border-r-[1px] dark:border-darkBorderAll">
            {loading ? <LeftSectionSkeleton /> : <LeftSection blog={blog1} />}
          </div>
          <div className="w-full ">
            {loading ? <RightSectionSkeleton /> : <RightSection blog={blog1} />}
          </div>
        </div>
        <div ref={commentSectionRef} className="w-[70%] mt-10 max-md:w-full">
          <Comments blog={blog1} />
        </div>
      </section>
      <TopicBar
        scrollToCommentSection={scrollToCommentSection}
        navbarRef={navbarRef}
        card={blog1}
      />
    </>
  );
};

export default SingleBlog;
