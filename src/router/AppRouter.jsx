import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Menu = lazy(() => import("../pages/Menu"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Checkout = lazy(() => import("../pages/Checkout"));
const Reservations = lazy(() => import("../pages/Reservations"));
const NotFound = lazy(() => import("../pages/NotFound"));

const PageLoader = () => (
  <div className="d-flex justofy-content-center align-items-center py-5 my-5">
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

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
    element: (
      <Suspense>
        <NotFound />
      </Suspense>
    ),
  },
]);
