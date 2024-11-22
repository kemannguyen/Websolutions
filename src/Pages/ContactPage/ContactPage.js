import React, { useRef, useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ user_name: "", user_email: "", message: "" });
      } else {
        const errorData = await response.json();
        setStatus(`Failed to send email: ${errorData.message}`);
      }
    } catch (error) {
      setStatus("Failed to send email. Please try again later.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="user_name"
        value={formData.user_name}
        onChange={handleChange}
        required
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        value={formData.user_email}
        onChange={handleChange}
        required
      />
      <label>Message</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Send</button>
      <p>{status}</p>
    </form>
  );
};

export default ContactPage;
