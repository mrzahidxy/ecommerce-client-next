import React from "react";

const Dashboard = () => {
  return <div>Dashboard</div>;
};

Dashboard.getLayout = function PageLayout(page) {
  return <div>{page}</div>;
};

export default Dashboard;
