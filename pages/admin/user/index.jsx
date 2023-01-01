import React from "react";
import AdminLayout from "../../../comps/layout/AdminLAyout";
import useSWR from "swr";
import axios from "axios";
import { Table } from "antd";

const columns = [
  {
    title: "User",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Role",
    dataIndex: "isAdmin",
    key: "isAdmin",
  },
];

const fetcher = (url) =>
  axios
    .get(url, {
      headers: {
        token:
          "Bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMDQyNmNmMzIzZmQxNTc0NzM5OGY1NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MjU3MTIzNiwiZXhwIjoxNjcyODMwNDM2fQ.l21nvnrntq6c8IaqRX5JhjsBLV_bseU0ZoAWAY8-CBI",
      },
    })
    .then((res) => res.data);

const User = () => {
  const { data, error } = useSWR(
    ["https://ecommerce-mern-api.vercel.app/api/users/"],
    fetcher
  );
  const users = data;

  console.log(data);

  return <Table columns={columns} dataSource={users} />;
};

User.getLayout = function PageLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default User;
