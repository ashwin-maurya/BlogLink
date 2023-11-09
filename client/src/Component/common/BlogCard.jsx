import { Tags } from "../../Component/common";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogContext from "../../Helper/Context/blogContext";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Helper/Context/AuthContext";
import { profileDefault } from "../../Assets/icons";
import CommentLikeContext from "../../Helper/Context/CommentLikeContext";
export default function BlogCard({ card }) {
  const context = useContext(blogContext);
  const context5 = useContext(CommentLikeContext);
  const { addbookmark } = context5;
  const { deletenote, host } = context;
  const context3 = useContext(AuthContext);
  const { UserDetails, AuthStatus } = context3;
  const [date, setdate] = useState("");
  const [ShowEdit, setShowEdit] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  // console.log(card);
  const onDelete = async () => {
    await deletenote(card?.postID);
    toast.success("Blog Deleted");
  };

  useEffect(() => {
    if (AuthStatus) {
      if (card?.userID === UserDetails?._id) {
        setShowEdit(true);
      } else {
        setShowEdit(false);
      }
    } else {
      setShowEdit(false);
    }
    // getUser(card?.UserName);
  }, [UserDetails, card]);

  const addBookmark = async () => {
    await addbookmark({ userID: UserDetails?._id, postID: card?._id });
    toast.success("Bookmark Added");
  };

  const navigate = useNavigate();

  return (
    <div className="md:w-[77%]  md:m-auto flex md:my-2 dark:bg-darkBgPrimary my-2 rounded-md bg-bgBlue flex-col p-6 pt-5 pb-2 w-[80%] max-lg:w-[100%] group">
      <div className="max-lg:gap-2  gap-8 flex  justify-center ">
        <div className="w-[70%]">
          <div className="flex justify-between  items-center">
            <div className="mb-2 flex  items-center justify-between max-lg:items-start max-lg:flex-col">
              <div className=" flex items-center ">
                <div
                  className="  group/author  flex items-center "
                  onClick={() => {
                    toast.success("Welcome to Profile");

                    navigate(`/profile/${card?.UserName}`, {
                      state: { id: card.userID },
                    });
                  }}
                >
                  <img
                    // src={user}
                    src={
                      card?.author?.profileImg != ""
                        ? card?.author?.profileImg
                        : profileDefault
                    }
                    className="border-[1px] border-purple-300 bg-white h-7 w-7  rounded-full object-contain"
                    alt="img"
                  />
                  <div className="flex flex-row ml-2 max-lg:flex-col">
                    <p
                      className="text-md cursor-pointer font-semibold font-palanquin text-gray-700 dark:text-darkTextMain"
                      onClick={() => {
                        navigate(
                          `/profile/${card?.UserName?.replace(/\s+/g, "-")}`,
                          {}
                        );
                      }}
                    >
                      {card?.UserName}
                    </p>
                    <span className="text-sm ml-2 font-semibold font-palanquin text-gray-400 dark:text-darkTextPrimary max-lg:hidden">
                      -
                    </span>
                    <p className="text-sm ml-1 max-lg:ml-0 font-semibold font-palanquin text-gray-500 dark:text-darkTextPrimary">
                      {new Date(card?.Date).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col "
            onClick={() => {
              navigate(`/blogs/${card?.Title?.replace(/\s+/g, "-")}`, {
                state: {
                  id: card._id,
                  userID: card.userID,
                  view: card?.view,
                  username: card?.UserName,
                },
              });
            }}
          >
            <h3 className="theme-font-minor text-xl my-1 font-bold font-serif hover:text-primaryMain  dark:hover:text-secondary dark:text-darkTextMain  cursor-pointer ">
              {card?.Title}
            </h3>
          </div>
          <div className="ml-1 w-[100%] flex items-center">
            <i className="dark:text-white fa fa-eye  text-gray-600  "></i>
            <p className="text-md font-bold text-gray-600 ml-1 dark:text-white">
              {card?.view}
            </p>
          </div>
          <div className="py-1 flex gap-2 justify-start items-center">
            <button
              className="p-1 rounded-md text-[15px] text-white px-4 border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300  bg-primaryMain "
              onClick={() => {
                toast.success("Welcome to Blog");

                navigate(`/blogs/${card?.Title?.replace(/\s+/g, "-")}`, {
                  state: {
                    id: card._id,
                    userID: card.userID,
                    view: card?.view,
                    username: card?.UserName,
                  },
                });
              }}
            >
              Read
            </button>
            <button className="p-1 rounded-md text-[15px] text-white px-4 bg-primaryMain  border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 ">
              Save
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-[30%]">
          <div className="relative">
            <div
              className="overflow-hidden mt-2 rounded-lg z-20"
              onClick={() => {
                navigate(`/blogs/${card?.Title?.replace(/\s+/g, "-")}`, {
                  state: { id: card.postID, view: card?.view },
                });
              }}
            >
              <img
                src={card?.Blog_url}
                className="content-evenly transition-all ease-in-out duration-200 group-hover:scale-[1.2] "
                width={280}
                alt="codeimg"
              />
            </div>
            <div className="absolute -top-1 -left-4 z-30">
              <p className="text-[10px] uppercase bg-primaryMain text-darkTextMain dark:bg-secondary dark:text-darkTextMain  font-semibold tracking-widest px-4 rounded-md p-1">
                {card?.Category}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative pb-1 flex justify-between items-center  flex-wrap w-full mt-1">
        <div className="flex gap-3  items-center ">
          {card?.tags.slice(0, 3)?.map((tag, index) => (
            <Tags key={index} tags={tag} />
          ))}{" "}
        </div>
        <div className="flex   items-center  gap-6  mr-1 mt-2">
          <i
            className="dark:text-white fa fa-bookmark  text-gray-600 hover:text-primaryMain text-[15px] "
            onClick={addBookmark}
          ></i>

          <i className="dark:text-white fa fa-share  text-gray-600 hover:text-primaryMain text-[15px] "></i>
          {ShowEdit && window.location.pathname != "/profile" && (
            <div className=" flex" onMouseLeave={() => setIsHovered(false)}>
              <div
                className={` w-0 ${
                  isHovered ? "w-36" : ""
                } transition-all duration-300 ease-in-out overflow-hidden`}
              >
                {isHovered && (
                  <div className="flex gap-2 text-sm">
                    <span
                      className="bg-primaryMain text-white rounded-md px-2 py-1 cursor-pointer border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 "
                      onClick={() => {
                        navigate("/updateblog", {
                          state: { id: card?.postID },
                        });
                      }}
                    >
                      Update
                    </span>
                    <span
                      className="bg-primaryMain text-white rounded-md px-2 py-1 cursor-pointer border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 "
                      onClick={onDelete}
                    >
                      Delete
                    </span>
                  </div>
                )}
              </div>
              <div
                onMouseEnter={() => setIsHovered(true)}
                className="rounded-full px-1 py-2"
              >
                <i
                  className={`${
                    isHovered ? "block  " : "block"
                  } dark:text-white fa fa-ellipsis-v`}
                ></i>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
