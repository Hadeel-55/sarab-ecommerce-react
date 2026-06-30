import { Outlet } from "react-router-dom";
const MainLayout = () => {
  return (
    <div>
      <h1>navbar & footer</h1>

      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
