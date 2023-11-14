import React from "react";
import { NewsletterCard } from "../../Component/common";
export default function Newsletter() {
  return (
    <>
      <section className="my-32 max-sm:my-16 max-lg:my-20">
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('https://cdn.pixabay.com/photo/2018/01/24/18/05/background-3104413_1280.jpg')] h-[300px] max-sm:h-[200px]"></div>
        <div className="container px-6 md:px-12">
          <div className="block rounded-lg px-6 py-12 max-sm:py-6 shadow-md bg-white dark:bg-darkBgPrimary md:py-16 md:px-12 mt-[-100px] backdrop-blur-[30px]">
            <div className="flex flex-wrap justify-center text-center lg:text-left">
              <div className="w-full shrink-0 grow-0 basis-auto md:px-6 xl:w-10/12">
                <div className="grid items-center gap-x-6 lg:grid-cols-2">
                  <div className="mb-10 max-sm:mb-5 lg:mb-0">
                    <h2 className="text-3xl max-lg:text-2xl font-bold max-sm:font-semibold dark:text-darkTextMain    ">
                      Do not miss any updates.
                      <br />
                      <span className="text-2xl dark:text-primary-400 max-lg:text-xl">
                        Subscribe to our newsletter
                      </span>
                    </h2>
                  </div>

                  <NewsletterCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
