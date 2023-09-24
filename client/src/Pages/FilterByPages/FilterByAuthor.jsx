import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import blogContext from "../../Helper/Context/blogContext";
import BlogCard from "../../Component/common/BlogCard";
import MapFilteredData from "../../Component/FilterDataComponents/MapFilteredData";
import AuthorImageFiltered from "../../Component/FilterDataComponents/AuthorImageFiltered";

const FilterByAuthor = () => {
  const location = useLocation();
  const card = location.state?.card;
  const context = useContext(blogContext);
  const { filterblogs, filterData } = context;
  console.log("i ran");
  useEffect(() => {
    let input = {
      state: "Author_name",
      value: card?.Author_name,
    };
    const func = async () => {
      await filterblogs(input);
      console.log(filterData);
      console.log("func ran");
    };

    func();
  }, []);

  return (
    <section className="max-container">
      <div className="pt-24 dark:bg-darkBgPrimary dark:text-white dark:hover:text-secondary hover:text-primaryMain bg-slate-200 pb-32 flex justify-around items-center">
        <AuthorImageFiltered filterData={filterData}></AuthorImageFiltered>

        <div></div>
      </div>
      <MapFilteredData filterData={filterData}></MapFilteredData>
    </section>
  );
};

export default FilterByAuthor;
