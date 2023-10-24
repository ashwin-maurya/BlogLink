import { Tags } from "../../Component/common";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogContext from "../../Helper/Context/blogContext";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Helper/Context/AuthContext";
import { profileDefault } from "../../Assets/icons";

export default function BlogCard({ card }) {
  const context = useContext(blogContext);
  const { deletenote, host } = context;
  const context3 = useContext(AuthContext);
  const { UserDetails, AuthStatus } = context3;
  const [date, setdate] = useState("");
  const [ShowEdit, setShowEdit] = useState(false);
  const [user, setuser] = useState("");
  // console.log(card);
  const onDelete = async () => {
    await deletenote(card?.postID);
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

  useEffect(() => {
    const date = new Date(card?.Date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setdate(date.toLocaleString("en-US", options));

    console.log(card?.UserName);

    const func = async () => {
      const response1 = await fetch(
        `${host}/api/blogs/userImg/${card?.userID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const Userimage = await response1.json();
      setuser(
        Userimage[0]?.profileImg != ""
          ? Userimage[0]?.profileImg
          : profileDefault
      );
    };
    func();
    console.log(window.location.pathname);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="md:w-[77%]  md:m-auto flex md:my-2 dark:bg-darkBgPrimary my-2 rounded-xl bg-bgBlue flex-col p-6 pt-5 pb-2 w-[80%] max-lg:w-[95%] group">
      <div className="max-lg:gap-2  gap-8 flex  justify-center ">
        <div className="w-[70%]">
          <div className="flex justify-between  items-center">
            <div className="mb-2 flex  items-center justify-between max-lg:items-start max-lg:flex-col">
              <div className=" flex items-center">
                <div
                  className=" group/author  flex items-center "
                  onClick={() => {
                    toast.success("Welcome to Profile");

                    navigate(`/profile/${card?.UserName}`, {
                      state: { id: card.userID },
                    });
                  }}
                >
                  <img
                    src={user}
                    className="border-[1px] border-purple-300 bg-white h-7 w-7  rounded-full object-contain"
                    alt="img"
                  />

                  <p
                    className="text-[14.5px] ml-2 font-semibold font-palanquin text-gray-700 dark:text-darkTextMain"
                    onClick={() => {
                      navigate(
                        `/profile/${card?.UserName?.replace(/\s+/g, "-")}`,
                        {}
                      );
                    }}
                  >
                    {card?.UserName}
                  </p>
                </div>
                <span className="text-sm ml-2 font-semibold font-palanquin text-gray-400 max-lg:hidden dark:text-darkTextPrimary">
                  -
                </span>
                <p className="text-sm ml-1 font-semibold font-palanquin text-gray-500 dark:text-darkTextPrimary">
                  {date}
                </p>
              </div>
              <div className="ml-4 flex items-center">
                <i className="dark:text-white fa fa-eye  text-gray-600  text-[17px] hover:text-primaryMain "></i>
                <p className="text-[14px] text-gray-600 ml-1">{card?.view}</p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col "
            onClick={() => {
              toast.success("Welcome to Blog");

              navigate(`/blogs/${card?.Title?.replace(/\s+/g, "-")}`, {
                state: { id: card.postID, view: card?.view },
              });
            }}
          >
            <h3 className="theme-font-minor text-xl my-1 font-bold font-serif hover:text-primaryMain  dark:hover:text-secondary dark:text-darkTextMain">
              {card?.Title}
            </h3>
          </div>
          <div className="py-1 flex gap-2 justify-start items-center">
            <button
              className="p-1 rounded-md text-[15px] text-white px-2 bg-primaryMain border-black"
              onClick={() => {
                toast.success("Welcome to Blog");

                navigate(`/blogs/${card?.Title?.replace(/\s+/g, "-")}`, {
                  state: { id: card.postID, view: card?.view },
                });
              }}
            >
              Read
            </button>
            <button className="p-1 rounded-md text-[15px] text-white px-2 bg-primaryMain  border-black">
              Save
            </button>
          </div>
        </div>
        <div className="relative flex items-center justify-center w-[30%]">
          <div className="absolute -top-1 -left-4 z-30">
            <p className="text-[10px] uppercase bg-primaryMain text-darkTextMain dark:bg-secondary dark:text-darkTextMain  font-semibold tracking-widest px-4 rounded-md p-1">
              {card?.Category}
            </p>
          </div>
          <div
            className="overflow-hidden mt-2 rounded-lg z-20"
            onClick={() => {
              toast.success("Welcome to Blog");

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
        </div>
      </div>

      <div className="relative pb-1 flex justify-between items-center  flex-wrap w-full mt-1">
        <div className="flex gap-3  items-center ">
          {card?.tags.map((tag, index) => (
            <Tags key={index} tags={tag} />
          ))}{" "}
        </div>
        <div className="flex   items-center  gap-6  mr-1 mt-2">
          <i className="dark:text-white fa fa-bookmark  text-gray-600 hover:text-primaryMain text-[15px] "></i>

          <i className="dark:text-white fa fa-share  text-gray-600 hover:text-primaryMain text-[15px] "></i>
          <i className="dark:text-white text-gray-600 fa fa-ellipsis-v"> </i>
        </div>
        {ShowEdit && window.location.pathname != "/blog" && (
          <div className="hidden px-4 py-1 rounded-full group/buttons  group-hover:block dark:hover:bg-slate-700 hover:bg-blue-100">
            <div
              className="hidden   space-x-3 pr-2
           absolute group-hover/buttons:block right-8"
            >
              <span
                className="bg-blue-200 p-1 rounded-md"
                onClick={() => {
                  navigate("/updateblog", {
                    state: { id: card?.postID },
                  });
                }}
              >
                Update
              </span>
              <span className="bg-blue-200 p-1 rounded-md" onClick={onDelete}>
                Delete
              </span>
            </div>
            <i className="dark:text-white fa fa-ellipsis-v"> </i>
          </div>
        )}
      </div>
    </div>
  );
}
