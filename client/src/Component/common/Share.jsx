import React from "react";

export default function Share(props) {
  const { share } = props;

  return (
    <>
      <li className="list-none border-b-2 border-t-2 px-3 group">
        <a
          className="block relative m-3 text-3xl text-gray-600 text-center  no-underline group-hover:text-blue-500"
          href="#"
        >
          <i className={`fa fa-${share.name}`}></i>
        </a>
      </li>
    </>
  );
}
