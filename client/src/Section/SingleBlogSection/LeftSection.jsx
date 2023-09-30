const LeftSection = ({ blog }) => {
  return (
    <section className="flex mt-48 max-2xl:w-full max-xl:mt-3  flex-col justify-center items-center ">
      <div className=" flex justify-center items-center w-28 ">
        <img
          src="https://d2r55xnwy6nx47.cloudfront.net/uploads/2023/01/rebeccaboyle2-1720x1720.jpg"
          alt=""
          className="md:w-[120px] rounded-full "
        />
      </div>
      <div className="flex gap-5 flex-col mt-4 md:mt-3 justify-center items-center">
        <p className="dark:hover:text-secondary md:text-[24px]  w-[70%] leading-9 md:leading-5 text-center font-montserrat  font-semibold text-3xl">
          Author_name
        </p>
        <p className="font-serif md:text-center  opacity-50 md:text-[23px] text-[23px]">
          <i>Contributing Writer</i>
        </p>

        <p className="border-y-[2px] py-6 md:py-3 opacity-50 tracking-[-1px]">
          {/* {blog.date} */}
          28 August 2023
        </p>
      </div>
    </section>
  );
};

export default LeftSection;
