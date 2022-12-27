import {
  faChevronRight,
  faHome,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import Products from "../../comps/products/Products";

const ProductDetails = ({ product }) => {
  console.log("product", product);
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
          <img src={product.img} />

          <div className="grid grid-cols-3 gap-4">
            <img
              className="border cursor-pointer hover:border-primary"
              src={product.img}
            />
            <img
              className="border cursor-pointer hover:border-primary"
              src={product.img}
            />
            <img
              className="border cursor-pointer hover:border-primary"
              src={product.img}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="space-y-4">
          <h1 className="text-2xl text-gray-700 font-medium">
            {product.title}
          </h1>
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
            <span className="font-medium text-green-600">
              {product.inStock ? "In Sctok" : "Out of Stock"}
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-l text-gray-800 font-medium">Brand:</span>
            <span className="font-medium text-green-600">N/A</span>
          </div>
          <div className="space-x-2">
            <span className="text-l text-gray-800 font-medium">Category:</span>
            <span className="font-medium text-green-600 capitalize">
              {product?.categries?.map((cat) => (
                <span>{cat} , </span>
              ))}
            </span>
          </div>
          <div className="space-x-2">
            <span className="text-primary font-bold">{product.price}</span>
            <span className="text-gray-500 font-medium text-sm line-through">
              2000 Tk
            </span>
          </div>
          <p className="text-gray-600">{product.desc}</p>
          <div>
            <span className="text-gray-600 font-medium">Size</span>
            <div className="flex gap-2">
              {product.size.map((s) => (
                <div className=" text-sm bg-white text-gray-600 font-medium border border-gray-600 w-6 h-6 flex justify-center items-center hover:bg-primary hover:text-white">
                  {s}
                </div>
              ))}
            </div>
          </div>
          <div>
            <span className="text-gray-600 font-medium">Color</span>
            <div className="flex gap-2">
              {product.color.map((c) => (
                <div
                  className="w-6 h-6 bg-green-800 cursor-pointer"
                  style={{ backgroundColor: c }}
                ></div>
              ))}
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

      {/* <Products products={products} title="Similar Products" /> */}
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch("https://ecommerce-mern-api.vercel.app/api/products");
  const products = await res.json();

  const paths = products.map((product) => ({
    params: { id: product._id },
  }));

  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://ecommerce-mern-api.vercel.app/api/products/${params.id}`
  );
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default ProductDetails;
