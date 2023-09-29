import React, { useContext, useEffect, useState } from "react";

import SingleBlog from "../Pages/SingleBlog";
import { useLocation } from "react-router";

import Cookies from "js-cookie";
import blogContext from "../Helper/Context/blogContext";
const SingleBlogLayout = () => {
  const location = useLocation();

  const context = useContext(blogContext);
  const { SingleBlogContent, getsingleblogContent } = context;

  console.log("I work in writeblogLAyotu");
  const id = location.state?.id;
  console.log(id);

  useEffect(() => {
    getsingleblogContent(id);
  }, []);
  console.log(SingleBlogContent);
  console.log("blog1 from writeLayout");
  return (
    <section>
      <SingleBlog blog1={SingleBlogContent[0]}></SingleBlog>
    </section>
  );
};

export default SingleBlogLayout;
