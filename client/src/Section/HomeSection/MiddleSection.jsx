import { BlogCard } from "../../Components/Common";
import { CardData } from "../../Components/constants";

export default function MiddleSection() {
  return (
    <section className="bg-white w-full">
      {CardData.map((card) => (
        <BlogCard
          Key={card.label}
          label={card.label}
          author={card.author}
          imgURL={card.imgURL}
        ></BlogCard>
      ))}
    </section>
  );
}
