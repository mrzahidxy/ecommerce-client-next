import { Children } from "react"
import Copyright from "../copyright/Copyright"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import Navbar from "../navbar/Navbar"


const Layout = ({children}) => {
  return (
    <>
    <Header/>
    <Navbar/>
    {children}
    <Footer/>
    <Copyright/>
    </>

  )
}

export default Layout