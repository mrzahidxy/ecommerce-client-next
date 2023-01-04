import { getCsrfToken, getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import AdminLayout from "../../comps/layout/AdminLAyout";

const Dashboard = () => {
  const router = useRouter();

  const Handler = async (req, res) => {
    const session = await getSession({ req });
    session?.isAdmin !== true ? router.push("/admin/login") : "";
  };

  Handler();

  return <div> Dashboard</div>;
};

Dashboard.getLayout = function PageLayout(page) {
  return <AdminLayout>{page} </AdminLayout>;
};

export default Dashboard;
