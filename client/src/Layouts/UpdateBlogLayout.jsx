import { useContext, useEffect, useState } from "react";
import getUniqueID from "../Helper/getUniqueID";

import WriteBlogPage from "../Pages/WriteBlogPage";
import AuthContext from "../Helper/Context/AuthContext";
import { useLocation, useParams } from "react-router";
import blogContext from "../Helper/Context/blogContext";
import UpdateBlog from "../Pages/updateBlog";

// toast.configure();
const UpdateBlogLayout = () => {
  const context2 = useContext(AuthContext);
  const { UserDetails } = context2;
  // console.log(UserDetails.username);
  const { id } = useParams();
  const context = useContext(blogContext);
  const { SingleBlogContent, getsingleblogContent } = context;

  console.log("I work in writeblogLAyotu");

  console.log(id);

  useEffect(() => {
    getsingleblogContent(id);
  }, []);

  console.log(SingleBlogContent);
  console.log("blog1 from writeLayout");

  return (
    <div>
      <UpdateBlog
        UserDetails={UserDetails}
        blog2={SingleBlogContent}
      ></UpdateBlog>
    </div>
  );
};

export default UpdateBlogLayout;
