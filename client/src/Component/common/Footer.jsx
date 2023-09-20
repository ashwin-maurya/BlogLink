import React from "react";
import { headerLogo } from "../../Assets/icons";

export default function Footer() {
  return (
    <>
      <footer class="bg-white dark:bg-darkBgPrimary border border-gray-200">
        <div class=" w-full p-4 py-6 max-md:px-10 px-20">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/" class="flex items-center">
                <img src={headerLogo} class="h-8 mr-3" alt="BlueSky Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Blue Sky
                </span>
              </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      BlueSky
                    </a>
                  </li>
                  <li>
                    <a href="/" class="hover:underline">
                      Tailwind CSS
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="/" class="hover:underline ">
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="/" class="hover:underline">
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul class="text-gray-500 dark:text-gray-400 font-medium">
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="/" class="hover:underline">
                BlueSky™
              </a>
              . All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i className="fa fa-codepen"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
