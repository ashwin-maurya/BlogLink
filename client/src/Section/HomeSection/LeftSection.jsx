import { BlogCard } from "../../Components/Common";
import { CardData } from "../../Components/constants";

export default function LeftSection() {
  return (
    <section className="p-3 rounded-md w-full">
      <div className=" grid grid-cols-1 justify-center  gap-6">
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
