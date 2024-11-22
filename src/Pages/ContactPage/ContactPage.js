import React, { useRef } from "react";

export const ContactPage = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formObject),
      });

      if (response.ok) {
        console.log("SUCCESS!");
      } else {
        const error = await response.json();
        console.error("FAILED...", error);
      }
    } catch (err) {
      console.error("Error connecting to the serverless function:", err);
    }
  };

  return (
    <div className="general">
      <section className="navbarpadding">
        <form className="flex-dir-ver" ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </section>
    </div>
  );
};

export default ContactPage;
