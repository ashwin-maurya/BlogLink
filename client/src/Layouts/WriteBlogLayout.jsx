import React from "react";

import WriteBlogPage from "../Pages/WriteBlogPage";
import { useLocation } from "react-router";
const WriteBlogLayout = () => {
  const location = useLocation();
  const blog1 = location.state?.blog1;
  return (
    <div>
      <WriteBlogPage blog2={blog1}></WriteBlogPage>
    </div>
  );
};

export default WriteBlogLayout;
