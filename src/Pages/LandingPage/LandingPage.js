import React from "react";
import "../../Styles/LandingPage.css";
import { useScroll } from "../../Components/ScrollContext";

const LandingPage = () => {
  const { sectionRefs } = useScroll();

  return (
    <div className="general">
      <section className="navbarpadding" id="header" ref={sectionRefs.header}>
        <span className="work-sans bold">LandingPage</span>
        <img
          className="landing-img "
          src="https://drive.google.com/thumbnail?id=1wqItjqJ53y-k3iGMZ2FQFw_Py-fHJHyR&sz=w1920"
        />
      </section>
      <section
        className="test navbarpadding"
        id="el-pricing"
        ref={sectionRefs.pricing}
      >
        <span>Pricing</span>
      </section>
      <section className="test">
        <span>Pricing</span>
      </section>
    </div>
  );
};

export default LandingPage;
