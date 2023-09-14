import { CardData } from "../../Component/constants";
import { BlogCard } from "../../Component/common";
export default function LeftSection() {
  return (
    <section className=" flex justify-center rounded-md w-full">
      <div className=" grid grid-cols-1 justify-center  ">
        {CardData.map((card) => (
          <BlogCard
            Key={card.label}
            label={card.label}
            author={card.author}
            imgURL={card.blog_imgURL}
            imgURL2={card.author_imgURL}
            category={card.category}
            date={card.date}
            tags={card.tags}
          ></BlogCard>
        ))}
      </div>
    </section>
  );
}
