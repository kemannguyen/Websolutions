import React, { useState } from "react";
import "../../Styles/LandingPage.css";
import { useScroll } from "../../Components/ScrollContext";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import landingimg from "../../Image/landing-img.png";
import peopleicon from "../../Image/people-outline.png";
import creditcardicon from "../../Image/credit-card-outline.png";
import cubeicon from "../../Image/cube-outline.png";
import codeicon from "../../Image/code-outline.png";
import FadeInComponent from "../../Components/FadeInComponent";
import check from "../../Image/checkmark-outline-green.png";
import cross from "../../Image/close-outline-red.png";

const LandingPage = () => {
  const { sectionRefs } = useScroll();
  const [headerShown, setHeaderShown] = useState(false);

  return (
    <div className="general work-sans">
      <section
        className="navbarpadding section-padding"
        id="header"
        ref={sectionRefs.header}
      >
        <span className=" bold"></span>
        <img className="landing-img " src={landingimg} />
        <div className="img-text-margin flex-dir-hor flex-center ">
          {" "}
          <div className="flex-dir-ver flex-wraps paddingx-5p">
            <text className="white bold-mid mx-auto font-title fade-in font-shadow ">
              Turn your dream website into reality
            </text>
            <text className="white bold-mid font-bread mx-auto slide-in ">
              You come with the ideas and we'll fix the rest
            </text>
          </div>
        </div>
      </section>
      <section className="section-padding section-underline" id="sec2">
        <div>
          <text className="font-title  bold-mid">
            Having your own website has never been more simple
          </text>
          <p className="font-gray bold">
            Save your money and focus on growing your company instead! With our
            monthly subscription plan you get unlimited support and revisions
            for your website.
          </p>
        </div>
        <div
          className="flex-dir-hor"
          style={{ paddingTop: 40, paddingBottom: 20 }}
        >
          <text className="bold-mid-x mx-auto font-subtitle">
            With our monthly model
          </text>
        </div>
        <div className="flex-dir-hor space-between paddingx-5p">
          <div className="flex-dir-ver">
            <text className="  bold-mid">Reduce your costs</text>
            <text className=" bold-mid-x font-title mt-auto">
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
            <text className="  bold-mid">Unlimited support for more than</text>
            <text className=" bold-mid-x font-title mt-auto">
              <CountUp
                start={0}
                end={12}
                redraw={true}
                className="font-title bold"
              >
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
              <text className="font-normal bold-mid"> mo </text>
            </text>
          </div>
          <div className="flex-dir-ver">
            <text className=" bold-mid">Website within</text>
            <text className=" bold-mid-x font-title mt-auto ">
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
              <text className="font-normal bold-mid"> days</text>
            </text>
          </div>
        </div>
      </section>
      <section className="section-padding" id="sec3">
        <FadeInComponent>
          <div className="section-padding">
            <text className="font-title  bold-mid">
              Take full control of your content
            </text>
            <p className="font-gray bold">
              Our unique business model makes revisions after deployment
              affordable, with the monthly subscription plan you get unlimited
              support and revisions for your website for as long as your
              subscribed.
            </p>
          </div>
        </FadeInComponent>
        <FadeInComponent>
          <div className="flex-dir-hor flex-wrap center">
            <div className="flex-dir-ver width-40p padding-10px">
              <img className="small-icon icon-ring" src={peopleicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                Be a part of the whole process of creating your dream website{" "}
              </text>
              <text className=" font-normal paddingy-10 font-gray">
                To ensure your goals and vision are fully met, you get to be a
                part of every step in the process through weekly meetings and
                close contact.
              </text>
            </div>
            <div className="flex-dir-ver width-40p padding-10px">
              <img className="small-icon icon-ring" src={cubeicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                Continue with us or go solo after 12 months
              </text>
              <text className="font-normal paddingy-10 font-gray">
                When selecting our monthly subscription model you're bound for
                12 months, but after the contract period you can chose to go
                independent at any time. We'll of course help you set up the
                hosting, domain etc.
              </text>
            </div>
            <div className="flex-dir-ver width-40p padding-10px mt-60">
              <img className="small-icon icon-ring" src={creditcardicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                Reduce your cost and focus on your growth
              </text>
              <text className=" font-normal paddingy-10 font-gray">
                Instead of allocating a big chunk of your budget on a website
                use it else where to grow your company.
              </text>
            </div>
            <div className="flex-dir-ver width-40p padding-10px mt-60">
              <img className="small-icon icon-ring" src={codeicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                Unlimited support and revisions
              </text>
              <text className=" font-normal paddingy-10 font-gray">
                During your time together with us you have unlimited revisions
                even after deployment, which means you can try out different
                designs and change the website without worries.
              </text>
            </div>
          </div>
        </FadeInComponent>
      </section>
      <section
        className="navbarpadding section-padding"
        id="pricing"
        ref={sectionRefs.pricing}
      >
        <FadeInComponent>
          <div className="section-padding">
            <text className="font-title bold-mid">
              Simple, transparent pricing
            </text>
            <p className="font-gray bold">
              Our goal is for you to satisfied which is why we offer multiple
              business models, the traditional pay one time and the monthly
              subscription.
            </p>
          </div>
          <div className="flex-dir-hor flex-center ">
            <div className="flex-dir-ver price-card">
              <text className="font-medium bold-mid font-gray mb-10">
                Growth plan - monthly plan (min 12 mon)
              </text>
              <div className="mt-10">
                <text className="font-large bold-mid ">$100</text>
                <text className="font-gray bold-mid font-small"> /mo</text>
              </div>

              <div className="mt-20 mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Static price</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">24/7 customer support</text>
              </div>

              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Search Engine Optimization</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Professional Web Design</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Responsive for all devices</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Unlimited revisions</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Domain and hosting</text>
              </div>
              <div className="mb-10">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">
                  Be a part of the whole process
                </text>
              </div>
              <button className="mt-10 padding-10px btn-rounded white">
                <text className="bold-mid-x work-sans"> See more / Order</text>
              </button>
            </div>

            <div className="flex-dir-ver price-card">
              <text className="font-medium bold-mid font-gray mb-10">
                Traditional plan - pay once
              </text>
              <div className="mt-10">
                <text className="font-large bold-mid">$700-2000</text>
              </div>

              <div className="mt-20 mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">
                  Price varies depending on website
                </text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">
                  Customer support 6 month after purchase
                </text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Search Engine Optimization</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Professional Web Design</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">Responsive for all devices</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={cross} />
                <text className="font-small">
                  Unlimited revisions after deployment
                </text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={cross} />
                <text className="font-small">Domain and hosting</text>
              </div>
              <div className="mb-10">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">
                  Be a part of the whole process
                </text>
              </div>
              <button className="mt-10 padding-10px btn-rounded white ">
                <text className="bold-mid-x work-sans"> See more / Order</text>
              </button>
            </div>
          </div>
        </FadeInComponent>
      </section>
    </div>
  );
};

export default LandingPage;
