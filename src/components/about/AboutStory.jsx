import { Container, Row, Col, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { FaLeaf, FaTruck, FaTrophy, FaBookOpen } from "react-icons/fa";
import CustomButton from "../common/Button";
import { useNavigate } from "react-router-dom";
const AboutStory = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <Container className="mt-5">
      <Row className="align-items-center">
        <Col md={6} xs={12} className="mb-5 mb-md-0 pe-md-5">
          <div className="position-relative " style={{ zIndex: "0" }}>
            <div>
              <img
                className="rounded-5 w-100 object-fit-cover shadow"
                src="/images/productsImg/pizza.jpg"
                alt="Main story pic"
                style={{ height: "60vh", minHeight: "350px" }}
              />
            </div>

            <div
              className="position-absolute top-0 start-0 rounded-4 text-white text-center d-flex flex-column justify-content-center p-2 shadow-sm "
              style={{
                zIndex: "2",
                width: "100px",
                height: "100px",
                backgroundColor: "var(--primary-color)",
                transform: "translate(-20%, 40%)",
              }}
            >
              <h2 className="fw-bold mb-0">12+</h2>
              <small style={{ fontSize: "13px", lineHeight: "1.2" }}>
                {t("about.story.badge")}
              </small>
            </div>
            <div
              className="position-absolute bottom-0 rounded-4 shadow-lg"
              style={{
                zIndex: "2",
                right: "-20px",
                bottom: "-30px",
                width: "clamp(140px, 30vw, 220px)",
              }}
            >
              <img
                style={{
                  border: "6px solid white",
                  objectFit: "cover",
                }}
                className="rounded-4 w-100 h-100 "
                src="/images/productsImg/burger.jpg"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col md={6} xs={12}>
          <h6 style={{ color: "var(--primary-color)" }}>
            {t("about.story.subtitle")}
          </h6>
          <h1 className="fw-bold">
            {t("about.story.title1")}
            <span style={{ color: "var(--primary-color)" }}>
              {t("about.story.title2")}
            </span>
          </h1>
          <p className="text-secondary ">{t("about.story.description")}</p>
          <div className="title-divider "></div>

          <div className="d-flex gap-3 mt-3">
            <div
              className=" bg-danger bg-opacity-10 rounded-3 d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <FaLeaf className="text-danger " />
            </div>
            <div>
              <h6 className="fw-bold">
                {t("about.story.features.fresh_title")}
              </h6>
              <p style={{ fontSize: "13px" }} className="text-secondary">
                {t("about.story.features.fresh_desc")}
              </p>
            </div>
          </div>

          <div className="d-flex gap-3 ">
            <div
              className="bg-warning bg-opacity-10 rounded-3 d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <FaTrophy className="text-warning" />
            </div>
            <div>
              <h6 className="fw-bold">
                {t("about.story.features.awards_title")}
              </h6>
              <p style={{ fontSize: "13px" }} className="text-secondary">
                {t("about.story.features.awards_desc")}
              </p>
            </div>
          </div>

          <div className="d-flex gap-3 ">
            <div
              className="bg-success bg-opacity-10 rounded-3 d-flex justify-content-center align-items-center"
              style={{ width: "40px", height: "40px" }}
            >
              <FaTruck className="text-success" />
            </div>
            <div>
              <h6 className="fw-bold">
                {t("about.story.features.delivery_title")}
              </h6>
              <p style={{ fontSize: "13px" }} className="text-secondary">
                {t("about.story.features.delivery_desc")}
              </p>
            </div>
          </div>

          <CustomButton
            icon={<FaBookOpen />}
            title={t("about.story.btn_menu")}
            className="rounded-5"
            onClick={() => navigate("/menu")}
          ></CustomButton>
        </Col>
      </Row>
    </Container>
  );
};
export default AboutStory;
