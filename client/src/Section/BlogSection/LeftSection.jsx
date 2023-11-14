import { BlogCard } from "../../Component/common";
import { useContext, useEffect, useState } from "react";
import blogContext from "../../Helper/Context/blogContext";
import BlogCardSkeleton from "../../Component/SkeletonLoaders/BlogCardSkeleton";
import FilterContext from "../../Helper/Context/FilterContext";
import AuthContext from "../../Helper/Context/AuthContext";
import CommentLikeContext from "../../Helper/Context/CommentLikeContext";
CommentLikeContext;
export default function LeftSection() {
  const context = useContext(blogContext);
  const { blog, getblogs } = context;
  const context2 = useContext(FilterContext);
  const {
    getrelevantblogs,
    getallblogs,
    getlatestblogs,
    filterBlogs,
    getTopBlogs,
  } = context2;
  const context3 = useContext(AuthContext);
  const { UserDetails, AuthStatus } = context3;
  const context4 = useContext(CommentLikeContext);
  const { Checkbookmark, checkbookmark } = context4;
  const [filterState, setfilterState] = useState("");
  // const [isLogged,setisLoggen]=useState(localStorage.getItem("UserData") != null)
  const [BLogsArray, setBLogsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  // get all blogs and intialize filterval from previous refresh-------------------------------

  // useEffect(() => {
  //   console.log(
  //     AuthStatus + "LoggedinStatus---------------sdvsdjvsjdvdnv fnvfn "
  //   );
  // }, [AuthStatus]);

  useEffect(() => {
    // console.log(UserDetails.relevant);
    setfilterState(localStorage.getItem("filterval"));
    if (JSON.parse(localStorage.getItem("UserData"))) {
      Checkbookmark(
        JSON.parse(localStorage?.getItem("UserData"))?.userDetailId
      ).then(() => {
        console.log(checkbookmark);
      });
    }
    getallblogs()
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

  // console.log(blog);

  useEffect(() => {
    // if (localStorage.getItem("filterval") == "relevant") {
    //   getrelevantblogs(UserDetails?.relevant).then(() => {
    //     setLoading(false);
    //   });
    // }
  }, [filterBlogs]);

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

  useEffect(() => {}, [value]);

  return (
    <section className=" flex justify-center max-lg:justify-start  flex-col rounded-md ">
      <div className=" flex flex-col w-full items-center ">
        <div className="flex max-lg:flex-col justify-evenly items-start  w-full max-lg:ml-1  ">
          <div className="flex   gap-1">
            {/* <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "all" && "bg-bgBlue"
              } p-2 rounded-md`}
              value="all"
              onClick={(e) => {
                onRelevanthandle(e);
              }}
            >
              All
            </button> */}
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "relevant" && "bg-bgBlue"
              } p-2 rounded-md`}
              value="relevant"
              onClick={(e) => {
                onRelevanthandle(e);
                getrelevantblogs(UserDetails?.relevant);
              }}
            >
              Relevant
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "latest" && "bg-bgBlue"
              } p-2 rounded-md`}
              value="latest"
              onClick={(e) => {
                onLatesthandle(e);
                getlatestblogs();
              }}
            >
              Latest
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterval") == "top" && "bg-bgBlue"
              }  p-2 rounded-md`}
              value="top"
              onClick={(e) => {
                filterTop(e);
                getTopBlogs(localStorage.getItem("filterTop"));
              }}
            >
              Top
            </button>
          </div>
          <div
            className={`${
              showMoreOption ? "block" : "hidden"
            } flex max-lg:mt-3 gap-1`}
          >
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "week" && "bg-bgBlue"
              }  p-2  rounded-md`}
              value="week"
              onClick={(e) => {
                Topfilter(e);
                getTopBlogs(localStorage.getItem("filterTop"));
              }}
            >
              Week
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "month" && "bg-bgBlue"
              }  p-2 rounded-md`}
              value="month"
              onClick={(e) => {
                Topfilter(e);
                getTopBlogs(localStorage.getItem("filterTop"));
              }}
            >
              Month
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "year" && "bg-bgBlue"
              }  p-2 rounded-md`}
              value="year"
              onClick={(e) => {
                Topfilter(e);
                getTopBlogs(localStorage.getItem("filterTop"));
              }}
            >
              Year
            </button>
            <button
              className={`dark:text-white hover:bg-bgBlue dark:bg-darkBgPrimary dark:hover:bg-secondary  ${
                localStorage.getItem("filterTop") == "all" && "bg-bgBlue"
              }  p-2 rounded-md`}
              value="all"
              onClick={(e) => {
                Topfilter(e);
                getTopBlogs(localStorage.getItem("filterTop"));
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
            : filterBlogs?.map((card, index) => {
                return (
                  <BlogCard
                    key={index}
                    isBookmark={AuthStatus && checkbookmark?.includes(card._id)}
                    card={card}
                  ></BlogCard>
                );
              })}
        </div>
      </div>
    </section>
  );
}
