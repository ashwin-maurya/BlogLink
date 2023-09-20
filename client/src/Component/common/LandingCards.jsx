import React from "react";

export default function LandingCards(props) {
  const { card } = props;
  return (
    <>
      <article class="break-inside-avoid w-100% p-6 rounded-xl bg-white  dark:bg-darkBgPrimary flex flex-col bg-clip-border shadow-md my-5 group">
        <div class="flex pb-4 items-center justify-between">
          <div class="flex">
            <a class="inline-block mr-4" href="#">
              <img
                class="rounded-full max-w-none w-14 h-auto max-md:w-10 "
                src={card.author_imgURL}
              />
            </a>
            <div class="flex flex-col justify-center">
              <div class="flex items-center">
                <a
                  class="inline-block text-lg font-bold mr-2 max-md:text-base dark:text-darkTextMain "
                  href="#"
                >
                  {card.author}
                </a>
              </div>
              <div class="text-slate-500 max-md:text-xs  dark:text-darkTextPrimary">
                {card.date}
              </div>
            </div>
          </div>
        </div>
        <h2 class="text-3xl font-bold font-serif   max-md:text-2xl  dark:text-darkTextMain group-hover:text-primaryMain  dark:group-hover:text-secondary">
          {" "}
          {card.label}
        </h2>
        <div class="py-4">
          <a class="flex" href="#">
            <img class="max-w-full rounded-lg" src={card.blog_imgURL} />
          </a>
        </div>
        <p className="max-md:hidden  dark:text-darkTextMain">
          {card.description.slice(0, 210) +
            (card.description.length > 210 ? "..." : "")}
        </p>
        <div class="pt-4">
          <a class="inline-flex items-center" href="#">
            <span class="mr-2">
              <svg
                class="fill-rose-600 dark:fill-rose-400"
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
              >
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
              </svg>
            </span>
            <span class="text-lg font-bold  dark:text-darkTextMain">68</span>
          </a>
        </div>
      </article>
    </>
  );
}
