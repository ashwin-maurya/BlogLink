import React from "react";
import Leftsection from "../Section/SettingsSection/Leftsection";
import Rightsection from "../Section/SettingsSection/Rightsection";
export default function SettingsPage() {
  return (
    <>
      <section className="max-container flex min-h-screen   justify-between  max-lg:flex-col">
        <div className="relative w-[30%]  overflow-hidden  max-lg:w-[100%]">
          <Leftsection />
        </div>
        <div className="w-[70%] max-lg:w-[100%] border-r-[1px] dark:border-darkBorderAll max-lg:border-0  border-bgBlue p-6">
          <Rightsection />
        </div>
      </section>
    </>
  );
}
