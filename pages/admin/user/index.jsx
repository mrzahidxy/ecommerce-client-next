import React, { useEffect } from "react";
import AdminLayout from "../../../comps/layout/AdminLAyout";
import { Table } from "antd";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useFetcher } from "../../../customhooks/useFetcher";

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
    render: (isAdmin) => <>{isAdmin ? "Admin" : "User"}</>,
  },
];

const User = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.data?.isAdmin !== true) {
      router.push("/admin/login");
    }
  }, []);

  const { data, IsError, isLoading } = useFetcher([
    "users",
    session?.data?.accessToken,
  ]);
  const users = data;
  users?.forEach(function (element) {
    element.key = Math.random();
  });

  // console.log(data);

  if (IsError) return <div>failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return <Table columns={columns} dataSource={users} />;
};

User.getLayout = function PageLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default User;
