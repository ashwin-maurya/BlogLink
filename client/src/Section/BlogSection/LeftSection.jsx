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
  const { getrelevantblogs, getlatestblogs, filterBlogs, getTopBlogs } =
    context2;
  const context3 = useContext(AuthContext);
  const { UserDetails } = context3;
  const [filterState, setfilterState] = useState("");
  const [BLogsArray, setBLogsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  // get all blogs and intialize filterval from previous refresh-------------------------------
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
    if (filterState === "top") {
      console.log("called top");
      getTopBlogs("week");
    }
    if (filterState === "latest") {
      console.log("called latest");

      getlatestblogs();
    }

    if (filterState === "all") {
      console.log("called all");
      getblogs();
    }

    console.log(BLogsArray);
  }, [UserDetails, filterState]);

  const [newArray, setnewArray] = useState([]);
  useEffect(() => {
    setBLogsArray(filterBlogs);
    let array = [...BLogsArray];
    array.reverse();
    setnewArray(array);
  }, [filterBlogs]);
  useEffect(() => {
    setBLogsArray(blog);
    let array = [...blog];
    array.reverse();
    setnewArray(array);
  }, [blog]);

  // console.log(blog);

  //filter frontend section-------------------------------------------------------------------
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
  // ------------------------------------------
  // FILTER TOP

  const Topfilter = (e) => {
    localStorage.setItem("filterTop", e.target.value);
    setvalue(e.target.value);
  };

  const setInLocal = (e) => {
    localStorage.setItem("filterval", e.target.value);

    setvalue(e.target.value);
  };

  useEffect(() => {}, [value, newArray]);

  return (
    <section className=" flex justify-center max-lg:justify-start  flex-col rounded-md ">
      <div className=" flex flex-col w-full items-center ">
        <div
          className={` md:${
            localStorage.getItem("filterval") == "top" && "px-8"
          } md:px-20 mt-4  lg:px-0
         flex max-lg:px-2 max-lg:w-full lg:w-[77%] justify-between lg:flex-col  max-md:flex-col xl:gap-3  xl:flex-row`}
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
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "week" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="week"
              onClick={(e) => {
                Topfilter(e);
              }}
            >
              Week
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "month" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="month"
              onClick={(e) => {
                Topfilter(e);
              }}
            >
              Month
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "year" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="year"
              onClick={(e) => {
                Topfilter(e);
              }}
            >
              Year
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "infinity" && "bg-bgBlue"
              } pl-3 pr-3 p-2 rounded-md`}
              value="infinity"
              onClick={(e) => {
                Topfilter(e);
              }}
            >
              Infinity
            </button>
          </div>
        </div>
        <div className="p-3">
          {loading
            ? Array.from({ length: 3 }, (_, index) => (
                <BlogCardSkeleton key={index} />
              ))
            : newArray?.map((card, index) => (
                <BlogCard key={index} card={card}></BlogCard>
              ))}
        </div>
      </div>
    </section>
  );
}
