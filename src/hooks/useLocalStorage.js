import { useEffect, useState, useRef } from "react";
const useLocalStorage = (key, initialValue) => {
  // Initialize state by checking localStorage or using the default initial value
  const [stateValue, setStateValue] = useState(() => {
    try {
      const savedValue = localStorage.getItem(key);
      // If data exists in localStorage, parse it and use it as the initial state
      if (savedValue !== null) {
        return JSON.parse(savedValue);
      }
      // If no data exists, evaluate if initialValue is a function or a raw value
      return typeof initialValue === "function" ? initialValue() : initialValue;
    } catch (error) {
      // Fallback safe mechanism if localStorage reading or parsing fails
      console.error(`Error reading localStorage key '${key} `, error);
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
  });
// Keep track of the last used key to prevent accidental overwrites during key changes
  const lastKeyRef = useRef(key);
  // Sync the state value back to localStorage whenever the key or stateValue changes
  useEffect(() => {
    try {
      // Update the reference if the key has changed
      if (lastKeyRef.current !== key) {
        lastKeyRef.current = key;
      }
      // Save the current state value into localStorage as a string
      localStorage.setItem(key, JSON.stringify(stateValue));
    } catch (error) {
      // Handle potential storage errors (e.g., storage quota exceeded)
      console.error(`Error setting localStorage key '${key}`, error);
    }
  }, [key, stateValue]);
  // Return the state value and its updater function as an array
  return [stateValue, setStateValue];
};
export default useLocalStorage;
