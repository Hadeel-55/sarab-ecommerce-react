import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import useCartContext from "../../context/CartContext";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
const CartDrawer = () => {
  const {t}=useTranslation();
  const { cartItems, isCartOpen, toggleCart, totalPrice, closeCart, clearCart } =
    useCartContext();

  const navigate = useNavigate();
  return (
    <>
      {isCartOpen && <div className="cart-backdrop" onClick={closeCart} />}

      <div className={`cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="drawer-header p-3 d-flex justify-content-between align-items-center border-bottom">
          <h5 className="mb-0 fw-bold">{t('cart.title')}</h5>
          <button
            className="close-btn border-0 bg-transparent fs-4"
            onClick={closeCart}
          >
            &times;
          </button>
        </div>

        <div
          className="drawer-body p-3"
          style={{ overflowY: "auto", flexGrow: 1 }}
        >
          {cartItems.length === 0 ? (
            <div className="text-center py-5">
              <p className="text-muted">{t('cart.empty')}</p>
            </div>
          ) : (
            cartItems.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="drawer-footer p-3 border-top bg-light">
            <div className="d-flex justify-content-between mb-3 fw-bold fs-5">
              <span>{t('cart.total')}</span>
              <span>{totalPrice} $</span>
            </div>

            <Button
              className="checkout-btn w-100 py-2 fw-bold"
              style={{
                backgroundColor: "var(--primary-color)",
                border: "none",
              }}
              onClick={() => {
                closeCart();
                navigate("/checkout");
              }}
            >
              {t('cart.checkout')}
            </Button>
            <Button className="mt-3 btn-warning text-white fw-bold" onClick={clearCart}>{t('cart.remove')}</Button>
          </div>
        )}
      </div>
    </>
  );
};
export default CartDrawer;
