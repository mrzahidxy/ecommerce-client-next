import React from "react";
import { Space, Table, Tag } from "antd";
import useSWR from "swr";
import axios from "axios";
import AdminLayout from "../../../comps/layout/AdminLAyout";
const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "username",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "desc",
    key: "pemail",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "createdAt",
  },
  {
    title: "Role",
    key: "role",
    dataIndex: "isAdmin",
    render: (_, { isAdmin }) => (
      <>
        {isAdmin === true ? (
          <Tag color={"red"} key={isAdmin}>
            Admin
          </Tag>
        ) : (
          <Tag color={"BLUE"} key={isAdmin}>
            Customer
          </Tag>
        )}
      </>
    ),
  },
];

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        token:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQyNmNmMzIzZmQxNTc0NzM5OGY1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjMwODU1MywiZXhwIjoxNjcyNTY3NzUzfQ.2C-PjcDbciyFSkn_xldnQn30zNU6qkBqvX4-Yzehxds",
      },
    })
    .then((res) => res.data);

const product = () => {
  const { data, error } = useSWR(
    ["https://ecommerce-mern-api.vercel.app/api/products/"],
    fetcher
  );
  const products = data;

  // console.log("users", products);
  return <Table columns={columns} dataSource={products} />;
};
product.getLayout = function PageLayout(page) {
  return (
    <div>
      <AdminLayout>{page}</AdminLayout>
    </div>
  );
  };

export default product