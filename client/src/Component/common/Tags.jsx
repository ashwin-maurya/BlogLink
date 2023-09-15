import React from "react";

export default function Tags(props) {
  const { tags } = props;

  return (
    <>
      <div className="my-3 mr-2">
        <a
          href={tags.url}
          className="text-black bg-[#F2F2F2] hover:bg-blue-400 hover:text-white  transition-colors duration-100 ease-in-out font-medium rounded-lg text-base px-3 py-2"
        >
          {tags.label}
        </a>
      </div>
    </>
  );
}
