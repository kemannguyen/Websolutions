import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <section className="footer-container">
      <div>
        <div
          className="watermark font-small font-gray"
          style={{
            textAlign: "center",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Keman Nguyen. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
