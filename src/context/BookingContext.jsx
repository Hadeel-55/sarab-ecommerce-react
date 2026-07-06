import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
// 1. Create the Booking Context to manage global reservation states
export const BookingContext = createContext();
// 2. Create the Provider component to encapsulate booking logic and data
export const BookingProvider = ({ children }) => {
  // Manage bookings state directly within the provider using local storage persistence
  const [bookings, setBookings] = useLocalStorage("bookingData", []);
  // Function to append a new booking with a dynamically generated unique ID
  const addBooking = (newBooking) => {
    setBookings((prevBookings) => [
      ...prevBookings,
      { ...newBooking, id: `booking-${Date.now()}-${prevBookings.length}` },
    ]);
  };
  // Function to remove a specific booking by its unique ID
  const cancelBooking = (bookingId) => {
    setBookings((prevBookings) =>
      prevBookings.filter((booking) => booking.id !== bookingId),
    );
  };

  return (
    // Expose the bookings array and action functions to the application component tree
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        cancelBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
// 3. Custom Hook to safely consume booking context data across components
const useBookingContext = () => {
  // Retrieve the booking context values
  const bookingContext = useContext(BookingContext);
  // Safety guard: Ensure the hook is utilized strictly within a BookingProvider wrapper
  if (!bookingContext) {
    throw new Error("useBookingContext must be used within a BookingProvider");
  }

  return bookingContext;
};
export default useBookingContext;
