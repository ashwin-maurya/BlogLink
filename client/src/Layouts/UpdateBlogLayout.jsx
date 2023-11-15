import { useContext, useEffect, useState } from "react";
import getUniqueID from "../Helper/getUniqueID";

import WriteBlogPage from "../Pages/WriteBlogPage";
import AuthContext from "../Helper/Context/AuthContext";
import { useLocation, useParams } from "react-router";
import blogContext from "../Helper/Context/blogContext";
import UpdateBlog from "../Pages/updateBlog";

// toast.configure();
const UpdateBlogLayout = () => {
  const postid = getUniqueID();
  const [check, setcheck] = useState(false);
  const context2 = useContext(AuthContext);
  const { UserDetails } = context2;
  // console.log(UserDetails.username);
  const { id } = useParams();
  const context = useContext(blogContext);
  const { SingleBlogContent, getsingleblogContent } = context;

  console.log("I work in writeblogLAyotu");
  let data = SingleBlogContent;
  console.log(id);

  useEffect(() => {
    getsingleblogContent(id);
    if (id != undefined) {
      setcheck(!check);
    } else {
      data = [];
      console.log("I workes");
      setcheck(!check);
    }
  }, []);

  console.log(SingleBlogContent);
  console.log(data);
  console.log("blog1 from writeLayout");

  return (
    <div>
      <UpdateBlog
        postid={postid}
        UserDetails={UserDetails}
        id={id}
        blog2={data}
        setcheck={setcheck}
        check={check}
      ></UpdateBlog>
    </div>
  );
};

export default UpdateBlogLayout;
