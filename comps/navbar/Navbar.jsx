import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      {/* <div className="container text-white p-3 md:hidden">
        <FontAwesomeIcon className="4xl" icon={faBars} />
      </div> */}
      <div className="container flex ">
        <div className="bg-primary text-white text-sm md:text-base py-4 px-2 flex gap-2 items-center cursor-pointer transition">
          <FontAwesomeIcon icon={faBars} />
          <span className="tetx-sm md:text-base">All Categories</span>
        </div>
        <div className="flex items-center justify-between flex-grow pl-3 md:pl-10 ">
          <div className="flex items-center space-x-6 capitalize ">
            <Link
              href="/"
              className="text-white text-sm md:text-base hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-white text-sm md:text-base  hover:text-primary transition"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="text-white text-sm md:text-base hover:text-primary transition"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white text-sm md:text-base hover:text-primary transition"
            >
              Contact
            </Link>
          </div>
          {/* <Link
            href="login"
            className="hidden text-white text-sm md:text-base hover:text-primary transition"
          >
            Login/Register
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
