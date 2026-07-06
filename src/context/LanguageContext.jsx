import { createContext, useEffect, useContext } from "react";
import { useTranslation } from "react-i18next";
import useLocalStorage from "../hooks/useLocalStorage";
// 1. Create the Language Context to share language data across the application
export const LanguageContext = createContext();
// 2. Create the Provider component to wrap the app and manage page direction (RTL/LTR)
export const LanguageProvider = ({ children }) => {
  // Extract translation function (t) and i18n instance from the library
  const { t, i18n } = useTranslation();
  // Side effect to automatically update HTML direction and lang attributes when language changes
  useEffect(() => {
    const currentLanguage = i18n.language;
    // Set direction to 'rtl' if Arabic, otherwise 'ltr'
    document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLanguage;
  }, [i18n.language]); // Runs every time the current language changes

  return (
    // Provide t and i18n objects to all nested child components
    <LanguageContext.Provider
      value={{
        i18n,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
// 3. Custom Hook to easily consume the LanguageContext in any component
const useLanguage = () => {
  // Access the shared context data
  const context = useContext(LanguageContext);
  // Safety check: Throw a clear error in the console if used outside the Provider
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  // Destructure t and i18n from the context object to use them locally
  const { t, i18n } = context;
  // Helper function to trigger language switching via i18next
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  // Return the active language and the trigger function as an array
  return [i18n.language, changeLanguage];
};
export default useLanguage;
