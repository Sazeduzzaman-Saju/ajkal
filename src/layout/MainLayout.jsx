import React from "react";
import Header from "../Pages/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
