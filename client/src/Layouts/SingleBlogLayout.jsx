import React, { useContext, useEffect, useState } from "react";

import SingleBlog from "../Pages/SingleBlog";
import { useLocation } from "react-router";

import blogContext from "../Helper/Context/blogContext";
import CommentLikeContext from "../Helper/Context/CommentLikeContext";
import SingleBlogPageSkeleton from "../Component/SkeletonLoaders/SingleBlogPageSkeleton";
const SingleBlogLayout = () => {
  const location = useLocation();

  const context = useContext(blogContext);
  const { SingleBlogContent, getsingleblogContent } = context;
  const context2 = useContext(CommentLikeContext);
  const { updateViews } = context2;
  const [loading, setloading] = useState(true);
  // console.log("I work in writeblogLAyotu");
  const id = location.state?.id;
  const userID = location.state?.userID;
  // const view = location.state?.view;
  const username = location.state?.username;
  // console.log(username);
  const [Id, setId] = useState(id);
  useEffect(() => {
    getsingleblogContent(id, userID)
      .then(() => {
        setloading(false);
      })
      .catch((error) => {
        console.error("Error fetching blog data:", error);
        setloading(false);
      });
  }, [Id]);
  console.log(SingleBlogContent);

  const [viewCount, setViewCount] = useState(0);
  useEffect(() => {
    // Start the timer when the component mounts
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const currentTime = Date.now();
      const elapsedSeconds = (currentTime - startTime) / 1000;

      // If the user has stayed on the page for more than 3 minutes (180 seconds), increase the view count
      if (elapsedSeconds >= 10) {
        setViewCount((prevViewCount) => prevViewCount + 1);
        console.log(SingleBlogContent);
        console.log({ viewCount, id });

        updateViews({ view: SingleBlogContent[0]?.view, id });
        clearInterval(intervalId); // Stop the timer
      }
    }, 1000);

    // setTimer(intervalId);

    // Clean up the timer when the component unmounts
  }, []);
  return (
    <>
      {
        <section>
          <SingleBlog
            loading={loading}
            blog1={SingleBlogContent[0]}
          ></SingleBlog>
        </section>
      }
    </>
  );
};

export default SingleBlogLayout;
