import { BlogCard } from "../../Components/Common";
import { CardData } from "../../Components/constants";

export default function MiddleSection() {
  return (
    <section className="p-3 rounded-md w-full">
      <div className=" grid grid-cols-2 max-sm:grid-cols-1 justify-center  gap-6">
        {CardData.map((card) => (
          <BlogCard
            Key={card.label}
            label={card.label}
            author={card.author}
            imgURL={card.imgURL}
          ></BlogCard>
        ))}
      </div>
    </section>
  );
}
