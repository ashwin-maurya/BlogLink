import { Share } from "../../Component/common";
import { shareData } from "../../Component/constants";

const RightSection = () => {
  return (
    <section className="flex max-2xl:mt-20   flex-col mt-48 justify-center items-center ">
      <div className="max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center">
        <p className="text-3xl font-semibold py-3">Share the article</p>
        {
          <ul className="flex max-xl:gap-7 justify-start items-center gap-5 ">
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
