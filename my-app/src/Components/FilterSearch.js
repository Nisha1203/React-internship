import React, { useState } from "react";

const FilterSearch = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilterOptions = () => {
    setIsFilterOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <div className="bg-black flex items-center space-x-4 relative rounded-full ">
      {/* Filter */}
      <div className="text-white relative mr-20">
        <label
          htmlFor="filter"
          className="font-semibold cursor-pointer ml-2"
          onClick={toggleFilterOptions}
        >
          <ion-icon name="funnel-outline"></ion-icon>
          Filter
        </label>
        <select
          id="filter"
          name="filter"
          className={`block w-36 mt-1 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md shadow-sm bg-white text-black ${
            isFilterOpen ? "block" : "hidden"
          }`}
        >
          <option value="">All</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="flex items-center justify-center hidden md:flex">
        <div className="relative">
          <input
            type="text"
            placeholder="Search here..."
            className="px-9 py-1npm run start
             pl-10 border border-gray-350 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
          />
          <svg
            className="absolute w-4 h- text-gray-400 left-3 top-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* Replace the arrow path with the search icon path */}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 20a10 10 0 100-20 10 10 0 000 20z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default FilterSearch;
