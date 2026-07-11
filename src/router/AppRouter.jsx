import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Menu from "../pages/Menu";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Reservations from "../pages/Reservations";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "checkout", element: <Checkout /> },
      { path: "reservations", element: <Reservations /> },
   
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
