import React from "react";
import "../Styles/NavScreen.css";
import { useTranslation } from "react-i18next";
import { useScroll } from "./ScrollContext";

const NavScreen = ({ openMenu }) => {
  const { scrollTo } = useScroll();
  const { t } = useTranslation();

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
  const ToLogin = () => {
    scrollTo("", "/login");
  };

  return (
    <div className="bg-layercover work-sans">
      <div className="btn-container">
        <p className="navmenu-btn bold-none" onClick={ToHome}>
          {t("Overview")}
        </p>
        <p className="navmenu-btn bold-none" onClick={ToPricing}>
          {t("Price")}
        </p>
        <p className="navmenu-btn bold-none" onClick={ToProject}>
          {t("Referens")}
        </p>
        <p className="navmenu-btn bold-none" onClick={ToContact}>
          {t("Contact")}
        </p>
        <p className="navmenu-btn bold-none" onClick={ToLogin}>
          {t("Login")}
        </p>
      </div>
    </div>
  );
};

export default NavScreen;
