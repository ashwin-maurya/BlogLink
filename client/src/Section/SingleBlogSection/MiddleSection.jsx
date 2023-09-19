import { useContext, useEffect, useMemo } from "react";

import DOMPurify from "dompurify";
import blogContext from "../../Helper/Context/blogContext";
const MiddleSection = () => {
  // console.log(blog);
  // let data = blog.description;
  const context = useContext(blogContext);
  const { blog, getblogs } = context;

  useEffect(() => {
    getblogs();
  }, []);
  return (
    <>
      <section className="max-container text-[27px]">
        {
          <div
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(blog[11]?.description),
            }}
          />
        }
        <div></div>
      </section>
    </>
  );
};

export default MiddleSection;
