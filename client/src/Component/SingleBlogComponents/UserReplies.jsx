import React, { useContext, useEffect } from "react";
import { code1 } from "../../Assets/images";
import HelperContext from "../../Helper/Context/HelperContext";

const UserReplies = ({ reply }) => {
  const context = useContext(HelperContext);
  const { formatUTCDate, date } = context;

  useEffect(() => {
    formatUTCDate(reply?.newcomment?.timeStamp);
  }, [reply]);
  console.log(reply);
  console.log("reply");

  return (
    <section>
      {/* <article className="p-6 text-base bg-white rounded-lg dark:bg-darkBgPrimary">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={code1}
                // {reply.newcomment.userImg}
                alt="Ram Ghanshyam"
              />
              {reply?.newcomment?.username}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time title="February 8th, 2022">{date}</time>
            </p>
          </div>
          <button
            id="dropdownComment1Button"
            data-dropdown-toggle="dropdownComment1"
            className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-darkBgPrimary dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            type="button"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 3"
            >
              <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
            </svg>
            <span className="sr-only">Comment settings</span>
          </button>
        </footer>
        <p>{reply2?.newcomment?.reply}</p>
      </article> */}
    </section>
  );
};

export default UserReplies;
