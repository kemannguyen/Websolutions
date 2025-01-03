import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../Styles/BookingPage.css";
import Snackbar from "../../Components/Snackbar";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useScroll } from "../../Components/ScrollContext";
import bookingbg from "../../Image/bookingbg.png";
import UseTitle from "../../Components/UseTitle";

const BookingPage = () => {
  const { t } = useTranslation();
  const form = useRef();

  UseTitle(t("Booking"));

  //extract last part from url
  const location = useLocation();
  const patharr = location.pathname.split("/");

  //Snackbar
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  //navigator
  const { scrollTo } = useScroll();
  const ToPricing = () => {
    scrollTo("", `/pricing/${patharr[2]}`);
  };

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
    <div>
      <img className="bgimg" src={bookingbg} />
      <div className="general navbarpadding work-sans mb-fullpage">
        <text className="backbtn" onClick={ToPricing}>
          {t("Back")}
        </text>
        <div className="flex-dir-ver paddingy-20">
          <text className="font-title font-gray mx-auto bold-mid-x">
            {t("BookAMeeting")}
          </text>
          <text className="font-subtitle font-gray mx-auto bold mb-10">
            {patharr[2]} plan
          </text>
          <p className="font-gray bold mx-auto mt-20 centerbreak contact-desc">
            {t("BookingDesc")}
          </p>
        </div>
        <form
          id="msg-form"
          className="flex-dir-ver contact-form mx-auto mt-20 paddingy-20"
          ref={form}
          onSubmit={sendEmail}
        >
          <input type="text" hidden name="subject" value={"booking"}></input>
          <label>{t("Name")}</label>
          <input
            className="mt-10 mb-10 input"
            type="text"
            name="from_name"
            placeholder={t("NameP")}
            required
          />
          <label>{t("Email")}</label>
          <input
            className="mt-10 mb-10 input"
            type="email"
            placeholder={t("EmailP")}
            name="from_email"
            required
          />
          <textarea
            className="msgbox"
            type="text"
            placeholder={t("MessageP")}
            name="message"
            value={`request for meeting about ${patharr[2]} plan`}
            hidden
          />
          <input
            className="work-sans bold-mid mt-10 padding-10px btn-rounded white "
            type="submit"
            value={t("Send")}
          />
        </form>
        {snackbarVisible && (
          <Snackbar
            message={snackbarMessage}
            duration={3000}
            onClose={handleCloseSnackbar}
          />
        )}
      </div>
    </div>
  );
};

export default BookingPage;
