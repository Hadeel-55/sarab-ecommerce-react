import {
  Container,
  Card,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const Contact = () => {
  const { t } = useTranslation();
const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "").substring(0, 14);

    const formatted = input.replace(
      /^(\d{4})(\d{1,3})?(\d{1,3})?(\d{1,2})?(\d{1,2})?$/,
      (_, p1, p2, p3, p4, p5) => {
        return [p1, p2, p3, p4, p5].filter(Boolean).join(" ");
      },
    );
    setPhone(formatted)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowSuccess(true);

    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <Container className="mt-5 pb-5">
      <div className=" text-center">
        <h6 style={{ color: "var(--primary-color)" }}>
          {t("contact.subtitle")}
        </h6>
        <h1 className="fw-bold">
          {t("contact.title1")}{" "}
          <span style={{ color: "var(--primary-color)" }}>
            {t("contact.title2")}
          </span>
        </h1>
        <div className="title-divider mx-auto my-3"></div>
        <p className="text-secondary fs-5 pb-5">{t("contact.description")}</p>
      </div>

      {showSuccess && (
        <Alert
          variant="success"
          className="text-center mx-auto mb-4 rounded-4"
          style={{ maxWidth: "83%" }}
        >
          <h4>{t("contact.success.title")}</h4>
          🎉 {t("contact.success.subtitle")}
        </Alert>
      )}

      <Form
        onSubmit={handleSubmit}
        className="bg-white rounded-5 p-4 mx-auto"
        style={{ boxShadow: "var(--shadow-md)", maxWidth: "900px" }}
      >
        <Row className="justify-content-center mt-3">
          <Col md={5}>
            <Form.Label className="fw-bold">
              {t("contact.form.name_label")}
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              placeholder={t("contact.form.name_placeholder")}
            />
          </Col>
          <Col md={5}>
            <Form.Label className="fw-bold">
             {t("contact.form.phone_label")}
            </Form.Label>
            <Form.Control
              type="text"
              value={phone}
              name="phone"
              required
              placeholder={t("contact.form.phone_placeholder")}
              onChange={handlePhoneChange}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col md={5}>
            <Form.Label className="fw-bold">
              {t("contact.form.email_label")}
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              required
              placeholder={t("contact.form.email_placeholder")}
            />
          </Col>

          <Col md={5}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("contact.form.subject_label")}
              </Form.Label>
              <Form.Select name="subject" required>
                <option value="general">
                  {t("contact.form.subject_options.general")}
                </option>
                <option value="catering_events">
                  {t("contact.form.subject_options.catering_events")}
                </option>
                <option value="feedback">
                  {t("contact.form.subject_options.feedback")}
                </option>
                <option value="partnership">
                  {t("contact.form.subject_options.partnership")}
                </option>
                <option value="media_press">
                  {t("contact.form.subject_options.media_press")}
                </option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col md={10}>
            <Form.Group>
              <Form.Label className="fw-bold">
                {t("contact.form.message_label")}
              </Form.Label>

              <Form.Control
                as="textarea"
                name="message"
                placeholder={t("contact.form.message_placeholder")}
                rows={3}
              />
            </Form.Group>
            <div>
              <Button
                type="submit"
                className="mt-3"
                style={{
                  backgroundColor: "var(--secondary-color)",
                  border: "none",
                  borderRadius: "10px",
                }}
              >
                {t("contact.form.submit_btn")}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default Contact;
