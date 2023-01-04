import { Table } from "antd";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AdminLayout from "../../../comps/layout/AdminLAyout";
import { useFetcher } from "../../../customhooks/useFetcher";

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

const order = () => {
  const session = useSession();
  const router = useRouter();

  const Handler = async (req, res) => {
    const session = await getSession({ req });
    session?.isAdmin !== true ? router.push("/admin/login") : "";
  };

  Handler();

  const { data, isError, isLoading } = useFetcher([
    "orders",
    session.data?.accessToken,
  ]);
  const orders = data;
  orders?.forEach(function (element) {
    element.key = Math.random();
  });

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

  dataMerge?.forEach(function (element) {
    element.key = Math.random();
  });

  // console.log("data", dataMerge);

  if (isError) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

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
