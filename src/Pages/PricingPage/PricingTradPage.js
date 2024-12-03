import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CostImg from "../../Image/CartoonCost2.png";
import VisibilitySensor from "react-visibility-sensor";
import { useScroll } from "../../Components/ScrollContext";

const PricingTradPage = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  const onVisibilityChange = (visible) => {
    if (visible) {
      setIsVisible(true);
    }
  };

  const { scrollTo } = useScroll();

  const ToBooking = () => {
    scrollTo("", "/booking/traditional");
  };

  return (
    <div className="flex-dir-ver">
      <text className="font-title bold-mid-x navbarpadding ">
        {t("TradPlan")}
      </text>
      <text className="font-subtitle font-gray bold-none paddingy-10">
        {" "}
        {t("TPHeaderDesc")}
      </text>
      <p className="font-gray mt-60 break-line">
        {t("TPBread1")}
        <text className="bold-mid font-italic "> Forbes.</text>
      </p>

      <div className="font-gray flex-dir-ver w100p mt-60">
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">{t("DomainName")}</text>
          <text>{t("DomainNamePrice")}</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">{t("WebHosting")}</text>
          <text>{t("WebHostingPrice")}</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">{t("Theme")}</text>
          <text>{t("ThemePrice")}</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">{t("ProWebDes")}</text>
          <text>{t("ProWebDesPrice")}</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">{t("DIYWB")}</text>
          <text>{t("DIYWBPrice")}</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">{t("SSL")}</text>
          <text> {t("SSLPrice")}</text>
        </div>
        <div className="flex-dir-hor space-between">
          <text className="bold-mid-x">{t("DBnAPI")}</text>
          <text> {t("DBnAPIPrice")}</text>
        </div>
        <div className="flex-dir-hor space-between paddingy-10">
          <text className="bold-mid-x">{t("TotalCost")}</text>
          <text> {t("TotalCostPriceYr")}</text>
        </div>
        <text className="ml-auto">{t("TotalCostPriceOne")}</text>
      </div>
      <text className="font-subtitle bold-mid paddingy-10 mt-60">
        {t("Price")}
      </text>
      <p className="font-gray break-line">{t("TPBread2")}</p>

      <div className="paddingy-10 mt-60 flex-dir-h2v mx-auto">
        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility
          minTopValue={window.innerHeight * 0.5}
        >
          <div
            style={{
              transition: `opacity ${1.5}s ease, transform ${1.5}s ease`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? `translateX(${0}px)`
                : `translateX(${-50}px)`,
            }}
          >
            <div className="flex-dir-ver padding-10px">
              <text className="font-subtitle bold-mid">
                {" "}
                {t("TPSubHeader1")}
              </text>
              <p className="font-gray paddingy-10 break-line">
                {t("TPBread3")}
              </p>
              <text className="font-subtitle bold-mid">
                {" "}
                {t("TPSubHeader2")}
              </text>
              <p className="font-gray paddingy-10 break-line">
                {t("TPBread4")}
              </p>
            </div>
          </div>
        </VisibilitySensor>
        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility
          minTopValue={window.innerHeight * 0.5}
        >
          <div
            style={{
              transition: `opacity ${1.5}s ease, transform ${1.5}s ease`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible
                ? `translateX(${0}px)`
                : `translateX(${50}px)`,
            }}
          >
            <img className="small-img padding-10px" src={CostImg} />
          </div>
        </VisibilitySensor>
      </div>
      <text className="font-subtitle bold-mid paddingy-10 mt-60">
        {" "}
        {t("TPSubHeader3")}
      </text>
      <p className="font-gray paddingy-10 break-line">{t("TPBread5")}</p>
      <text className="font-subtitle bold-mid paddingy-10 mt-60">
        {" "}
        {t("TPSubHeader4")}
      </text>
      <p className="font-gray paddingy-10 break-line">{t("TPBread6")}</p>
      <button
        className="mt-10 padding-10px btn-rounded white "
        onClick={ToBooking}
      >
        <text className="bold">{t("OrderButton")}</text>
      </button>
    </div>
  );
};

export default PricingTradPage;
