import { Tags, Share } from "../../Component/common";
import { TagData, shareData } from "../../Component/constants";

export default function RightSection() {
  return (
    <section className="relative  justify-center w-[80%] max-lg:w-[100%] h-auto p-5">
      <section className="mb-16">
        <h1 className="text-xl font-medium my-4 dark:text-darkTextMain">
          Follow Us
        </h1>
        <ul className="flex w-full justify-start items-center gap-5 max-xl:gap-1">
          {shareData.map((share, index) => (
            <Share share={share} key={index}></Share>
          ))}
        </ul>
      </section>
      <section className="my-8">
        <h1 className="text-xl font-medium my-4 dark:text-darkTextMain ">
          Recommended topics
        </h1>
        <div className="relative flex flex-wrap w-full">
          {/* {card?.tags.map((tag, index) => (
          <Tags key={index} tags={tag} />
        ))}{" "} */}
        </div>
      </section>
    </section>
  );
}
