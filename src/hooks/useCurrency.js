import useLocalStorage from "./useLocalStorage";
// The exchange rate from USD to SYP
const exchangeRate = 15000;
const useCurrency = () => {
  // Store and manage the current currency type (default is USD)
  const [currency, setCurrency] = useLocalStorage("currency", "USD");
  // Update the currency state to a new currency
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };
  // Format the price based on the currently selected currency
  const formatPrice = (price) => {
    if (currency === "USD") {
      return `$${price.toFixed(2)} `;
    }

    if (currency === "SYP") {
      const sypPrice = price * exchangeRate;
      return `${sypPrice.toLocaleString()} ل.س`;
    }
    return price;
  };
  // Return the currency state and actions as an object
  return { currency, handleCurrencyChange, formatPrice };
};
export default useCurrency;
