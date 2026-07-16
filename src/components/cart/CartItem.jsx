import useCartContext from "../../context/CartContext";
import { Card, Button } from "react-bootstrap";
import useLanguage from "../../context/LanguageContext";
import useCurrencyContext from "../../context/CurrencyContext";
import { FaTrash } from "react-icons/fa";
const CartItem = ({ item }) => {
  const {formatPrice}=useCurrencyContext();
  const [ currentLanguage] = useLanguage();
  const { updateQuantity, removeCartItem, cartItems, cartCount } =
    useCartContext();
  const handleIncrease = () => {
    updateQuantity(item.id, "increment");
  };
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, "decrement");
    } else {
      removeCartItem(item.id);
    }
  };

  return (
    <Card
      className="mb-3 border-0 shadow-sm overflow-hidden"
      style={{ borderRadius: "12px" }}
    >
      <Card.Body className="d-flex align-items-center p-2">
        <div
          className="cart-item-img-wrapper me-3"
          style={{ width: "70px", height: "70px", flexShrink: 0 }}
        >
          <img
            src={item.image || "/assets/images/burger.jpg"}
            alt={item.name[currentLanguage]}
            className="w-100 h-100 object-fit-cover rounded"
          />
        </div>

        <div className="flex-grow-1 p-2">
          <h6
            className="mb-1 text-dark fw-bold"
            style={{ fontSize: "0.95rem" }}
          >
            {item.name[currentLanguage] || item.name.en}
          </h6>
          <span className="text-muted small d-block mb-1">{formatPrice(item.price)}</span>
        </div>

        <div className="d-flex flex-column align-items-end justify-content-between h-100">
          <Button
            variant="link"
            className="p-0 text-danger mb-2"
            onClick={() => removeCartItem(item.id)}
            style={{ textDecoration: "none" }}
          >
            <FaTrash size={16} />
          </Button>

          <div
            className="d-flex align-items-center bg-light rounded p-1"
            style={{ border: "1px solid #dee2e6" }}
          >
            <Button
              variant="light"
              size="sm"
              className="px-2 py-0 border-0 bg-transparent fw-bold"
              onClick={handleDecrease}
              style={{ fontSize: "1rem", lineHeight: "1" }}
            >
              -
            </Button>

            <span
              className="px-2 fw-semibold text-secondary"
              style={{
                fontSize: "0.85rem",
                minWidth: "20px",
                textAlign: "center",
              }}
            >
              {item.quantity}
            </span>

            <Button
              variant="light"
              size="sm"
              className="px-2 py-0 border-0 bg-transparent fw-bold"
              onClick={handleIncrease}
              style={{ fontSize: "1rem", lineHeight: "1" }}
            >
              +
            </Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
export default CartItem;
