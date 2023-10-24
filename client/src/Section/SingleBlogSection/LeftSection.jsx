import { useState, useEffect } from "react";
import { profileDefault } from "../../Assets/icons";
const LeftSection = ({ blog }) => {
  // console.log("LeftSection");
  const host = "http://localhost:5001";

  // console.log(blog);
  const [date, setdate] = useState("");
  const [user, setuser] = useState(profileDefault);
  useEffect(() => {
    const date = new Date(blog?.Date);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    setdate(date.toLocaleString("en-US", options));

    // console.log(card?.UserName);
    const func = async () => {
      const response1 = await fetch(
        `${host}/api/blogs/userImg/${blog?.userID}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const Userimage = await response1.json();
      console.log(Userimage);
      setuser(
        Userimage[0]?.profileImg != ""
          ? Userimage[0]?.profileImg
          : profileDefault
      );
    };
    func();
    console.log(window.location.pathname);
  }, []);
  return (
    <section className="flex mt-48 max-2xl:w-full max-xl:mt-3  flex-col justify-center items-center ">
      <div className=" flex justify-center items-center w-28 ">
        <img
          src={user}
          alt=""
          className="md:w-[140px] border-2 border-black h-28 rounded-full "
        />
      </div>
      <div className="flex gap-5 flex-col mt-4 md:mt-3 justify-center items-center">
        <p className="dark:hover:text-secondary md:text-[24px]  w-[70%] leading-9 md:leading-5 text-center font-montserrat  font-semibold text-3xl">
          {blog?.UserName}
        </p>
        <p className="font-serif md:text-center  opacity-50 md:text-[23px] text-[23px]">
          <i>Contributing Writer</i>
        </p>

        <p className="border-y-[2px] py-6 md:py-3 opacity-50 tracking-[-1px]">
          {date}
        </p>
      </div>
    </section>
  );
};

export default LeftSection;
