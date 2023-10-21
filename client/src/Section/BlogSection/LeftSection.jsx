import { BlogCard } from "../../Component/common";
import { useContext, useEffect, useState } from "react";
import blogContext from "../../Helper/Context/blogContext";
import BlogCardSkeleton from "../../Component/SkeletonLoaders/BlogCardSkeleton";
import FilterContext from "../../Helper/Context/FilterContext";
import AuthContext from "../../Helper/Context/AuthContext";
export default function LeftSection() {
  const context = useContext(blogContext);
  const { blog, getblogs } = context;
  const context2 = useContext(FilterContext);
  const { getrelevantblogs, getlatestblogs, filterBlogs } = context2;
  const context3 = useContext(AuthContext);
  const { UserDetails } = context3;

  const [filterState, setfilterState] = useState("");
  const [BLogsArray, setBLogsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  // get all blogs and intialize filterval from previous refresh-----------------------------------------------
  useEffect(() => {
    setfilterState(localStorage.getItem("filterval"));
    getblogs()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      });
    // console.log(localStorage.getItem("UserData"));
  }, []);

  // setfilterstate on localstorage.filterval change--------------------------------------------------

  useEffect(() => {
    setfilterState(localStorage.getItem("filterval"));
  }, [localStorage.getItem("filterval")]);

  useEffect(() => {
    if (filterState === "relevant") {
      console.log("called relevant");
      getrelevantblogs(UserDetails?.relevant);
    }
    if (filterState === "latest") {
      console.log("called latest");

      getlatestblogs();
    }

    if (filterState === "all") {
      console.log("called all");
      getblogs();
      setBLogsArray(blog);
    }

    console.log(BLogsArray);
  }, [UserDetails, filterState]);

  useEffect(() => {
    setBLogsArray(filterBlogs);
  }, [filterBlogs]);
  // console.log(blog);

  //filter frontend section-------------------------------------------------------------------------------------
  const onRelevanthandle = (e) => {
    setshowMoreOption(() => {
      false;
    });
    setInLocal(e);
  };
  const onLatesthandle = (e) => {
    setshowMoreOption(() => {
      false;
    });
    setInLocal(e);
  };

  // show more filter option on Top click-------------------
  const [showMoreOption, setshowMoreOption] = useState(false);
  const [value, setvalue] = useState("");

  const filterTop = (e) => {
    setshowMoreOption(true);

    console.log();
    setInLocal(e);
  };

  const setInLocal = (e) => {
    localStorage.setItem("filterval", e.target.value);

    setvalue(e.target.value);
  };

  useEffect(() => {}, [value]);

  return (
    <section className="flex justify-center max-lg:justify-start  flex-col rounded-md">
      <div className="flex flex-col w-full items-center ">
        <div
          className="mt-4 
         flex max-lg:px-2 max-lg:w-full lg:w-[80%] justify-between max-md:flex-col"
        >
          <div className="flex  gap-2">
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "all" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="all"
              onClick={(e) => {
                onRelevanthandle(e);
              }}
            >
              All
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "relevant" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="relevant"
              onClick={(e) => {
                onRelevanthandle(e);
              }}
            >
              Relevant
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "latest" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="latest"
              onClick={(e) => {
                onLatesthandle(e);
              }}
            >
              Latest
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "top" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="top"
              onClick={(e) => {
                filterTop(e);
              }}
            >
              Top
            </button>
          </div>
          <div className={`${showMoreOption ? "block" : "hidden"} flex gap-1`}>
            <button className="dark:text-white dark:bg-darkBgPrimary dark:hover:bg-secondary  hover:bg-bgBlue pl-3 pr-3 p-2 rounded-md">
              Week
            </button>
            <button className="dark:text-white dark:bg-darkBgPrimary dark:hover:bg-secondary   hover:bg-bgBlue pl-3 pr-3 p-2 rounded-md">
              Month
            </button>
            <button className="dark:text-white dark:bg-darkBgPrimary dark:hover:bg-secondary  hover:bg-bgBlue pl-3 pr-3 p-2 rounded-md">
              Year
            </button>
            <button className="dark:text-white dark:bg-darkBgPrimary dark:hover:bg-secondary   hover:bg-bgBlue pl-3 pr-3 p-2 rounded-md">
              Infinity
            </button>
          </div>
        </div>
        {loading
          ? Array.from({ length: 3 }, (_, index) => (
              <BlogCardSkeleton key={index} />
            ))
          : BLogsArray.map((card, index) => (
              <BlogCard key={index} card={card}></BlogCard>
            ))}
      </div>
    </section>
  );
}
