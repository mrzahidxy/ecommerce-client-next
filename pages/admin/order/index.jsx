import { Table } from "antd";
import axios from "axios";
import React from "react";
import useSWR from "swr";
import AdminLayout from "../../../comps/layout/AdminLAyout";

const columns = [
  {
    title: "Order",
    dataIndex: "_id",
    key: "_id",
  },
  {
    title: "User",
    dataIndex: "userId",
    key: "userid",
  },
  {
    title: "Product",
    dataIndex: "productId",
    key: "productId",
  },
  {
    title: "Amount",
    dataIndex: "amount",
    key: "amount",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        token:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQyNmNmMzIzZmQxNTc0NzM5OGY1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjU3Mzg0MCwiZXhwIjoxNjcyODMzMDQwfQ.epPBc3f1VcrAI1HvatKlMS8QMjgjSVmIJi63m4nTHiw",
      },
    })
    .then((res) => res.data);

const order = () => {
  const { data, error } = useSWR(
    ["https://ecommerce-mern-api.vercel.app/api/orders/"],
    fetcher
  );
  const orders = data;

  // console.log(orders);

  const dataSource = orders?.map((item) => {
    const dataSource = item.products.map((item2, index) => {
      return {
        _id: item._id,
        userId: item.userId,
        productId: item2.productId,
        quantity: item2.quantity,
        status: item.status,
        amount: item.amount,
      };
    });
    return dataSource;
  });

  const dataMerge = [].concat.apply([], dataSource);

  console.log("data", dataMerge);
  return (
    <div>
      <Table columns={columns} dataSource={dataMerge} />
    </div>
  );
};

order.getLayout = function PageLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default order;
