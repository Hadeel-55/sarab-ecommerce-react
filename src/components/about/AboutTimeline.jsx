import { Container, Row, Col } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
const AboutTimeline = () => {
  const { t } = useTranslation();

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mobileLeftPosition = "20px";

  return (
    <Container className="mt-5 pb-5">
      <div className=" text-center">
        <h6 style={{ color: "var(--primary-color)" }}>
          {t("about.journey.subtitle")}
        </h6>
        <h1 className="fw-bold">
          {t("about.journey.title1")}
          <span style={{ color: "var(--primary-color)" }}>
            {t("about.journey.title2")}
          </span>
        </h1>
        <p className="text-secondary fs-5 pb-5">
          {t("about.journey.description")}
        </p>
      </div>

      <Container className="position-relative my-5">
        <div
          className="position-absolute translate-middle-x h-100 "
          style={{
            width: "2px",
            top: 0,
            zIndex: 1,
            left: isMobile ? mobileLeftPosition : "50%",
            backgroundColor: "var(--secondary-color)",
          }}
        ></div>

        <Row
          className="align-items-center mb-5 position-relative"
          style={{ zIndex: 2 }}
        >
          <Col
            xs={12}
            md={5}
            className={`text-start ${isMobile ? "ps-5" : "text-end pe-4"}`}
          >
            <span className="timeline-year">2012</span>
            <h3 className="fw-bold fs-5 mt-1">{t('about.journey.timeline.2012_title')}</h3>
            <p className="text-muted small mb-0">
             {t('about.journey.timeline.2012_desc')}
            </p>
          </Col>

          <Col
            xs={12}
            md={2}
            className={`d-flex ${isMobile ? "" : "justify-content-center align-items-center"}`}
            style={
              isMobile
                ? {
                    position: "absolute",
                    left: mobileLeftPosition,
                    top: "20px",
                    width: "0px",
                    padding: "0px",
                  }
                : {}
            }
          >
            <div
              className={
                isMobile
                  ? "timeLineCorle position-absolute translate-middle"
                  : "timeLineCorle"
              }
            ></div>
          </Col>

          {!isMobile && <Col md={5}></Col>}
        </Row>

        <Row
          className="align-items-center mb-5 position-relative"
          style={{ zIndex: 2 }}
        >
          {!isMobile && <Col md={5}></Col>}

          <Col
            xs={12}
            md={2}
            className={`d-flex ${isMobile ? "" : "justify-content-center align-items-center"}`}
            style={
              isMobile
                ? {
                    position: "absolute",
                    left: mobileLeftPosition,
                    top: "12px",
                    width: "0px",
                    padding: "0px",
                  }
                : {}
            }
          >
            <div
              className={
                isMobile
                  ? "timeLineCorle position-absolute translate-middle"
                  : "timeLineCorle"
              }
            ></div>
          </Col>

          <Col xs={12} md={5} className="text-start ps-5 ps-md-4">
            <span className="timeline-year">2015</span>
            <h3 className="fw-bold fs-5 mt-1">{t('about.journey.timeline.2015_title')}</h3>
            <p className="text-muted small mb-0">
            {t('about.journey.timeline.2015_desc')}
            </p>
          </Col>
        </Row>
                <Row
          className="align-items-center mb-5 position-relative"
          style={{ zIndex: 2 }}
        >
          <Col
            xs={12}
            md={5}
            className={`text-start ${isMobile ? "ps-5" : "text-end pe-4"}`}
          >
            <span className="timeline-year">2019</span>
            <h3 className="fw-bold fs-5 mt-1">{t('about.journey.timeline.2019_title')}</h3>
            <p className="text-muted small mb-0">
             {t('about.journey.timeline.2019_desc')}
            </p>
          </Col>

          <Col
            xs={12}
            md={2}
            className={`d-flex ${isMobile ? "" : "justify-content-center align-items-center"}`}
            style={
              isMobile
                ? {
                    position: "absolute",
                    left: mobileLeftPosition,
                    top: "20px",
                    width: "0px",
                    padding: "0px",
                  }
                : {}
            }
          >
            <div
              className={
                isMobile
                  ? "timeLineCorle position-absolute translate-middle"
                  : "timeLineCorle"
              }
            ></div>
          </Col>

          {!isMobile && <Col md={5}></Col>}
        </Row>

        <Row
          className="align-items-center mb-5 position-relative"
          style={{ zIndex: 2 }}
        >
          {!isMobile && <Col md={5}></Col>}

          <Col
            xs={12}
            md={2}
            className={`d-flex ${isMobile ? "" : "justify-content-center align-items-center"}`}
            style={
              isMobile
                ? {
                    position: "absolute",
                    left: mobileLeftPosition,
                    top: "12px",
                    width: "0px",
                    padding: "0px",
                  }
                : {}
            }
          >
            <div
              className={
                isMobile
                  ? "timeLineCorle position-absolute translate-middle"
                  : "timeLineCorle"
              }
            ></div>
          </Col>

          <Col xs={12} md={5} className="text-start ps-5 ps-md-4">
            <span className="timeline-year">2026</span>
            <h3 className="fw-bold fs-5 mt-1">{t('about.journey.timeline.2026_title')}</h3>
            <p className="text-muted small mb-0">
            {t('about.journey.timeline.2026_desc')}
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};
export default AboutTimeline;
