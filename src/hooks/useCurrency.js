import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";
// The exchange rate from USD to SYP
const exchangeRate = 15000;
const useCurrency = () => {
  // Store and manage the current currency type (default is USD)
  const [currency, setCurrency] = useLocalStorage("currency", "USD");
  // Default backup exchange rates (fallback if API is offline or slow)
  const [rates, setRates] = useState({ USD: 1, SYP: 15000 });
  // 2. Fetch live exchange rates from the API once on mount
  useEffect(() => {
    const fetchReates = async () => {
      try {
        const response = await fetch("https://open.er-api.com/v6/latest/USD");
        const data = await response.json();
        if (data?.rates) {
          setRates(data.rates);
          console.log(
            "Live SYP exchange rate fetched successfully:",
            data.rates.SYP,
          );
        }
      } catch (error) {
        console.error(
          "Failed to fetch live rates, using fallback values:",
          error,
        );
      }
    };
    fetchReates();
  }, []);
  // 3. Action to update the active currency
  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };
  // 4. Transform and format the price based on active currency
  const formatPrice = (priceInUSD) => {
    const rate = rates[currency] || 1;
    const convertePrice = priceInUSD * rate;
    // Formatting for Syrian Pound (SYP)
    if (currency === "SYP") {
      return new Intl.NumberFormat("ar-SY", {
        style: "currency",
        currency: "SYP",
        maximumFractionDigits: 0,
      }).format(convertePrice);
    }
    // Formatting for US Dollar (USD) and other fallback currencies
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(convertePrice);
  };
  // Return the currency state and actions as an object
  return { currency, handleCurrencyChange, formatPrice };
};
export default useCurrency;
