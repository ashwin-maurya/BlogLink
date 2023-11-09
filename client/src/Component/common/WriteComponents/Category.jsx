import React from "react";
import Select from "react-select";

const Category = ({ blogs, getInput, setcategory, category }) => {
  const options = ["python", "Javascript", "CSS", "Tech"];

  const handleSelectChange = (selectedOption) => {
    console.log(category);
    setcategory(selectedOption.value);
    // getInput(selectedOption);
  };

  return (
    <div className="flex-col  group flex dark:bg-darkBgPrimary bg-gray-100 gap-4  rounded-md p-4 m-3  ">
      <div className=" ">Category</div>
      <div className="">
        <Select
          name="category"
          value={blogs?.category}
          onChange={handleSelectChange}
          options={options.map((cat) => {
            return { value: cat, label: cat };
          })}
        ></Select>
        {/* <input
          name="Category"
          value={category}
          onChange={(e) => {
            getInput(e);
          }}
          className="max-lg:mt-2  w-full  rounded-md dark:text-black dark:focus:border-secondary dark:border-3 border-2 focus:border-primaryMain outline-none p-3 text-[23px]"
          type="text"
        /> */}
      </div>
    </div>
  );
};

export default Category;
