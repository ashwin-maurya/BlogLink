import React, { useContext, useState } from "react";
import { code1 } from "../../Assets/images";

import CommentLikeContext from "../../Helper/Context/CommentLikeContext";
import { useEffect } from "react";
import CommentBox from "./CommentBox";
import AuthContext from "../../Helper/Context/AuthContext";

export default function Comments({ blog }) {
  const context = useContext(CommentLikeContext);
  const context2 = useContext(AuthContext);
  const { UserDetails } = context2;
  const { addcomment, getsingleblogComment, SingleBlogComment } = context;

  useEffect(() => {
    // console.log(UserDetails);
    setcomment({
      comment,
      postID: blog?._id,
      userID: JSON.parse(localStorage?.getItem("UserData"))?.userDetailId,
    });
  }, [blog, UserDetails]);

  const [comment, setcomment] = useState("");

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = {
      [name]: value,
    };
    setcomment({ ...comment, ...input });
    console.log(comment);
  };
  const onsubmit = async (e) => {
    e.preventDefault();
    console.log(comment);
    await addcomment(comment);
    getsingleblogComment(blog?._id);
    console.log(SingleBlogComment);
  };
  // console.log

  useEffect(() => {
    console.log("Hello");
    async function d() {
      await getsingleblogComment(blog?._id);
    }
    d();
    console.log(SingleBlogComment);
  }, [blog]);

  return (
    <>
      <section
        id="comment"
        className="bg-slate-50 w-[100%]  dark:bg-transparent  py-8 lg:py-16 antialiased"
      >
        <div className=" mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              Discussion (20)
            </h2>
          </div>
          <form className="mb-6">
            <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-darkBgPrimary dark:border-gray-700">
              <label className="sr-only">Your comment</label>
              <textarea
                id="comment"
                rows="6"
                name="comment"
                value={comment?.comment}
                onChange={(e) => {
                  getInput(e);
                }}
                className="dark:text-white px-0 w-full text-sm text-gray-900 bg-transparent border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 "
                placeholder="Write a comment..."
                required
              ></textarea>
            </div>
            <button
              // type="submit"
              className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primaryMain rounded-lg focus:ring-4     "
              onClick={(e) => {
                onsubmit(e);
              }}
            >
              Post comment
            </button>
          </form>
          <div>
            {SingleBlogComment?.comment?.map((comment) => {
              return (
                <>
                  <CommentBox
                    depth={0}
                    maxdepth={3}
                    key={comment?._id}
                    comment={comment}
                  ></CommentBox>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
