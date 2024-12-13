import React from "react";
import { useScroll } from "../../Components/ScrollContext";
import UseTitle from "../../Components/UseTitle";
import { useTranslation } from "react-i18next";
import Projectlist from "./Projectlist";
import "../../Styles/ProjectPage.css";

const ProjectPage = () => {
  const { sectionRefs } = useScroll();
  const { t } = useTranslation();
  UseTitle(t("Referens"));
  return (
    <div className="general work-sans mb-fullpage">
      <section
        className="navbarpadding"
        id="proj-header"
        ref={sectionRefs.projects}
      >
        <div className="flex-dir-ver mb-20">
          <text className=" font-title bold-mid-x mx-auto">
            {t("Referens")}
          </text>
          <text className="mx-auto font-gray font-normal">
            {t("ReferensDesc")}
          </text>
        </div>

        <div className="flex-dir-hor flex-wrap flex-center">
          <Projectlist />
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
