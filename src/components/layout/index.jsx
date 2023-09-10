import React from "react";
import { Outlet } from "react-router-dom";
import { CartProvider } from "../../context/cart";
import Navbar from "../nav";
import "./styles.scss";

const Layout = ({children}) => (
  <CartProvider>
    <header className="layout-header">
      <Navbar />      
    </header>
    <main className="layout-main">
      <Outlet />
      {children}
    </main>   
  </CartProvider>
)

export default Layout;
