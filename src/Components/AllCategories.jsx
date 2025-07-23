import React, { use } from "react";
import { NavLink } from "react-router";
const categoriesPromise = fetch("/public/categories.json").then((res) =>
  res.json()
);
const AllCategories = () => {
  const categoryData = use(categoriesPromise);

  return (
    <div>
      <h2 className="text-lg font-bold text-center">
        All Categories({categoryData.length})
      </h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categoryData.map((categories) => (
          <NavLink
            to={`/category/${categories.id}`}
            key={categories.id}
            className={"btn bg-base-100 border-0 hover:bg-base-200"}
          >
            {categories.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
