import React from "react";
import { ProjectData } from "./ProjectData";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../Components/ScrollContext";

const ProjectInfoPage = () => {
  //extract last part from url
  const location = useLocation();
  const patharr = location.pathname.split("/");

  //Extract data
  const title = ProjectData[patharr[2]].title;
  const imgsrc = ProjectData[patharr[2]].imgsrc;
  const description = ProjectData[patharr[2]].description;
  const bulletpoints = ProjectData[patharr[2]].bulletpoints;
  const price = ProjectData[patharr[2]].price;
  const link = ProjectData[patharr[2]].link;

  const { t } = useTranslation();

  const openLinkInNewTab = () => {
    try {
      const newTab = window.open(link, "_blank", "noopener,noreferrer");
      if (newTab) newTab.opener = null;
    } catch (e) {}
  };

  //navigator
  const { scrollTo } = useScroll();
  const ToReferenses = () => {
    scrollTo("", `/referens`);
  };

  console.log(t(bulletpoints));
  return (
    <div className="general navbarpadding work-sans">
      <text className="backbtn2" onClick={ToReferenses}>
        {t("Back")}
      </text>
      <div className="flex-dir-h2v">
        <div className="padding-20px">
          <img className="projectimg" src={imgsrc} />
        </div>
        <div className="flex-dir-ver padding-20px projectimg">
          <text className="bold-mid-x">{title}</text>
          <p>{t(description)}</p>
          {bulletpoints.map((point) => {
            return <div className="projectbp">• {t(point)}</div>;
          })}
          <div className="mt-auto flex-dir-hor paddingy-20">
            <text className="bold-mid">{t(price)}</text>
            <button
              className="ml-auto work-sans bold-mid paddingx-10px btn-rounded white"
              onClick={openLinkInNewTab}
            >
              {t("VisitSite")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfoPage;
