import React from "react";
import IResume from "../../../utilities/IResume";
import About from "../../components/About";
import Education from "../../components/Education";
import Skills from "../../components/Skills";

const Sidebar = (resume: IResume) => {
  const basics = resume.resume.basics;
  return (
    <div className="sidebar">
      <About
        name={basics.name}
        title={basics.label}
        email={basics.email}
        phone={basics.phone}
        location={basics.location.city + ", " + basics.location.postalCode}
        website={basics.url}
      />
      <Education />
      <Skills />
    </div>
  );
};

export default Sidebar;
