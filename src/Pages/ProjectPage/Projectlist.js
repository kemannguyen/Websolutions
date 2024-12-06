import React from "react";
import { ProjectData } from "./ProjectData";
import Projectlistitem from "./Projectlistitem";

const Projectlist = () => {
  return (
    <>
      {ProjectData.map((project) => {
        return (
          <Projectlistitem
            key={project.id}
            title={project.title}
            imgsrc={project.imgsrc}
            price={project.price}
            id={project.id}
          />
        );
      })}
    </>
  );
};

export default Projectlist;
