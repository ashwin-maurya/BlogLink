import { LeftSection, RightSection } from "../Section/index.js";

export default function Home() {
  return (
    <section className="max-container flex min-h-screen   justify-between  max-lg:flex-col">
      <div className="w-[65%] max-lg:w-[100%] max-lg:border-0 border-r-[1px]  border-bgBlue dark:border-darkBorderAll">
        <LeftSection></LeftSection>{" "}
      </div>
      <div className="relative w-[35%] border-l-[1px] dark:border-darkBorderAll overflow-hidden  max-lg:w-[100%] dark:bg-darkBgMain ">
        <RightSection></RightSection>
      </div>
    </section>
  );
}
