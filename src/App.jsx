import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

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
