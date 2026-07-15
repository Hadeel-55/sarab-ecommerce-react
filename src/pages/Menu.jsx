import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaPlus, FaStar } from "react-icons/fa";
import useCartContext from "../context/CartContext";
import ProductList from "../data/products.json";
import useLanguage from "../context/LanguageContext";
const Menu = () => {
  const { t } = useTranslation();
  const [currentLanguage] = useLanguage();
  const { addCartItem } = useCartContext();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const filtereProducts = ProductList.filter((dish) => {
    if (selectedCategory === "all") return true;
    return dish.category.en === selectedCategory;
  });
  return (
    <Container className="py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold text-dark">{t("menu_section.title")}</h2>
        <p className="text-muted">{t("menu_section.menu")}</p>
      </div>

      <div className="d-flex justify-content-center mb-4 gap-2 flex-wrap">
        <Button
          variant={selectedCategory === "all" ? "danger" : "outline-danger"}
          onClick={() => setSelectedCategory("all")}
          className="rounded-pill px-4"
        >
          {currentLanguage === "ar" ? "الكل" : "All"}
        </Button>

        <Button
          variant={
            selectedCategory === "main_courses" ? "danger" : "outline-danger"
          }
          onClick={() => setSelectedCategory("main_courses")}
          className="rounded-pill px-4"
        >
          {currentLanguage === "ar" ? "وجبات أساسية" : "Main Courses"}
        </Button>

        <Button
          variant={selectedCategory === "drinks" ? "danger" : "outline-danger"}
          onClick={() => setSelectedCategory("drinks")}
          className="rounded-pill px-4"
        >
          {currentLanguage === "ar" ? "مشروبات" : "Drinks"}
        </Button>
        <Button
          variant={
            selectedCategory === "breakfast" ? "danger" : "outline-danger"
          }
          onClick={() => setSelectedCategory("breakfast")}
          className="rounded-pill px-4"
        >
          {currentLanguage === "ar" ? "فطور" : "Breakfast"}
        </Button>
        <Button
          variant={
            selectedCategory === "desserts" ? "danger" : "outline-danger"
          }
          onClick={() => setSelectedCategory("desserts")}
          className="rounded-pill px-4"
        >
          {currentLanguage === "ar" ? "حلوى" : "Desserts"}
        </Button>
      </div>

      <Row className="g-4">
        {filtereProducts.map((dish) => (
          <Col key={dish.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="h-100 shadow-sm border-0 sarab-menu-card overflow-hidden">
              <div
                className="position-relative overflow-hidden"
                style={{ height: "200px" }}
              >
                <Card.Img
                  variant="top"
                  src={dish.image}
                  alt={dish.name[currentLanguage] || dish.name.en}
                  className="w-100 h-100 object-cover"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.3s ease",
                  }}
                />
                <span className="position-absolute top-0 end-0 bg-white m-2 px-2 py-1 rounded shadow-sm small fw-bold text-warning d-flex align-items-center gap-1">
                  <FaStar size={12} /> {dish.rating}
                </span>
              </div>

              <Card.Body className="d-flex flex-column justify-content-between p-3">
                <div>
                  <Card.Title className="fw-bold fs-5 mb-2">
                    {dish.name[currentLanguage] || dish.name.en}
                  </Card.Title>
                  <Card.Text
                    className="text-muted small mb-3"
                    style={{ minHeight: "40px" }}
                  >
                    {dish.description[currentLanguage] || dish.description.en}
                  </Card.Text>
                </div>

                <div className="d-flex align-items-center justify-content-between mt-auto pt-2 border-top">
                  <span className="fw-bold fs-5 text-success">
                    ${dish.price.toFixed(2)}
                  </span>

                  <Button
                    variant="warning"
                    className="btn-sm d-flex align-items-center gap-2  text-white fw-bold rounded-pill px-3 py-2 btn-add-cart"
                    onClick={() => addCartItem(dish)}
                    style={{
                      backgroundColor: "var(--primary-color)",
                      border: "none",
                    }}
                  >
                    <FaPlus size={12} />
                    {t("menu_section.add_to_cart")}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default Menu;
