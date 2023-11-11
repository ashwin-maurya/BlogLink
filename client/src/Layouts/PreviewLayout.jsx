import React, { useContext, useEffect, useState } from "react";
import SingleBlog from "../Pages/SingleBlog";
const PreviewLayout = () => {
  const [blogdata, setblogdata] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const UserID = JSON.parse(localStorage.getItem("UserData")).UserID;
    const func = async () => {
      const response1 = await fetch(
        `http://localhost:5001/api/auth/getCurrentUserDetails/${UserID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": JSON.parse(localStorage.getItem("UserData"))
              .authtoken,
          },
        }
      );
      const UserDetail = await response1.json();
      console.log(UserDetail);
      let author = UserDetail;
      let data = JSON.parse(localStorage.getItem("BlogData"));
      data = { ...data, blogcontent: { description: data.description } };
      setblogdata({
        ...data,
        preview: true,
        // author,
        Date: new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
      console.log(localStorage.getItem("BlogData"));
      console.log(blogdata);
    };
    func();
  }, []);
  return (
    <>
      <SingleBlog loading={loading} blog1={blogdata}></SingleBlog>
    </>
  );
};

export default PreviewLayout;
