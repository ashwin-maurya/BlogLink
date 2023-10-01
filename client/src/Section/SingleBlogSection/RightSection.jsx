import { Share } from "../../Component/common";
import { shareData } from "../../Component/constants";

const RightSection = () => {
  return (
    <section className="flex max-2xl:mt-1   flex-col mt-48 justify-center items-center ">
      <div className="max-xl:flex max-xl:flex-col items-center justify-center flex flex-col max-xl:justify-center max-xl:items-center">
        <p className="text-3xl font-semibold py-3">Share the article</p>
        {
          <ul className="grid grid-cols-2 max-xl:gap-5 justify-start items-center gap-2 ">
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
