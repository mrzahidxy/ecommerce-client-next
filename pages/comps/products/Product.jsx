import { faHeart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div className="container py-8">
      <h1 className="text-2xl text-gray-800 uppercase font-medium mb-5">
        New Arrivals
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="relative group">
            <img
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
              className="w-full"
            />
            <div className="absolute inset-0 flex gap-2 justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition">
              <Link
                href="/products/2"
                className=" text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-sm text-white group-hover:text-primary transition"
                />
              </Link>
              <div className="text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-sm text-white group-hover:text-primary transitio"
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-lg text-grey-800 hover:text-primary transition">
              Wooden Chair
            </h1>
            <div className="flex items-baseline space-x-4">
              <p className="text-xl text-primary font-medium">2000 Tk</p>
              <p className="text-sm text-gray-400 font-medium line-through">
                2500 Tk
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex text-yellow-200">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-sm text-grey-400">(150)</div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center p-3 border border-primary hover:bg-primary hover:text-white transition">
            Add Cart
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="relative group">
            <img
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
              className="w-full"
            />
            <div className="absolute inset-0 flex gap-2 justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition">
              <Link
                href="/products/2"
                className=" text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-sm text-white group-hover:text-primary transition"
                />
              </Link>
              <div className="text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-sm text-white group-hover:text-primary transitio"
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-lg text-grey-800 hover:text-primary transition">
              Wooden Chair
            </h1>
            <div className="flex items-baseline space-x-4">
              <p className="text-xl text-primary font-medium">2000 Tk</p>
              <p className="text-sm text-gray-400 font-medium line-through">
                2500 Tk
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex text-yellow-200">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-sm text-grey-400">(150)</div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center p-3 border border-primary hover:bg-primary hover:text-white transition">
            Add Cart
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="relative group">
            <img
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
              className="w-full"
            />
            <div className="absolute inset-0 flex gap-2 justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition">
              <Link
                href="/products/1"
                className=" text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-sm text-white group-hover:text-primary transition"
                />
              </Link>
              <div className="text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-sm text-white group-hover:text-primary transitio"
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-lg text-grey-800 hover:text-primary transition">
              Wooden Chair
            </h1>
            <div className="flex items-baseline space-x-4">
              <p className="text-xl text-primary font-medium">2000 Tk</p>
              <p className="text-sm text-gray-400 font-medium line-through">
                2500 Tk
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex text-yellow-200">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-sm text-grey-400">(150)</div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center p-3 border border-primary hover:bg-primary hover:text-white transition">
            Add Cart
          </div>
        </div>
        <div className="bg-white shadow rounded overflow-hidden">
          <div className="relative group">
            <img
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
              className="w-full"
            />
            <div className="absolute inset-0 flex gap-2 justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition">
              <Link
                href="/products/3"
                className=" text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition"
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="text-sm text-white group-hover:text-primary transition"
                />
              </Link>
              <div className="text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="text-sm text-white group-hover:text-primary transitio"
                />
              </div>
            </div>
          </div>
          <div className="p-5">
            <h1 className="text-lg text-grey-800 hover:text-primary transition">
              Wooden Chair
            </h1>
            <div className="flex items-baseline space-x-4">
              <p className="text-xl text-primary font-medium">2000 Tk</p>
              <p className="text-sm text-gray-400 font-medium line-through">
                2500 Tk
              </p>
            </div>

            <div className="flex gap-3">
              <div className="flex text-yellow-200">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
              <div className="text-sm text-grey-400">(150)</div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center p-3 border border-primary hover:bg-primary hover:text-white transition">
            Add Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
