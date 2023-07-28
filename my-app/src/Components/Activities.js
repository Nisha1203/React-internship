import React, { useState } from "react";
import Time from "../Images/Time-Circle.png";
import History from "../Images/calendarsearch.png";

const Activities = () => {
  const [showCheckbox, setShowCheckbox] = useState(false);

  const toggleCheckbox = () => {
    setShowCheckbox(!showCheckbox);
  };

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        <div>
          <ul className="mt-12 ml-4">
            <li
              className="flex items-center space-x-1 text-xl font-bold cursor-pointer"
              onClick={toggleCheckbox}
            >
              Event Types
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-12 text-gray-500 transform ${
                  showCheckbox ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </li>
          </ul>
          {showCheckbox && (
            <div className="ml-5 mt-4">
              <div>
                <input type="checkbox" />
                <label>Sales</label>
              </div>

              <div>
                <input type="checkbox" className="mt-4 " />
                <label>Listing</label>
              </div>

              <div>
                <input type="checkbox" className="mt-4" />
                <label>Offers</label>
              </div>

              <div>
                <input type="checkbox" className="mt-4" />
                <label>Collection offers</label>
              </div>

              <div>
                <input type="checkbox" className="mt-4" />
                <label>Transfer</label>
              </div>
            </div>
          )}
        </div>

        <div>
          <div className="w-12 h-7 mt-12 bg-gray-300 flex items-center justify-center rounded">
            <h1>sales</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-600 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <div>
          <img
            src={Time}
            alt="Common Icon"
            className="h-15 text-gray-500 ml-4 mt-20"
          />
          <p className="mb-10">
            No events have occured yet
            <br /> Check back later
          </p>
        </div>

        <div>
          <img
            src={History}
            alt="Common Icon"
            className="h-15 text-gray-500 ml-4 mt-20"
          />
          <p className="mb-10">Check Back later</p>
        </div>
      </div>
    </>
  );
};

export default Activities;
