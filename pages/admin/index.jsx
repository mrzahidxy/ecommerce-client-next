import React from "react";
import AdminLayout from "../../comps/layout/AdminLAyout";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function PageLayout(page) {
  return   <AdminLayout>{page } </AdminLayout>;
};

export default Dashboard;
