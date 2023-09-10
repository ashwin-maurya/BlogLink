import { LeftSection, RightSection, MiddleSection } from "../Section/index.js";

export default function Home() {
  return (
    <section className=" flex min-h-screen gap-3  justify-between  ">
      <div className=" max-md:hidden w-[100%] ">
        {" "}
        <LeftSection></LeftSection>{" "}
      </div>
      <div className="w-[220%]">
        <MiddleSection></MiddleSection>{" "}
      </div>
      <div className="w-[130%] max-lg:hidden">
        <RightSection></RightSection>
      </div>
    </section>
  );
}
