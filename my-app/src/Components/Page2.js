import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "../Components/Items";
import About from "../Components/Offer";
import Contact from "../Components/Activities";
import FilterSearch from "./FilterSearch";

const Page2 = () => {
  return (
    <Router>
      <div className="ml-10 mt-8">
        <nav className="flex">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className="text-gray-800 hover:text-gray-600  font-bold underline"
              >
                Items
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-800 hover:text-gray-600 font-bold underline"
              >
                Offer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-800 hover:text-gray-600 font-bold underline"
              >
                Activities
              </NavLink>
            </li>
          </ul>
        </nav>

        <hr className="my-4 border-2" />

        <FilterSearch />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Page2;
