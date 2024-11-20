import React from "react";
import PricingTabs from "../../Components/CustomTabPanel";
import UseTitle from "../../Components/UseTitle";
import { useTranslation } from "react-i18next";

const PricingPage = (index1) => {
  const { t } = useTranslation();
  UseTitle(t("Price"));
  /*
Enter this cost in the

Domain Name	$0 to $20 per year
Web Hosting	$30 to $500 per year
Theme or Template	$0 to $100 (one-time fee)
Professional Web Design	$100 to $5,000-plus
DIY Website Builder	$100 to $400 per year
SSL Certificate	$0 to $249 per year
*/
  return (
    <div className="general navbarpadding work-sans">
      <PricingTabs index={index1} />
    </div>
  );
};

export default PricingPage;
