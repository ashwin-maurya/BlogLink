import { useContext, useEffect, useMemo } from "react";
<<<<<<< HEAD
// import { Comments } from "../../Component/common";
=======
import { Comments } from "../../Component/common";
>>>>>>> cf9b0387da88fba18a08f6f37f8d495f73007fe2
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
<<<<<<< HEAD
              __html: DOMPurify.sanitize(blog?.Description),
            }}
          />
        }
        <div className=" mt-40">{/* <Comments /> */}</div>
=======

              __html: DOMPurify.sanitize(blog[20]?.description),
            }}
          />
        }
        <div className=" mt-40">
          <Comments />
        </div>
>>>>>>> cf9b0387da88fba18a08f6f37f8d495f73007fe2
      </section>
    </>
  );
};

export default MiddleSection;
