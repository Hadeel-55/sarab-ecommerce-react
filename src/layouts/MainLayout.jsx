import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CartDrawer from "../components/cart/CartDrawer";

const ContebtLoader=()=>(
  <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
    <div className="spinner-grow text-warning" role="status" style={{width:'3rem',height:'3rem'}}>
      <span className="visually-hidden">Loading page...</span>
    </div>
  </div>
)

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <CartDrawer />

      <div className="page-content">
        <Suspense fallback={<ContebtLoader/>}>       
        <Outlet />
         </Suspense>
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
