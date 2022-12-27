import {
  faArrowRight,
  faBars,
  faChevronRight,
  faHeart,
  faHome,
  faList,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const index = ({products}) => {


  const items = [
    { id: 1, name: "Chair", quantity: 10 },
    { id: 2, name: "Sofa", quantity: 12 },
    { id: 3, name: "Bedroom", quantity: 23 },
    { id: 4, name: "Table", quantity: 15 },
  ];

  const brands = [
    { id: 1, name: "RFL", quantity: 10 },
    { id: 2, name: "OTOBI", quantity: 12 },
    { id: 3, name: "ABC", quantity: 23 },
    { id: 4, name: "TXYZ", quantity: 15 },
  ];
  const sizes = [
    { id: 1, name: "S" },
    { id: 2, name: "M" },
    { id: 3, name: "L" },
    { id: 4, name: "XL" },
  ];

  // const products = [
  //   {
  //     id: 1,
  //     name: "Wooden Chair",
  //     price: 2000,
  //     img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
  //   },
  //   {
  //     id: 2,
  //     name: "Steel Chair",
  //     price: 2000,
  //     img: "https://img.zcdn.com.au/lf/50/hash/38454/19055758/4/Etienne+Velvet+Dining+Chairs.jpg",
  //   },
  //   {
  //     id: 3,
  //     name: "Wooden Bed",
  //     price: 2000,
  //     img: "https://d3home.com/wp-content/uploads/2019/04/b3e3568a-d0b5-44b0-922d-0d18e7b0c67e.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Wooden Chair",
  //     price: 2000,
  //     img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
  //   },
  //   {
  //     id: 5,
  //     name: "Wooden Chair",
  //     price: 2000,
  //     img: "https://target.scene7.com/is/image/Target/Chairs_QUIVER-210420-1618938782938",
  //   },
  //   {
  //     id: 6,
  //     name: "Steel Chair",
  //     price: 2000,
  //     img: "https://img.zcdn.com.au/lf/50/hash/38454/19055758/4/Etienne+Velvet+Dining+Chairs.jpg",
  //   },
  //   {
  //     id: 7,
  //     name: "Wooden Bed",
  //     price: 2000,
  //     img: "https://d3home.com/wp-content/uploads/2019/04/b3e3568a-d0b5-44b0-922d-0d18e7b0c67e.jpg",
  //   },
  //   {
  //     id: 8,
  //     name: "Wooden Bed",
  //     price: 2000,
  //     img: "https://d3home.com/wp-content/uploads/2019/04/b3e3568a-d0b5-44b0-922d-0d18e7b0c67e.jpg",
  //   },
  //   {
  //     id: 9,
  //     name: "Steel Chair",
  //     price: 2000,
  //     img: "https://img.zcdn.com.au/lf/50/hash/38454/19055758/4/Etienne+Velvet+Dining+Chairs.jpg",
  //   },
  // ];
  return (
    <div className="container">
      <div className="w-full flex items-center gap-2 pt-3">
        <Link href="/" className="">
          <FontAwesomeIcon className="text-primary text-xl" icon={faHome} />
        </Link>
        <span>
          <FontAwesomeIcon className="text-gray-500" icon={faChevronRight} />
        </span>
        <span className="text-gray-600 font-medium">Shop</span>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-4 py-10">
        {/* categories */}

        <div className="md:hidden p-2">
          <FontAwesomeIcon
            icon={faBars}
            className=" border  text-gray-800 transition"
          />
        </div>

        <div className="hidden md:block border-x-2 border-b-2 p-5 rounded-sm">
          <div>
            <h1 className="uppercase text-gray-600 font-medium mb-3">
              Categories
            </h1>
            {items.map((product) => (
              <div
                className=" text-gray-500 flex justify-between items-center "
                key={product.id}
              >
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <span></span> {product.name}
                </div>
                <div>({product.quantity})</div>
              </div>
            ))}
          </div>
          <hr className="text-gray-700 my-3" />
          <div>
            <h1 className="uppercase text-gray-600 font-medium mb-3">Brands</h1>
            {brands.map((brand) => (
              <div
                className=" text-gray-500 flex justify-between items-center"
                key={brand.id}
              >
                <div className="flex items-center gap-1">
                  <input type="checkbox" />
                  <span></span> {brand.name}
                </div>
                <div>({brand.quantity})</div>
              </div>
            ))}
          </div>
          <hr className="text-gray-700 my-3" />

          <div>
            <h1 className="uppercase text-gray-600 font-medium mb-3">Prices</h1>

            <div className="grid grid-cols-5 auto-cols-auto">
              <input
                type="text"
                className=" border border-gray-500 focus:outline-none col-span-2 pl-2"
                placeholder="min"
              />
              <span className="text-center">-</span>
              <input
                type="text"
                className="border border-gray-500 focus:outline-none col-span-2 pl-2"
                placeholder="max"
              />
            </div>
          </div>
          <hr className="text-gray-700 my-3" />

          <div>
            <h1 className="uppercase text-gray-600 font-medium mb-3">Sizes</h1>

            <div className="flex gap-2">
              {sizes.map((s) => (
                <div
                  key={s.id}
                  className="w-6 h-6 bg-white text-primary hover:bg-primary  hover:text-white border border-gray-400 flex justify-center items-center text-sm p-2 cursor-pointer"
                >
                  {s.name}
                </div>
              ))}
            </div>
          </div>

          <hr className="text-gray-700 my-3" />

          <div>
            <h1 className="uppercase text-gray-600 font-medium mb-3">colors</h1>
            <div className="flex gap-2">
              <div className="w-5 h-5 bg-black cursor-pointer"></div>
              <div className="w-5 h-5 bg-primary cursor-pointer"></div>
              <div className="w-5 h-5 bg-green-800 cursor-pointer"></div>
            </div>
          </div>
        </div>

        {/* categories */}

        <div className="col-span-3 mx-4 ">
          {/* dropdown - view */}

          <div className="flex justify-between items-center mb-5">
            <select className="focus:outline-none border border-gray-500 p-1 cursor-pointer">
              <option className="font-sm text-gray-700">Sorting</option>
              <option value="">Low - High</option>
              <option value="">High - Low</option>
            </select>

            <div className="flex items-center gap-2">
              <span className="cursor-pointer bg-primary text-white px-2 py-1 rounded">
                <FontAwesomeIcon icon={faList} />
              </span>
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faList} />
              </span>
            </div>
          </div>
          {/* dropdown - view */}

          {/* products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product) => (
              <div
                className="bg-white shadow rounded overflow-hidden"
                key={product._id}
              >
                <div className="relative group">
                  <img src={product.img} className="w-full" />
                  <div className="absolute inset-0 flex gap-2 justify-center items-center bg-black bg-opacity-40 group-hover:bg-opacity-60 transition">
                    <Link
                      href={`products/${product._id}`}
                      className=" text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition"
                    >
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="text-sm text-white group-hover:text-primary transition"
                      />
                    </Link>
                    <div className="text-lg w-8 h-8 rounded-full bg-primary group-hover:bg-white flex justify-center items-center transition cursor-pointer">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="text-sm text-white group-hover:text-primary transitio"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <h1 className="text-lg text-grey-800 hover:text-primary transition">
                    {product.title}
                  </h1>
                  <div className="flex items-baseline space-x-4">
                    <p className="text-xl text-primary font-medium">
                      {product.price} Tk
                    </p>
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

                <div className="w-full flex justify-center items-center p-3 border border-primary bg-primary text-white hover:bg-white hover:text-primary transition cursor-pointer">
                  Add Cart
                </div>
              </div>
            ))}
          </div>
          {/* products */}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps () {
  const res = await fetch("https://ecommerce-mern-api.vercel.app/api/products");
  let products = await res.json()
  return{
    props: {
      products
    }
  }
}

export default index;
