import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import { Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import useLanguage from "../../context/LanguageContext";
const Footer = () => {
  // Localization hook for multi-language support
  const { t } = useTranslation();
// Social media icons array for dynamic rendering
  const socialMedia = [FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaTiktok];
  // Navigation data for the "Quick Links" section
  const quickLinks = [
    { id: 1, text: "navbar.home", path: "/" },
    { id: 2, text: "navbar.about", path: "/about" },
    { id: 3, text: "navbar.menu", path: "/menu" },
    { id: 4, text: "navbar.reservations", path: "/reservations" },
    { id: 5, text: "navbar.blog", path: "/#blog" },
    { id: 6, text: "navbar.contact", path: "/#contact" },
  ];
// Anchor links dataset to jump to specific menu sections
  const ourMenu = [
    { id: 1, name: "menu_section.breakfast", path: "/#menu" },
    { id: 2, name: "menu_section.main_courses", path: "/#menu" },
    { id: 3, name: "menu_section.drinks", path: "/#menu" },
    { id: 4, name: "menu_section.desserts", path: "/#menu" },
    { id: 5, name: "menu_section.add_to_cart", path: "/#menu" },
  ];
  // Contact details structure combining translation keys and hardcoded fallbacks
  
  const contactInfo = [
    {
      Icon: FaMapMarkerAlt,
      titleKey: "footer.address",
      valueKey: "footer.address_description",
    },
    {
      Icon: FaPhoneAlt,
      titleKey: "reservation_form.phone",
      valueKey: "+1 (800) 123-4567", // Fallback text processed by t() if not translation key
    },
    {
      Icon: FaEnvelope,
      titleKey: "reservation_form.email",
      valueKey: "hello@sarabfood.com",
    },
    {
      Icon: FaClock,
      titleKey: "footer.opening_hours",
      valueKey: "footer.hours_detail",
    },
  ];
  return (
    <section className="footer-section">
      <Row className="justify-content-center gap-3">
        <Col md={4}>
          <h1 className="fw-bold text-white">
            Sar<span className="sarab-brand-name">ab</span>
          </h1>

          <p style={{ color: "#777" }}>
            {t(
              "footer.description",
              "   We bring the world's finest flavors together in a fast, friendly, and affordable experience. Every meal crafted with love.",
            )}
          </p>
          <div className="d-flex gap-2 ">
            {socialMedia.map((Icon, index) => (
              <Link key={index} className="footer-SocialMedia-Icon" to="#">
                <Icon />
              </Link>
            ))}
          </div>
        </Col>
        <Col md={2} className="d-flex flex-column align-items-start">
          <h4 className="footer-quickLinks">
            {t("footer.quickLinks", "Quick Links")}
          </h4>
          <ul className="p-0 m-0 footer-ul list-unstyled">
            {quickLinks.map((links) => (
              <li key={links.id} className="footer-quickLinks-list pt-3">
                <FaChevronRight className="me-1" />
                <Link className="footer-quickLinks-link " to={links.path}>
                  {t(links.text)}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={2} className="d-flex flex-column align-items-start">
          <h4 className="footer-quickLinks">{t("menu_section.menu")}</h4>
          <ul className="p-0 m-0 footer-ul list-unstyled">
            {ourMenu.map((menu) => (
              <li key={menu.id} className="footer-quickLinks-list pt-3">
                <FaChevronRight className="me-1" />
                <Link className="footer-quickLinks-link " to={menu.path}>
                  {t(menu.name)}
                </Link>
              </li>
            ))}
          </ul>
        </Col>
        <Col md={3} className="footer-contact-column">
          <h4 className="footer-quickLinks">{t("navbar.contact")}</h4>

          <div className="footer-contact-list">
            {contactInfo.map((item, index) => {
              const IconComponent = item.Icon;

              return (
                <div key={index} className="footer-contact-item">
                  <div className="footer-contact-icon-box">
                    <IconComponent />
                  </div>

                  <div className="footer-contact-text">
                    <h6>{t(item.titleKey)}</h6>
                    <p>{t(item.valueKey)}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </section>
  );
};
export default Footer;
