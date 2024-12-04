import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../../Styles/ContactPage.css";
import Snackbar from "../../Components/Snackbar";
import { useTranslation } from "react-i18next";
import bgimg from "../../Image/contactbg.png";
import UseTitle from "../../Components/UseTitle";

const ContactPage = () => {
  const { t } = useTranslation();
  const form = useRef();

  UseTitle(t("Contact"));

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
    <div>
      <img className="bgimg" src={bgimg} />
      <div className="general navbarpadding work-sans mb-fullpage">
        <div className="flex-dir-ver paddingy-20">
          <text className="font-title mx-auto bold-mid-x">
            {t("ContactUs")}
          </text>
          <p className="font-gray bold mx-auto centerbreak">
            {t("ContactDesc")}
          </p>
        </div>
        <form
          id="msg-form"
          className="flex-dir-ver contact-form mx-auto paddingy-20"
          ref={form}
          onSubmit={sendEmail}
        >
          <input type="text" hidden name="subject" value={"msg"}></input>
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
            name="from_email"
            placeholder={t("EmailP")}
            required
          />
          <label>{t("Message")}</label>
          <textarea
            className="msgbox"
            type="text"
            placeholder={t("MessageP")}
            name="message"
            required
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

export default ContactPage;
