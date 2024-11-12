import React from "react";
import { useScroll } from "../../Components/ScrollContext";

const ProjectPage = () => {
  const { sectionRefs } = useScroll();
  return (
    <div className="general">
      <section
        className="navbarpadding"
        id="proj-header"
        ref={sectionRefs.projects}
      >
        <span>ProjectPage</span>
      </section>
      <section className="test navbarpadding">
        <span>Test</span>
      </section>
      <section className="test">
        <span>Pricing</span>
      </section>
    </div>
  );
};

export default ProjectPage;
