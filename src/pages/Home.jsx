import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/home/Hero";
import CategoryBrowse from "../components/home/CategoryBrowse";
import NewsletterSection from "../components/home/Newsletter";
import Testimonials from "../components/home/Testimonials";
import Contact from "../components/contact/Contact";
import Chefs from '../components/home/Chefs';
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
      <div id="home-hero">
        <Hero />
      </div>
      <CategoryBrowse />
      <NewsletterSection />
      <div id="chefs">
        <Chefs/>
      </div>
      <div id="reviews">
        <Testimonials />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
};
export default Home;
