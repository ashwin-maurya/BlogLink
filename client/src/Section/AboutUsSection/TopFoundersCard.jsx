import React from "react";
import { Link } from "react-router-dom";
export default function TopFoundersCard() {
  return (
    <>
      <h3 className="text-2xl font-semibold text-gray-800 my-4 w-full text-center dark:text-white">
        Meet the Developers
      </h3>
      <div className="flex justify-center items-center m-5 mt-10  max-md:flex-col">
        <div className="flex flex-col items-center mb-10 lg:mb-14 bg-lightSkeleton mx-10 rounded dark:bg-darkBgPrimary w-full">
          <div class="overflow-hidden rounded-t-lg w-full">
            <img
              src="https://i.postimg.cc/7hBDr1vC/pexels-rodnae-productions-7005064.jpg"
              alt=""
              class="object-cover object-top w-full h-48"
            />
          </div>
          <div className="flex p-4 items-center justify-start w-full gap-4">
            <div class="h-32 w-32 overflow-hidden rounded-full">
              <img
                src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg"
                alt=""
                class="object-cover object-top"
              />
            </div>
            <div className="text-left w-auto">
              <h2 className="mb-1 text-2xl font-bold text-gray-700 dark:text-white">
                Aryan Maurya
              </h2>
              <p className="text-gray-700 dark:text-white font-light">
                Full Stack Developer
              </p>
              <div className="flex items-center my-2">
                <Link to="https://www.linkedin.com/in/aryan-maurya-1a589b24a/">
                  <i className="fa fa-linkedin text-xl p-2 py-1 text-gray-700 dark:text-white  dark:hover:bg-darkBgMain rounded full"></i>
                </Link>
                <Link to="https://github.com/108aryanmaurya">
                  <i className="fa fa-github text-xl p-2 py-1 text-gray-700 dark:text-white  dark:hover:bg-darkBgMain rounded full"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-10 lg:mb-14 mx-10 bg-lightSkeleton  rounded dark:bg-darkBgPrimary w-full">
          <div class="overflow-hidden rounded-t-lg w-full">
            <img
              src="https://i.postimg.cc/7hBDr1vC/pexels-rodnae-productions-7005064.jpg"
              alt=""
              class="object-cover object-top w-full h-48"
            />
          </div>
          <div className="flex p-4 items-center justify-start w-full gap-4">
            <div class="h-32 w-32 overflow-hidden rounded-full">
              <img
                src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg"
                alt=""
                class="object-cover object-top"
              />
            </div>
            <div className="text-left w-auto">
              <h2 className="mb-1 text-2xl font-bold text-gray-700 dark:text-white">
                Ashwin Maurya
              </h2>
              <p className="text-gray-700 dark:text-white font-light">
                Full Stack Developer
              </p>
              <div className="flex items-center my-2">
                <Link to="https://www.linkedin.com/in/ashwin-maurya/">
                  <i className="fa fa-linkedin text-xl p-2 py-1 text-gray-700 dark:text-white  dark:hover:bg-darkBgMain rounded full"></i>
                </Link>
                <Link to="https://github.com/ashwin-maurya">
                  <i className="fa fa-github text-xl p-2 py-1 text-gray-700 dark:text-white  dark:hover:bg-darkBgMain rounded full"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
