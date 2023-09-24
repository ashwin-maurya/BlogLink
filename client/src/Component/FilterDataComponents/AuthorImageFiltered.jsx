import React from "react";

const AuthorImageFiltered = ({ filterData }) => {
  return (
    <div className="flex justify-center group items-center">
      <div>
        <img
          height={160}
          width={180}
          className="rounded-full"
          src={filterData[0]?.Author_url}
          alt="Author-Image"
        />
      </div>
      <div className="p-10 text-[35px] font-bold font-serif">
        {filterData[0]?.Author_name}
      </div>
    </div>
  );
};

export default AuthorImageFiltered;
