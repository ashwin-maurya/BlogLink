import { profileDefault } from "../../Assets/icons";
import { Share } from "../../Component/common";
import { shareData } from "../../Component/constants";
const LeftSection = ({ blog }) => {
  return (
    <section className="flex mt-10 max-2xl:w-full   flex-col justify-center items-center max-2xl:flex-row max-lg:flex-col max-md:flex-row max-2xl:justify-evenly">
      <div className="flex  flex-col justify-center items-center border-b-[1px] dark:border-darkBorderAll max-md:border-0">
        <p className="text-3xl max-md:text-[26px] font-semibold py-3">Author</p>
        <div className=" flex justify-center items-center w-28 h-28">
          <img
            src={
              blog?.author?.profileImg
                ? blog?.author?.profileImg
                : profileDefault
            }
            alt=""
            className="w-full h-full border-2 object-cover object-top rounded-full "
          />
        </div>
        <div className=" flex gap-5 max-md:gap-0 flex-col mt-2  justify-center items-center">
          <p className="dark:hover:text-secondary   leading-9 md:leading-5 text-center mt-1 font-montserrat  font-semibold text-xl text-gray-300">
            {blog?.author?.username}
          </p>
          <p className="py-6 max-md:py-3 md:py-3 opacity-70 tracking-[-1px]">
            {new Date(blog?.Date).toLocaleString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      <div className="max-xl:flex max-xl:flex-col  pb-8 items-center justify-center flex flex-col max-xl:justify-center max-xl:items-center">
        <p className="text-3xl max-md:text-[26px] font-semibold py-3">
          Share the article
        </p>
        {
          <ul className="grid grid-cols-2  max-xl:gap-5 justify-start items-center gap-2  ">
            {shareData.map((share, index) => (
              <Share share={share} check={false} key={index}></Share>
            ))}
          </ul>
        }
      </div>
    </section>
  );
};

export default LeftSection;
