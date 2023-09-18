import { Share } from "../../Component/common";
import { shareData } from "../../Component/constants";

const RightSection = () => {
  return (
    <section className="flex flex-col mt-48 justify-center items-center ">
      <div>
        <p className="text-3xl font-semibold py-3">Share the article</p>
        {
          <ul className="flex  justify-start items-center gap-5 max-xl:gap-1">
            {shareData.map((share, index) => (
              <Share share={share} check={false} key={index}></Share>
            ))}
          </ul>
        }
      </div>
    </section>
  );
};

export default RightSection;
