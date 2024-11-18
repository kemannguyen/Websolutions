import React from "react";
import "../Styles/NavScreen.css";
import { useNavigate } from "react-router-dom";

const NavScreen = ({ openMenu }) => {
  const navigate = useNavigate();

  const ToHome = () => {
    window.scrollTo(0, 0);
    navigate("/");
    openMenu(false);
  };

  return (
    <div className="bg-layercover">
      <div className="btn-container">
        <p className="navmenu-btn" onClick={ToHome}>
          Home
        </p>
      </div>
    </div>
  );
};

export default NavScreen;
