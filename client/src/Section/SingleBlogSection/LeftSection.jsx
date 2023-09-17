const LeftSection = ({ blog }) => {
  return (
    <section className="flex mt-48 flex-col justify-center items-center ">
      <div className="  w-28 ">
        <img src={blog.author_imgURL} alt="" className="rounded-full w-full" />
      </div>
      <div className="flex gap-5 flex-col mt-4 justify-center items-center">
        <p className=" w-[70%] leading-9 text-center font-montserrat  font-semibold text-3xl">
          {blog.author}
        </p>
        <p className="font-serif opacity-50 text-[23px]">
          <i>Contributing Writer</i>
        </p>

        <p className="border-y-[2px] py-6 opacity-50 tracking-[-1px]">
          {blog.date}
        </p>
      </div>
    </section>
  );
};

export default LeftSection;
