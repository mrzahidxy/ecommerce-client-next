import React, { useEffect } from "react";
import { Table } from "antd";
import AdminLayout from "../../../comps/layout/AdminLAyout";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useFetcher } from "../../../customhooks/useFetcher";

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
];

const product = () => {
  const session = useSession();
  const router = useRouter();

  const Handler = async (req, res) => {
    const session = await getSession({ req });
    session?.isAdmin !== true ? router.push("/admin/login") : "";
  };

  Handler();
  const { data, isError, isLoading } = useFetcher([
    "products",
    session.data?.accessToken,
  ]);
  const products = data;
  products?.forEach(function (element) {
    element.key = Math.random() * 100;
  });

  // console.log("products", products);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <Table columns={columns} dataSource={products} />;
};

product.getLayout = function PageLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default product;
