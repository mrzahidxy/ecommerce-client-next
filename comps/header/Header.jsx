import React from "react";
import {
  faBagShopping,
  faCoffee,
  faHeart,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Header = () => {
  return (
    <div className="py-3 shadow-sm bg-white ">
      <div className="container flex flex-col items-center gap-3 md:flex-row md:justify-between ">
        <div className="text-3xl">Logo</div>

        {/* searchbar  */}

        <div className="md:w-full max-w-md flex items-center">
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
          <Link
            href="#"
            className="flex flex-col items-center text-gray-800 hover:text-primary relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faBagShopping} />
            </div>
            <span className="leading-6">Cart</span>
            <span className="absolute bottom-9 left-5 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white ">
              3
            </span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center text-gray-800 hover:text-primary relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <span className="leading-6">Whislist</span>
            <span className="absolute bottom-9 left-8 w-5 h-5 flex items-center justify-center rounded-full bg-primary text-white ">
              3
            </span>
          </Link>
          <Link
            href="#"
            className="flex flex-col items-center text-gray-800 hover:text-primary relative"
          >
            <div className="text-2xl">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <span className="leading-6">Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
