import { useMemo } from "react";
import useLocalStorage from "./useLocalStorage"; // 1. Import our custom hook for localStorage persistence
const useCart = () => {
  // 2. Use custom hook to persist cart data on page refresh
  const [cartItems, setCartItems] = useLocalStorage("cartItems", []);
  // 3. Smart add-to-cart (prevents duplicates, increments quantity if item exists)
  const addCartItem = (product, quantity=1) => {
    setCartItems((prevItems) => {
      const isExist = prevItems.find((item) => item.id === product.id);
      if (isExist) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [...prevItems, { ...product, quantity }];
    });
  };
  // 4. Remove a specific product from the cart
  const removeCartItem = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  // 5. Smart quantity update with a guard preventing values below 1
  const updateQuantity = (itemId, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          const newQuantity =
            action === "increment" ? item.quantity + 1 : item.quantity - 1;
          return { ...item, quantity: newQuantity < 1 ? 1 : newQuantity };
        }
        return item;
      }),
    );
  };
  // 6. Completely empty the shopping cart
  const clearCart = () => {
    setCartItems([]);
  };
  // 7. Calculate the total price of all items in the cart
  const totalPrice = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [cartItems]);
  // 8. Calculate the total number of items in the cart
  const cartCount = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  }, [cartItems]);
  // 9. Return all cart states and helper actions as an object
  return {
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart,
    cartCount,
    totalPrice,
    updateQuantity,
  };
};
export default useCart;
