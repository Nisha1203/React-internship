import React, { useState } from "react";
import logo1 from "../Images/logo1.png";
import man from "../Images/man.png";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const Links = [
    { name: "Copy Trading", link: "/" },
    { name: "Buy & Sell", link: "/" },
    { name: "Market", link: "/" },
    { name: "Trade", link: "/" },
    { name: "Earn", link: "/" },
    { name: "Futures", link: "/" },
    { name: "NFT", link: "/" },
    { name: "Resources", link: "/" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-black py-3 md:px-2 px-4">
        <div className="font-bold text-xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-2xl text-indigo-600 mr-4 pt-1"></span>
          <img src={logo1} alt="logo" className="h-11 w-15 mr-10"></img>
          <SearchBar />
        </div>

        <div
          onClick={toggleMenu}
          className="text-2xl absolute right-6 top-4 cursor-pointer md:hidden"
        >
          {isMenuOpen ? (
            <ion-icon name="close" style={{ color: "white" }}></ion-icon>
          ) : (
            <ion-icon name="menu" style={{ color: "white" }}></ion-icon>
          )}
        </div>

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } mr-10 md:flex md:items-center md:pb-0 pb-6 absolute md:static bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-4 transition-all duration-500 ease-in`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-10 text-lg md:my-0 my-3">
              {/* Adjusted text size to "text-lg" (equivalent to 1.125rem) */}
              <a
                href={link.link}
                className="text-white hover:text-gray-400 duration-500"
                style={{ margin: "1rem 0" }}
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <Button>Get Started</Button> */}
        </ul>
        <img src={man} alt="man" className="h-8 w-12 ml-8 hidden md:flex"></img>
      </div>
    </div>
  );
};

export default NavBar;
