import { Tags } from "../../Component/common";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import blogContext from "../../Helper/Context/blogContext";
import { useContext, useEffect, useState } from "react";
import HelperContext from "../../Helper/Context/HelperContext";
import AuthContext from "../../Helper/Context/AuthContext";
import { code1 } from "../../Assets/images";
import {
  dark,
  darkprofileDefault,
  profileDefault,
  view,
} from "../../Assets/icons";

export default function LandingCards({ card }) {
  const context = useContext(blogContext);
  const { deletenote, host } = context;
  const navigate = useNavigate();
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
  }, []);

  return (
    <>
      <article className="break-inside-avoid mx-auto w-[100%] max-md:w-[95%] p-6 max-sm:p-3 bg-bgBlue rounded-xl  dark:bg-darkBgPrimary flex flex-col bg-clip-border  my-5 group ">
        <div className="flex pb-4 max-sm:pb-2 items-center justify-between">
          <div className="flex">
            <img
              className="rounded-full  dark:bg-darkBgMain bg-white max-w-none w-10 h-10 object-cover object-top"
              src={
                card.author.profileImg == ""
                  ? profileDefault
                  : card.author.profileImg
              }
            />
            <div className="flex flex-col justify-center ml-2">
              <div
                className="flex items-center text-[17px] tracking-[0.8px] dark:text-darkTextMain cursor-pointer font-semibold"
                onClick={() => {
                  navigate(
                    `/profile/${card?.author.username?.replace(/\s+/g, "-")}`,
                    {}
                  );
                }}
              >
                {card?.author.username}
              </div>
              <div className="text-slate-500 text-xs  dark:text-darkTextPrimary">
                {date}
              </div>
            </div>
          </div>
        </div>
        <h2
          className="text-xl max-lg:text-md max-sm:text-sm leading-7 font-bold font-serif  dark:text-darkTextMain hover:text-primaryMain  dark:hover:text-secondary  cursor-pointer capitalize"
          onClick={() => {
            navigate(`/blogs/${card?._id}`);
          }}
        >
          {" "}
          {card.Title}
        </h2>
        <div className="py-3 max-sm:py-2">
          <img className="max-w-full rounded-lg" src={card.Blog_url} />
        </div>
        <div className=" max-sm:pt-0">
          <i className="fa fa-heart text-red-500 mr-1 "></i>

          <span className="text-lg font-bold  dark:text-darkTextMain">68</span>
        </div>
      </article>
    </>
  );
}
