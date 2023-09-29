import React, { useContext, useEffect } from "react";
import AuthContext from "../../Helper/Context/AuthContext";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function ProfilePage() {
  const navigate = useNavigate();
  const context = useContext(AuthContext);

  const { UserDetails, AuthStatus } = context;
  useEffect(() => {
    if (!AuthStatus) {
      navigate("/home");
    }
  }, [AuthStatus]);
  return (
    <>
      <section class="relative block h-[400px] ">
        <div class=" w-full h-full bg-center bg-cover bg-[url('https://wallpapers.com/images/hd/profile-picture-background-10tprnkqwqif4lyv.jpg')]"></div>
      </section>
      <section class="relative py-16 ">
        <div class="container mx-auto px-4">
          <div class="relative flex flex-col min-w-0 bg-white  dark:bg-darkBgPrimary w-full mb-6 shadow-xl rounded-lg -mt-64 p-10">
            <div class="flex flex-wrap justify-center relative">
              <img
                alt="..."
                src=""
                class="shadow-xl rounded-full w-56 h-auto align-middle border-none -mt-32"
              />
              <div className="absolute right-0 top-0">
                <button className="border-2 border-slate-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-orange-300 rounded-md bg-primaryMain dark:bg-secondary px-4 py-1 font-semibold text-white  ">
                  Edit
                </button>
              </div>
            </div>
            <div class="text-center my-4">
              <h3 class="text-4xl font-semibold leading-normals text-blueGray-700 mb-2 dark:text-darkTextMain">
                Ashwin Maurya
              </h3>
              <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-light uppercase dark:text-darkTextMain">
                Trying to make good, a better.
              </div>
            </div>
            <div className="flex min-w-0 break-words w-full max-lg:flex-col">
              <div className="w-[50%] max-lg:w-[100%] rounded-lg p-5 m-2 bg-bgBlue dark:bg-darkBgMain flex flex-col">
                <div className="flex justify-evenly gap-5">
                  <div className="bg-white dark:bg-darkBgPrimary shadow-sm px-4 py-2 rounded-lg flex w-full items-center justify-center">
                    <div className="flex dark:text-secondary text-primaryMain  flex-col justify-center items-center">
                      <div className="text-2xl">203</div>
                      <div className="font-bold">Followers</div>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-darkBgPrimary shadow-sm px-4 py-2 rounded-lg flex w-full items-center justify-center">
                    <div className="flex dark:text-secondary text-primaryMain  flex-col justify-center items-center">
                      <div className="text-2xl">900</div>
                      <div className="font-bold">Following</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[50%] max-lg:w-[100%] rounded-lg p-5 m-2 bg-bgBlue dark:bg-darkBgMain">
                <div className="flex items-center">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-briefcase  text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold  w-[90%]  ">
                    <p>Web Developer Intern</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-graduation-cap text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>
                      BTech in Computer Engineering, AISSMS Institute of
                      Information Technology, Pune
                    </p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-map-marker text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>Pune, India</p>
                  </div>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-[10%] max-sm:w-[15%]">
                    <div className="w-7 h-7 bg-primaryMain dark:bg-secondary rounded-full m-2 flex justify-center items-center ">
                      <i className="fa fa-calendar-o text-bgBlue text-base"></i>
                    </div>
                  </div>
                  <div className="text-lightTextMain dark:text-darkTextMain font-semibold w-[90%]">
                    <p>10 September, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
