import { useParams } from "react-router";
import { CardData } from "../../Component/constants";

const MiddleSection = () => {
  const { handle } = useParams();
  console.log(typeof handle);
  const blog = CardData.filter((card) => {
    console.log(card.id + typeof card.id + "id...");
    return card.id === handle;
  });

  //   console.log("this is " + blog[0].content);
  return <section>{blog[0].content}</section>;
};

export default MiddleSection;
