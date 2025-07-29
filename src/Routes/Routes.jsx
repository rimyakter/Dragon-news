import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <div>Error 404</div>,
  },
]);
