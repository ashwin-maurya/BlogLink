import { useParams } from "react-router";
import { CardData } from "../../Component/constants";
import { useContext } from "react";

const MiddleSection = ({ blog }) => {
  function createMarkup() {
    return { __html: blog.description };
  }
  // console.log("this is " + blog.description);
  // const data = blog.description;
  return (
    <>
      <section className="max-container text-[27px]">
        <div dangerouslySetInnerHTML={createMarkup()} />;
      </section>
    </>
  );
};

export default MiddleSection;
