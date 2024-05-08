import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import { Triangle } from "react-loader-spinner";

const MainLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading completion (replace with your actual loading logic)
    const loadingComplete = true; // Replace this with your actual loading completion check

    if (loadingComplete) {
      setLoading(false); // Set loading to false if loading is complete
    }
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "100vh" }}
          >
            <Triangle
              height={80}
              width={80}
              color={"#4fa94d"}
              ariaLabel={"circles-loading"}
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        </div>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MainLayout;
