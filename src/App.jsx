import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent the default context menu behavior
  };

  return (
    <>
      {/* <div onContextMenu={handleContextMenu}> */}
      <SkeletonTheme baseColor="#ffff" highlightColor="#eee">
        <RouterProvider router={router}></RouterProvider>
      </SkeletonTheme>
      {/* </div> */}
    </>
  );
}

export default App;
