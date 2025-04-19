import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    description: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const validateForm = () => {
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.description) {
      setMessage({ type: "error", text: "All fields are required!" });
      return false;
    }
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setMessage({ type: "error", text: "Please enter a valid email!" });
      return false;
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      setMessage({ type: "error", text: "Phone number must be 10 digits!" });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setMessage({ type: "success", text: "Message sent successfully!" });

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        description: "",
      });
    } catch (error) {
      setMessage({ type: "error", text: "Failed to send message. Try again!" });
    }
  };

  return (
    <div className="ContactUs">
      <div className="ContactUs-content">
        <h2>Contact Us</h2>
        <p>We'd love to hear from you! Reach out for any inquiries or assistance.</p>
      </div>

      <div className="form-container">
        {message.text && (
          <div className={message.type === "success" ? "success-message" : "error-message"}>
            {message.text}
          </div>
        )}

        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-group">
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                type="tel"
                id="phone"
                placeholder="Phone no."
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group full-width">
            <textarea
              id="description"
              placeholder="Message..."
              rows="4"
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;