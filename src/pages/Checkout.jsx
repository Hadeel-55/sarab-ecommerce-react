import CartItem from "../components/cart/CartItem";
import {
  Table,
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import useCartContext from "../context/CartContext";
import { useTranslation } from "react-i18next";
import useLanguage from "../context/LanguageContext";
import { useState } from "react";
import {
  FiUser,
  FiCalendar,
  FiLock,
  FiCreditCard,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { BsBank } from "react-icons/bs";
import useCurrencyContext from "../context/CurrencyContext";
const Checkout = () => {
  const {formatPrice}=useCurrencyContext()
  const { t, i18n } = useTranslation();
  const { cartItems, totalPrice, clearCart } = useCartContext();
  const [currentLang] = useLanguage();
  const [showCVV, setShowCVV] = useState(false);

  const handleExpiryChange = (e) => {
    let input = e.target.value.replace(/\D/g, "");

    if (input.length > 2) {
      input = input.substring(0, 2) + "/" + input.substring(2, 4);
    }
    e.target.value = input;
  };

  const handleCartNumber = (e) => {
    let input = e.target.value.replace(/\D/g, "");

    e.target.value = input;
  };
  return (
    <Container>
      <h2 className="mt-5">{t("checkout_page.title")}</h2>

      <h4 className="mt-4 mb-3">{t("checkout_page.order_summary")}</h4>

      <Table respondsive="md" bordered hover className="align-middle">
        <thead>
          <tr>
            <th>{currentLang === "ar" ? "المنتج" : "Product"}</th>
            <th>{currentLang === "ar" ? "الكمية" : "Quantity"}</th>
            <th>{currentLang === "ar" ? "السعر الكلي" : "Total Price"}</th>
          </tr>
        </thead>
        <tbody>
          {cartItems?.map((item) => (
            <tr key={item.id}>
              <td>
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name[currentLang] || item.name.en}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                  />

                  <span className="fw-bold">{item.name[currentLang]}</span>
                </div>
              </td>
              <td>{item.quantity}</td>
            <td className="fw-semibold">{formatPrice(item.price* item.quantity)} </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <p className="fs-5">
        {t("cart.total")} <strong> {formatPrice(totalPrice)} </strong>
      </p>

      <div className="payment-section p-4 border rounded shadow-sm bg-white">
        <h5 className="mb-4 fw-bold">{t("checkout_page.payment_method")}</h5>

        <Form>
          <div className="payment-options mb-4 p-3 border rounded bg-light">
            <Form.Check
              type="radio"
              label={
                <span className="d-flex align-items-center gap-2">
                  <BsBank className="text-primary" /> {t('checkout_page.kuveyt_Turk')}
                </span>
              }
              name="paymentMethod"
              id="kuveytTurk"
              className="mb-2 fw-semibold"
              defaultChecked
            />
            <Form.Check
              type="radio"
              label={
                <span className="d-flex align-items-center gap-2">
                  <FiCreditCard className="text-success" />{" "}
                  {t("checkout_page.credit_card")}
                </span>
              }
              name="paymentMethod"
              id="creditCard"
              className="fw-semibold"
            />
          </div>

          <Form.Group className="mb-3" controlId="cardName">
            <Form.Label className="fw-medium d-flex align-items-center gap-2">
              <FiUser className="text-muted" />
              {currentLang === "ar"
                ? "الاسم المكتوب على البطاقة"
                : "Name on card"}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder={
                currentLang === "ar"
                  ? "أدخل الاسم المكتوب على البطاقة"
                  : "Enter name on card"
              }
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cardNumber">
            <Form.Label className="fw-medium d-flex align-items-center gap-2">
              <FiCreditCard className="text-muted" />
              {currentLang === "ar" ? "رقم البطاقة" : "Card Number"}
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              onChange={handleCartNumber}
            />
          </Form.Group>

          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="cardExpiry">
                <Form.Label className="fw-medium d-flex align-items-center gap-2">
                  <FiCalendar className="text-muted" />
                  {currentLang === "ar" ? "تاريخ الانتهاء" : "Expiration date"}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/YY"
                  maxLength="5"
                  onChange={handleExpiryChange}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-4" controlId="cardCVV">
                <Form.Label className="fw-medium d-flex align-items-center gap-2">
                  <FiLock className="text-muted" />
                  CVV
                </Form.Label>

                <InputGroup>
                  <Form.Control
                    type={showCVV ? "text" : "password"}
                    maxLength="3"
                    placeholder="***"
                  />

                  <InputGroup.Text
                    onClick={() => setShowCVV(!showCVV)}
                    style={{ cursor: "pointer", backgroundColor: "#fff" }}
                    className="text-muted"
                  >
                    {showCVV ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Button
          style={{backgroundColor:'var(--primary-color)',color:'white',border:'none'}}
            type="submit"
            className="w-100 py-2 fw-bold text-uppercase"
            onClick={clearCart}
          >
            {t("checkout_page.place_order")}
          </Button>
        </Form>
      </div>
    </Container>
  );
};
export default Checkout;
