import {
  faChevronRight,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Product from "../comps/products/Product.jsx";

const ProductDetails = () => {
  const products = [
    {
      id: 1,
      name: "Wooden Chair",
      price: 2000,
      img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
    },
    {
      id: 2,
      name: "Steel Chair",
      price: 2000,
      img: "https://img.zcdn.com.au/lf/50/hash/38454/19055758/4/Etienne+Velvet+Dining+Chairs.jpg",
    },
    {
      id: 3,
      name: "Wooden Bed",
      price: 2000,
      img: "https://d3home.com/wp-content/uploads/2019/04/b3e3568a-d0b5-44b0-922d-0d18e7b0c67e.jpg",
    },
    {
      id: 4,
      name: "Wooden Chair",
      price: 2000,
      img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
    },
  ];

  return (
    <div className="container">
      <div className="w-full flex items-center gap-2 py-3">
        <Link href="/" className="">
          <FontAwesomeIcon className="text-primary text-xl" icon={faHome} />
        </Link>
        <span>
          <FontAwesomeIcon className="text-gray-500" icon={faChevronRight} />
        </span>
        <span className="text-gray-600 font-medium">Products</span>
        <span>
          <FontAwesomeIcon className="text-gray-500" icon={faChevronRight} />
        </span>
        <span className="text-gray-600 font-medium">Chair</span>
      </div>

      {/* ProductDetails */}

      <div className="grid grid-cols-1 md:grid-cols-2 mb-4 gap-4">
        {/* image */}
        <div className="flex flex-col gap-4">
          <img src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938" />

          <div className="grid grid-cols-4 gap-4">
            <img
              className="border cursor-pointer hover:border-primary"
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
            />
            <img
              className="border cursor-pointer hover:border-primary"
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
            />
            <img
              className="border cursor-pointer hover:border-primary"
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
            />
            <img
              className="border cursor-pointer hover:border-primary"
              src="https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938"
            />
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <h1 className="text-2xl text-gray-700 font-medium">Wooden Chair</h1>
          <div className="text-yellow-300 space-x-1">
            <FontAwesomeIcon className="" icon={faStar} />
            <FontAwesomeIcon className="" icon={faStar} />
            <FontAwesomeIcon className="" icon={faStar} />
            <FontAwesomeIcon className="" icon={faStar} />
            <span className="text-gray-500">(150 reviews)</span>
          </div>
          <div className="space-x-2">
            <span className="text-l text-gray-800 font-medium">
              Availability:
            </span>
            <span className="font-medium text-green-600">In Stock</span>
          </div>
          <div className="space-x-2">
            <span className="text-l text-gray-800 font-medium">Brand:</span>
            <span className="font-medium text-green-600">Otobi</span>
          </div>
          <div className="space-x-2">
            <span className="text-l text-gray-800 font-medium">Category:</span>
            <span className="font-medium text-green-600">Wooden</span>
          </div>
          <div className="space-x-2">
            <span className="text-primary font-bold">2500 Tk</span>
            <span className="text-gray-500 font-medium text-sm line-through">
              2000 Tk
            </span>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id optio
            molestias laboriosam eos nesciunt eum temporibus omnis quibusdam
            dolores reiciendis.
          </p>
          <div>
            <span className="text-gray-600 font-medium">Size</span>
            <div className="flex gap-2">
              <div className=" text-sm bg-white text-gray-600 font-medium border border-gray-600 w-6 h-6 flex justify-center items-center hover:bg-primary hover:text-white">
                S
              </div>
              <span className=" text-sm bg-white text-gray-600 font-medium border border-gray-600 w-6 h-6 flex justify-center items-center hover:bg-primary hover:text-white">
                M
              </span>
              <span className="text-sm bg-white text-gray-600 font-medium border border-gray-600 w-6 h-6 flex justify-center items-center hover:bg-primary hover:text-white">
                L
              </span>
              <span className="text-sm bg-white text-gray-600 font-medium border border-gray-600 w-6 h-6 flex justify-center items-center hover:bg-primary hover:text-white">
                XL
              </span>
            </div>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Color</span>
            <div className="flex gap-2">
              <div className="w-6 h-6 bg-green-800 cursor-pointer"></div>
              <div className="w-6 h-6 bg-primary cursor-pointer"></div>
              <div className="w-6 h-6 bg-blue-600 cursor-pointer"></div>
            </div>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Quantity</span>
            <div className="flex ">
              <div className="w-6 h-6 border border-collapse border-gray-400 flex justify-center items-center">
                +
              </div>
              <div className="w-6 h-6 border  border-collapse border-gray-400 flex justify-center items-center">
                4
              </div>
              <div className="w-6 h-6 border border-collapse border-gray-400 flex justify-center items-center">
                -
              </div>
            </div>
          </div>
          <div className="space-x-2">
            <button className="bg-white border border-gray-400 w-40 h-10 text-gray-800 font-medium hover:bg-primary hover:text-white transition capitalize">
              Add to cart
            </button>
            <button className="bg-white border border-gray-400 w-40 h-10 text-gray-800 font-medium hover:bg-primary hover:text-white transition capitalize">
              Add to whislist
            </button>
          </div>
        </div>
      </div>
      {/* ProductDetails */}

      <Product products={products} title="Similar Products" />
    </div>
  );
};

export default ProductDetails;
