import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="container flex">
        <div className="bg-primary text-white py-4 px-3 flex gap-2 items-center cursor-pointer transition">
          <span>
            <FontAwesomeIcon icon={faBars} />
          </span>
          All Categories
        </div>
        <div className="flex items-center justify-between flex-grow pl-10 ">
          <div className="flex items-center space-x-6 capitalize">
            <a href="/" className="text-white hover:text-primary transition">
              Home
            </a>
            <a
              href="/shop"
              className="text-white hover:text-primary transition"
            >
              Shop
            </a>
            <a
              href="/about"
              className="text-white hover:text-primary transition"
            >
              About Us
            </a>
            <a
              href="/contact"
              className="text-white hover:text-primary transition"
            >
              Contact Us
            </a>
          </div>
          <div className="text-white hover:text-primary transition">
            Login/Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
