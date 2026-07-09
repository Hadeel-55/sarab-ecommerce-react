import { useState, useEffect } from "react";
import { Navbar, Nav, Button, Badge, Container } from "react-bootstrap";
import { FaSearch, FaShoppingBag, FaUtensils } from "react-icons/fa";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import CustomButton from "../common/Button";
import useLanguage from "../../context/LanguageContext";
import { useTranslation } from "react-i18next";
import useCartContext from "../../context/CartContext";
const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { cartCount } = useCartContext();

  const { t } = useTranslation();
  const [currentLang, changeLanguage] = useLanguage();
  // State to track which section is currently active/visible on the screen
  const [activeSection, setActiveSection] = useState("home");
  /**
   * Handles smooth scrolling to a specific section.
   * If on the homepage, it scrolls directly. Otherwise, it navigates home first.
   */
  const handleScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Pass the target section via state so the home page can scroll to it upon arrival
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };
  // Effect to manage the IntersectionObserver for scroll tracking
  useEffect(() => {
    // If not on the homepage, reset the active section since sections only exist on "/"
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }
    const section = ["chefs", "reviews", "contact"];
    const observers = [];
    // Configuration for the observer: triggers when section occupies the middle of the screen
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px",
      threshold: 0,
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        // If the section enters the specified screen viewport area
        if (entry.isIntersecting) {
          let sectionId = entry.target.id;
          if (sectionId === "home-hero") sectionId = "home";
          setActiveSection(sectionId);
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );
    // Find and start observing each target section element
    section.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
        observers.push(element);
      }
    });
    // Cleanup: disconnect the observer when the component unmounts or pathname changes
    return () => {
      observer.disconnect();
    };
  }, [location.pathname]);
  return (
    <Navbar expand="lg" bg="white" className="shadow-lg sticky-top">
      <Container>
        <Navbar.Brand
          className="d-flex gap-2 align-items-center"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <div className="sarab-brand">
            <FaUtensils />
          </div>
          <div className="d-flex flex-column">
            <h3 className=" fw-bold mb-0 ">
              Sar<span className="sarab-brand-name">ab</span>
            </h3>
            <small className="sarab-navbar-text">
              {t("navbar.subtitle", "Fast Food & Restaurant")}
            </small>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-colcount="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="mx-auto gap-3 align-items-start align-items-lg-center ">
            <span
              className={`sarab-nav-link px-2 py-1 ${activeSection === "home" ? "active" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setActiveSection("home");
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
              }}
            >
              {t("navbar.home", "Home")}
            </span>
            <Nav.Link className="sarab-nav-link " as={NavLink} to="/about">
              {t("navbar.about", "About")}
            </Nav.Link>
            <Nav.Link className="sarab-nav-link " as={NavLink} to="/menu">
              {t("navbar.menu", "  Manu")}
            </Nav.Link>
            <strong
              className={`sarab-nav-link  ${activeSection === "chefs" ? "active" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => handleScrollToSection("chefs")}
            >
              {t("navbar.chefs", " Chefs")}
            </strong>
            <Nav.Link
              className="sarab-nav-link"
              as={NavLink}
              to="/reservations"
            >
              {t("navbar.reservations", " Reservations")}
            </Nav.Link>{" "}
            <strong
              className={`sarab-nav-link ${activeSection === "reviews" ? "active" : ""} `}
              style={{ cursor: "pointer" }}
              onClick={() => handleScrollToSection("reviews")}
            >
              {t("navbar.reviews", " Reviews")}
            </strong>
            <strong
              as={NavLink}
              className={`sarab-nav-link  ${activeSection === "contact" ? "active" : ""}`}
              style={{ cursor: "pointer" }}
              onClick={() => handleScrollToSection("contact")}
            >
              {t("navbar.contact", " Contact")}
            </strong>
          </Nav>
          <div className="d-flex m-auto gap-3 align-items-center">
            <div className="sarab-btn-searh" style={{ cursor: "pointer" }}>
              <FaSearch />
            </div>
            <CustomButton
              onClick={() => changeLanguage(currentLang === "ar" ? "en" : "ar")}
              size="sm"
              title={currentLang === "ar" ? "EN" : "العربية"}
            />

            <CustomButton
              title={t("navbar.cart", "Order Now")}
              icon={
                <div className="position-relative d-inline-block">
                  <FaShoppingBag />
                  <Badge
                    pill
                    bg="danger"
                    className="position-absolute top-0 start-100 translate-middle"
                    style={{ fontSize: "0.6rem", padding: "0.25em 0.4em" }}
                  >
                    {cartCount}
                  </Badge>
                </div>
              }
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
