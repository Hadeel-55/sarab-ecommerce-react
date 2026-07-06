import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./i18n.js";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import { CurrencyProvider } from "./context/CurrencyContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { BookingProvider } from "./context/BookingContext.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <CurrencyProvider>
        <CartProvider>
          <BookingProvider>
            <App />
          </BookingProvider>
        </CartProvider>
      </CurrencyProvider>
    </LanguageProvider>
  </StrictMode>,
);
