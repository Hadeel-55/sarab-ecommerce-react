import { createContext, useContext } from "react";
import useCurrency from "../hooks/useCurrency";
// 1. Create the Currency Context to share currency and formatting globally
export const CurrencyContext = createContext();
// 2. Create the Provider to wrap the application and supply currency data
export const CurrencyProvider = ({ children }) => {
  // Fetch the current currency state and methods from the operational custom hook
  const currencyData = useCurrency();
  const { currency, handleCurrencyChange, formatPrice } = currencyData;

  return (
    // Pass the currency state and actions down to all nested child components
    <CurrencyContext.Provider
      value={{ currency, handleCurrencyChange, formatPrice }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};
// 3. Custom Hook to consume the CurrencyContext safely across the app
const useCurrencyContext = () => {
  // Access the shared currency context values
  const currencyContext = useContext(CurrencyContext);
  // Safety check: Throw a clear error in the console if used outside the Provider
  if (!currencyContext) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  // Return the currency state and functions (currency, handleCurrencyChange, formatPrice)
  return currencyContext;
};
export default useCurrencyContext;
