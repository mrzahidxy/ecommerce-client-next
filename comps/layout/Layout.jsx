import Footer from "../../comps/footer/Footer";
import Header from "../../comps/header/Header";
import Navbar from "../../comps/navbar/Navbar";
import Copyright from "../../comps/copyright/Copyright";
import { useState } from "react";

const Layout = ({ children }) => {
  return (
    <div className="dark:bg-gray-800">
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </div>
  );
};

export default Layout;
