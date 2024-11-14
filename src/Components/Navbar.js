import React, { useState, useEffect } from "react";
import "../Styles/Navbar.css";
import { useScroll } from "./ScrollContext";
import xicon from "../Image/x-icon1.png";
import icon from "../Image/menu-icon.png";

const Navbar = () => {
  const [menubtn, setMenuBtn] = useState(false);
  const openMenu = () => setMenuBtn(!menubtn);

  const { scrollTo } = useScroll();

  //makes the body non scrollable when nav menu is open
  useEffect(() => {
    if (menubtn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menubtn]);

  //reset menu btn when screen is adjusted
  const screenWidth = () => {
    if (window.outerWidth >= 829) {
      setMenuBtn(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", screenWidth);
    return () => window.removeEventListener("resize", screenWidth);
  }, []);

  //redirection functions
  const ToHome = () => {
    scrollTo("header", "/");
  };
  const ToPricing = () => {
    scrollTo("pricing", "/");
  };
  const ToProject = () => {
    scrollTo("projects", "/referens");
  };
  const ToContact = () => {
    scrollTo("", "/contact");
  };
  return (
    <div className="navbar-containter">
      <div className="flex-dir-hor">
        <p className="logo" onClick={ToHome}>
          <span className="bold">Web</span>
          <span>Solutions</span>
        </p>
        <p className="navbuttons work-sans" onClick={ToHome}>
          Overview
        </p>
        <p className="navbuttons work-sans" onClick={ToPricing}>
          Pricing
        </p>
        <p className="navbuttons work-sans" onClick={ToProject}>
          Referenses
        </p>
        <p className="navbuttons work-sans" onClick={ToContact}>
          Contact
        </p>
        <img
          className="menu-btn"
          src={menubtn ? xicon : icon}
          onClick={openMenu}
          alt=""
        />
        <p className="navbuttons profile">Login</p>
        <p className="navbuttons end">Signup</p>
      </div>
    </div>
  );
};

export default Navbar;
