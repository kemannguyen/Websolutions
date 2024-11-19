import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PricingMonthPage from "../Pages/PricingPage/PricingMonthPage";
import PricingTradPage from "../Pages/PricingPage/PricingTradPage";
import { useTranslation } from "react-i18next";
import { useScroll } from "./ScrollContext";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function PricingTabs(child) {
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const { scrollTo } = useScroll();

  useEffect(() => {
    setValue(child.index.index);
    console.log("index: ", child.index.index);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      scrollTo("", "/pricing/monthly");
    } else if (newValue === 1) {
      scrollTo("", "/pricing/traditional");
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          centered
        >
          <Tab label={t("MonPlan")} {...a11yProps(0)} />
          <Tab label={t("TradPlan")} {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <PricingMonthPage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <PricingTradPage />
      </CustomTabPanel>
    </Box>
  );
}
