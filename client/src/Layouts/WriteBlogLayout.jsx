import React, { useEffect, useState } from "react";

import WriteBlogPage from "../Pages/WriteBlogPage";
import { useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
// toast.configure();
const WriteBlogLayout = () => {
  const location = useLocation();
  const blog1 = location.state?.blog1;
  const navigate = useNavigate();
  const [check, setcheck] = useState(true);
  useEffect(() => {
    if (check) {
      // navigate(-1);
      toast.error("Please Login first");
    }
  }, []);
  return (
    <div>
      <WriteBlogPage blog2={blog1}></WriteBlogPage>
    </div>
  );
};

export default WriteBlogLayout;
