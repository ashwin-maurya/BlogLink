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
      <article className="break-inside-avoid mx-auto w-[100%] max-md:w-[95%] p-6 bg-bgBlue rounded-xl  dark:bg-darkBgPrimary flex flex-col bg-clip-border  my-5 group">
        <div className="flex pb-4 items-center justify-between">
          <div className="flex">
            <img className="rounded-full max-w-none w-10 h-10" src={user} />
            <div className="flex flex-col justify-center ml-2">
              <div
                className="flex items-center dark:text-darkTextMain cursor-pointer font-semibold"
                onClick={() => {
                  navigate(
                    `/profile/${card?.UserName?.replace(/\s+/g, "-")}`,
                    {}
                  );
                }}
              >
                {card?.UserName}
              </div>
              <div className="text-slate-500 text-xs  dark:text-darkTextPrimary">
                {date}
              </div>
            </div>
          </div>
        </div>
        <h2
          className="text-xl leading-7 font-bold font-serif   max-md:text-2xl  dark:text-darkTextMain group-hover:text-primaryMain  dark:group-hover:text-secondary"
          onClick={() => {
            navigate(`/blogs/${card?.Title?.replace(/\s+/g, "-")}`, {
              state: { id: card.postID, view: card?.view },
            });
          }}
        >
          {" "}
          {card.Title}
        </h2>
        <div className="py-4">
          <img className="max-w-full rounded-lg" src={card.Blog_url} />
        </div>
        <div className="pt-4">
          <a className="inline-flex items-center" href="#">
            <span className="mr-2">
              <svg
                className="fill-rose-600 dark:fill-rose-400"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </span>
            <span className="text-lg font-bold  dark:text-darkTextMain">
              68
            </span>
          </a>
        </div>
      </article>
    </>
  );
}
