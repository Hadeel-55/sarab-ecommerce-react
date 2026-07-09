import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      setTimeout(() => {
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div>
      <h1>Home page</h1>
    </div>
  );
};
export default Home;