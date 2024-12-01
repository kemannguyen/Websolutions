import React, { useEffect, useState } from "react";
import "../Styles/CustomSelector.css";
import i18n from "../i18n";
import arrowup from "../Image/arrow-ios-upward-outline.png";
import arrowdown from "../Image/arrow-ios-downward-outline.png";
import SV from "../Image/SV.png";
import GB from "../Image/GB.png";

const options = [
  { value: "en", label: "EN", icon: GB },
  { value: "sv", label: "SV", icon: SV },
];

const CustomSelector = () => {
  const [arrowIcon, setArrowIcon] = useState({ arrowdown });
  const [selectedLanguage, setSelectedLanguage] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const openSelector = () => setIsOpen(!isOpen);

  const chooseLanguage = (selection) => {
    i18n.changeLanguage(selection.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(selection);
    console.log("test: ", selectedLanguage + " " + selection);
  };

  useEffect(() => {
    if (isOpen) {
      setArrowIcon(arrowup);
    } else {
      setArrowIcon(arrowdown);
    }
  }, [isOpen]);

  const HandleClick = (selected) => {
    console.log("onclick ", selected);
    setSelectedLanguage(selected);
    chooseLanguage(selected);
    openSelector();
  };

  return (
    <div className="custom-select work-sans font-small bold-mid">
      <div className="select-header" onClick={openSelector}>
        <img className="icon" src={selectedLanguage.icon} />
        <span>{selectedLanguage.label}</span>
        <span>
          <img className="arrow" src={arrowIcon} />
        </span>
      </div>
      <div className={isOpen ? "select-options-show" : "select-options"}>
        {options.map((option) => (
          <div
            key={option.value}
            className="select-option"
            onClick={() => HandleClick(option)}
          >
            <img className="icon" src={option.icon} />
            <span>{option.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelector;
