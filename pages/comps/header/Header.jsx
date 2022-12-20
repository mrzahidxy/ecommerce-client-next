import React from "react";
import {
  faBagShopping,
  faCoffee,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="py-4 shadow-sm bg-white">
      <div className="container flex items-center justify-between">
        <div>Logo</div>

        {/* searchbar  */}

        <div className="w-full max-w-md flex items-center">
          <input
            className="w-full border border-primary border-r-0 px-3 py-3 rounded-l-md focus:outline-none"
            type="text"
            placeholder="search"
          />

          <button className="bg-primary border border-primary text-white py-3 px-8 rounded-r-md hover:bg-inherit hover:text-primary transition">
            Search
          </button>
        </div>

        {/* searchbar  */}

        {/* actions-icon */}
        <div className="flex items-center space-x-8">
          <a
            href="#"
            className="flex flex-col items-center text-gray-700 hover:text-primary relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <span className="leading-6">Cart</span>
            <span className="absolute bottom-9 left-5 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white ">
              3
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-gray-700 hover:text-primary relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <span className="leading-6">Whislist</span>
            <span className="absolute bottom-9 left-8 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white ">
              3
            </span>
          </a>
          <a
            href="#"
            className="flex flex-col items-center text-gray-700 hover:text-primary relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <span className="leading-6">Profile</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
