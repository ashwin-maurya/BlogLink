import { Tags } from "../../Component/common";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogContext from "../../Helper/Context/blogContext";
import { useContext, useEffect, useState } from "react";
import HelperContext from "../../Helper/Context/HelperContext";
import AuthContext from "../../Helper/Context/AuthContext";
import { code1 } from "../../Assets/images";
import { profileDefault, view } from "../../Assets/icons";

export default function BlogCard({ card }) {
  const context = useContext(blogContext);
  const { deletenote, host } = context;
  const context3 = useContext(AuthContext);
  const { UserDetails, AuthStatus, getUser, UserProfile } = context3;
  const [date, setdate] = useState("");
  const [ShowEdit, setShowEdit] = useState(false);
  const [user, setuser] = useState("");
  console.log(card);
  const onDelete = async () => {
    await deletenote(card?.postID);
  };

  const startTime = new Date().getTime();
  // console.log(startTime);

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
      // console.log(Userimage);
      // console.log("from getimg");
    };
    func();

    // console.log(UserProfile);
  }, []);

  const navigate = useNavigate();
  //Date function

  // const navigate = useNavigate();
  return (
    <div className="flex dark:bg-darkBgPrimary my-2 rounded-xl bg-bgBlue flex-col p-6 w-[80%] max-lg:w-[95%] group">
      <div className="max-lg:gap-2  gap-8 flex  justify-center ">
        <div className="w-[70%]">
          <div className="flex justify-between  items-center">
            <div className="mb-2 flex  items-center justify-between max-lg:items-start max-lg:flex-col">
              <div className="max-lg:items-start max-lg:flex-col flex items-center">
                <div className="flex items-center ">
                  <img
                    src={user}
                    className="bg-white h-6 w-6  rounded-full object-contain"
                    width={28}
                    height={32}
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
                <p className="text-sm ml-1 font-semibold font-palanquin text-gray-400 dark:text-darkTextPrimary">
                  {date}
                </p>
              </div>
            </div>
            <div className="mr-20 flex ">
              <img className="opacity-40" src={view} alt="v" />
              <p className="text-[15px] text-gray-600 ml-1">{card?.view}</p>
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
        </div>
        <div className="relative flex items-center justify-center w-[30%]">
          <div className="absolute -top-1 -left-4 z-30">
            <p className="text-[10px] uppercase bg-primaryMain text-darkTextMain dark:bg-secondary dark:text-darkTextMain  font-semibold tracking-widest px-4 rounded-md p-1">
              {card?.Category}
            </p>
          </div>
          <div className="overflow-hidden rounded-lg z-20">
            <img
              src={card?.Blog_url}
              className="content-evenly transition-all ease-in-out duration-200 group-hover:scale-[1.2] "
              width={180}
              alt="codeimg"
            />
          </div>
        </div>
      </div>

      <div className="relative  flex justify-between items-center  flex-wrap w-full mt-2">
        <div className="flex">
          {card?.tags.map((tag, index) => (
            <Tags key={index} tags={tag} />
          ))}{" "}
        </div>
        {ShowEdit && (
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
