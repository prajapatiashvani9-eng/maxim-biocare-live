import { useLocation } from "react-router-dom";

import AboutTabs from "./AboutTabs";
import AboutUs from "./AboutUs/AboutUs";
import AboutMe from "./AboutMe/AboutMe";

const AboutPage = () => {
  const location = useLocation();

  return (
    <>
      <AboutTabs />

      {location.pathname === "/about-me" ? (
        <AboutMe />
      ) : (
        <AboutUs />
      )}
    </>
  );
};

export default AboutPage;