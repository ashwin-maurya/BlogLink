import React from "react";
import { Link } from "react-router-dom";
export default function TopFoundersCard() {
  return (
    <>
      <div className="scene">
        <div className="planet relative mx-auto mt-20 w-80 h-80 bg-gray-300 rounded-full shadow-inset-2xl">
          <div className="crater absolute left-14 top-11 w-20 h-32 bg-gray-600 rounded-full"></div>
          <div className="crater absolute left-44 top-52 w-16 h-11 bg-gray-600 transform -rotate-22"></div>
          <div className="crater absolute left-67 top-34 w-8 h-16 bg-gray-600 transform rotate-12"></div>
          <div className="crater absolute left-61 top-53 w-3 h-16 bg-gray-600 transform rotate-48"></div>
          <div className="crater absolute left-71 top-12 w-3 h-18 bg-gray-600 transform -rotate-31"></div>
          <div className="rover absolute transform -rotate-70 left-40 top-10">
            <div className="body absolute z-10 w-4 h-6 bg-white rounded-full shadow-left"></div>
            <div className="wheels absolute left-1.5">
              <div className="wheels-after-before absolute z-9 bg-black w-20 h-8 rounded-full"></div>
              <div className="wheels-after-before absolute z-9 bg-black w-20 h-8 rounded-full top-9"></div>
            </div>
            <div className="trace absolute left-3 top-12 transform -rotate-24">
              <div className="trace-after-before absolute w-24 h-40 rounded-full inset-shadow-gray-300"></div>
              <div className="trace-after-before absolute w-24 h-40 rounded-full left-12 inset-shadow-gray-300"></div>
            </div>
          </div>
          <div className="flag absolute bg-red-800 py-1 px-2 text-white rounded-tr-sm whitespace-nowrap transform -rotate-32">
            404
          </div>
        </div>
        <div className="message absolute text-gray-400 top-72 w-full text-center cursor-default">
          <p className="inline-block text-2xl">
            There is no life, try to find{" "}
            <a
              href="https://codepen.io/ddly/"
              className="text-gray-400 hover:border-b-2 border-dotted border-gray-600"
            >
              something else
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
