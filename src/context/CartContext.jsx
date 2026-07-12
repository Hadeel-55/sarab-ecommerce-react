import { createContext, useContext, useState } from "react";
import useCart from "../hooks/useCart";
// 1. Create the Cart Context to manage global shopping cart state
export const CartContext = createContext();
// 2. Create the Provider component to distribute cart data and actions
export const CartProvider = ({ children }) => {
  // Fetch all operational cart states and methods from our custom hook
  const cartData = useCart();
  const {
    cartItems,
    addCartItem,
    removeCartItem,
    clearCart,
    cartCount,
    totalPrice,
    updateQuantity,
  } = cartData;

  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen((prev) => !prev);
  const closeCart = () => setIsCartOpen(false);

  return (
    // Provide the extracted cart data to the entire application tree
    <CartContext.Provider
      value={{
        cartItems,
        addCartItem,
        removeCartItem,
        clearCart,
        cartCount,
        totalPrice,
        updateQuantity,
        isCartOpen,
        toggleCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
// 3. Custom Hook to easily and safely consume cart data in any component
const useCartContext = () => {
  // Access the shared cart context values
  const cartContext = useContext(CartContext);
  // Safety check: Throw a descriptive error if the hook is used outside a CartProvider
  if (!cartContext) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  // Return all cart items and helper functions
  return cartContext;
};
export default useCartContext;
