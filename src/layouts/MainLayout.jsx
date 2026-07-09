import { Outlet } from "react-router-dom";
import NavBar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
const MainLayout = () => {
  return (
    <div>
       <NavBar />  
      <h1>navbar & footer</h1>

      <div className="page-content">
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};
export default MainLayout;
