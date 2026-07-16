import { Button } from "react-bootstrap";
import useCurrencyContext from "../../context/CurrencyContext";
const CurrencyToggle = () => {
  const { currency, currencyContext, handleCurrencyChange } =
    useCurrencyContext();
  const toggleCurrency = () => {
    const nextCurrency = currency === "USD" ? "SYP" : "USD";
    handleCurrencyChange(nextCurrency);
  };

  return (
    <div
      className="d-flex gap-2 currency-toggle-container"
      onClick={toggleCurrency}
    >
      <span className={`currency-option ${currency === "USD" ? "active" : ""}`}>
        USD
      </span>

      <div className="toggle-track">
        <div className={`toggle-thumb ${currency === "SYP" ? "slide" : ""}`} />
      </div>

      <span className={`currency-option ${currency === "SYP" ? "active" : ""}`}>
        SYP
      </span>
    </div>
  );
};
export default CurrencyToggle;
