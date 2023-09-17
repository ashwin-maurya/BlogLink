import React from "react";

export default function Share(props) {
  const { share } = props;

  return (
    <>
      <div className="group">
        <li className="list-none border-b-2 border-t-2 dark:border-darkBorderAll group-hover:border-primaryMain px-3">
          <a
            className="block relative mx-3 my-2 text-3xl text-gray-600 text-center no-underline dark:text-darkTextMain group-hover:text-primaryMain"
            href="#"
          >
            <i className={`fa fa-${share.name} `}></i>
          </a>
        </li>
      </div>
    </>
  );
}
