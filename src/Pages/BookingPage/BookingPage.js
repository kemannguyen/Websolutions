import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../Styles/ContactPage.css";
import Snackbar from "../../Components/Snackbar";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const BookingPage = () => {
  const { t } = useTranslation();
  const form = useRef();

  //extract last part from url
  const location = useLocation();
  const patharr = location.pathname.split("/");

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
    <div className="general navbarpadding work-sans mb-fullpage">
      <div className="flex-dir-ver paddingy-20">
        <text className="font-title font-gray mx-auto bold-mid-x mb-10">
          {t("BookAMeeting")}
        </text>
        <p className="font-gray bold mx-auto">{t("BookingDesc")}</p>
      </div>
      <form
        id="msg-form"
        className="flex-dir-ver contact-form mx-auto mt-20"
        ref={form}
        onSubmit={sendEmail}
      >
        <input type="text" hidden name="subject" value={"booking"}></input>
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
        <textarea
          className="msgbox"
          type="text"
          name="message"
          value={`request for meeting about ${patharr[2]} plan`}
          hidden
        />
        <input className="work-sans bold-mid" type="submit" value={t("Send")} />
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

export default BookingPage;
