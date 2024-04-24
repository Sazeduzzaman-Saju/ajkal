import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#ffff" highlightColor="#eee">
        <RouterProvider router={router}></RouterProvider>
      </SkeletonTheme>
    </>
  );
}

export default App;
