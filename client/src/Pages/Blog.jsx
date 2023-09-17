import { LeftSection, RightSection } from "../Section/index.js";

export default function Home() {
  return (
    <section className="max-container flex min-h-screen   justify-between  max-lg:flex-col">
      <div className="w-[65%] max-lg:w-[100%] max-lg:border-0 border-r-[1px]  border-gray-200 dark:border-darkBorderAll">
        <LeftSection></LeftSection>{" "}
      </div>
      <div className="w-[35%] border-l-[1px] dark:border-darkBorderAll dark:hover:border-secondary hover:border-primaryMain max-lg:w-[100%]">
        <RightSection></RightSection>
      </div>
    </section>
  );
}
