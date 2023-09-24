import React from "react";
import { useNavigate } from "react-router";

export default function LandingCards(props) {
  const { card } = props;
  const navigate = useNavigate();
  return (
    <>
      <article className="break-inside-avoid mx-auto w-[100%] max-md:w-[95%] p-6 bg-bgBlue rounded-xl  dark:bg-darkBgPrimary flex flex-col bg-clip-border  my-5 group">
        <div className="flex pb-4 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="#">
              <img
                className="rounded-full max-w-none w-14 h-auto max-md:w-10 "
                src={card.Author_url}
              />
            </a>
            <div className="flex flex-col justify-center">
              <div
                className="flex items-center"
                onClick={() => {
                  navigate(
                    `/author/${card?.Author_name?.replace(/\s+/g, "-")}`,
                    {
                      state: { card },
                    }
                  );
                }}
              >
                {card.Author_name}
              </div>
              <div className="text-slate-500 max-md:text-xs  dark:text-darkTextPrimary">
                {/* {card.date} */}
                28 August, 2023
              </div>
            </div>
          </div>
        </div>
        <h2
          className="text-3xl leading-7 font-bold font-serif   max-md:text-2xl  dark:text-darkTextMain group-hover:text-primaryMain  dark:group-hover:text-secondary"
          onClick={() => {
            navigate(`/${card?.Title?.replace(/\s+/g, "-")}`, {
              state: { card },
            });
          }}
        >
          {" "}
          {card.Title}
        </h2>
        <div className="py-4">
          <a className="flex" href="#">
            <img className="max-w-full rounded-lg" src={card.Blog_url} />
          </a>
        </div>
        {/* <p className="max-md:hidden  dark:text-darkTextMain">
          {card.Description.slice(0, 210) +
            (card.description.length > 210 ? "..." : "")}
        </p> */}
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
