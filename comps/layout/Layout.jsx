
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import Copyright from "../copyright/Copyright";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
      <Copyright />
    </>
  );
};

export default Layout;
