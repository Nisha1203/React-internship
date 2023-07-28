import React from "react";
import monkey from "../Images/monkey.png";

const Items = () => {
  return (
    <>
      <div class="grid grid-cols-4 gap-4">
        <div>
          <ul className="mt-12 ml-4">
            <li className="flex items-center space-x-1 text-xl font-bold">
              Status
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-12 text-gray-500"
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
            <li className="flex items-center space-x-1 mt-3 text-xl font-bold">
              Price
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-12 text-gray-500"
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
            <li className="flex items-center space-x-1 mt-3 text-xl font-bold">
              Quantity
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4  ml-12 text-gray-500"
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
            <li className="flex items-center space-x-1 mt-3 text-xl font-bold">
              Currency
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-12 text-gray-500"
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
        </div>
        <div>
          <p className="h-15 ml-4 mt-12">
            <ion-icon name="reload-outline"></ion-icon>1 item
          </p>
          <img
            src={monkey} // Replace with the path to your common image
            alt="Common Icon"
          />
        </div>
      </div>
    </>
  );
};

export default Items;
