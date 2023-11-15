import { profileDefault } from "../../Assets/icons";

const LeftSection = ({ blog }) => {
  return (
    <section className="flex mt-[8%] max-2xl:w-full   flex-col justify-center items-center ">
      <div className=" flex justify-center items-center w-28 ">
        <img
          src={
            blog?.author?.profileImg ? blog?.author?.profileImg : profileDefault
          }
          alt=""
          className="max-md:w-[100px] max-md:h-[100px] border-2  h-25 rounded-full "
        />
      </div>
      <div className=" flex gap-5 max-md:gap-0 flex-col mt-2  justify-center items-center">
        <p className="dark:hover:text-secondary md:text-[24px]  leading-9 md:leading-5 text-center mt-1 font-montserrat  font-semibold text-3xl text-gray-500 max-md:text-[22px] ">
          {blog?.author?.username}
        </p>
        {/* <p className="font-serif md:text-center  opacity-50 md:text-[23px] text-[23px]">
          <i>Contributing Writer</i>
        </p> */}

        <p className="border-y-[2px] py-6 max-md:py-3 md:py-3 opacity-70 tracking-[-1px]">
          {new Date(blog?.Date).toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>
    </section>
  );
};

export default LeftSection;
