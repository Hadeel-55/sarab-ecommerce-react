import { Outlet } from "react-router-dom";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import CartDrawer from "../components/cart/CartDrawer";
const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <CartDrawer />

      <div className="page-content">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
export default MainLayout;
