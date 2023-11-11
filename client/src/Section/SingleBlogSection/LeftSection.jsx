const LeftSection = ({ blog }) => {
  return (
    <section className="flex mt-[8%] max-2xl:w-full max-xl:mt-3  flex-col justify-center items-center ">
      <div className=" flex justify-center items-center w-28 ">
        <img
          src={blog?.author?.profileImg}
          alt=""
          className="md:w-[140px] border-2  h-28 rounded-full "
        />
      </div>
      <div className=" flex gap-3 flex-col mt-2 md:mt-3 justify-center items-center">
        <p className="dark:hover:text-secondary md:text-[24px]  leading-9 md:leading-5 text-center font-montserrat  font-semibold text-3xl text-gray-500 ">
          {blog?.author?.username}
        </p>
        {/* <p className="font-serif md:text-center  opacity-50 md:text-[23px] text-[23px]">
          <i>Contributing Writer</i>
        </p> */}

        <p className="border-y-[2px] py-6 md:py-3 opacity-70 tracking-[-1px]">
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
