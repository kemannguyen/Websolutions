import React from "react";
import { useTranslation } from "react-i18next";
import { useScroll } from "../../Components/ScrollContext";

const Projectlistitem = ({ title, imgsrc, price, id }) => {
  const { t } = useTranslation();

  const { scrollTo } = useScroll();

  const ToProjectInfoPage = () => {
    scrollTo("", `/referens/${id}`);
  };

  return (
    <div
      className="padding-20px flex-dir-ver work-sans"
      onClick={ToProjectInfoPage}
    >
      <img className="galleryimg" src={imgsrc} />
      <div className="mx-auto bold-mid mt-10">{title}</div>
      <div className="mx-auto">{t(price)}</div>
    </div>
  );
};

export default Projectlistitem;
