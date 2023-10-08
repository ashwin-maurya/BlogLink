import React, { useState } from "react";
import { code1 } from "../../Assets/images";
import Reply from "./Reply";
import UserReplies from "./UserReplies";

const CommentBox = ({ comment }) => {
  const [replyBox, setreplyBox] = useState(false);
  // console.log(comment?.reply);
  //   console.log(comment);

  return (
    <section>
      <article className="p-6 text-base bg-white rounded-lg dark:bg-darkBgPrimary">
        <footer className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              <img
                className="mr-2 w-6 h-6 rounded-full"
                src={code1}
                alt="Ram Ghanshyam"
              />
              Ram Ghanshyam
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time title="February 8th, 2022">Feb. 8, 2022</time>
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
        <p className="text-gray-500 dark:text-gray-400">{comment.comment}</p>
        <div className="flex mt-4 gap-7  items-center">
          <div className="flex items-center  space-x-4">
            <button
              type="button"
              className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium"
              onClick={() => {
                setreplyBox(true);
              }}
            >
              r
              <svg
                className="mr-1.5 w-3.5 h-3.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
                />
              </svg>
              Reply
            </button>
          </div>
          <div className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
            {comment?.reply.length != 0 &&
              `(${comment?.reply.length}) Replies `}
          </div>
        </div>
        <Reply
          reply1={comment?.reply}
          commentID={comment?._id}
          setshow={setreplyBox}
          show={replyBox}
        ></Reply>
        {comment?.reply.length != 0 &&
          comment?.reply?.map((reply) => {
            return (
              <UserReplies key={reply?.username} reply={reply}></UserReplies>
            );
          })}
      </article>
    </section>
  );
};

export default CommentBox;