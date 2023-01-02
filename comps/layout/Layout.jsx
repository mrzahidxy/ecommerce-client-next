import Footer from "../../comps/footer/Footer";
import Header from "../../comps/header/Header";
import Navbar from "../../comps/navbar/Navbar";
import Copyright from "../../comps/copyright/Copyright";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`${isDark && "dark "}`}>
      <div className="dark:bg-gray-800">
        <button
          className="padding-3 dark:text-white"
          onClick={() => setIsDark(!isDark)}
        >
          Dark
        </button>
        <Header />
        <Navbar />
        {children}
        <Footer />
        <Copyright />
      </div>
    </div>
  );
};

export default Layout;
