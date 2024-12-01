import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../Styles/ContactPage.css";
import Snackbar from "../../Components/Snackbar";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();
  const form = useRef();

  //Snackbar
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarVisible(true);
  };
  const handleCloseSnackbar = () => {
    setSnackbarVisible(false);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_API_PUBLIC,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          showSnackbar("Message has sent successfully");
          document.getElementById("msg-form").reset();
        },
        (error) => {
          showSnackbar("Error occured, message not could not send");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="general navbarpadding">
      <div className="flex-dir-hor paddingy-20">
        <text className="font-title font-gray mx-auto bold">
          {t("ContactUs")}
        </text>
      </div>
      <form
        id="msg-form"
        className="flex-dir-ver contact-form mx-auto"
        ref={form}
        onSubmit={sendEmail}
      >
        <label>{t("Name")}</label>
        <input
          className="mt-10 mb-10 input"
          type="text"
          name="from_name"
          required
        />
        <label>{t("Email")}</label>
        <input
          className="mt-10 mb-10 input"
          type="email"
          name="from_email"
          required
        />
        <label>{t("Message")}</label>
        <textarea className="msgbox" type="text" name="message" required />
        <input type="submit" value={t("Send")} />
      </form>
      {snackbarVisible && (
        <Snackbar
          message={snackbarMessage}
          duration={3000}
          onClose={handleCloseSnackbar}
        />
      )}
    </div>
  );
};

export default ContactPage;
