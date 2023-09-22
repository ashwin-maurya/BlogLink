import React from "react";
import SingleBlog from "../Pages/SingleBlog";
import { useLocation } from "react-router";

const SingleBlogLayout = () => {
  const location = useLocation();
  const card = location.state?.card;
  return (
    <section>
      <SingleBlog blog1={card}></SingleBlog>
    </section>
  );
};

export default SingleBlogLayout;
