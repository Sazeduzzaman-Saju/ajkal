import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import MainLayout from "../layout/MainLayout";
import Contact from "../Pages/Contact/Contact";
import NewsDetails from "../Pages/NewsDetails/NewsDetails";
import Categories from "../Pages/Categories/Categories";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ForgotPasswords from "../Pages/Login/ForgotPassword";
import Policy from "../Pages/Policy/Policy";
import About from "../Pages/About/About";
import Terms from "../Pages/Terms/Terms";
import Advertisement from "../Pages/Advertisement/Advertisement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/news/:id",
        element: <NewsDetails />,
      },
      {
        path: "/categories/:id",
        element: <Categories />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/advertisement",
        element: <Advertisement></Advertisement>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswords></ForgotPasswords>,
      },
      {
        path: "/policy",
        element: <Policy></Policy>,
      },
      {
        path: "/terms",
        element: <Terms></Terms>,
      },
    ],
  },
]);
export default router;
