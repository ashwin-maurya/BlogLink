import React, { useContext, useEffect, useState } from "react";

import WriteBlogPage from "../Pages/WriteBlogPage";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import blogContext from "../Helper/Context/blogContext";

// toast.configure();
const WriteBlogLayout = () => {
  return (
    <div>
      <WriteBlogPage
      // blog2={blog1}
      ></WriteBlogPage>
    </div>
  );
};

export default WriteBlogLayout;
