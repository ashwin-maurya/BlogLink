import { Tags } from "../../Component/common";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogContext from "../../Helper/Context/blogContext";
import { useContext, useEffect, useState, useRef } from "react";
import AuthContext from "../../Helper/Context/AuthContext";
import { profileDefault } from "../../Assets/icons";

import CommentLikeContext from "../../Helper/Context/CommentLikeContext";
import ShareModal from "../SingleBlogComponents/ShareModal";
import FilterContext from "../../Helper/Context/FilterContext";
export default function BlogCard({ card, isBookmark }) {
  const context = useContext(blogContext);
  const context5 = useContext(CommentLikeContext);
  const context6 = useContext(FilterContext);

  const { addbookmark, deletebookmark } = context5;
  const { deletenote } = context6;
  const context3 = useContext(AuthContext);
  const navigate = useNavigate();
  const { UserDetails, AuthStatus } = context3;
  const [ShowEdit, setShowEdit] = useState(false);
  // console.log(isBookmark);
  const [Bookmarked, setBookmarked] = useState(isBookmark);

  const modalRef = useRef(null);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);

  const bookmark = async () => {
    // setBookmarked(!Bookmarked);
    console.log(Bookmarked);

    if (Bookmarked == true) {
      await deletebookmark({
        userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
        postID: card?._id,
      });
      toast.success("Bookmark deleted");
      setBookmarked(!Bookmarked);
    } else {
      await addBookmark({
        userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
        postID: card?._id,
      });
      toast.success("Bookmark addedd");
      setBookmarked(!Bookmarked);
    }
  };

  const sharemodal = () => {
    setShareModalVisible(!shareModalVisible);
  };

  const handleOutsideClick = (event) => {
    console.log("CLICED");
    if (modalRef.current === event.target) {
      profileMenu();
    }
  };
  const profileMenu = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const onDelete = async () => {
    await deletenote(card?._id);
    toast.success("Blog Deleted");
  };

  useEffect(() => {
    if (AuthStatus) {
      if (
        card?.author?._id ===
        JSON.parse(localStorage.getItem("UserData")).userDetailId
      ) {
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
    await addbookmark({
      userID: JSON.parse(localStorage.getItem("UserData")).userDetailId,
      postID: card?._id,
    });
    toast.success("Bookmark Added");
  };

  return (
    <>
      {shareModalVisible && (
        <ShareModal
          sharemodal={sharemodal}
          currentUrl={`${window.location.origin}/blogs/${card?.Title?.replace(
            /\s+/g,
            "-"
          )}`}
        ></ShareModal>
      )}
      <div className="md:w-[100%]  md:m-auto flex md:my-2 dark:bg-darkBgPrimary my-2 rounded-md bg-bgBlue flex-col p-6 pt-5 pb-2 w-[80%] max-lg:w-[100%] group max-sm:p-3">
        <div className="max-lg:gap-2  gap-8 flex  justify-center ">
          <div className="w-[70%]">
            <div className="flex justify-between  items-center">
              <div className="mb-2 flex  items-center justify-between max-lg:items-start max-lg:flex-col">
                <div className=" flex items-center ">
                  <div
                    className="group/author  flex items-center "
                    onClick={() => {
                      toast.success("Welcome to Profile");

                      navigate(`/profile/${card?.author?.username}`, {
                        state: { id: card?.author?.username },
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
                        {card?.author.username}
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
                navigate(`/blogs/${card._id}`);
              }}
            >
              <h3 className="theme-font-minor text-xl my-1 font-bold font-serif hover:text-primaryMain  dark:hover:text-secondary dark:text-darkTextMain  cursor-pointer max-sm:text-md capitalize max-sm:font-medium">
                {card?.Title}
              </h3>
            </div>
            <div className="ml-1 w-[100%] flex items-center">
              <i className="fa fa-eye  text-gray-500 dark:text-gray-400 text-xs"></i>
              <p className="text-xs font-bold text-gray-500 ml-1 max-sm:text-xs  dark:text-gray-400">
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
          <div className="flex   items-center mr-1 mt-2">
            {
              <div className="rounded-full py-2 px-4 hover:bg-darkBgMain flex justify-center items-center">
                <i
                  className={`dark:text-white  ${
                    Bookmarked
                      ? "text-primaryMain dark:text-primaryMain fa fa-bookmark"
                      : " fa fa-bookmark-o"
                  } hover:text-primaryMain text-[15px] `}
                  onClick={bookmark}
                ></i>
              </div>
            }

            <div className="rounded-full py-2 px-4 hover:bg-primaryMain group/btn dark:hover:bg-darkBgMain flex justify-center items-center transition ease-in-out">
              {" "}
              <i
                className="dark:text-white fa fa-share  text-gray-600 group-hover/btn:text-white text-[15px] "
                onClick={sharemodal}
              ></i>
            </div>
            {ShowEdit && window.location.pathname != "/profile" && (
              <div className="relative">
                {isDropdownVisible && (
                  <div className="relative">
                    <div
                      id="myModal"
                      className="fixed z-50 inset-0 w-full h-full  transition-all ease-in-out duration-300 "
                      ref={modalRef}
                      onClick={handleOutsideClick}
                    ></div>
                    <div
                      id="dropdownAvatarName"
                      className="z-50 block absolute top-6 left-4  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-32 dark:bg-darkBgPrimary dark:divide-gray-600 border dark:border-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
                      >
                        <li>
                          <span
                            to="/"
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            onClick={() => {
                              navigate("/updateblog", {
                                state: { id: card?.postID },
                              });
                            }}
                          >
                            Update
                          </span>
                        </li>
                        <li>
                          <span
                            onClick={onDelete}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          >
                            Delete
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <div
                  className="rounded-full py-2 px-4 hover:bg-darkBgMain flex justify-center items-center"
                  onClick={profileMenu}
                >
                  <i className="block dark:text-white fa fa-ellipsis-v"></i>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
