import { useParams } from "react-router";
import { CardData } from "../../Component/constants";

const MiddleSection = ({ blog }) => {
  //   console.log("this is " + blog[0].content);
  return (
    <>
      <section className="max-container text-[27px]">
        <div>{blog.content}</div>
      </section>
    </>
  );
};

export default MiddleSection;
