import { CardData } from "../../Component/constants";
import { BlogCard } from "../../Component/common";
export default function LeftSection() {
  return (
    <section className=" flex justify-center max-lg:justify-start rounded-md">
      <div className=" grid grid-cols-1 lp w-full place-items-center">
        {CardData.map((card, index) => (
          <BlogCard key={index} card={card}></BlogCard>
        ))}
      </div>
    </section>
  );
}
