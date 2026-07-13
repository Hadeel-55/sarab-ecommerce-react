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
import useBookingContext from "../context/BookingContext";
const Reservations = () => {
  const { t } = useTranslation();
  const { bookings, addBooking, cancelBooking } = useBookingContext();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    time: "",
    specialRequests: "",
  });

  const [showSuccess, setShoeSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, "").substring(0, 14);

    const formatted = input.replace(
      /^(\d{4})(\d{1,3})?(\d{1,3})?(\d{1,2})?(\d{1,2})?$/,
      (_, p1, p2, p3, p4, p5) => {
        return [p1, p2, p3, p4, p5].filter(Boolean).join(" ");
      },
    );
    setFormData((prev) => ({
      ...prev,
      phone: formatted,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBooking(formData);
    setShoeSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      guests: "1 Person",
      date: "",
      time: "09:00 AM",
      specialRequests: "",
    });
    setTimeout(() => setShoeSuccess(false), 5000);
  };

  return (
    <Container className="mt-5 pb-5">
      <div className=" text-center">
        <h6 style={{ color: "var(--primary-color)" }}>
          {t("reservation_form.sub_title")}
        </h6>
        <h1 className="fw-bold">
          {t("reservation_form.title_part1")}{" "}
          <span style={{ color: "var(--primary-color)" }}>
            {t("reservation_form.title_part2")}
          </span>
        </h1>
        <div className="title-divider mx-auto my-3"></div>
        <p className="text-secondary fs-5 pb-5">
          {t("reservation_form.description")}
        </p>
      </div>

      {showSuccess && (
        <Alert
          variant="success"
          className="text-center mx-auto mb-4 rounded-4"
          style={{ maxWidth: "83%" }}
        >
          🎉 {t("reservation_form.success")}
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
              {t("reservation_form.name")}*
            </Form.Label>
            <Form.Control
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("reservation_form.name")}
            />
          </Col>
          <Col md={5}>
            <Form.Label className="fw-bold">
              {t("reservation_form.phone")}*
            </Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              required
              placeholder="0090 546 889 76 99"
              onChange={handlePhoneChange}
            />
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col md={5}>
            <Form.Label className="fw-bold">
              {t("reservation_form.email")}*
            </Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={handleChange}
              required
              value={formData.email}
              placeholder={t("reservation_form.email")}
            />
          </Col>

          <Col md={5}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("reservation_form.guests")}*
              </Form.Label>
              <Form.Select
                name="guests"
                value={formData.guests}
                onChange={handleChange}
              >
                <option value="1 Person">1 Person</option>
                <option value="2 People">2 People</option>
                <option value="3 People">3 People</option>
                <option value="4 People">4 People</option>
                <option value="5+ Person">5+ Person</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col md={5}>
            <Form.Label className="fw-bold">
              {t("reservation_form.date")}*
            </Form.Label>
            <Form.Control
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              placeholder={t("reservation_guests")}
            />
          </Col>
          <Col md={5}>
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">
                {t("reservation_form.time")}*
              </Form.Label>
              <Form.Select
                name="time"
                value={formData.time}
                onChange={handleChange}
              >
                <option value="09:00">09:00</option>
                <option value="12:00">12:00</option>
                <option value="03:00">03:00</option>
                <option value="06:00">06:00</option>
                <option value="09:00">09:00</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row className="justify-content-center mt-3">
          <Col md={10}>
            <Form.Group>
              <Form.Label className="fw-bold">
                {t("reservation_form.special_Requests")}
              </Form.Label>

              <Form.Control
                as="textarea"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder={t("reservation_form.special_Requests")}
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
                {t("reservation_form.submit")}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>

      {bookings.length > 0 && (
        <div className="mt-5 mx-auto" style={{ maxWidth: "900px" }}>
          <h3
            className="fw-bold mb-3"
            style={{ color: "var(--primary-color)" }}
          >
            {t("reservation_form.my_bookings_title")}
          </h3>
          <Row>
            {bookings.map((booking) => (
              <Col key={booking.id} md={6} className="mb-3">
                <Card className="rounded-4 border-0 shadow-sm p-3">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fs-bold text-dark mb-1">
                        {t(booking.name)}
                      </h5>
                      <span className="badge bg-success-subtle text-success p-2 rounded-3">
                        {booking.guests}
                      </span>
                    </div>
                    <p className="text-muted small mb-2">{booking.email}</p>
                    <hr className="my-2" />
                    <div className="d-flex justify-content-between text-secondary mb-3">
                      <span>📅 {booking.date}</span>
                      <span>⏲️ {booking.time}</span>
                    </div>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      className="w-100 rounded-3 fw-semibold"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      {t("reservation_form.cancel")}
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
};
export default Reservations;
