import {
  faBars,
  faChevronRight,
  faHome,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Products from "../../comps/products/Products";
import useSWR from "swr";

const categories = [
  { id: 1, name: "Men", quantity: 10 },
  { id: 2, name: "Women", quantity: 12 },
  { id: 3, name: "Kids", quantity: 23 },
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

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const checkedHandle = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedCategory([...selectedCategory, value.toLowerCase()]);
    } else {
      setSelectedCategory(
        selectedCategory.filter((e) => e !== value.toLowerCase())
      );
    }
  };

  const { data, error } = useSWR(
    `https://ecommerce-mern-api.vercel.app/api/products?category=${selectedCategory}`,
    fetcher
  );

  const [filters, setFilters] = useState({});
  const [filterProducts, setFilterProducts] = useState([]);

  const filterHandle = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    // selectedCategory &&
    setFilterProducts(
      data?.filter((item) =>
        Object.entries(filters).every(([key, value]) =>
          item[key]?.includes(value)
        )
      )
    );
  }, [filters, data]);

  console.log(filters, selectedCategory, data, filterProducts);

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
        {/* filters */}

        <div className="hidden md:block border-x-2 border-b-2 p-5 rounded-sm">
          <div>
            <h1 className="uppercase text-gray-600 font-medium mb-3">
              Categories
            </h1>
            {categories.map((category) => (
              <div
                className=" text-gray-500 flex justify-between items-center "
                key={category.id}
              >
                <div className="flex items-center gap-1">
                  <input
                    type="checkbox"
                    value={category.name}
                    onChange={(e) => checkedHandle(e)}
                  />
                  <span>{category.name}</span>
                </div>
                {/* <div>({product.quantity})</div> */}
              </div>
            ))}
          </div>
          <hr className="text-gray-700 my-3" />
          {/* <div>
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
          <hr className="text-gray-700 my-3" /> */}

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
                <button
                  key={s.id}
                  value={s.name}
                  name="size"
                  className="w-6 h-6 bg-white text-primary hover:bg-primary  hover:text-white border border-gray-400 flex justify-center items-center text-sm p-2 cursor-pointer"
                  onClick={(e) => filterHandle(e)}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className="uppercase text-gray-600 font-medium mb-3">colors</h1>
            <div className="flex gap-2">
              <div
                className="w-5 h-5 bg-black cursor-pointer"
                onClick={() => setFilters({ color: "black" })}
              ></div>
              <div
                className="w-5 h-5 bg-primary cursor-pointer"
                onClick={() => setFilters({ color: "red" })}
              ></div>
              <div
                className="w-5 h-5 bg-white cursor-pointer border border-black"
                onClick={() => setFilters({ color: "white" })}
              ></div>
            </div>
          </div>
        </div>

        {/* filters */}

        <div className="col-span-3 mx-4 ">
          {/* sorting */}
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
          {/* sorting */}

          {/* products */}
          {filters ? (
            <Products products={filterProducts} />
          ) : (
            <Products products={data} />
          )}

          {error && <div>Failed to load</div>}
          {!data && <div>Loading...</div>}
          {/* products */}
        </div>
      </div>
    </div>
  );
};

export default index;
