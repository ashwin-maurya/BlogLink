import { useContext, useEffect, useState } from "react";
import getUniqueID from "../Helper/getUniqueID";
import WriteBlogPage from "../Pages/WriteBlogPage";
import AuthContext from "../Helper/Context/AuthContext";
import { useLocation } from "react-router";
import blogContext from "../Helper/Context/blogContext";

// toast.configure();
const WriteBlogLayout = () => {
  const postid = getUniqueID();
  const [check, setcheck] = useState(false);
  const context2 = useContext(AuthContext);
  const { UserDetails } = context2;
  // console.log(UserDetails.username);

  const location = useLocation();
  const context = useContext(blogContext);
  const { SingleBlogContent, getsingleblogContent } = context;

  console.log("I work in writeblogLAyotu");
  let id = location.state?.id;
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
      <WriteBlogPage
        postid={postid}
        UserDetails={UserDetails}
        id={id}
        blog2={data}
        setcheck={setcheck}
        check={check}
      ></WriteBlogPage>
    </div>
  );
};

export default WriteBlogLayout;
