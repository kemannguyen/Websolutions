import React, { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import "../Styles/FadeInComponent.css";

const FadeInComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  return (
    <VisibilitySensor
      onChange={onVisibilityChange}
      partialVisibility
      minTopValue={window.innerHeight * 0.3}
    >
      <div className={`fade-in-section ${isVisible ? "visible" : ""}`}>
        {children}
      </div>
    </VisibilitySensor>
  );
};

export default FadeInComponent;
