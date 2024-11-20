import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const sectionRefs = {
    header: useRef(null),
    projects: useRef(null),
    pricing: useRef(null),
    // add more sections for different pages
  };

  const navigate = useNavigate();
  const location = useLocation();
  const [target, setTarget] = useState(null);

  useEffect(() => {
    // When location changes, check if we need to scroll to a target
    if (target && sectionRefs[target.section]?.current) {
      sectionRefs[target.section].current.scrollIntoView({
        behavior: "smooth",
      });
      setTarget(null); // Reset target after scrolling
    }
  }, [location, target]);

  const scrollTo = (section, page) => {
    if (location.pathname !== page) {
      // If we're not on the target page, navigate first and set the target
      setTarget({ section, page });
      if (section == "") {
        window.scrollTo({
          top: 0,
        });
      }
      navigate(page);
    } else if (sectionRefs[section]?.current) {
      if (section === "") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        // If already on the target page, scroll immediately
        sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <ScrollContext.Provider value={{ sectionRefs, scrollTo }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => useContext(ScrollContext);
