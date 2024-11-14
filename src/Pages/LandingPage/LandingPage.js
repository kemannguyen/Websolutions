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
      <section
        className="navbarpadding section-padding"
        id="header"
        ref={sectionRefs.header}
      >
        <span className="work-sans bold"></span>
        <img className="landing-img " src={landingimg} />
        <div className="img-text-margin flex-dir-hor flex-center ">
          {" "}
          <div className="flex-dir-ver flex-wraps paddingx-5p">
            <text className="white bold mx-auto font-title fade-in font-shadow work-sans">
              Turn your dream website into reality
            </text>
            <text className="white bold-mid font-bread mx-auto slide-in work-sans">
              You come with the ideas and we'll fix the rest
            </text>
          </div>
        </div>
      </section>
      <section className="section-padding">
        <div>
          <text className="font-title work-sans bold-mid">
            Having a website has never been more easy
          </text>
          <p className="work-sans">
            Our unique business model makes revisions affordable, with the
            monthly subscription plan you get unlimited support and revisions
            for your website.
          </p>
        </div>
        <div
          className="flex-dir-hor"
          style={{ paddingTop: 40, paddingBottom: 20 }}
        >
          <text className="work-sans bold mx-auto font-subtitle ">
            With our monthly model
          </text>
        </div>
        <div className="flex-dir-hor space-between paddingx-5p">
          <div className="flex-dir-ver">
            <text className=" work-sans bold-mid">Reduce your costs</text>
            <text className=" bold font-title mt-auto">
              $
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
            <text className=" work-sans bold-mid">
              Unlimited support for more than
            </text>
            <text className=" bold font-title mt-auto">
              <CountUp start={0} end={12} redraw={true} className="font-title ">
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
              <text className="font-normal"> mo </text>
            </text>
          </div>
          <div className="flex-dir-ver">
            <text className="work-sans bold-mid">Website within</text>
            <text className=" bold font-title mt-auto">
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
        className="test navbarpadding section-padding"
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
