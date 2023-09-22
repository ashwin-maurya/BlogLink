import { useContext, useEffect, useMemo } from "react";
// import { Comments } from "../../Component/common";

import DOMPurify from "dompurify";
import blogContext from "../../Helper/Context/blogContext";
const MiddleSection = ({ blog }) => {
  console.log(blog.Description);
  // let data = blog.description;
  // const context = useContext(blogContext);
  // const { blog, getblogs } = context;

  useEffect(() => {
    // getblogs();
  }, []);
  return (
    <>
      <section className="max-container text-[27px]">
        {
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog?.Description),
            }}
          />
        }
        <div className=" mt-40">{/* <Comments /> */}</div>

      </section>
    </>
  );
};

export default MiddleSection;
