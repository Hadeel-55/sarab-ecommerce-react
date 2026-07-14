import { Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <Row className="mt-5 pt-5 text-center">
      <Col
        md={12}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1 style={{ fontSize: "55px" }}>{t("not_found.code")}</h1>
        <h4 className="fw-semibold">{t("not_found.title")}</h4>
        <p className="text-muted ">{t("not_found.message")}</p>
        <p className="notFoundBack" onClick={() => navigate("/")}>
          {t("not_found.back_home")}
        </p>
      </Col>
    </Row>
  );
};
export default NotFound;
