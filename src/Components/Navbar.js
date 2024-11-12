import React from "react";
import "../Styles/Navbar.css";
import { useScroll } from "./ScrollContext";

const Navbar = () => {
  const { scrollTo } = useScroll();

  const ToHome = () => {
    scrollTo("header", "/");
  };
  const ToProject = () => {
    scrollTo("projects", "/projects");
  };
  const ToPricing = () => {
    scrollTo("pricing", "/");
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
        <p className="navbuttons work-sans" onClick={ToProject}>
          Projects
        </p>
        <p className="navbuttons work-sans" onClick={ToPricing}>
          Pricing
        </p>
        <p className="navbuttons work-sans" onClick={ToContact}>
          Contact
        </p>
        <p className="navbuttons profile">Login</p>
        <p className="navbuttons end">Signup</p>
      </div>
    </div>
  );
};

export default Navbar;
