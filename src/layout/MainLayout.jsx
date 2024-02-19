import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const MainLayout = ({ showHeader = true }) => {
  return (
    <>
      {showHeader && <Header />}
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
