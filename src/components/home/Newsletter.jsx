import React, { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { FiSend } from "react-icons/fi";
import { BiLockAlt } from "react-icons/bi";

const NewsletterSection = () => {
  const [email, setEmail] = useLocalStorage("emailData", []);
  const [currentEmail, setCurrentEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!currentEmail || email.includes(currentEmail)) {
      alert("هذا البريد مسجل مسبقاً أو غير صالح!");
      return;
    }
    setEmail([...email, currentEmail]);
    setCurrentEmail("");
    alert("تم الاشتراك بنجاح! 🎉");
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-header ">
          <p className="stay-connected">Stay Connected</p>
          <h2 className="main-title">
            Subscribe <span className="title-ampersand">&</span>{" "}
            <span className="deals-highlight">Get Exclusive Deals</span>
          </h2>
          <p className="sub-title">
            Get 15% off your first order plus early access to new menu items
          </p>
        </div>

        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email address..."
            value={currentEmail}
            onChange={(e) => setCurrentEmail(e.target.value)}
            required
            className="newsletter-input"
          />
          <button type="submit" className="subscribe-button">
            <FiSend className="button-icon" /> Subscribe
          </button>
        </form>

        <div className="privacy-note">
          <BiLockAlt className="lock-icon" /> No spam, unsubscribe anytime.
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
