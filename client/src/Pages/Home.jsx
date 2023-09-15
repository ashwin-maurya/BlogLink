import { LeftSection, RightSection } from "../Section/index.js";

export default function Home() {
  return (
    <section className="max-container flex min-h-screen gap-3  justify-between  max-lg:flex-col">
      <div className="w-[65%] max-lg:w-[100%] max-lg:border-0 border-r-2 border-gray-200">
        <LeftSection></LeftSection>{" "}
      </div>
      <div className="w-[35%] max-lg:w-[100%]">
        <RightSection></RightSection>
      </div>
    </section>
  );
}
