import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
  FaTruck,
  FaMapMarkerAlt,
  FaCalendar,
  FaCircle,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
const OpeningHours = () => {
  const { t } = useTranslation();
  const openingHours = [
    {
      day: t("openingHours.days.mondayTuesday"),
      time: t("openingHours.status.closed"),
      isClosed: false,
    },
    {
      day: t("openingHours.days.wednesdayThursday"),
      time: "09:00 AM - 11:00 PM",
      isClosed: false,
    },
    {
      day: t("openingHours.days.friday"),
      time: "10:00 AM - 11:30 PM",
      isClosed: false,
    },
    {
      day: t("openingHours.days.saturday"),
      time: "11:00 AM - 09:00 PM",
      isClosed: false,
    },
    {
      day: t("openingHours.days.sunday"),
      time: "09:00 AM - 10:00 PM",
      isClosed: false,
    },
  ];
  return (
    <div className="hoursSection pb-1">
      <Container className="">
        <div className=" text-center mt-5 pt-5">
          <h6 className="text-white">
            {t("openingHours.title")}
          </h6>
          <h1 className="fw-bold text-white">
            {t("openingHours.subtitle1")}{" "}
            <span style={{ color: "var(--secondary-color)" }}>
              {t("openingHours.subtitle2")}
            </span>
          </h1>
          <div className="title-divider mx-auto my-3"></div>
        </div>

        <Row className="g-5 mt-3 pb-5 ">
          <Col md={4} xs={12}>
            <div className="text-white bg-white bg-opacity-10 p-3 border border-secondary rounded-3 ">
              {openingHours.map((item, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-between border-bottom border-secondary mb-2 pb-2"
                >
                  <div className="">
                    <FaCalendar
                      className="text-warning me-1"
                      style={{ fontSize: "10px" }}
                    />
                    {item.day}
                  </div>
                  <div>
                    <span>
                      <FaCircle
                        className="text-danger me-1 "
                        style={{ fontSize: "10px" }}
                      />
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col md={3} xs={12}>
            <div
              className="text-center text-white rounded-4 p-4"
              style={{ backgroundColor: "var(--primary-color)" }}
            >
              <FaTruck style={{ fontSize: "35px" }} />
              <h3 className="fw-bold pt-3">
                {t("openingHours.orderOnline.title")}
              </h3>
              <p className="">
                {t("openingHours.orderOnline.description")}
              </p>
              <Button
                className="bg-white fw-bold rounded-pill px-4 "
                style={{ color: "var(--primary-color)", border: "none" }}
              >
                {t("openingHours.orderOnline.button")}
              </Button>
            </div>
          </Col>
          <Col md={4} xs={12}>
            <div className="bg-white bg-opacity-10 text-white  d-flex flex-column gap-3 p-3 border border-secondary rounded-3">
              <div className=" border-bottom border-secondary pb-2 fw-semibold">
                <FaMapMarkerAlt className="text-warning" />{" "}
                {t("openingHours.contact.findUs")}
              </div>
              <div className=" border-bottom border-secondary pb-2 d-flex justify-content-between">
                <div>
                  <FaMapMarkerAlt className="text-warning" />
                  {t("openingHours.contact.address")}
                </div>
                <div className="fw-semibold">42 Flavor Street, NY</div>
              </div>
              <div className=" border-bottom border-secondary pb-2 d-flex justify-content-between">
                <div>
                  <FaMapMarkerAlt className="text-warning" />{" "}
                  {t("openingHours.contact.phone")}
                </div>
                <div className="fw-semibold">+1 (800) 123-4567</div>
              </div>
              <div className=" d-flex justify-content-between">
                <div style={{ fontSize: "14px" }}>
                  <FaMapMarkerAlt className="text-warning" />{" "}
                  {t("openingHours.contact.email")}
                </div>
                <div className="fw-semibold">hello@sarabfood.com</div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default OpeningHours;
