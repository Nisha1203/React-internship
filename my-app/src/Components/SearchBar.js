import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center hidden md:flex">
      <div className="relative">
        <input
          type="text"
          placeholder="Search here..."
          className="px-9 py-2 pl-10 border border-gray-350 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
        />
        <svg
          className="absolute w-4 h-4 text-gray-400 left-3 top-2"
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
  );
};

export default SearchBar;
