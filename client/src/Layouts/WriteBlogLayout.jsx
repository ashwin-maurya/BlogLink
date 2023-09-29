import React, { useContext, useEffect, useState } from "react";

import WriteBlogPage from "../Pages/WriteBlogPage";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import blogContext from "../Helper/Context/blogContext";

// toast.configure();
const WriteBlogLayout = () => {
  const context = useContext(blogContext);
  const { SingleBlogContent, getsingleblogContent } = context;

  const location = useLocation();
  const id = location.state?.id;
  console.log(id);

  useEffect(() => {
    getsingleblogContent(id);
  });
  console.log(SingleBlogContent);
  console.log("blog1 from writeLayout");

  return (
    <div>
      <WriteBlogPage
      // blog2={blog1}
      ></WriteBlogPage>
    </div>
  );
};

export default WriteBlogLayout;
