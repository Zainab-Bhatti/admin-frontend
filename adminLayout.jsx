import React from "react";
import NavBar from "../modules/seller/components/Navbar";
//import SideBar from "../modules/seller/components/SideBar";
import Footer from "../modules/seller/components/Footer";
import { Outlet } from "react-router-dom/dist";

const AdminLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet/>
      <Footer />
    </>
  );
};

export default AdminLayout;