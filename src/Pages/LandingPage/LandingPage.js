import React, { useState } from "react";
import "../../Styles/LandingPage.css";
import { useScroll } from "../../Components/ScrollContext";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import landingimg from "../../Image/landing-img.png";

const LandingPage = () => {
  const { sectionRefs } = useScroll();
  const [headerShown, setHeaderShown] = useState(false);

  return (
    <div className="general">
      <section className="navbarpadding" id="header" ref={sectionRefs.header}>
        <span className="work-sans bold"></span>
        <img className="landing-img " src={landingimg} />
        <div className="img-text-margin flex-dir-hor flex-center ">
          {" "}
          <div className="flex-dir-ver">
            <text className="white bold mx-auto font-title fade-in">
              Turn your dream website into reality
            </text>
            <text className="white font-bread mx-auto slide-in">
              You come with the ideas and we'll fix the rest
            </text>
          </div>
        </div>

        <div className="flex-dir-hor space-between paddingx-5p">
          <div className="flex-dir-ver">
            <text className=" bold">Reduce your costs</text>
            <text className=" bold font-title">
              <CountUp end={100} start={3000} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible && !headerShown) {
                        start();
                        setHeaderShown(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </text>
          </div>
          <div className="flex-dir-ver">
            <text className=" bold">Helped over</text>
            <text className=" bold font-title">
              <CountUp start={0} end={10} redraw={true} className="font-title">
                {({ countUpRef, start }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible && !headerShown) {
                        start();
                        setHeaderShown(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <text className="font-normal"> +</text>
            </text>
          </div>
          <div className="flex-dir-ver">
            <text className=" bold">Website within</text>
            <text className=" bold font-title ">
              <CountUp start={0} end={30} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible && !headerShown) {
                        start();
                        setHeaderShown(true);
                      }
                    }}
                    delayedCall
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              <text className="font-normal"> days</text>
            </text>
          </div>
        </div>
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
