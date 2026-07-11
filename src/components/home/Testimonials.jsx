import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const rawReviews = t("testimonials.reviews", { returnObjects: true });
  const reviewsList = rawReviews
    ? Array.isArray(rawReviews)
      ? rawReviews
      : Object.values(rawReviews)
    : [];
  const isRtl = i18n.language === "ar";

  const chunkArray = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size),
    );

  const reviewSlides = chunkArray(reviewsList, 3);

  return (
    <section className="testimonials-section py-5 bg-white text-center">
      <Container>
        <p className="testimonials-badge m-0">{t("testimonials.badge")}</p>
        <h2 className="fw-bold mt-2 display-5 text-dark">
          {t("testimonials.title_before")}
          <span className="sarab-brand-name">
            {t("testimonials.title_highlight")}
          </span>
        </h2>
        <div className="title-divider mx-auto my-3"></div>

        <Carousel
          controls={false}
          indicators={true}
          className="mt-5 pb-5 custom-carousel"
        >
          {reviewSlides.map((slideCards, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center px-3">
                {slideCards.map((item, itemIndex) => (
                  <Col
                    key={item.id || itemIndex}
                    lg={4}
                    md={6}
                    sm={12}
                    className={`mx-auto ${itemIndex > 0 ? "d-none d-lg-block" : ""}`}
                    style={{ maxWidth: "380px" }}
                  >
                    <div className="testimonial-card p-4 text-start d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                          <div className="stars text-warning fs-5">★★★★★</div>
                          <span className="quote-icon">”</span>
                        </div>
                        <p className="review-text text-muted small lh-base">
                          {item.text}
                        </p>
                      </div>

                      <div className="client-info d-flex align-items-center mt-4">
                        <img
                          src={`/images/clients/user${item.id}.jpg`}
                          alt={item.name}
                          className={`${isRtl ? "ms-3" : "me-3"} rounded-circle`}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h6 className="fw-bold m-0 text-dark small">
                            {item.name}
                          </h6>
                          <small
                            className="text-muted d-block"
                            style={{ fontSize: "11px" }}
                          >
                            {item.role}
                          </small>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
