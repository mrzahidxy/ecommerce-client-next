import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AdminLayout from "../../comps/layout/AdminLAyout";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.data?.isAdmin !== true) {
      router.push("/admin/login");
    }
  }, []);

  return <div>Dashboard</div>;
};

Dashboard.getLayout = function PageLayout(page) {
  return <AdminLayout>{page} </AdminLayout>;
};

export default Dashboard;
