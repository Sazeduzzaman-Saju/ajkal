/* eslint-disable react-refresh/only-export-components */

import { createBrowserRouter, useLocation } from 'react-router-dom';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import MainLayout from '../layout/MainLayout';
import Contact from '../Pages/Contact/Contact';
import NewsDetails from '../Pages/NewsDetails/NewsDetails';
import Categories from '../Pages/Categories/Categories';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Login/Register';
import ForgotPasswords from '../Pages/Login/ForgotPassword';
import Policy from '../Pages/Policy/Policy';
import About from '../Pages/About/About';
import Terms from '../Pages/Terms/Terms';
import Advertisement from '../Pages/Advertisement/Advertisement';
import UserAccounts from '../Pages/UserAccounts/UserAccounts';
import Search from '../Pages/Search/Search';
import UserLaout from '../layout/UserLayout';
import UserComments from '../Pages/UserAccounts/UserComments/UserComments';
import UserAdvertisement from '../Pages/UserAccounts/UserAdvertisement/UserAdvertisement';
import UserSavePost from '../Pages/UserAccounts/UserSavePost/UserSavePost';
import UserDasboard from '../Pages/UserAccounts/UserDashboard/UserDasboard';
import UserPost from '../Pages/UserAccounts/UserPost/UserPost';
import UserPostStatus from '../Pages/UserAccounts/UserPostStatus/UserPostStatus';
import NewsVideos from '../Pages/NewsVideos/NewsVideos';
import EPaper from '../Pages/EPaper/EPaper';
import { useEffect } from 'react';
import DateEpaper from '../Pages/EPaper/DateEpaper';
import AdCost from '../Pages/AdCost/AdCost';
import AdRatePrint from '../Pages/HomePage/AdRatePrint/AdRatePrint';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <MainLayout />
        <ScrollToTop />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/:news/:id',
        element: <NewsDetails />,
        loader: ({ params }) => fetch(`https://backoffice.ajkal.us/news-detail/${params.id}`)
      },
      {
        path: '/ct/:categoryName/:id', // Use a dynamic segment for category name
        element: <Categories />,
        loader: ({ params }) => fetch(`https://backoffice.ajkal.us/category-news/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>,
      },
      {
        path: '/ad-cost',
        element: <AdCost></AdCost>,
      },
      {
        path: '/advertisement',
        element: <Advertisement></Advertisement>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/forgot-password',
        element: <ForgotPasswords></ForgotPasswords>,
      },
      {
        path: '/policy',
        element: <Policy></Policy>,
      },
      {
        path: '/video-news',
        element: <NewsVideos></NewsVideos>,
      },
      {
        path: '/terms',
        element: <Terms></Terms>,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/epaper',
        element: <EPaper />,
      },
      {
        path: '/epaper-archive',
        element: <DateEpaper />,
      },
      {
        path: '/ad-rate-print',
        element: <AdRatePrint></AdRatePrint>,
      },
    ],
  },
  // User Route
  {
    path: '/user',
    element: (
      <>
        <UserLaout />
        <ScrollToTop />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/user/',
        element: <UserDasboard />,
      },
      {
        path: '/user/dashboard',
        element: <UserDasboard />,
      },
      {
        path: '/user/my-profile',
        element: <UserAccounts />,
      },
      {
        path: '/user/my-comments',
        element: <UserComments />,
      },
      {
        path: '/user/my-post',
        element: <UserPost />,
      },
      {
        path: '/user/my-advertisement',
        element: <UserAdvertisement />,
      },
      {
        path: '/user/my-save-post',
        element: <UserSavePost />,
      },
      {
        path: '/user/post-status',
        element: <UserPostStatus />,
      },
    ],
  },
]);

export default router;