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
import { useTranslation } from "react-i18next";

const LandingPage = () => {
  const { sectionRefs } = useScroll();
  const [headerShown, setHeaderShown] = useState(false);
  const { t } = useTranslation();

  const { scrollTo } = useScroll();

  const ToPricingTraditional = () => {
    scrollTo("", "/pricing/traditional");
  };
  const ToPricingMonthly = () => {
    scrollTo("", "/pricing/monthly");
  };

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
              {t("ImgText")}
            </text>
            <text className="white bold-mid font-bread mx-auto slide-in ">
              {t("ImgTextDesc")}
            </text>
          </div>
        </div>
      </section>
      <section className="section-padding section-underline" id="sec2">
        <div>
          <text className="font-title  bold-mid">{t("Header")}</text>
          <p className="font-gray bold">{t("HeaderDesc")}</p>
        </div>
        <div
          className="flex-dir-hor"
          style={{ paddingTop: 40, paddingBottom: 20 }}
        >
          <text className="bold-mid-x mx-auto font-subtitle">
            {t("SubHeader")}
          </text>
        </div>
        <div className="flex-dir-hor space-between paddingx-5p">
          <div className="flex-dir-ver">
            <text className="  bold-mid">{t("SubHeaderDesc1")}</text>
            <text className=" bold-mid-x font-title mt-auto">
              {t("SubHeaderDesc1CurrencyFront")}
              <CountUp
                end={t("SubHeaderDesc1AmountEnd")}
                start={t("SubHeaderDesc1AmountStart")}
                redraw={true}
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
              </CountUp>{" "}
              {t("SubHeaderDesc1CurrencyEnd")}
            </text>
          </div>
          <div className="flex-dir-ver">
            <text className="  bold-mid">{t("SubHeaderDesc2")}</text>
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
            <text className=" bold-mid">{t("SubHeaderDesc3")}</text>
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
              <text className="font-normal bold-mid">
                {" "}
                {t("SubHeaderDesc3Days")}
              </text>
            </text>
          </div>
        </div>
      </section>
      <section className="section-padding" id="sec3">
        <FadeInComponent>
          <div className="section-padding">
            <text className="font-title  bold-mid">{t("Header2")}</text>
            <p className="font-gray bold">{t("Header2Desc")}</p>
          </div>
        </FadeInComponent>
        <FadeInComponent>
          <div className="flex-dir-hor flex-wrap center">
            <div className="flex-dir-ver width-40p padding-10px mt-60">
              <img className="small-icon icon-ring" src={peopleicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                {t("SubHeader1")}
              </text>
              <text className=" font-normal paddingy-10 font-gray">
                {t("SubHeader1Desc")}
              </text>
            </div>
            <div className="flex-dir-ver width-40p padding-10px mt-60">
              <img className="small-icon icon-ring" src={cubeicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                {t("SubHeader2")}
              </text>
              <text className="font-normal paddingy-10 font-gray ">
                {t("SubHeader2Desc")}
              </text>
            </div>
            <div className="flex-dir-ver width-40p padding-10px mt-60">
              <img className="small-icon icon-ring" src={creditcardicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                {t("SubHeader3")}
              </text>
              <text className=" font-normal paddingy-10 font-gray">
                {t("SubHeader3Desc")}
              </text>
            </div>
            <div className="flex-dir-ver width-40p padding-10px mt-60">
              <img className="small-icon icon-ring" src={codeicon} />
              <text className="font-subtitle bold-mid paddingy-10 ">
                {t("SubHeader4")}
              </text>
              <text className=" font-normal paddingy-10 font-gray">
                {t("SubHeader4Desc")}
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
            <text className="font-title bold-mid">{t("Header3")}</text>
            <p className="font-gray bold">{t("Header3Desc")}</p>
          </div>
          <div className="flex-dir-h2v flex-center">
            <div className="flex-dir-ver price-card ">
              <text className="font-medium bold-mid font-gray mb-10">
                {t("PriceTitle1")}
              </text>
              <div className="mt-10">
                <text className="font-large bold-mid ">{t("PriceCost1")}</text>
                <text className="font-gray bold-mid font-small"> /mo</text>
              </div>

              <div className="paddingy-20 mb-5 mt-auto">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point1-1")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point1-2")}</text>
              </div>

              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point3")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point4")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point5")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point6")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point7")}</text>
              </div>
              <div className="mb-10">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point8")}</text>
              </div>
              <button
                className="mt-10 padding-10px btn-rounded white"
                onClick={ToPricingMonthly}
              >
                <text className="bold-mid-x work-sans"> {t("Order")}</text>
              </button>
            </div>

            <div className="flex-dir-ver price-card">
              <text className="font-medium bold-mid font-gray mb-10">
                {t("PriceTitle2")}
              </text>
              <div className="mt-10">
                <text className="font-large bold-mid">{t("PriceCost2")}</text>
              </div>

              <div className="paddingy-20 mb-5 mt-auto">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point2-1")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point2-2")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point3")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point4")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point5")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={cross} />
                <text className="font-small">{t("Point6")}</text>
              </div>
              <div className="mb-5">
                <img className="feat-icon mr-10" src={cross} />
                <text className="font-small">{t("Point7")}</text>
              </div>
              <div className="mb-10">
                <img className="feat-icon mr-10" src={check} />
                <text className="font-small">{t("Point8")}</text>
              </div>
              <button
                className="mt-10 padding-10px btn-rounded white "
                onClick={ToPricingTraditional}
              >
                <text className="bold-mid-x work-sans"> {t("Order")}</text>
              </button>
            </div>
          </div>
        </FadeInComponent>
      </section>
    </div>
  );
};

export default LandingPage;
