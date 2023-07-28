import React from "react";

const Content = () => {
  return (
    <>
      <div
        style={{
          marginTop: "7rem",
          marginLeft: "2rem",
        }}
      >
        <h1 className="font-bold text-4xl py-3">Favourites</h1>
        <ul className="flex space-x-4 py-2">
          <li>Unique item 1 . </li>
          <li>Total items 0 . </li>
          <li>Created jan 2021 . </li>
          <li>Creater earnings 0% . </li>
          <li>Chain Ethereum</li>
        </ul>

        <p className="font-semibold mt-2 mb-4">
          Welcome to the home of Favourites on OpenSea. Discover the best items
          in the collections.
        </p>

        <ul className="flex space-x-14 font-bold">
          <li>0ETH </li>
          <li>--</li>
          <li>--</li>
          <li>0%</li>
          <li>1</li>
          <li>--</li>
        </ul>
        <ul className="flex space-x-10 text-sm ">
          <li>
            Total<br></br> volume
          </li>
          <li>
            Floor <br></br>price
          </li>
          <li>
            Best <br></br>offer
          </li>
          <li>Listed</li>
          <li>Owner</li>
          <li>
            Unique<br></br> owners
          </li>
        </ul>
      </div>
    </>
  );
};

export default Content;
