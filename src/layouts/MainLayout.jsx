import { Outlet } from "react-router-dom";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
const MainLayout = () => {
  return (
    <div>
       <NavBar />  
    

      <div className="page-content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
export default MainLayout;
