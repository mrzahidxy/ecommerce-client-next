import React, { useState } from "react";
import { Table } from "antd";
import AdminLayout from "../../../comps/layout/AdminLAyout";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { ProductModal, ProductUpdateModal } from "../../../comps/modal/Modal";
import {
  useDelete,
  useGet,
  usePost,
  useUpdate,
} from "../../../customhooks/customRequests";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const product = () => {
  const columns = [
    {
      title: "Image",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <>
          <img src={`${img}`} />{" "}
        </>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Categories",
      dataIndex: "categries",
      key: "categries",
      render: (categries) => (
        <div className="flex flex-col">
          {categries.map((c) => (
            <span className="capitalize" key={Math.random() * 100}>
              {c}
            </span>
          ))}
        </div>
      ),
    },

    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      render: (inStock) => <>{inStock ? "In Stock" : "Out of Stock"}</>,
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
      render: (color) => (
        <div className="flex flex-col">
          {color.map((c) => (
            <span className="capitalize" key={Math.random() * 100}>
              {c}
            </span>
          ))}
        </div>
      ),
    },

    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      render: (size) => (
        <div className="flex flex-col">
          {size.map((s) => (
            <span className="capitalize" key={Math.random() * 100}>
              {s}
            </span>
          ))}
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "desc",
      key: "desc",
    },
    {
      title: "Actions",
      dataIndex: "",
      key: "#",
      render: (record) => (
        <div className="space-x-1">
          <span
            className="bg-primary px-3 py-2 text-white rounded-md"
            onClick={() => deleteUser(record)}
          >
            Delete
          </span>
          <span
            className="bg-sky-500 px-3 py-2 text-white rounded-md"
            onClick={() => updateUser(record)}
          >
            Update
          </span>
        </div>
      ),
    },
  ];

  const [productInfo, setProductInfo] = useState({
    img: "https://www.prada.com/content/dam/pradabkg_products/S/SC5/SC514/1WQ8F0SVF/SC514_1WQ8_F0SVF_S_202_SLF.jpg/jcr:content/renditions/cq5dam.web.hebebed.1000.1000.crop.jpg",
  });
  const [updatedProductInfo, setUpdatedProductInfo] = useState({});
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [isUpdateVisible, setIsUpdateVisible] = useState(false);
  const session = useSession();
  const router = useRouter();

  //?authentication
  const Handler = async (req, res) => {
    const session = await getSession({ req });
    session?.isAdmin !== true ? router.push("/admin/login") : "";
  };
  Handler();

  //?ftech users
  const { products, isError, isLoading } = useGet([
    "products",
    session.data?.accessToken,
  ]);
  products?.forEach(function (element) {
    element.key = Math.random() * 100;
  });

  //?create user
  const inputHandler = (e) => {
    setProductInfo({ ...productInfo, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const res = usePost([
      "products",
      session.data?.accessToken,
      {
        ...productInfo,
        color: selectedColors,
        size: selectedSizes,
      },
    ]);
    setIsVisible(false);
    res.ok && toast.success("User Successfully Created");
    console.log(res.ok);
  };

  //?update user
  const updateUser = (record) => {
    setIsUpdateVisible(true);
    setUpdatedProductInfo(record);
  };

  const inputUpdateHandler = (e) => {
    setUpdatedProductInfo({
      ...updatedProductInfo,
      [e.target.name]: e.target.value,
    });
  };

  const updateHandler = (e) => {
    e.preventDefault();
    const res = useUpdate([
      "products",
      session.data?.accessToken,
      updatedProductInfo,
    ]);
    setIsUpdateVisible(false);
    res.ok && toast.success("Product Succesfully Updated!");
    console.log(res);
  };

  //?delete user
  const deleteUser = (record) => {
    const res = useDelete([
      `products/${record._id}`,
      session.data?.accessToken,
    ]);

    res.ok && toast.error("Product Succesfully Deleted!");
    console.log(res);
  };

  return (
    <div className="flex flex-col">
      <ToastContainer />
      <div className="flex justify-between pb-2">
        <h3 className="text-gray-600 text-lg">Products</h3>
        <button
          className="p-2 bg-primary rounded-md text-white"
          onClick={() => setIsVisible(true)}
        >
          Create a New Product
        </button>
      </div>
      <ProductModal
        isVisible={isVisible}
        setIsVisible={setIsVisible}
        selectedColors={selectedColors}
        setSelectedColors={setSelectedColors}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
        inputHandler={inputHandler}
        submitHandler={submitHandler}
      />
      <ProductUpdateModal
        updatedProductInfo={updatedProductInfo}
        updateHandler={updateHandler}
        inputUpdateHandler={inputUpdateHandler}
        isUpdateVisible={isUpdateVisible}
        setIsUpdateVisible={setIsUpdateVisible}
      />

      {isLoading ? (
        "Loading"
      ) : (
        <Table columns={columns} dataSource={products} />
      )}
    </div>
  );
};

product.getLayout = function PageLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default product;
