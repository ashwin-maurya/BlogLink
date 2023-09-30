import { useContext } from "react";
import getUniqueID from "../Helper/getUniqueID";
import WriteBlogPage from "../Pages/WriteBlogPage";
import AuthContext from "../Helper/Context/AuthContext";

// toast.configure();
const WriteBlogLayout = () => {
  const postid = getUniqueID();
  const context2 = useContext(AuthContext);
  const { UserDetails } = context2;
  console.log(UserDetails?.username);
  return (
    <div>
      <WriteBlogPage
        postid={postid}
        UserDetails={UserDetails}
        // blog2={blog1}
      ></WriteBlogPage>
    </div>
  );
};

export default WriteBlogLayout;
